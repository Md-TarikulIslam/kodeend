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

export default function Services() {
  return (
    <div>
      <div>
        <h1 className="what-text">What we can do for you?</h1>
        <h1 className="service-text font-bold">
          Services we can help you with
        </h1>
      </div>
      <div className=" max-w-screen-2xl mx-auto ">
       <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 gap-0">
       {allData.map((data) => (
          <Fade key={data.id} direction="left" duration={500}>
            <div >
              <Card className="my-10 w-96 height">
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
      <ScrollRestoration />
    </div>
  );
}

