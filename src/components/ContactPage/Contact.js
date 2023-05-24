import { Input, Textarea } from "@material-tailwind/react";
import React, { useRef } from "react";
import { FcFeedback } from "react-icons/fc";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_87dwq5q",
        "template_m5qp3pl",
        form.current,
        "3e8iCSmJS5WIk0yqj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Send Successfully! Kindly Wait For Reply");
    e.target.reset();
  };

  return (
    <div>
      <h1 style={{ marginTop: "70px" }} className="who-text">
        Contact us
      </h1>
      <div>
        <form ref={form} onSubmit={handleSubmit} className="form-padding">
          <Fade direction="up">
            <Input
              className="input-field"
              size="lg"
              color="indigo"
              label="Enter Your Name"
              name="name"
              type="text"
              required
            />
          </Fade>{" "}
          <br />
          <Fade direction="up">
            <Input
              className="input-field"
              size="lg"
              color="indigo"
              label="Enter Your Phone Number"
              name="phone"
              type="number"
              required
            />
          </Fade>{" "}
          <br />
          <Fade direction="up">
            <Input
              className="input-field"
              size="lg"
              color="indigo"
              label="Enter Your Email"
              name="email"
              type="email"
              required
            />
          </Fade>{" "}
          <br />
          <Fade direction="up">
            <Textarea
              color="indigo"
              size="lg"
              label="Your Message"
              type="text"
              name="textarea"
              required
            />
          </Fade>
          <Fade direction="down">
            <div className="send-btn">
              <button className="tracking-widest">SEND MESSAGE</button>
              <span className="text-5xl">
                <FcFeedback />
              </span>
            </div>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default Contact;
