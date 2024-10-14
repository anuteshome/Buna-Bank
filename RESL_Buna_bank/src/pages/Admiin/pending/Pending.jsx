import React from 'react'
import './Pending.css'

function Pending() {
  return (
    <div className='psss'>
      <h1 style={{textAlign:'center', color:'#471111'}}>On process</h1><br/><br/>
      <div className="pend">
<p className='name'>Zewdu Aragaw</p>
<p className='process'>pending</p>
<button className='btnPending'>View</button>
      </div>
      {/*  */}
      <div className="pend">
      <p className='name'>Geremew Wasihun</p>
<p className='process'>pending</p>
<button className='btnPending'>View</button>
</div>
{/*  */}
<div className="pend">
<p className='name'>Antenhe Beiru</p>
<p className='process'>pending</p>
<button className='btnPending'>View</button>
</div>
{/*  */}
<div className="pend">
<p className='name'>Habtamu Moges</p>
<p className='process'>pending</p>
<button className='btnPending'>View</button>
</div>
    </div>
  )
}

export default Pending
