import React from "react";
import img from "../../../../assets/images/case-study/2.jpg";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import allData from "./fakeData";
import { ScrollRestoration } from "react-router-dom";

const ProfitMaxCase = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-10">
      <Card className="flex-col md:flex-row case-card ">
        <div>
          <img className="case-img" src={img} alt="" />
        </div>
        <div>
          <CardBody className="card-body keep-scrolling py-0">
            <Typography className=" text-lg text-center lg:text-justify lg:text-2xl  mt-10  md:mt-0 sticky top-0 bg-white  font-bold text-blue-600">
              Reinforcement Learning for Dynamic Pricing in E-commerce:
              Maximizing Profits while Maintaining Customer Satisfaction
            </Typography>
            {allData.map((data) => {
              return (
                <div>
                  <Typography className="my-5 text-md text-justify lg:text-xl font-bold text-blue-900">
                    {data.title}
                  </Typography>
                  <Typography className=" text-sm text-justify font-regular lg:text-lg text-black">
                    {data.desc}
                  </Typography>
                  <Typography className="my-5 text-md text-justify lg:text-xl font-bold text-green-900">
                    {data.title2}
                  </Typography>
                  <Typography className=" text-sm text-justify font-regular lg:text-lg text-black">
                    {data.desc2}
                  </Typography>
                  <Typography className="my-5 text-md text-justify lg:text-xl font-bold text-green-900">
                    {data.title3}
                  </Typography>
                  <Typography className=" text-sm text-justify font-regular lg:text-lg text-black">
                    {data.desc3}
                  </Typography>
                  <Typography className="my-5 text-md text-justify lg:text-xl font-bold text-green-900">
                    {data.title4}
                  </Typography>
                  <Typography className=" text-sm text-justify font-regular lg:text-lg text-black">
                    {data.desc4}
                  </Typography>
                  <Typography className="my-5 text-md text-justify lg:text-xl font-bold text-green-900">
                    {data.title5}
                  </Typography>
                  <Typography className=" text-sm text-justify font-regular lg:text-lg text-black">
                    {data.desc5}
                  </Typography>
                  <Typography className="my-5 text-md text-justify lg:text-xl font-bold text-green-900">
                    {data.title6}
                  </Typography>
                  <Typography className=" text-sm text-justify font-regular lg:text-lg text-black">
                    {data.desc6}
                  </Typography>
                </div>
              );
            })}
          </CardBody>
        </div>
      </Card>
      <ScrollRestoration />
    </div>
  );
};

export default ProfitMaxCase;
