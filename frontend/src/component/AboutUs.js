import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

// import logo from '.src/Assets/background.jpg';

function AboutUs() {
  return (
    <Layout>
        <h2 className="text-3xl  text-black strok-slate-50 font-bold">
          Our Mission
        </h2>
        <p className="text-lg text-black mt-4 font-serif text-center">
        To empower individuals and communities by providing accessible, reliable, and collaborative mental health resources through an open-source platform that fosters understanding, support, and growth.
      </p>
      <section className="max-w-6xl mx-auto px-4 ">
      <h1 className="text-xl font-bold text-center text-gray-800 mb-10">
          Meet Our Team
        </h1>
          <div className="grid grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105  hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
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
            <p className="mt-2 text-gray-900 font-bold">
              A visionary leader passionate about leveraging technology to create a positive impact on mental health. With his strong programming skills and commitment to innovation, Darshan spearheads the team’s mission to make mental health resources accessible to everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100 ">
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
            <p className="mt-2 text-gray-900 font-bold">
              Hari is a dedicated programmer with a deep interest in addressing mental health challenges through technology. His goal is to design intuitive and user-friendly interfaces that foster a supportive and engaging environment for users.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
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
            <p className="mt-2 text-gray-900 font-bold">
              Binod brings a strong analytical mindset and a passion for problem-solving to the team. He is dedicated to creating data-driven solutions that enhance the accessibility and impact of mental health resources for diverse communities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-md bg-gradient-to-r from-sky-200 to-indigo-100">
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
            <p className="mt-2 text-gray-900 font-bold">
              Nishan is a tech enthusiast driven by a desire to improve mental health care through innovative technology. His work focuses on developing scalable and inclusive features that support mental well-being for all users.
            </p>
          </div>
          </div>
          
      </section>
      </Layout>
    
  );
}
export default AboutUs;
