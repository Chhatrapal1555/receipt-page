import moment from 'moment'
import React, { useState } from 'react'
import { Button1, Button2 } from '../../components/button'
import { Input1, Lable } from '../../components/input'
import Table from '../table/table'
import './style.css'

function ReceiptDetails() {

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState('');
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [remark, setReamark] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    date: '',
    amount: ''
  });
  const [tableData, setTableData] = useState([]);

  const validateForm = () => {
    // RegExp validation for amount 
    var re = /^\d+(\.\d{1,2})?$/;
    let copyErrorMessages = { ...errorMessage };
    let valid = true;
    if (re.test(amount)) {
      copyErrorMessages.amount = '';
    }
    else {
      valid = false;
      copyErrorMessages.amount = 'input valid amount.'
    }
    if(String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      copyErrorMessages.email = '';
    }
    else{
      valid = false;
      copyErrorMessages.email = 'input valid email.'
    }
    setErrorMessage({
      ...copyErrorMessages,
    })
    setErrorMessage(copyErrorMessages)

    valid && onSave()
  }

  const onSave = () => {

    let copyData = [...tableData];
    copyData.push({
      date,
      amount,
      email,
      paymentMode,
      remark
    })

    setTableData(copyData)
    setTimeout(() => {
      clearData()
    }, 250);
  }

  const clearData = () => {
    setDate('')
    setAmount('')
    setEmail('')
    setPaymentMode('Cash')
    setReamark('')
  }
  console.log(tableData)
  return (
    <div className='main'>
      <div>
        <div className='container' >
          <h4 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Receipt Details</h4>
          <form>
            <div className='form_element'>
              <Lable required title='Date' />
              <Input1 className="dateInput" placeholder='Enter date' type={'date'}
              max={moment().format('YYYY-MM-DD')}
                onChange={(e) => {
                  // if(moment(e.target.value).isAfter(moment())  ){
                  //   return 
                  // }
                  setErrorMessage({
                    ...errorMessage,
                    date: ''
                  })
                  setDate(e.target.value)
                }}
                value={date}
                errorMessage={errorMessage.date}
              />
            </div>
            <div className='form_element'>
              <Lable required title='Amount' />
              <Input1 placeholder='Entere Amount (in INR)' type={'number'}
                min={'1'} maxLength={'10'}
                onChange={(e) => {
                  setErrorMessage({
                    ...errorMessage,
                    amount: ''
                  })
                  setAmount(e.target.value)
                }}
                value={amount}
                errorMessage={errorMessage.amount}
              />
            </div>
            <div className='form_element'>
              <Lable required title='E-Mail' />
              <Input1 placeholder='Entere e-mail' type={'e-mail'}
                onChange={(e) => {
                  setErrorMessage({
                    ...errorMessage,
                    email: ''
                  })
                  setEmail(e.target.value)
                }}
                value={email}
                errorMessage={errorMessage.email}
              />
            </div>
            <div className='form_element'>
              <Lable required title='Payment Mode' />
              <select
                onChange={(e) => setPaymentMode(e.target.value)}
                value={paymentMode}
              >
                <option>Cash</option>
                <option>Online</option>
              </select>
            </div>
            <div className='form_element'>
              <Lable title='Remark' />
              <Input1 placeholder='Enter Remark'
                value={remark}
                onChange={(e) => setReamark(e.target.value)} />
            </div>
            <div className='submit_bar'>
              <Button2 title='CANCEL' onClick={() => clearData()} />
              <Button1 title='SUBMIT' onClick={() => validateForm()} />
            </div>


          </form>
        </div>
      </div>

      <Table data={tableData} />
    </div>
  )
}

export default ReceiptDetails