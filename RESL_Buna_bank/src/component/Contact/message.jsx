import React from 'react'
import { useState } from 'react';
import './message.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MessageIcon from '@mui/icons-material/Message';
import { Button, Popover, Typography, TextField } from '@mui/material';

function Message() {
  const [anchor, setAnchor] = useState(null);
  const [message, setMessage] = useState("");

  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  const closePopover = () => {
    setAnchor(null);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle message submission logic here
    console.log("Message sent:", message);
    setMessage("");
  };
  return (
    <div id='Contact_us'>
      <div className="message">
<div className="m1">
    <h1 className='get'>Get in touch</h1><br/><br/>
    <form>
        <label>Name</label><br/><br/>
        <input type='text'/><br/>
        <label>Email</label><br/><br/>
        <input type='email'/><br/>
        <label>Message</label><br/><br/>
        <textarea className='mees' value={message} onChange={handleInputChange} /><br/><br/>
        <button type='submit' className='btn3'>Send me</button>
    </form>

</div>
<div className="m2">
    <h1 className='con'>Contact us</h1>
    <p  className='add'><LocalPhoneIcon/>Phone:+251973424545</p>
    <p className="add"> <MailOutlineIcon/>Email:ananyateshome2@gmail</p>
    <p className='add'><AddLocationAltIcon/> Address:Addis Ababa ,Kotebe</p>
</div>
<div className="bot">
<div className='chat'>
 <a href='' target=''> < MessageIcon  popovertarget="my-popover"  style={{ fontSize: '50px', color: 'wheat'}} className='chaticon'/></a>
 <Button style={{ margin: 100 }} variant="contained" onClick={openPopover}>
        Click me
      </Button>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={closePopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <div style={{ padding: 20 }}>
          <Typography variant="h6">Chat with us!</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={message}
              onChange={handleInputChange}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: 10 }}>
              Send
            </Button>
          </form>
        </div>
      </Popover>
  </div>
</div>

      </div>
      
    </div>
  )
}

export default Message
