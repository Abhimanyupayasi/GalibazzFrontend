import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom';

function EmailVerify() {
    const user = useSelector((state) => state.auth.user) || null
    const emailVerified = user?.email_verified;
    if(
        emailVerified === true
    ){
        return <Navigate to='/login'/>
    }
    

  return (
    <div className='mt-28 flex flex-col items-center justify-center'>
        <h1 className='mb-4'>Email Verify</h1>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-white border-[1px] border-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Email Verify</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4 mt-5">Please verify your email address. A verification link has been sent to your email address. first logout & login again</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

        <p>
        Please verify your email address. A verification link has been sent to your email address. first logout & login again
        </p>

        
    </div>
  )
}

export default EmailVerify