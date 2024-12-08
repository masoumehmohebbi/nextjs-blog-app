"use client";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const schema = yup
    .object({
      name: yup
        .string()
        .min(5, "نام و نام خانوادگی نامعتبر است")
        .max(30)
        .required("نام و نام خانوادگی الزامیست"),
      email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامیست"),
      password: yup.string().required("رمز عبور الزامیست"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  return (
    <div>
      <h1>ثبت نام</h1>
      <form onSubmit={handleSubmit}>
        <RHFTextField
          name="name"
          label="نام و نام خانوادگی"
          register={register}
          errors={errors}
        />
        <RHFTextField
          name="email"
          label="ایمیل"
          register={register}
          errors={errors}
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          register={register}
          dir="ltr"
          type="password"
          errors={errors}
        />
      </form>
    </div>
  );
};

export default SignUp;
