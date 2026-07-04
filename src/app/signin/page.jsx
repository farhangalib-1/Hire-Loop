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
    <section className="min-h-screen pt-24 pb-12 px-5 bg-gradient-to-br from-slate-100 via-white to-blue-100">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-default-200 bg-white p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-default-900">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-default-500">
            Sign in to continue to HireLoop.
          </p>
        </div>

        {/* Form */}
        <Form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
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
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description>
              Use the password you created during registration.
            </Description>

            <FieldError />
          </TextField>

          {/* Forgot Password */}
          <div className="flex justify-end w-full">
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            color="primary"
            className="h-12 w-full font-semibold"
          >
            <Check />
            Sign In
          </Button>
        </Form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-default-200"></div>
          <span className="text-sm text-default-400">OR</span>
          <div className="h-px flex-1 bg-default-200"></div>
        </div>

        {/* Google Login */}
        <Button
          variant="outline"
          className="w-full h-12"
        >
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="mt-8 text-center text-default-500">
          Don't have an account?{" "}
          <Link href="/signup">
          <button
            type="button"
            className="font-semibold text-primary hover:underline"
          >
            Create Account
          </button>
          </Link>
        </p>
      </div>
    </section>
  );
}