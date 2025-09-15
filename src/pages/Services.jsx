import React, { useEffect, useState } from 'react'
import "./Services.css"
import api from '../components/api';
import Choose from '../components/Choose';
// import Choose from '../components/Choose';
// import Choose from "../Choose/components"


const Services = () => {
  const [service, setService] = useState([]);

  const services = async () => {

    try {
      let response = await api.get(`/admin_details`)
      console.log(response);
    }
    catch (error) {
      console.log("error", error)
    }
  }
  useEffect(() => {
    services()
  }, [])
  return (
    <>
      <div className='service-container theme-background'>
        <div className='service-img'>
          <img src="./service 3.jpg" alt="" />
        </div>

        <div className='services '>
          <p className='service-head'>Our Services</p>
          <p className='service-para'>At CodeZyar, we provide a wide range of digital solutions to help businesses grow,<br /> innovate, and succeed.</p>
        </div>



        <div className='service-card'>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 md:py-16 ">
            {
              service?.map((eachservice, i) => {
                <div className="flex flex-col justify-between col-span-1  gap-5  pb-10  p-5 rounded-[46px] myblur shadow-3xl service1">

                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src={eachservice?.icon}
                      alt=""
                      className="h-20 w-20"
                    />
                    <p className=" text-xl font-bold"> {eachservice?.title}</p>
                  </div>


                  <div className="text-center">
                    {eachservice?.description}
                  </div>

                  <div className="flex justify-center items-center">
                    <button className="text-white font-medium bg-[#05b4ea] px-3 p-1 rounded-xl ">
                      Contact Us
                    </button>
                  </div>
                </div>
              })
            }





           
          </div>
          
        </div>
      
      </div>
    </>
  )
}

export default Services