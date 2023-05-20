import React from "react";
import img from "../../../../../assets/images/services/service/ai-ml/ai-ml-main2.png";
import allData from "./fakedata";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
} from "@material-tailwind/react";

import allReason from "./fakedata2";

import QuoteForm from "../../../../Shared/QuoteForm/QuoteForm";

const AIML = () => {
  return (
    <div>
      <div>
        <h1 className="service-text-2 font-bold">
          TRANSFORM YOUR BUSINESS WITH AI/MLSERVICES FROM <br /> KODEEND IT SOLUTIONS
        </h1>
      </div>

      <div className=" flex ">
        <div className="single-service-card  flex lg:flex-row flex-col items-center mx-auto">
          <div>
            <img className="service-image" src={img} alt="" />
          </div>
          <div className="single-service-text">
            In a nutshell, KodeEnd IT Solutions provides a full range of
            artificial intelligence (AI) services, including machine learning
            (ML) and computer vision, to assist companies in a variety of
            industries in transforming and remaining competitive. To free you up
            to concentrate on what you do best—running your business—our team of
            professionals can create and execute custom AI solutions that are
            suited to your unique needs.
          </div>
        </div>
      </div>

      <div>
        <h1 className="sub-header-text ">THE FEATURES WE PROVIDE</h1>
      </div>
      <div className="grid grid-cols-1 md:pl-48 lg:grid-cols-3 pl-1 lg:pl-56 lg:pr-36 mx-auto  items-center justify-evenly ">
        {allData.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <Card className="my-16 w-96 height2">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={data.image}
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
            </Card>
          </div>
        ))}
      </div>
      <QuoteForm></QuoteForm>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1 className="why-choose-text ">WHY CHOOSE OUR AI AND ML SERVICES</h1>

        <div className="w-[23rem] md:w-[40rem] lg:w-[50rem] mx-auto">
          <Timeline>
            <div>
              {allReason.map((reason) => (
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <TimelineItem className="h-28 ">
                    <TimelineConnector className="!w-[78px] " />
                    <TimelineHeader className="relative rounded-xl card-height border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                      <TimelineIcon
                        className="p-3"
                        variant="ghost"
                        color="blue"
                      >
                        <p className="h-5 w-5">{reason.icon}</p>
                      </TimelineIcon>
                      <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                          {reason.text}
                        </Typography>
                      </div>
                    </TimelineHeader>
                  </TimelineItem>
                </div>
              ))}
            </div>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default AIML;
