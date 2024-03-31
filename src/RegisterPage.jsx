import React from 'react'
import Register from './components/Register/Register'
import Swal from 'sweetalert2'



const RegisterPage = () => {

    const showTerms = () => {
        Swal.fire({
          titleText: 'Terms and Conditions',
          iconColor: '#1a1a1a',
          text: 'This popup appears when the page loads.',
          showConfirmButton: false,
          backdrop: true,
        })
      }

  return (
    <div>
      <Register showTerms={showTerms}/>
    </div>
    
  )
}

export default RegisterPage