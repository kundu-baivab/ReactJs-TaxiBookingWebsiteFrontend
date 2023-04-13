import React from "react";
import FormInputGroup from "../components/FormInputGroup";

function VehicleInfo({ formData, setFormData }) {
  return (
    <>
      <FormInputGroup
        type="number"
        name='passengers'
        label="No. of passengers"
        value={formData.passengers}
        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
      />
      <FormInputGroup
        type="time"
        name='time'
        label="Time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      />
      <FormInputGroup
        type="text"
        name='requirements'
        label="Special Requirements"
        placeholder="Fitting WheelChair,Surfboard,bicycle etc."
        value={formData.requirements}
        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
      />
    </>
  );
}

export default VehicleInfo;