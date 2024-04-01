import React from 'react'
import Settings from './components/Settings/Settings'
import SideMenu from './components/SideMenu/SideMenu';
import Taskbar from './components/Taskbar/Taskbar';
import { MdDashboard } from "react-icons/md";
import { PiHandCoinsFill, PiBankFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalculator } from "react-icons/bs";
import Swal from 'sweetalert2'

const SettingsPage = () => {
    const menuItems = [
        { label: 'Dashboard', link: '/userdashboard', icon:  <MdDashboard /> },
        { label: 'Contribution', link: '/usercontribution', icon: <PiHandCoinsFill /> },
        { label: 'Withdrawal', link: '/withdraw', icon: <BiMoneyWithdraw /> },
        { label: 'Loan', link: '', icon:  <PiBankFill />, children: [
          {miniLabel: 'Apply For Loan', miniLink: '/applyloan', miniIcon:  <PiBankFill />},
          {miniLabel: 'Check Loan Status', miniLink: '/loanstatus', miniIcon:  <PiBankFill />},
        ]},
        { label: 'Reports', link: '/userreports', icon: <TbReportSearch /> },
        { label: 'Loan Calculator', link: '/calculator', icon: <BsCalculator /> },
      ];

    const security = [
      '/settings', '/loginsecurity', '/notificationsettings'
    ]

      const updatedSetting = () => {
        Swal.fire({
            icon: 'success',
            iconColor: '#00A3FF',
            text: 'Settings Updated',
            showConfirmButton: false,
            backdrop: true,
        })
        }

      return (
        <div className="screen-container">
          <SideMenu menuItems={menuItems}/>
          <div className="primary-container">
            <Taskbar />
            <Settings updatedSetting={updatedSetting} security={security}/>
          </div>
        </div>
        
      )
}

export default SettingsPage