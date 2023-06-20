import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import allData from "./fakedata";
import { Link, ScrollRestoration } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./CaseStudies.css";

export default function CaseStudies() {
  return (
    <div>
      <div>
        <h1 className="what-text">Case studies</h1>
        <h1 className="service-text font-bold">
          See how we deliver client's idea into excellent result
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 gap-0">
          {allData.map((data) => (
            <Fade key={data.id} direction="right" duration={500}>
              <div>
                <Card className="my-10 w-96 height6">
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
                    <Typography className="desc-height text-left font-regular ">
                      {data.desc}
                    </Typography>
                  </CardBody>

                  <CardFooter className="pt-0">
                    <Link to={data.link}>
                      <Button>Read more</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
}
