import { Input, Textarea } from "@material-tailwind/react";
import React from "react";
import { FcFeedback } from "react-icons/fc";
const Contact = () => {
  return (
    <div data-aos="fade-up">
      <h1 style={{marginTop:"70px"}} className="who-text">Contact us</h1>
      <div>
        <form className="form-padding">
          <Input
            data-aos="fade-up"
            className="input-field"
            size="lg"
            color="indigo"
            label="Enter Your Name"
            name="name"
            type="text"
            required
          />{" "}
          <br />
          <Input
            data-aos="fade-up"
            className="input-field"
            size="lg"
            color="indigo"
            label="Enter Your Phone Number"
            name="phone"
            type="number"
            required
          />{" "}
          <br />
          <Input
            data-aos="fade-up"
            className="input-field"
            size="lg"
            color="indigo"
            label="Enter Your Email"
            name="email"
            type="email"
            required
          />{" "}
          <br />
          <Textarea
            data-aos="fade-up"
            color="indigo"
            size="lg"
            label="Your Message"
            type="text"
            name="textarea"
            required
          />
          <div data-aos="fade-up" className="send-btn">
            <button className="tracking-widest">SEND MESSAGE</button>
            <span className="text-5xl">
              <FcFeedback />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
