import React from 'react'
import Sidebar from '../../Sidebar'
import Homee from '../../main/main'
import Pending from '../Pending'

function Pens() {
  return (
    <div>
      <div className="dashboard">
      <Sidebar />
      <div className="charts-container">
      <Pending/>
      </div>
    </div>
    </div>
  )
}

export default Pens
