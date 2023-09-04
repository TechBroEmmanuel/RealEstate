import React from "react";
import "./Contact.css";
import { useState } from "react";
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { TextField } from "@mui/material";  

const Contact = () => {
  const characterLimit = 100;

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  })

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000)
    } else {
      // Regex expression to remove all characters which are NOT alphanumeric
      let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

      // Appending the phone number to the URL
      let url = `https://web.whatsapp.com/send?phone=${number}`;

      // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(message)}&app_absent=0`;

      // Open our newly created URL in a new tab to send the message
      window.open(url);
    }
  }
   
  return (
    <section className="c-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Simple to get in touch with us.</span>
          <span className="secondaryText">
            Providing a good place for you to live is what makes us happy. Live
            better, live happier.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="contain">
              <div className="title">
                <div  className="icon">
                  <WhatsAppIcon style={{background:'none'}} />
                </div>
                <div>Our whatsApp</div>
              </div>


              {numberEmptyError && (
                <div className="errors">Mobile number cannot be empty!</div>
              )}
              {messageEmptyError && (
                <div className="errors">Message cannot be empty!</div>
              )}
              {!numberEmptyError && !messageEmptyError && (
                <div className="errors-null">.</div>
              )}

              <div>
                <TextField
                  error={numberEmptyError}
                  label="Recipient's Mobile Number"
                  placeholder="whatsApp Number"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={onChange}
                  size="large"
                  inputProps={{
                    style: {
                      width: "230px",
                      height: "13px",
                    },
                  }}
                  required
                />
              </div>
              <div className="message app" style={{ marginTop: "1.5em" }}>
                <TextField
                  multiline
                  maxRows={4}
                  label="Message"
                  placeholder="Hi! Message us...."
                  size="large"
                  
                  inputProps={{
                    style: {
                      width: "230px",
                      height: "90px",
                    },
                    maxLength: characterLimit,
                  }}
                  FormHelperTextProps={{
                    style: {
                      margin: 0,
                      padding: "0 0 0 5px",
                      fontSize: 10,
                    },
                  }}
                  name="message"
                  value={message}
                  onChange={onChange}
                  required
                  error={
                    message.length > characterLimit - 1 || messageEmptyError
                  }
                  helperText={
                    !(message.length > characterLimit - 1)
                      ? `${message.length}/${characterLimit}`
                      : "Max length exceeded"
                  }
                />
              </div>
              <div className="send">

                <Button
                  onClick={onSubmit}
                  variant="outlined"
                  color="success"
                  size="large"
                >
                  Send
                </Button>
              </div>
            </div>

            {/* second row */}
          </div>
        </div>

        {/* c-right */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
