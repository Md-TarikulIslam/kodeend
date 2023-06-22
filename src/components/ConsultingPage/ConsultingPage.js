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
  
  export default function ConsultingPage() {
    return (
      <div>
        <div>
          <h1 className="what-text">Consulting</h1>
          <h1 className="service-text font-bold">
          Unlocking success through strategic consulting solutions
          </h1>
        </div>
        {/* grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-2 gap-0 */}
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row justify-between ">
            {allData.map((data) => (
              <Fade key={data.id}  duration={500}>
                <div>
                  <Card className="my-10 w-96 height7 zoomin">
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
                      <Typography className="desc-height2 text-left font-regular ">
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
  