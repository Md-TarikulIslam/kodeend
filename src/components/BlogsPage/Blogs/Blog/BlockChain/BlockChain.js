import React from "react";
import img from "../../../../../assets/images/blogs/blockchain.jpg";
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
import { Link, ScrollRestoration } from "react-router-dom";
const BlockChain = () => {
  const shareUrl = "https://www.kodeend.com/blogs/blockchain";
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
              Blockchain and Big Data: Stay Ahead of the Curve with KodeEnd IT
              Solutions
            </Typography>
            <Typography className="text-left my-5 font-regular">
              Blockchain is the technology behind cryptocurrencies such as
              bitcoin and Ethereum. On the other hand, big data is a more
              advanced data science notion that involves a larger dataset with
              greater diversity, quantity, and velocity. We examine these
              datasets for patterns, associations, and trends of interest.
              Blockchain ensures data storage and privacy to increase the data
              integrity, whereas big data deals with data ensuring the data
              quantity, velocity, and variety to deliver better predictions. The
              combination of these technologies is unbeatable.
            </Typography>
          </div>
          {/* Basics of Technology */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              The Basic knowledge of Blockchain and Big Data
            </Typography>
            <Typography className="text-left font-regular  my-5">
              To be competitive in the digital era, businesses and organizations
              must constantly innovate and adapt. Blockchain and big data are
              two of the most revolutionary technological developments in recent
              years. Big data helps organizations to analyze enormous volumes of
              data to acquire insights and make wise decisions, while blockchain
              technology offers a safe and transparent means to record
              transactions.
            </Typography>
          </div>

          {/* Benefits of Technology  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              The pioneer in blockchain and big data services
            </Typography>
            <Typography className="text-left font-regular  my-5">
              KodeEnd offers a variety of blockchain services, including
              training, consultancy, and development. The team of professionals
              has expertise in creating specialized blockchain solutions that
              address the unique requirements of enterprises and organizations.
              The blockchain consulting services offered by{" "}
              <span className="text-red-300 text-2xl">
                KodeEnd IT Solutions
              </span>
              give companies professional guidance on how to most effectively
              integrate blockchain technology into their operations. It also
              provides blockchain training services to assist organizations in
              understanding the technology and its future uses.
            </Typography>
          </div>
          {/* Real World Examples  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              Benefits
            </Typography>
            <Typography className="text-left font-regular  my-5">
              Businesses may gain a lot from blockchain technology, including
              improved security, transparency, and productivity. Businesses can
              use blockchain to increase accountability and transparency while
              lowering the risk of fraud and mistakes. Very useful applications
              of this technology may be found in the supply chain management,
              healthcare, and finance sectors. <br /> Data analytics,
              warehousing, and administration are among the big data services
              offered by KodeEnd IT Solutions. Their data analytics team uses
              cutting-edge methods to assist organizations in drawing
              conclusions from their data. Data warehousing services give a
              scalable and safe means to store data, while data management
              services assist organizations in better managing their data.{" "}
              <br /> Businesses can use big data technologies to examine vast
              volumes of data to discover insights that are not feasible to
              discover using conventional techniques. This can enhance
              operations, cut costs, and help businesses make better decisions.
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
            <Typography className="text-left font-regular  my-5">
              Big data and blockchain are two technologies that might completely
              alter how organizations run. KodeEnd IT Solutions offers companies
              and organizations cutting-edge solutions to their most pressing
              problems. It is well-positioned to assist businesses and
              organizations leverage the potential of blockchain and big data to
              acquire insights, streamline procedures, and enhance efficiency
              due to a team of specialists and a dedication to quality. <br />{" "}
              <br />
              <Link to="/contact">
                <span className="text-blue-700"> Contact</span>{" "}
              </Link>
              KodeEnd IT Solutions today to learn more about Blockchain and Big Data Services.
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography className="text-left font-regular  my-5">
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
      <ScrollRestoration />
    </div>
  );
};

export default BlockChain;
