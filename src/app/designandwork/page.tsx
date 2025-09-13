'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className=" bg-gray-200 dark:bg-black ">
      <div className="p-6">
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text  dark:text-gray-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Discover Our Expertise
      </motion.h1>
     
      {/* Mechanical Designs Section */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:0.8}}
        >
          <img src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mechanical Design" className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:mr-6 rounded-lg shadow-md"/>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">Innovative Mechanical Designs</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our mechanical designs are engineered for precision and performance. Whether it's for industrial machinery or custom projects, we leverage cutting-edge technology to deliver solutions that are both efficient and durable. From concept to execution, our designs are tailored to meet your exact specifications.
            </p>
            <img src="https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mechanical Design" className="w-full     mb-4 lg:w-1/2 rounded-lg shadow-md"/>
           
            <motion.button 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Electrical Engineering Section */}
      <section className="mb-16 p-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-lg">
        <motion.div 
          className="flex flex-col-reverse lg:flex-row items-center"
          whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.8}}
        >
          <div className="lg:w-1/2 lg:mr-6">
            <h2 className="text-3xl font-semibold mb-4">Cutting-Edge Electrical Engineering</h2>
            <p className="text-lg mb-6">
              Our electrical engineering services cover the full spectrum, from design to installation and maintenance. We prioritize safety, efficiency, and sustainability in all our projects, ensuring that your systems not only meet industry standards but also exceed your expectations.
            </p>
            <motion.button 
              className="bg-white text-blue-800 px-6 py-2 rounded-lg hover:bg-gray-100 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.button>
          </div>
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Electrical Engineering" className="w-full lg:w-1/2 mb-6 lg:mb-0 rounded-lg shadow-md"/>
        </motion.div>
       
      </section>

      {/* Civil Engineering Section */}
      <section className="mb-16 p-8 bg-gray-100 rounded-lg shadow-lg">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:0.8}}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Comprehensive Civil Engineering</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide comprehensive civil engineering solutions, from infrastructure planning to construction management. Our team is dedicated to creating structures that are not only robust and sustainable but also harmonious with their surroundings. Whether it's a bridge, a building, or a road, we ensure every project is built to last.
            </p>
            <motion.button 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Projects
            </motion.button>
          </div>
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Civil Engineering Project 1" className="w-full rounded-lg shadow-md"/>
            
          </div>
        </motion.div>
        
      </section>

      {/* House Designs Section */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <motion.div 
          className="flex flex-col lg:flex-row-reverse items-center"
          whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.8}}
        >
          <img src="https://images.unsplash.com/photo-1599420186917-468a49a78a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="House Design" className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:ml-6 rounded-lg shadow-md"/>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">Custom House Designs</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our house designs reflect a deep understanding of aesthetics, functionality, and sustainability. We create homes that are not just visually appealing but also comfortable and eco-friendly. Whether you're looking for a modern design or something more traditional, our architects and designers work closely with you to bring your vision to life.
            </p>
            <motion.button 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
        
      </section>
      
      </div>
      <Footer/>
    </div>

    
  );
}

export default ServicesPage;
