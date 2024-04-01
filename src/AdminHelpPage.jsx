import React from 'react'
import AdminSideMenu from './components/SideMenu/AdminSideMenu';
import Taskbar from './components/Taskbar/Taskbar';
import Faq from './components/faq/faq'
import { MdDashboard } from "react-icons/md";
import { PiHandCoinsFill, PiBankFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";

const AdminHelpPage = () => {
    const menuItems = [
        { label: 'Registrations', link: '', icon:  <MdDashboard />, children: [
            {miniLabel: 'Register Sub-Admin', miniLink: '/registersubadmin', miniIcon:  <MdDashboard />},
            {miniLabel: 'Sub-Admin Registration', miniLink: '/subadminregistration', miniIcon:  <MdDashboard />},
            {miniLabel: 'Registered Members', miniLink: '/registeredmembers', miniIcon:  <MdDashboard />},
        ] },
        { label: 'Savings', link: '/adminsavings', icon: <PiHandCoinsFill /> },
        { label: 'Withdrawals', link: '/adminwithdraw', icon: <BiMoneyWithdraw /> },
        { label: 'Loans', link: '/adminloan', icon:  <PiBankFill /> },
        { label: 'Reports', link: '/adminreport', icon: <TbReportSearch /> },
      ];

  return (

    <div className="screen-container">
        <AdminSideMenu menuItems={menuItems}/>
        <div className="primary-container">
            <Taskbar />
            <Faq />
        </div>
    </div>
  )
}

export default AdminHelpPage