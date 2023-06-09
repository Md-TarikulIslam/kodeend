import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FcServices } from "react-icons/fc";

import allData from "./fakedata";
import "./Service.css";
import About from "../About/About";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
export default function Service() {
  return (
    <div>
      <div>
        <h1 className="what-text">What we can do for you?</h1>
        <h1 className="service-text font-bold">
          Services we can help you with
        </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 gap-10">
          {allData.map((data) => (
            <Fade key={data.id} duration={500} direction="left">
              <div>
                <Card className="mt-6 w-96 height">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={data.img}
                      alt="img-blur-shadow"
                      layout="fill"
                      className="image-zoom"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2 font-regular "
                    >
                      {data.title}
                    </Typography>
                    <Typography className="h-32 text-left font-regular">
                      {data.desc}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Link to={data.link}>
                      <Button>Read More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <Fade delay={500}>
        <div className="service-btn">
          <Link to="/services">
            {" "}
            <button className="tracking-widest">MORE SERVICES</button>
          </Link>
          <span className="text-3xl">
            <FcServices />
          </span>
        </div>
      </Fade>
      <About></About>
    </div>
  );
}
