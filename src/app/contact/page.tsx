import ContactForm from '@/components/Contact'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div className="bg-slate-300 h-full ">
        <div className="pb-10 dark:bg-black">
        <ContactForm/>
        </div>
        
        <Footer/> 
      
    </div>
  )
}

export default page
