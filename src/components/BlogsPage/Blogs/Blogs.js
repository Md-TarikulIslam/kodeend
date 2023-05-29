import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import allData from "./fakedata";
import { Link, ScrollRestoration } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Blogs() {
  return (
    <div>
      <div>
        <h1 className="what-text">Our blogs</h1>
        <h1 className="service-text font-bold">All the blogs are here</h1>
      </div>
      <div className="grid grid-cols-1 md:pl-48 lg:grid-cols-3 pl-1 lg:pl-32  items-center justify-evenly ">
        {allData.map((data) => (
          <Fade key={data.id} direction="right">
          <div >
            <Card className="my-16 w-96 height">
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
                <a href={data.link}>
                  <Button>Read More</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
          </Fade>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
}

