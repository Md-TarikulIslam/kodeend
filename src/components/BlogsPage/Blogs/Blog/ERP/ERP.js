import React from "react";
import img from "../../../../../assets/images/blogs/erp2.jpg";
import { Typography } from "@material-tailwind/react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaRedditSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ERP = () => {
  const shareUrl = "https://unsplash.com/";
  return (
    <div>
      <div className="blog-card">
        <div>
          <img className="blog-img" src={img} alt="" />
        </div>
        <div className="another-card">
          {/* Title and Description  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-3xl  text-blue-500"
            >
              Increase Efficiency & Boost Productivity with Kodeend ERP Software
            </Typography>
            <Typography className="text-justify font-regular  my-5">
              Enterprise resource planning, or ERP, is a robust software program
              created to bring all parts of a company together in one spot. It
              enables businesses to organize their processes and take
              data-driven decisions that boost productivity and profitability.
              Leading ERP service provider{" "}
              <span className="text-red-300 font-bold text-xl">
                KodeEnd IT Solutions
              </span>{" "}
              provides a range of adaptable solutions for companies of all
              sizes.
              <Link to="/services/erp" className="text-blue-700">
                {" "}
                Learn More
              </Link>
            </Typography>
          </div>
          {/* Basics of Technology */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              The Basic knowledge of ERP
            </Typography>
            <Typography className="text-justify font-regular  my-5">
              An ERP system's primary goal is to manage and automate a business'
              daily activities. This includes everything from supply chain
              management and customer relationship management to inventory
              management and financial accounting. Businesses can eliminate
              manual data entry, lower errors, and enhance departmental
              communication by combining all of these operations into a single
              platform.
            </Typography>
          </div>

          {/* Benefits of Technology  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              The benefits of ERP in business are as follows
            </Typography>
            <Typography className="text-justify font-regular  my-5">
              <span className="text-xl"> Increase Performance </span> <br />
              Real-time insights into a company's performance are one of the
              main advantages of ERP software. Businesses may see inefficiencies
              and take action to streamline operations with access to a variety
              of data. This could involve modifying production schedules to
              better match customer demand, locating bottlenecks in the supply
              chain, or optimizing pricing policies to enhance profitability.{" "}
              <br /> <br />
              <span className="text-xl">Easy Collaboration </span> <br />
              ERP also makes it easier for departments to collaborate with one
              another. Teams can access information instantly and communicate
              more effectively if all data is kept in one place. <br /> <br />
              <span className="text-xl">Productivity </span> <br />
              Due to the implementation of ERPs in business, Teams of employees
              no longer being isolated within their separate departments,
              productivity could increase and decisions can be made more
              quickly.
            </Typography>
          </div>
          {/* Real World Examples  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              KodeEnd Providing Easy Enterprise Solutions
            </Typography>
            <Typography className="text-justify font-regular  my-5">
              <span className="text-red-300 font-bold text-2xl">
                KodeEnd IT Solutions
              </span>{" "}
              provides a variety of ERP systems to fulfill the particular
              requirements of companies in various industries. Whether you run a
              small business or a large corporation, KodeEnd has a solution that
              can improve your bottom line by streamlining your processes.
              KodeEnd's ERP solutions are made to make managing your business
              simple, from financial accounting and reporting to inventory and
              supply chain management. KodeEnd providing easy enterprise
              solutions We live in a technological age where innovation and
              development are the norm. Artificial intelligence (AI) and machine
              learning have emerged in recent years, swiftly revolutionizing the
              way we live, work, and interact with the world around us. We will
              look at how artificial intelligence and machine learning are
              transforming numerous sectors, as well as the possible influence
              they will have on our future.
            </Typography>
          </div>
          {/* Summary  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              Summary
            </Typography>
            <Typography className="text-justify font-regular  my-5">
              If you wish to expand your business, an ERP system from KodeEnd is
              exactly what you need. KodeEnd's strong abilities and flexible
              solutions can help you streamline your operations and accomplish
              your business's goals. <br /> <br />
              <Link to="/contact">
                <span className="text-blue-700"> Contact</span>{" "}
              </Link>
              KodeEnd IT Solutions today to learn more about how its ERP services can benefit
              your business.
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography className="text-justify font-regular  my-5">
          <h1 style={{ marginTop: "10px" }} className="what-text">
            Share this blog with
          </h1>
        </Typography>
        <div className="text-center text-5xl text-indigo-500 my-8">
          <FacebookShareButton url={shareUrl}>
            <FaFacebookSquare />
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl}>
            <FaLinkedin />
          </LinkedinShareButton>
          <TwitterShareButton url={shareUrl}>
            <FaTwitterSquare />
          </TwitterShareButton>
          <RedditShareButton url={shareUrl}>
            <FaRedditSquare />
          </RedditShareButton>
        </div>
      </div>
    </div>
  );
};

export default ERP;
