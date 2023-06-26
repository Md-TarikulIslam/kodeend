import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { FcFeedback } from "react-icons/fc";
import "./Message.css";
import img from "../../../assets/images/logo/2.jpg";

export default function Message() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f2xaw1r",
        "template_5cgubu4",
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
    <React.Fragment>
      <button className="text-4xl env-position " onClick={handleOpen}>
        <img src={img} alt="" />
      </button>
      <div>
        <Dialog open={open} handler={handleOpen} className="m-area">
          <div className="flex items-center justify-center">
            <DialogHeader>Send a quick message!</DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6 ">
              <form ref={form} onSubmit={sendEmail} className="">
                <Input
                  className="input-field"
                  size="lg"
                  color="indigo"
                  label="Enter Your Name"
                  name="name"
                  type="text"
                  required
                />
                <br />
                <Input
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
                  color="indigo"
                  size="lg"
                  label="Your Message"
                  type="text"
                  name="textarea"
                  required
                />
                <div className="flex items-center gap-5">
                  <Button
                    variant="outlined"
                    color="red"
                    className="h-1/2"
                    onClick={handleOpen}
                  >
                    close
                  </Button>

                  <div className="send-btn3">
                    <button className="tracking-widest">SEND</button>
                    <span className="text-3xl">
                      <FcFeedback />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </React.Fragment>
  );
}
