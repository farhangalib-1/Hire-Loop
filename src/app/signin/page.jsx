"use client";

import {
  Form,
  TextField,
  Label,
  Input,
  Description,
  FieldError,
  Button,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import { Check } from "@gravity-ui/icons";
import Link from "next/link";

export default function SignInPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070611] pt-28 pb-16 px-5 flex justify-center items-start">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[150px]" />

      </div>

      {/* Card */}

      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)] p-8">

        {/* Badge */}

        <div className="flex justify-center mb-6">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">

            👋 Welcome Back

          </div>

        </div>

        {/* Header */}

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-extrabold text-white">
            Sign In
          </h1>

          <p className="mt-3 text-gray-400">
            Continue your journey with HireLoop.
          </p>

        </div>

        {/* Form */}

        <Form
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          {/* Email */}

          <TextField
            isRequired
            name="email"
            type="email"
          >

            <Label className="text-gray-300">
              Email Address
            </Label>

            <Input
              placeholder="john@example.com"
              className={"bg-transparent text-white placeholder:text-gray-500 border border-white/10 hover:border-violet-500 focus-within:border-violet-500 backdrop-blur-md"}
            />

            <FieldError />

          </TextField>

          {/* Password */}

          <TextField
            isRequired
            name="password"
            type="password"
          >

            <Label className="text-gray-300">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
             className={"bg-transparent text-white placeholder:text-gray-500 border border-white/10 hover:border-violet-500 focus-within:border-violet-500 backdrop-blur-md"}
            />

            <Description className="text-gray-500">
              Use the password you created during registration.
            </Description>

            <FieldError />

          </TextField>

          {/* Forgot Password */}

          <div className="flex justify-end w-full">

            <button
              type="button"
              className="text-sm text-violet-400 hover:text-violet-300 transition"
            >
              Forgot Password?
            </button>

          </div>

          {/* Submit */}

          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,.45)] transition-all duration-300"
          >

            <Check />

            Sign In

          </Button>

        </Form>

        {/* Divider */}

        <div className="my-8 flex items-center gap-4">

          <div className="flex-1 h-px bg-white/10" />

          <span className="text-sm text-gray-500">
            OR
          </span>

          <div className="flex-1 h-px bg-white/10" />

        </div>

        {/* Google Button */}

        <Button
          variant="bordered"
          className="w-full h-12 border-white/10 bg-white/5 text-white hover:bg-white/10"
        >

          <FcGoogle className="text-xl" />

          Continue with Google

        </Button>

        {/* Footer */}

        <div className="mt-8 text-center text-gray-400">

          Don't have an account?

          <Link href="/signup">

            <span className="ml-2 cursor-pointer font-semibold text-violet-400 hover:text-violet-300 transition">
              Create Account
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}