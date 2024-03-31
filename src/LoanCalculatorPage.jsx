import React from 'react'
import LoanCalculator from './components/LoanCalculator/LoanCalculator'
import SideMenu from './components/SideMenu/SideMenu';
import Taskbar from './components/Taskbar/Taskbar';
import { MdDashboard } from "react-icons/md";
import { PiHandCoinsFill, PiBankFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalculator } from "react-icons/bs";
import Swal from 'sweetalert2'

const LoanCalculatorPage = () => {
    const menuItems = [
        { label: 'Dashboard', link: '/userdashboard', icon:  <MdDashboard /> },
        { label: 'Contribution', link: '/usercontribution', icon: <PiHandCoinsFill /> },
        { label: 'Withdrawal', link: '/withdraw', icon: <BiMoneyWithdraw /> },
        { label: 'Loan', link: '', icon:  <PiBankFill />, children: [
          {miniLabel: 'Apply For Loan', miniLink: '/applyloan', miniIcon:  <PiBankFill />},
          {miniLabel: 'Check Loan Status', miniLink: '/loanstatus', miniIcon:  <PiBankFill />},
        ]},
        { label: 'Reports', link: '/userreport', icon: <TbReportSearch /> },
        { label: 'Loan Calculator', link: '/calculator', icon: <BsCalculator /> },
      ];

    const calculateLoan = () => {
    Swal.fire({
        icon: 'success',
        iconColor: '#1a1a1a',
        text: 'This popup appears when the page loads.',
        showConfirmButton: false,
        backdrop: true,
    })
    }
  return (
    <div className="screen-container">
      <SideMenu menuItems={menuItems}/>
      <div className="primary-container">
        <Taskbar />
        <LoanCalculator calculateLoan={calculateLoan}/>
      </div>
    </div>
    
  )
}

export default LoanCalculatorPage