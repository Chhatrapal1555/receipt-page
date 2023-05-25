import React, { Component } from 'react'

import './style.css'
function Table(props) {
    return (
        <div className='role_data'>
            <table >
                <th className='table_head'> Date </th>
                <th className='table_head'>  Amount </th>
                <th className='table_head'> Payment Mode </th>
                <th className='table_head'> Email </th>
                <th className='table_head'> Remark </th>

                {
                    props.data.length ?
                    props.data.map(each => (
                        <tr>
                            <td>{each.date}</td>
                            <td>{each.amount}</td>
                            <td>{each.paymentMode}</td>
                            <td>{each.email}</td>
                            <td>{each.remark}</td>
                        </tr>
                    ))
                :
                <tr>
                    <td colspan="5">No Record Found.</td>
                </tr>
                }

            </table>
        </div>
    )
}
export default Table
