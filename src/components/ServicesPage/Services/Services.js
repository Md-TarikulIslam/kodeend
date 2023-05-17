import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import allData from './fakedata'
 
export default function Services() {
  return (
   <div>
    <div data-aos="fade-up">
        <h1 className="what-text">What we can do for you?</h1>
        <h1 className="service-text font-bold">Services we can help you with</h1>
      </div>
    <div className="grid grid-cols-1 md:pl-48 lg:grid-cols-3 pl-3 lg:pl-32  items-center justify-evenly ">
    {allData.map((data) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
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
                <Typography className="h-32 text-justify font-regular">
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
   </div>
  );
}