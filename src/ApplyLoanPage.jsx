import React, { useEffect } from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import Taskbar from './components/Taskbar/Taskbar';
import ApplyLoan from './components/ApplyLoan/ApplyLoan';
import { MdDashboard } from "react-icons/md";
import { PiHandCoinsFill, PiBankFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalculator } from "react-icons/bs";
import Swal from 'sweetalert2'

const LoanPage = () => {

  const MyComponent = () => {
    useEffect(() => {
      Swal.fire({
        title: 'Terms & Conditions',
        html: `
        <p style="text-align: left;">The terms and privacy form states the conditions for a loan which are Loan requests are limited to regular Babcock staff who are cooperative members.</p>
        <br>
        <ol class="terms-list">
        <li>Must have a minimum six-month membership.</li>
        <li>The maximum loan is given as x2 of your savings.</li>
        <li>Must have accrued contribution to cover up for interest deduction.</li>
        <li>A repayment period of one year and six months (18 months).</li>
        <li>Member must complete application forms with the consent of two guarantors.</li>
        <li>Pay a service fee of #300.</li>
        <li>Loan taken between #0<=#500k are to be paid back within a year (12 months) at an interest 7.5%.</li>
        <li>Loan above #500k must be paid back within 18 months with interest of 2%.</li>
        </ol>
        `,
        confirmButtonText: 'Agree',
        confirmButtonColor: '#00A3FF',
        allowOutsideClick: false,
        backdrop: true,
      })
    }, []);
  };

  const handleLoanApply = () => {
    Swal.fire({
      icon: 'success',
      iconColor: '#1a1a1a',
      text: 'This popup appears when the page loads.',
      showConfirmButton: false,
      backdrop: true,
    })
  }

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
  
  return (
   
    <div className="screen-container">
      <SideMenu menuItems={menuItems}/>
      <div className="primary-container">
        <Taskbar />
        <ApplyLoan handleApply={handleLoanApply}/>
        <MyComponent />
      </div>
    </div>
  )
}

export default LoanPage