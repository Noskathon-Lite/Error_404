import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Layout from "../Layout";

// import logo from '.src/Assets/background.jpg';

function AboutUs() {
  return (
    <Layout>
        <h2 className="text-3xl  text-black strok-slate-50 font-bold">
          Our Mission
        </h2>
        <p className="text-lg text-white mt-4 font-serif"></p>

      <section className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-xl font-bold text-center text-gray-1000 mb-10">
          Meet Our Team
        </h2>
          <div className="grid grid-cols-2 gap-5">
          <div className=" p-6 rounded-lg shadow-lg text-center transition duration-300 cursor-pointer hover:scale-105 hover: transition-0.7s">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/darshan.jpg "
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline">
              <a
                href="https://www.linkedin.com/in/darshan-thapa-65218a302?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE1Eux4BjXMPdjEXsVNi05mGf4QVxfOTp08&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B2JyY7zVYQlWQp0GA4ZcAOA%3D%3D"
                className="hover:text-white"
              >
                Darshan Thapa
              </a>
            </h3>
            <p className="text-gray-500">Team Leader</p>
            <p className="mt-2 text-gray-900 font-bold ">
              A dedicated third-semester computer science student with a strong
              passion for programming and technology. He is focused on
              leveraging his skills to make a meaningful impact in healthcare
              through innovative solutions
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100 ">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/Hari.jpg"
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline">
              <a
                href="https://www.linkedin.com/in/hari-shankar-rana/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BNqEwLhCCTFaOY5f8lUm4Tw%3D%3D"
                className="hover:text-white"
              >
                Hari Shankar Rana
              </a>
            </h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
              An enthusiastic programmer in his third semester, always eager to
              learn and apply new technologies. His keen interest in healthcare
              innovations is matched by his commitment to developing intuitive
              and accessible applications that make healthcare services more
              efficient for everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/binod.jpg"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline">
              <a
                href="https://www.linkedin.com/in/binod-acharya-27209a315?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE_srfYBlBAlK0EtwkQRBilqLGkJQefHSHE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bjwex6Fw3SnG%2B%2Fh01J2HqEw%3D%3D"
                className="hover:text-white"
              >
                Binod Acharya
              </a>
            </h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
              A motivated student with a knack for problem-solving and a deep
              passion for programming. His dedication to improving healthcare
              accessibility through technology makes him a crucial part of the
              team, always ready to tackle new challenges with creative
              solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-yellow-300 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="image/nishan.jpg"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-800 underline">
              <a
                href="https://www.linkedin.com/in/nishan-shrestha-9a9412282/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BgWrewsJZSBOctleZtzXFlA%3D%3D"
                className="hover:text-white"
              >
                Nishan Shrestha
              </a>
            </h3>
            <p className="text-gray-500">Team Member</p>
            <p className="mt-2 text-gray-900 font-bold text-justify">
              An aspiring software developer, fascinated by the intersection of
              technology and healthcare. His goal is to harness his programming
              skills to build platforms that enhance patient care and streamline
              medical processes, ensuring a better future for all.
            </p>
          </div>
          </div>
          
      </section>
    </Layout>
  );
}

export default AboutUs;
