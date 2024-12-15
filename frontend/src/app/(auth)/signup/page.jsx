"use client";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/compat/router";
import Button from "@/ui/Button";
import Link from "next/link";

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

  const router = useRouter();

  const onSubmit = async (values) => {
    try {
      const { message } = await signupApi(values);
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
          dir="ltr"
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          register={register}
          dir="ltr"
          type="password"
          errors={errors}
        />

        <Button
          type="submit"
          className="py-3 px-4 btn btn--primary rounded-xl w-full"
        >
          تایید
        </Button>
      </form>
      <Link href="/signin" className="text-secondary-500 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
};

export default SignUp;
