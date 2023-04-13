import React from "react";

const About = () => {
  return (
    <>
      <div className="conatiner box">
        <div className="container text-white text-center ">
          <h2 className="ahead text-center text-white mb-3">ABOUT US</h2>
          <p className="ap">
            Welcome to our taxi booking website! We are a team of experienced
            professionals who are passionate about providing reliable and
            affordable transportation services to our customers. Our mission is
            to make your travel experience as smooth and hassle-free as
            possible. Whether you need a ride to the airport, a business
            meeting, or a night out on the town, we've got you covered. Our
            fleet of vehicles includes a variety of options to suit your needs,
            from standard sedans to luxury SUVs. All of our drivers are licensed
            and insured, and we pride ourselves on our commitment to safety and
            customer satisfaction. Thank you for choosing our taxi booking
            service. We look forward to serving you!
          </p>
        </div>
        <div className="row align-items-center content">
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-12">
                <h3 className="text-white text-center mb-4">Mission</h3>
                <p className="aboutpara">
                  Our mission is to provide safe, reliable, and affordable
                  transportation solutions that connect people and communities.
                  We aim to leverage cutting-edge technology and innovative
                  practices to deliver exceptional customer service, reduce our
                  environmental impact, and contribute to the development of
                  sustainable transportation infrastructure. At the core of our
                  mission is our commitment to safety, accessibility, and
                  convenience, providing a seamless travel experience for all.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-2 order-md-1 my-4 ">
            <img
              src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=494&q=80"
              alt=""
              width="500"
              height="300"
              class="img-fluid aimg"
            />
          </div>
        </div>
        <div className="row align-items-center content">
          <div className="col-md-6 order-2 order-md-2 my-4">
            <img
              src="https://images.unsplash.com/photo-1516083649464-1740d081bc44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              width="500"
              height="200"
              class="img-fluid aimg"
            />
          </div>
          <div className="col-md-6 text-center order-1 order-md-1">
            <div className="row justify-content-center">
              <div className="col-12">
                <h3 className="text-white text-center mb-4 mt-4">Values</h3>
                <p className="aboutpara2 mr-3">
                  <li>
                    Safety: We prioritize the safety of our passengers and
                    drivers by implementing rigorous safety protocols,
                    background checks, and regular vehicle inspections.
                  </li>
                  <li>
                    We strive to provide reliable transportation services that
                    are always on time and meet the needs of our customers.
                  </li>
                  <li>
                    We believe that everyone deserves access to affordable
                    transportation, and we aim to provide competitive pricing
                    and transparent fares.
                  </li>
                  <li>
                    We are committed to providing accessible transportation
                    services that accommodate the needs of all passengers,
                    including those with disabilities.
                  </li>
                  <li>
                    We place a high value on customer satisfaction and aim to
                    exceed our customers' expectations by providing exceptional
                    customer service and support.
                  </li>
                  <li>
                    We are constantly exploring new technologies and innovative
                    practices to improve our services and provide the best
                    possible experience for our customers.
                  </li>
                  <li>
                    We believe in the importance of sustainable transportation
                    and are committed to reducing our environmental impact by
                    implementing eco-friendly practices and investing in
                    electric vehicles.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-white text-center ">
          <h2 className="ahead text-center text-white mb-3">Vision</h2>
          <p className="ap mb-5">
            Our vision is to become the leading transportation service provider
            by offering innovative and sustainable solutions that meet the
            evolving needs of our customers. We aim to leverage the latest
            technologies and best practices to deliver a seamless and
            personalized travel experience that exceeds expectations. We strive
            to be recognized as a socially responsible company that contributes
            to the development of sustainable transportation infrastructure and
            promotes community growth and development. Our ultimate goal is to
            create a world where transportation is safe, affordable, and
            accessible to all.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
