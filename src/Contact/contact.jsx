import React from "react";
import "../Contact/contact.css";

function Contact() {
  return (
    <div className="container-fluid" style={{ background: "black", padding: "65px", color: "white" }}>
      <div className="row " style={{textAlign:"center"}}>
        <div className="col-md-4" >
          <a href="#">ABout Us</a>
          <br />
          <a href="#">Term & Policy</a>
          <br />
          <a href="#">Payment Methods</a>
        </div>
        <div className="col-md-4">
          <a href="#">Contact</a>
          <br />
          <a className="footertext">Tel: 123-456-7890</a>
          <br />
          <a href="#">CookEase@mysite.com</a>
        </div>
        <div className="col-md-4">
          <a href="#">Facebook</a>
          <br />
          <a href="#">Instagram</a>
          <br />
          <a href="#">Pinterest</a>
        </div>
        
      </div>

      <div className="container" style={{paddingLeft:"9%"}}>
      <div className="mt-5">
        <p>Join our mailing list and never miss an update</p>
       
        <form className="row mt-4 ">
      <div className="col-12 col-md-6 mb-3">
        <input
          type="email"
          className="form-control text-white"
          style={{
            background: "black",
            border: "none",
            borderBottom: "2px solid white",
            outline: "none",
          }}
          placeholder="Email*"
        />
      </div>
      <div className="col-12 col-md-4">
        <button
          type="submit"
          className="btn "
          style={{
            border: "1px solid white",
            background: "white",
            color: "black",
            fontWeight: "600",
            padding: "10px",
          }}
        >
          Subscribe Now
        </button>
      </div>
    </form>

        <div className="form-check mt-5">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{borderRadius:"0",backgroundColor:"black",border:"1px solid white"}}/>
          <label className="form-check-label" htmlFor="exampleCheck1">Yes, subscribe me to your newsletter.</label>
        </div>
      </div>
    </div></div>
  );
}

export default Contact;
