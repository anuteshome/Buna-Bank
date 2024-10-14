import React from 'react'
import './Noti.css'

function Noti() {
  return (
    <div className='notii'>
             

<div className='psss'>
<a href="/Account" ><button className='btnhomee'>Home</button></a>
      <h1 style={{textAlign:'center', color:'wheat'}}>Notifications</h1><br/><br/>
      <div className="pend">
<p className='name'>Zewdu Aragaw</p>

<button className='btnPending'>Decline</button>
<button className='btnPend'>Accept</button>
      </div>
      {/*  */}
      <div className="pend">
      <p className='name'>Geremew Wasihun</p>

      <button className='btnPending'>Decline</button>
      <button className='btnPend'>Accept</button>
</div>
{/*  */}
<div className="pend">
<p className='name'>Antenhe Beiru</p>

<button className='btnPending'>Decline</button>
<button className='btnPend'>Accept</button>
</div>
{/*  */}
<div className="pend">
<p className='name'>Habtamu Moges</p>

{/* <button className='btnPend'>View</button> */}
<button className='btnPending'>Decline</button>
<button className='btnPend'>Accept</button>
</div>
    </div>
    </div>
  )
}

export default Noti
