import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => (
    <div>
        <div className="flex flex-col lg:flex-row justify-evenly px-20 lg:px-0  py-20 bg-color text-white">
            <div className="mb-10 lg:mb-0">
                <h1 className="head-text">Informations</h1>
                <h1 className="text">
                    Transform your business with our AI-powered web applications and
                    data science services.
                </h1>
            </div>
            <div className="mb-10 lg:mb-0">
                <h1 className="head-text">Address</h1>
                <div className="flex items-center">
                    <p className="text-4xl mr-3"><MdLocationPin /></p>
                    <p className="text text-2">Räfsgatan 36, 21633 Limhamn, Sweden</p>
                </div>
                <div className="flex items-center">
                    <p className="text-4xl mr-3"><MdPhone /></p>
                    <p className="text">+46 708698276</p>
                </div>
                <div className="flex items-center">
                    <p className="text-4xl mr-3"> <MdEmail /></p>
                    <p className="text">info@kodeend.com</p>
                </div>
            </div>
            <div className="mb-10 lg:mb-0">
                <h1 className="head-text">Legals</h1>
                <Link to='' className="text">Terms and Conditions</Link> <br />
                <Link to='' className="text">Privacy policy</Link> <br />
                <Link to='' className="text">GDPR</Link>
            </div>
            <div>
                <h1 className="head-text">Social Links</h1>
                <div className="flex">
                <a className="text-4xl" target="_blank" href="https://www.facebook.com/KodeEnd"><FaFacebookSquare /></a>
                <a className="text-4xl" target="_blank" href="https://www.linkedin.com/company/shahnawaz-jinnah-53264567"><FaLinkedin /></a>
                </div>

            </div>
        </div>
    </div>
);

export default Footer;
