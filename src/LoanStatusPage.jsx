import React from 'react'
import LoanStatus from './components/LoanStatus/LoanStatus'
import SideMenu from './components/SideMenu/SideMenu';
import Taskbar from './components/Taskbar/Taskbar';
import { MdDashboard } from "react-icons/md";
import { PiHandCoinsFill, PiBankFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalculator } from "react-icons/bs";

const LoanStatusPage = () => {
    const menuItems = [
        { label: 'Dashboard', link: '/userdashboard', icon:  <MdDashboard /> },
        { label: 'Contribution', link: '/usercontribution', icon: <PiHandCoinsFill /> },
        { label: 'Withdrawal', link: '/withdraw', icon: <BiMoneyWithdraw /> },
        { label: 'Loan', link: '', icon:  <PiBankFill />, children: [
          {miniLabel: 'Apply For Loan', miniLink: '/applyloan', miniIcon:  <PiBankFill />},
          {miniLabel: 'Check Loan Status', miniLink: '/loan', miniIcon:  <PiBankFill />},
        ]},
        { label: 'Reports', link: '/userreport', icon: <TbReportSearch /> },
        { label: 'Loan Calculator', link: '/calculator', icon: <BsCalculator /> },
      ];
  return (
    <div className="screen-container">
      <SideMenu menuItems={menuItems}/>
      <div className="primary-container">
        <Taskbar />
        <LoanStatus />
      </div>
    </div>
    
  )
}

export default LoanStatusPage