import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {useHistory} from "react-router-dom"

function Contact() {
    const history = useHistory()
    const form = useRef();

    //using EmailJs service to allow sending emails
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_1ji0tlr', 'template_friil3s', form.current, 'K8_XyDAuMf1On_MZD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        history.push("/Thank-you!")
    };
    return (
    <div className="mx-auto">
    <form ref={form} onSubmit={sendEmail} className="shadow m-5 p-5" style={{backgroundColor: "#cbe3f2"}}>
        <div className=" row justify-content-between mb-3">
            <label htmlFor="user_name">Name:</label>
            <input name="user_name" type="text"></input>                    
        </div>    
        <div className=" row justify-content-between mb-3">
            <label htmlFor="user_email">Email Address:</label>
            <input name="user_email" type="email" required/>                    
        </div>

        <div className=" row justify-content-between mb-3">
            <label htmlFor="">Message:</label>
            <textarea cols="23" name="message"/>                    
        </div>
        <div className="row">
            <div className="col-md-2"></div>
            <button type="button" onClick={() => { history.goBack()}} className="col-sm-12 col-md-3 btn btn-secondary">Cancel</button>
            <div className="col-md-2"></div>
            <button type="submit" className="col-sm-12 col-md-3 btn btn-warning">Submit</button>
            <div className="col-md-2"></div>
        </div>
    </form>
    </div>
    );
}

    //   <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
export default Contact