import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  Card,
  Button,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function Message() {
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
    <div className="relative w-full h-80 lg:h-10 mb-5">
      <div className="absolute bottom-0 right-9">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
              <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="">
            <Card
              color="white"
              shadow={false}
              className="absolute -right-6 bottom-0 "
            >
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-center"
              >
                Send A Quick Message
              </Typography>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-8 mb-2 w-80 max-w-screen-sm sm:w-96 "
              >
                <div className="mb-4 flex flex-col gap-2 lg:gap-6">
                  <Input
                    size="lg"
                    label="Enter Your Name"
                    name="name"
                    type="text"
                    required
                  />
                  <Input
                    size="lg"
                    label="Enter Your Email"
                    name="email"
                    type="email"
                    required
                  />
                  <Textarea
                    color="indigo"
                    size="lg"
                    label="Your Message"
                    type="text"
                    name="textarea"
                    required
                  />
                </div>

                <Button className="mt-6" fullWidth>
                  Send Message
                </Button>
              </form>
            </Card>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
