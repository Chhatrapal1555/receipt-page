import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReceiptDetails from "../screens/receitDetails";
import Table from "../screens/table/table";

function MainRoute() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<ReceiptDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
};

export default MainRoute 