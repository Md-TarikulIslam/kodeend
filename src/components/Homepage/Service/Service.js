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

export default function Service() {
  return (
    <div>
      <div data-aos="fade-up">
        <h1 className="what-text">What we can do for you?</h1>
        <h1 className="service-text font-bold">
          Services we can help you with
        </h1>
      </div>
      <div className="flex justify-evenly flex-col items-center lg:flex-row mt-20 lg:mt-0 gap-20 lg:gap-0">
        {allData.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
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
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="service-btn">
        <Link to="/services">
          {" "}
          <button className="tracking-widest">MORE SERVICES</button>
        </Link>
        <span className="text-3xl">
          <FcServices />
        </span>
      </div>
      <About></About>
    </div>
  );
}
