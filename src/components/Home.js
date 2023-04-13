import React, { useState } from "react";
import FormDetails from "../pages/FormDetails";
import PersonalInfo from "../pages/PersonalInfo";
import VehicleInfo from "../pages/VehicleInfo";
import Button from "./Button";
import Completed from "../pages/Completed";

const Home = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    passengers: "",
    time: "",
    requirements: "",
    pickupaddr: "",
    dropoffaddr: "",
    date: "",
  });
  const terms = [
    "name",
    "email",
    "mobileNumber",
    "passengers",
    "time",
    "requirements",
    "pickupaddr",
    "dropoffaddr",
    "date",
  ];
  const formTitle = ["ADDRESS INFO", "PERSONAL INFO", "VEHICLE INFO", "DONE!"];
  const pageDisplay = () => {
    if (page === 0) {
      return <FormDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <VehicleInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Completed formData={formData} />;
    }
  };
  return (
    <div className="home">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 mx-5">
          <div className="white-space ">
            <form className=" g-3">
              <h3 className="text-white text-center mb-4">
                Enter Your Details
              </h3>
              <h4
                className={`text-white text-center mb-3 ${
                  page === 3 ? "text-success" : "text-primary"
                }`}
              >
                {formTitle[page]}
              </h4>
              <div class="mb-3 ">{pageDisplay()}</div>
              <div class="row div-b ">
                {page !== 0 && page !== 3 ? (
                  <Button
                    text={"Prev"}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage((currPage) => currPage - 1);
                    }}
                  />
                ) : null}
                <Button
                  text={page !== 3 ? "Next" : "Finish"}
                  color={page !== 3 ? "#61dafb" : "success"}
                  onClick={(e) => {
                    e.preventDefault();
                    if (page === 2) {
                      for (let t of terms) {
                        if (formData[t] === "") {
                          window.alert("Please fill in all the fields.");
                          window.location.reload();
                          return;
                        }
                      }
                    }
                    if (page === formTitle.length - 1) {
                      window.alert("You are done with the booking!!!");
                      window.location.reload();
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Home;
