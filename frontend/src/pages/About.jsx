import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About the Creator</h1>
          <p className='text-justify leading-7'>
          Welcome to Job Finder, your AI-powered career path explorer designed to help you discover and achieve your dream career. At Job Finder, we believe that career planning should be as unique as you are. That's why we've developed an innovative platform that leverages advanced AI algorithms, career data insights, and your own skills and interests to provide personalized career recommendations.

Our Mission
Our mission is to empower individuals with the right tools and resources to make informed career choices that align with their strengths, passions, and goals. Whether you're a recent graduate, a mid-career professional, or exploring a career change, Job Finder is here to guide you every step of the way.

What We Offer

Career Path Suggestions: Get career options that match your skills, interests, and personality. With our AI models, discover roles you might not have considered before and explore different paths within your industry or skill set.
Skill Matching: Our platform identifies the skills you already possess and recommends complementary skills to help you progress further or pivot to a new career path.
Job Listings: We provide up-to-date job listings by integrating with LinkedIn’s API, giving you access to real-time opportunities tailored to your preferences and profile.
Personalized Insights: Using a blend of machine learning and data analytics, our platform offers insights into demand for certain roles, salary expectations, and skill gaps, helping you better understand your chosen career landscape.
Why Choose Us?
Job Finder is more than just a job search tool; it’s a career development partner that adapts to your personal growth. We focus on building a platform that’s intuitive, data-driven, and above all, designed with you in mind. Our AI models continuously learn and improve, so the recommendations you receive are timely, relevant, and customized to today’s job market.

Start your journey with Job Finder today and take control of your career path with confidence!
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>
    </div>
  );
};

export default About;
