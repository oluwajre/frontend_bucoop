import React from 'react';
import LoanCalculator from './components/LoanCalculator/LoanCalculator'
import SideMenu from './components/SideMenu/SideMenu';
import Taskbar from './components/Taskbar/Taskbar';
import { MdDashboard } from "react-icons/md";
import { PiHandCoinsFill, PiBankFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalculator } from "react-icons/bs";
import Swal from 'sweetalert2'
// import CalculatorPopUp from './components/CalculatorPopUp/CalculatorPopUp';

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


      const handleCalculate = (amount, term, rate, payback) => {

        const months = parseFloat(term);
        const simpleInterest = (parseFloat(amount) * parseFloat(rate) * months) / (100 * 12);
        const totalPayment = parseFloat(amount) + simpleInterest;
        let text = '';
        let divider = 0;

        if (payback == 'daily') {
          text = 'Payment Every Day';
          divider = months * 30;
        }
        else if (payback == 'weekly') {
          text = 'Payment Every Week';
          divider = months * 4;
        }

        else if (payback == 'bi-weekly') {
          text = 'Payment Every 2 Weeks';
          divider = months * 2;
        }

        else if (payback == 'monthly') {
          text = 'Payment Every Month';
          divider = months;
        }

        else if (payback == 'quarterly') {
          text = 'Payment Every Quarter of the Year';
          divider = months / 3;
        }

        else if (payback == 'annually') {
          if (months <= 12) {
            text = `Payment after ${months} months`;
            divider = 1
          }
          else{
            text = 'Payment every Year'
            divider = months / 12;
          }
          
        }

        let payment = totalPayment / divider;
  
        const formatCurrency = (number) => {
          return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
        };
      
       
    
        {Swal.fire({
            title: 'Payment Breakdown',
            html: `<div className="popup-content">
                    <p>${text}: <strong>${formatCurrency(payment)}</strong></p>
                    <br>
                    <p>Total of ${months} Payments: <strong>${formatCurrency(totalPayment)}</strong></p>
                    <br>
                    <p>Total Interest: <strong>${formatCurrency(simpleInterest)}</strong></p>
                  </div>`,

            showCancelButton: true,
            cancelButtonColor: '#d33',
            showConfirmButton: false,
          })}
    }


  return (
    <div className="screen-container">
      <SideMenu menuItems={menuItems}/>
      <div className="primary-container">
        <Taskbar />
        <LoanCalculator calculateLoan={handleCalculate}/>
      </div>
    </div>
    
  )
}

export default LoanCalculatorPage