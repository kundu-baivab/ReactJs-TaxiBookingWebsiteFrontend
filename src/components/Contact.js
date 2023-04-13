import React from "react";

const Contact = () => {
  return (
    <>
      <div className="conatiner box">
        <div className="container text-white text-center ">
          <h2 className="ahead text-center text-white mb-0">CONTACT US</h2>
        </div>
        <div className="row align-items-center content">
          <div className="col-md-6 text-center order-2 order-md-1">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="col align-items-center carousel">
                  <div className="smbox mb-4">
                    <section className="font-weight-bold">
                      <img
                        src="https://i.ibb.co/x2DPHh8/whatsapp.png"
                        alt="whatsapp"
                        border="0"
                      ></img>
                      <br />
                      <p className="text-white">Ping Us for further details</p>
                      <a
                        href="tel: +91- 78852 91958"
                        className="links text-white "
                        target="blank"
                      >
                        <strong>&nbsp;&nbsp;+91- 78952 91958</strong>
                      </a>
                    </section>
                  </div>
                  <div className="smbox ">
                    <section className="font-weight-bold ">
                      <img
                        src="https://i.ibb.co/dffPj6Q/instagram.png"
                        alt="instagram"
                        border="0"
                      />
                      <br />
                      <p className="text-white">Follow us for further details</p>
                      <a
                        href="https://www.instagram.com"
                        className="links text-white"
                        target="blank"
                      >
                        &nbsp;MeTaxi
                      </a>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 my-0 col-sm-6 google-maps">
            <a href="https://goo.gl/maps/C1bCE1uuQsFrg3a46">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58916.9773486083!2d88.39746144965741!3d22.64218723693675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f89e4d0943c971%3A0x33bddddf02d806cb!2sPre-Paid%20Taxi%20Stand%2C%20International%20Airport%2C%20Dum%20Dum%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.6421925!2d88.43866129999999!5e0!3m2!1sen!2sin!4v1681377881526!5m2!1sen!2sin"
                width="600"
                height="250"
                className="maps"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
