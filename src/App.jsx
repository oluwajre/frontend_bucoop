import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithdrawalPage from './WithdrawalPage';
import ApplyLoanPage from './ApplyLoanPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import LoanStatusPage from './LoanStatusPage';
import LoanCalculatorPage from './LoanCalculatorPage';
import SettingsPage from './SettingsPage';
import LoginSecurityPage from './LoginSecurityPage';
import NotificationSettingsPage from './NotificationSettingsPage';

import AdminWithdrawalPage from './AdminWithdrawalPage';
import AdminDashboardPage from './AdminDashboardPage';
import AdminSavingsPage from './AdminSavingsPage';
import AdminReportPage from './AdminReportPage';
import RegisteredSubAdminPage from './RegisteredSubAdminPage';
import RegisteredMembersPage from './RegisteredMembersPage';
import AdminLoanPage from './AdminLoanPage';
import AdminHelpPage from './AdminHelpPage';
import AdminSettingsPage from './AdminSettingsPage';
import AdminLoginSecurityPage from './AdminLoginSecurityPage';
import AdminNotificationSettingsPage from './AdminNotificationSettingsPage';

import UserDashboardPage from './UserDashboardPage';
import UserReportPage from './UserReportPage';
import UserContributionPage from './UserContributionPage';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HelpPage from './HelpPage';

import './App.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
        />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />

        <Route path="/withdraw" element={<WithdrawalPage />} />
        <Route path="/applyloan" element={<ApplyLoanPage />} /> {/* Landing page at root path */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/loanstatus" element={<LoanStatusPage />} />
        <Route path="/calculator" element={<LoanCalculatorPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/loginsecurity" element={<LoginSecurityPage />} />
        <Route path="/notificationsettings" element={<NotificationSettingsPage />} />


        <Route path="/subadminregistration" element={<RegisteredSubAdminPage />} />
        <Route path="/registersubadmin" element={<AdminDashboardPage />} />
        <Route path="/registeredmembers" element={<RegisteredMembersPage />} />
        <Route path="/adminsavings" element={<AdminSavingsPage />} />
        <Route path="/adminwithdraw" element={<AdminWithdrawalPage />} />
        <Route path="/adminloan" element={<AdminLoanPage />} />
        <Route path="/adminreport" element={<AdminReportPage />} />
        <Route path="/adminhelp" element={<AdminHelpPage />} />
        <Route path="/adminsettings" element={<AdminSettingsPage />} />
        <Route path="/adminloginsecurity" element={<AdminLoginSecurityPage />} />
        <Route path="/adminnotificationsettings" element={<AdminNotificationSettingsPage />} />

        <Route path="/userreport" element={<UserReportPage />} />
        <Route path="/userdashboard" element={<UserDashboardPage />} />
        <Route path="/usercontribution" element={<UserContributionPage />} />

      </Routes>
    </Router>
    </div>
  )
}

export default App
