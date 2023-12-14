import React from "react";
import '../components/Subscribe.css'

const Subscribe = () => {
  const [open,setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false);
    alert("Thank you! Your Subscription Successfully updated for latest Updates")
  };
  return (
    <div className="subscribe">
      <h2>Subscribe to our mailing list for latest updates</h2>
      <input
        type="text"
        title="enter your email to subscribe"
        id="subscriber-email"
        name="subscriber-email"
        class="form-control subscribe-input"
        placeholder="Enter Your E-mail Here"
        aria-label="Enter your e-mail here"
        aria-describedby="subscribe"
        data-ddg-inputtype="identities.emailAddress"
      ></input><br/>
      <button
        class="subscribe-button"
        type="submit"
        title="subscribe to Sri Guru Infra Builders Pvt Ltd newsletter" onClick={handleClose}>
        SUBSCRIBE
        <i id="subscriber_loader" class="fas fa-circle-notch fa-spin hide"></i>
      </button>
    </div>
  );
};

export default Subscribe;
