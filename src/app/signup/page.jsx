"use client";

import { useState } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Description,
  Button,
} from "@heroui/react";

import { Check } from "@gravity-ui/icons";
import Link from "next/link";

export default function SignupForm() {
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      image,
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070611] pt-28 pb-16 px-5 flex justify-center items-start">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[150px]" />

      </div>

      {/* Card */}

      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)] p-8">

        {/* Badge */}

        <div className="flex justify-center mb-6">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">

            ✨ Join 50,000+ Professionals

          </div>

        </div>

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold text-white">
            Create Account
          </h1>

          <p className="mt-3 text-gray-400">
            Join HireLoop and start your journey today.
          </p>

        </div>

        {/* Form */}

        <Form
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          {/* Upload */}

          <div className="w-full flex justify-center">

            <label
              htmlFor="image"
              className="cursor-pointer"
            >

              <div className="group w-32 h-32 rounded-full border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center overflow-hidden hover:border-violet-500 hover:bg-white/10 transition-all duration-300">

                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">

                    <div className="text-5xl group-hover:scale-110 transition">
                      📷
                    </div>

                    <p className="text-gray-300 text-sm mt-2">
                      Upload
                    </p>

                  </div>
                )}

              </div>

              <input
                hidden
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />

            </label>

          </div>

          {/* Name */}

          <TextField
            isRequired
            name="name"
          >

            <Label className="text-gray-300">
              Full Name
            </Label>

            <Input
              placeholder="John Doe"
              className={"bg-transparent text-white placeholder:text-gray-500 border border-white/10 hover:border-violet-500 focus-within:border-violet-500 backdrop-blur-md"}
            />

            <FieldError />

          </TextField>

          {/* Email */}

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email";
              }

              return null;
            }}
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
            validate={(value) => {
              if (value.length < 8) {
                return "Minimum 8 characters";
              }

              return null;
            }}
          >

            <Label className="text-gray-300">
              Password
            </Label>

            <Input
              placeholder="Enter password"
              className={"bg-transparent text-white placeholder:text-gray-500 border border-white/10 hover:border-violet-500 focus-within:border-violet-500 backdrop-blur-md"}
            />

            <Description className="text-gray-500">
              Minimum 8 characters.
            </Description>

            <FieldError />

          </TextField>

          {/* Button */}

          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,.45)] transition-all duration-300"
          >

            <Check />

            Create Account

          </Button>

        </Form>

        {/* Footer */}

        <div className="mt-8 text-center text-gray-400">

          Already have an account?

          <Link
            href="/signin"
            className="ml-2 font-semibold text-violet-400 hover:text-violet-300 transition"
          >
            Sign In
          </Link>

        </div>

      </div>

    </section>
  );
}