"use client";

import { Button, Chip, Input } from "@heroui/react";
import StatCard from "./StatCard";
import {MapPin} from '@gravity-ui/icons';
import {Magnifier} from '@gravity-ui/icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4338ca30,transparent_55%)]" />

      {/* Stars */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/stars.png')",
        }}
      />

      {/* Top Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">

        {/* Badge */}
        <div className="flex justify-center">
          <Chip
            
            variant="bordered"
            className="bg-zinc-900 border border-zinc-700 text-gray-200 px-5 py-5"
          >
            💼{" "}
            <span className="font-bold">
              50,000+
            </span>{" "}
            NEW JOBS THIS MONTH
          </Chip>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Find Your Dream Job Today
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
            HireLoop connects top talent with world-class companies.
            Browse thousands of curated opportunities and land your next
            role faster.
          </p>

        </div>

        {/* Search Bar */}
        <div className="mt-12 max-w-5xl mx-auto">

          <div className="flex flex-col md:flex-row items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-2">
            <Magnifier className="ml-1" width={24} height={24} />
            <Input
              placeholder="Job title, skill or company"
              variant="bordered"
              className="flex-1 bg-transparent"
              
            />

            <div className="hidden md:block w-px h-8 bg-zinc-700" />
            <MapPin className="ml-1" width={24} height={24} />
            <Input
              placeholder="Location or Remote"
              variant="bordered"
              className="flex-1 bg-transparent"
              
            />

            <Button
              color="bg-[#5C53FE]"
              radius="sm"
              className="h-14 w-14 min-w-14 text-xl"
            >
              <Magnifier width={24} height={24}/>
            </Button>

          </div>

        </div>

        {/* Trending */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8">

          <span className="text-sm text-gray-400">
            Trending Position
          </span>

          <Chip variant="flat" className="bg-transparent text-white border">Product Designer</Chip>

          <Chip variant="flat" className="bg-transparent text-white border">AI Engineer</Chip>

          <Chip variant="flat" className="bg-transparent text-white border">DevOps Engineer</Chip>

        </div>

      </div>

      {/* Globe Section */}
      <div
        className="relative mt-20 min-h-[850px] bg-bottom bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      >

        {/* Purple Glow */}
        <div className="absolute left-1/2 bottom-48 -translate-x-1/2 h-80 w-80 rounded-full bg-indigo-600 blur-[180px] opacity-70" />

        {/* Text */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center px-6">

          <h2 className="text-3xl md:text-5xl font-semibold">
            Assisting over 15,000 job seekers
          </h2>

          <p className="mt-3 text-2xl md:text-4xl text-gray-300">
            find their dream positions.
          </p>

        </div>

        {/* Statistics */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <StatCard
              value="50K"
              label="Active Jobs"
            />

            <StatCard
              value="12K"
              label="Companies"
            />

            <StatCard
              value="2M"
              label="Job Seekers"
            />

            <StatCard
              value="97%"
              label="Satisfaction Rate"
            />

          </div>

        </div>

      </div>

    </section>
  );
}