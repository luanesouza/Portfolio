import React from 'react';

function ContactMe(){
  return(
  <form className="form-contact-me" action="https://formspree.io/luanesouza411@gmail.com" method="POST">
    <div className="form">
      <input id="input-form" placeholder="YOUR NAME" type="text" name="name"/>
      <input id="input-form" placeholder="YOUR EMAIL" type="email" name="_replyto"/>
      <input id="send" type="submit" value="SEND"/>
    </div>
      <div id="div-textarea">
        <textarea id="textarea" placeholder="YOUR MESSAGE" name="message"/>
      </div>
  </form>
)}

export default ContactMe;
