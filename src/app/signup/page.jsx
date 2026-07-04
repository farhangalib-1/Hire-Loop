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
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex justify-center pt-28 pb-12 px-5">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-default-200 p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="text-default-500 mt-2">
            Join HireLoop and start your journey today.
          </p>
        </div>

        <Form
          className="space-y-5"
          onSubmit={handleSubmit}
        >

          {/* Avatar */}

          <div className="w-full flex justify-center">
            <label
              htmlFor="image"
              className="cursor-pointer"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-primary flex items-center justify-center overflow-hidden hover:scale-105 transition">

                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-4xl">📷</span>

                    <p className="text-xs mt-1">
                      Upload
                    </p>
                  </div>
                )}

              </div>

              <input
                id="image"
                hidden
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
            <Label>Full Name</Label>

            <Input placeholder="John Doe" />

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
            <Label>Email Address</Label>

            <Input placeholder="john@example.com" />

            <FieldError />
          </TextField>

          {/* Password */}

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "Minimum 8 characters";

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter password" />

            <Description>
              Minimum 8 characters.
            </Description>

            <FieldError />
          </TextField>

          <Button
            type="submit"
            color="primary"
            className="w-full h-12"
          >
            <Check />

            Create Account
          </Button>

        </Form>

        <p className="text-center mt-6 text-default-500">

          Already have an account?{" "}

          <button
            type="button"
            className="text-primary font-semibold hover:underline"
          >
            Sign In
          </button>

        </p>

      </div>
    </section>
  );
}