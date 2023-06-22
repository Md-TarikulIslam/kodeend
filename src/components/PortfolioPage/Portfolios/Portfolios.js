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
import {  ScrollRestoration } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import './Portfolios.css'

export default function Portfolios() {
  return (
    <div>
      <div>
        <h1 className="what-text">What we already did</h1>
        <h1 className="service-text font-bold">Services we already provided</h1>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 gap-0">
          {allData.map((data) => (
            <Fade key={data.id} direction="left" duration={500}>
              <div>
                <Card className="my-10 w-96 height4">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={data.img}
                      alt="img-blur-shadow"
                      layout="fill"
                      className="image-zoom port-img"
                    />
                  </CardHeader>
                  <CardBody className="desc">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2 font-regular "
                    >
                      {data.title}
                    </Typography>
                    <Typography className="h-32 text-left  font-regular mb-0">
                      {data.desc}
                    </Typography>
                  </CardBody>
                  <div className="grid grid-cols-2  gap-2 px-6 pb-3 text-center">
                    <Chip
                      variant="ghost"
                      className=" hover:bg-blue-500 hover:text-white"
                      value={data.c1}
                    />
                    <Chip
                      variant="ghost"
                      className=" hover:bg-blue-500 hover:text-white"
                      value={data.c2}
                    />
                    <Chip
                      variant="ghost"
                      className=" hover:bg-blue-500 hover:text-white"
                      value={data.c3}
                    />
                    <Chip
                      variant="ghost"
                      className=" hover:bg-blue-500 hover:text-white"
                      value={data.c4}
                    />
                  </div>
                  <CardFooter className="pt-0">
                    <a target="_blank" href={data.link}>
                      <Button>Check Now</Button>
                    </a>
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
