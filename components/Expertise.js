import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Expertise' />
            {/* Updated text to be relevant to All4Web */}
            <p>
              At All4Web Innovations, we specialize in creating cutting-edge web and mobile applications that
              empower businesses to thrive in the digital age. From intuitive design and seamless user experiences 
              to robust backend development, our team brings your vision to life. Whether you need dynamic branding,
              digital marketing strategies, or tailored e-commerce solutions, our expertise helps your business grow.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='Learn More' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
