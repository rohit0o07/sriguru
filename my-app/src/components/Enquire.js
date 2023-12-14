import React, { useRef } from "react"; // only import useRef from react
import emailjs from "@emailjs/browser";
import "../components/Enquire.css";

export const Contact = () => {
  const form = React.useRef(null); // create a ref for the form element
  const input = React.useRef(null); // create a ref for the input element

  const focusInput = () => {
    input.current.focus(); 
    alert(`Hi, your query was submitted`);// use the input ref to focus the input element
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_84fyy3u",
        "template_anvl05r",
        form.current, 
        "k2TiAtV7DhJ-2UDPc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact1">
      <h4>Enquire form</h4><br/>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="from_name" required />
        <br />
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email" name="from_email" required/> 
        <br />
        <label htmlFor="Phone Number">Phone Number: </label>
        <input ref={input} type="number" placeholder="e.g+91(IN)"/><br/>
        <input ref={input} type="number" placeholder="Phone Number"/>
        <br />
        <textarea name="message" rows="2" cols="50" placeholder="Message"></textarea><br/><br/>
        <button onClick={focusInput} value="send" type="submit" className="btn1">send</button>
      </form>
    </div>
  );
};
