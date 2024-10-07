import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT OUR AGENCY" /> <br />
            <br />
            <Title title="The last digital partner you'll ever need!" className="title-bg" />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Transforming your ideas into innovative digital solutions since 2001" />
              <p className="desc-p">
                At [Agency Name], we specialize in turning business concepts into dynamic digital products. Our team of experts leverages the latest technology and industry trends to create solutions that not only meet your needs but also exceed your expectations. We believe in delivering smart, scalable, and results-driven products that help you stand out in the competitive digital landscape.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of industry experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful projects delivered</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards received</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img src="/images/s1.jpg" alt="Digital Transformation" className="round" width="100%" height="100%" />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img src="/images/s4.jpg" alt="Mission" className="round" width="100%" height="100%" />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our Mission" />
              <br />
              <p className="misson-p">
                Our mission is to empower businesses by delivering cutting-edge digital solutions that drive growth and innovation. We are committed to working closely with our clients to understand their unique challenges and deliver products that make a measurable impact. Whether you are looking to streamline operations, improve customer engagement, or launch a new digital product, we are here to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
