import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object({
  birthDay: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Birth day is required")
    .min(1, "Birth day should be between 1 and 31")
    .max(31, "Birth day should be between 1 and 31"),
  birthMonth: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Birth month is required")
    .min(1, "Birth month should be between 1 and 12")
    .max(12, "Birth month should be between 1 and 12"),
  birthYear: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Birth year is required")
    .min(2000, "Birth month should be between 2000 and 2023")
    .max(2023, "Birth month should be between 2000 and 2023"),
});

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(validationSchema)});

  const calculateAge = (dob) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    return age;
  };

  const verifyAge = (data) => {
    const { birthDay, birthMonth, birthYear } = data;
    const dob = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
    const age = calculateAge(dob);

    if (age < 15) {
      alert(`People of your age ${age} is restricted to accees GOOGLE.`);
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(verifyAge)}>
        <fieldset>
          <legend>Enter Your Date of Birth</legend>

          <div className="form-items">
            <label htmlFor="birthDay">Birth Day</label>
            <input
              type="number"
              id="birthDay"
              {...register("birthDay")}
              placeholder="Enter your birth day"
            />
            <span className="error-message">{errors.birthDay?.message}</span>
          </div>
          <div className="form-items">
            <label htmlFor="birthMonth">Birth Month</label>
            <input
              type="number"
              id="birthMonth"
              {...register("birthMonth")}
              placeholder="Enter your birth month"
            />
            <span className="error-message">{errors.birthMonth?.message}</span>
          </div>
          <div className="form-items">
            <label htmlFor="birthYear">Birth Year</label>
            <input
              type="number"
              id="birthYear"
              {...register("birthYear")}
              placeholder="Enter your birth year"
            />
            <span className="error-message">{errors.birthYear?.message}</span>
          </div>
          <input type="submit" value={"Submit"} />
        </fieldset>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
