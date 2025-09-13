'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

interface ServiceProps {
  title: string;
  description: string;
  image: string;
}

const services: ServiceProps[] = [
  {
    title: 'Agricultural Drones',
    description: 'Our advanced agricultural drones help farmers increase crop yields and reduce costs.',
    image: 'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image path
  },
  {
    title: 'Water Pump Control Device',
    description: 'Control your water pumps remotely using our innovative phone app.',
    image: 'https://images.unsplash.com/photo-1639600993675-2281b2c939f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image path
  },
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <div key={index} className="rounded-lg shadow-lg p-4 bg-white">
          <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg" />
          <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black ">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 bg-cover bg-center bg-no-repeat h-60 flex flex-col justify-center items-center mt-0"
        
      >
        <h1 className="text-4xl font-bold text-black dark:text-yellow-50">Welcome to Our IOT Solutions</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
          We provide innovative IOT products to meet your needs.
        </p>
      </motion.header>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >

        <Services />
      </motion.section>
      <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }} 
      
      className="mt-10 px-10 flex flex-col lg:flex-row justify-center items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1570155308259-f4480a5c3696?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Web Development"
          className="bg-black opacity-90 lg:h-3/5 w-4/5 lg:w-2/5 hover:shadow-md hover:scale-105 ease-in-out"
        />
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }} 
        
        className="text-center lg:text-left lg:w-2/5 px-10 pb-5">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800  dark:text-gray-300 mb-4 heading-2">
            Crafting Cutting-Edge Digital Experiences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400  mb-4 para">
          At Grudhra Solutions, we specialize in developing cutting-edge IoT solutions tailored to your business needs. Our team of experts harnesses the latest IoT technologies to create scalable, efficient, and interconnected systems that enhance operational efficiency and drive innovation.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 para">
          From concept to deployment, Grudhra Solutions is your partner in the IoT revolution. We offer comprehensive services, including sensor integration, real-time data analytics, and secure connectivity solutions, ensuring your business remains at the forefront of the digital age. Whether you're looking to streamline processes or enhance user experiences, our IoT solutions deliver powerful and effective results.








          </p>
        </motion.div>
      </motion.div>
      <Footer/>
    </div>
  );
};

export default Page;
