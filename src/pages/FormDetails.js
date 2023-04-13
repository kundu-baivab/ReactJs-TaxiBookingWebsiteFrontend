import React from "react";
import FormInputGroup from "../components/FormInputGroup";

function FormDetails({ formData, setFormData }) {
  return (
    <>
      <FormInputGroup
        label="Pickup Address"
        name='pickupaddr'
        type="text"
        value={formData.pickupaddr}
        onChange={(e) => setFormData({ ...formData, pickupaddr: e.target.value })}
      />
      <FormInputGroup
        label="Drop-Off address"
        name='dropoffaddr'
        type="text"
        value={formData.dropoffaddr}
        onChange={(e) => setFormData({ ...formData, dropoffaddr: e.target.value })}
      />
      <FormInputGroup
        label="Date"
        name='date'
        type="date"
        value={formData.date}
        onChange={(e) =>
          setFormData({ ...formData, date: e.target.value })
        }
      />
    </>
  );
}
export default FormDetails;