import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import TableComponent from "./components/table/Table";

function App() {
  const [tableData, setTableData] = useState([])

  // given task link:
  const apiUrl = 'https://erp.seopage1.net/api/leads';
  const tableColumnLink = 'https://prnt.sc/_wkm9Suh02_7';
  const dragable = 'https://prnt.sc/8SvKFJ71cdnM';
  const HideShow = 'https://prnt.sc/IDGyoxY5NAVi'
  const HideShow2 = 'https://prnt.sc/-Uuku5oW0te1'

  return (
    <>
      <div className="main_div">
        <div className="nav_bar">
          <h2>SEOPage1</h2>
        </div>
        <div className="table_div">
          <div className="table_container">
            <TableComponent/>
            </div>
        </div>
        <div className="chart_div">
         
        </div>
      </div>
    </>
  )
}

export default App


// {tableData?.map((d) => (
//   <div key={d.id}>
//     {d.client_name}
//   </div>
// ))}

