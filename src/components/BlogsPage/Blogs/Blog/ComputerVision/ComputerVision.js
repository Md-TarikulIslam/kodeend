import React from "react";
import img from "../../../../../assets/images/blogs/cm-vision.jpg";
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


const ComputerVision = () => {
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
              The Age of Technology Has Arrived: AI and Machine Learning Are the
              Future
            </Typography>
            <Typography className="text-justify my-5">
              We live in a technological age where innovation and development
              are the norm. Artificial intelligence (AI) and machine learning
              have emerged in recent years, swiftly revolutionizing the way we
              live, work, and interact with the world around us. We will look at
              how artificial intelligence and machine learning are transforming
              numerous sectors, as well as the possible influence they will have
              on our future.
            </Typography>
          </div>
          {/* Basics of Technology */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              Basics of Artificial Intelligence and Machine Learning
            </Typography>
            <Typography className="text-justify my-5">
              We live in a technological age where innovation and development
              are the norm. Artificial intelligence (AI) and machine learning
              have emerged in recent years, swiftly revolutionizing the way we
              live, work, and interact with the world around us. We will look at
              how artificial intelligence and machine learning are transforming
              numerous sectors, as well as the possible influence they will have
              on our future.
            </Typography>
          </div>

          {/* Benefits of Technology  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              Basics of Artificial Intelligence and Machine Learning
            </Typography>
            <Typography className="text-justify my-5">
              We live in a technological age where innovation and development
              are the norm. Artificial intelligence (AI) and machine learning
              have emerged in recent years, swiftly revolutionizing the way we
              live, work, and interact with the world around us. We will look at
              how artificial intelligence and machine learning are transforming
              numerous sectors, as well as the possible influence they will have
              on our future.
            </Typography>
          </div>
          {/* Real World Examples  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              Basics of Artificial Intelligence and Machine Learning
            </Typography>
            <Typography className="text-justify my-5">
              We live in a technological age where innovation and development
              are the norm. Artificial intelligence (AI) and machine learning
              have emerged in recent years, swiftly revolutionizing the way we
              live, work, and interact with the world around us. We will look at
              how artificial intelligence and machine learning are transforming
              numerous sectors, as well as the possible influence they will have
              on our future.
            </Typography>
          </div>
          {/* Summary  */}
          <div>
            <Typography
              variant="h4"
              className="mb-2 font-bold lg:text-xl lg:mb-5 text-black"
            >
              Basics of Artificial Intelligence and Machine Learning
            </Typography>
            <Typography className="text-justify my-5">
              We live in a technological age where innovation and development
              are the norm. Artificial intelligence (AI) and machine learning
              have emerged in recent years, swiftly revolutionizing the way we
              live, work, and interact with the world around us. We will look at
              how artificial intelligence and machine learning are transforming
              numerous sectors, as well as the possible influence they will have
              on our future.
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography className="text-justify my-5">
          <h1 style={{marginTop:'10px'}} className="what-text">Share this blog with</h1>
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

export default ComputerVision;
