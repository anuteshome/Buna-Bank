import React from 'react'
import './Account.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Account() {
  return (
    <div className='account'>
      <div className='cardAccount'>
<p className='dear'>Dear Ananya You are eligible < CheckCircleIcon className='CheckedIcon'/></p> 
      </div>
      <div className="m1" style={{marginLeft:'22rem'}}>
    <h1 className='get'>Loan Form</h1><br/><br/>
    <form>
        <label>ID</label><br/><br/>
        <input type='text'/><br/>
        <label>2 ID</label><br/><br/>
        <input type='text'/><br/>
        <label>3 ID</label><br/><br/>
        <input type='text'/><br/><br/>
        <button  className='btn32'>Submit</button>
    </form>

</div>
    </div>
  )
}

export default Account
