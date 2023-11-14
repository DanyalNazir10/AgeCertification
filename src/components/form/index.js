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
                required: "Birth day is required",
                min:{
                    value: 1,
                    message: "Birth day should be between 1 and 31"
                }, 
                max:{
                    value: 31,
                    message: "Birth day should be between 1 and 31"
                }
            })}
            placeholder="Enter your birth day"
          />

          <label htmlFor="birthMonth">Birth Month</label>
          <input
            type="number"
            id="birthMonth"
            {...register("birthMonth", {
                required: "Birth month is required",
                min:{
                    value: 1,
                    message: "Birth month should be between 1 and 12"
                }, 
                max:{
                    value: 12,
                    message: "Birth month should be between 1 and 12"
                }
            })}
            placeholder="Enter your birth month"
          />

          <label htmlFor="birthYear">Birth Year</label>
          <input
            type="number"
            id="birthYear"
            {...register("birthYear", {
                required: "Birth year is required",
                min:{
                    value: 2000,
                    message: "Birth month should be between 2000 and 2023"
                }, 
                max:{
                    value: 2023,
                    message: "Birth month should be between 2000 and 2023"
                }
            })}
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
