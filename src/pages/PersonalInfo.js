import React from "react";
import FormInputGroup from "../components/FormInputGroup";
function PersonalInfo({ formData, setFormData }) {
  return (
    <>
      <FormInputGroup
        label="Name"
        name='name'
        type="text"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
      <FormInputGroup
        label="Email"
        name='email'
        type="text"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInputGroup
        label="Mobile Number"
        name='mob number'
        type="number"
        value={formData.mobileNumber}
        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
      />
    </>
  );
}

export default PersonalInfo;