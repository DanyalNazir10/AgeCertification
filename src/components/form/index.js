import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form = () => {
  const { register, control, handleSubmit } = useForm();

  const validateAge = (data) => {
    console.log("Form Submitted with data: ", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(validateAge)}>
        <fieldset>
          <legend>Enter Your Date of Birth</legend>

          <label htmlFor="birthDay">Birth Day</label>
          <input
            type="number"
            id="birthDay"
            {...register("birthDay", {
            })}
            placeholder="Enter your birth day"
          />

          <label htmlFor="birthMonth">Birth Month</label>
          <input
            type="number"
            id="birthMonth"
            {...register("birthMonth")}
            placeholder="Enter your birth month"
          />

          <label htmlFor="birthYear">Birth Year</label>
          <input
            type="number"
            id="birthYear"
            {...register("birthYear")}
            placeholder="Enter your birth year"
          />

          <input type="submit" value={"Submit"} />
        </fieldset>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
