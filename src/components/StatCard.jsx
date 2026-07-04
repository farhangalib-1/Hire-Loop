"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@heroui/react";

import {
  Briefcase,
  Person,
  Star,
} from "@gravity-ui/icons";
import {HouseFill} from '@gravity-ui/icons';

const icons = {
  jobs: Briefcase,
  companies: HouseFill,
  seekers: Person,
  rating: Star,
};

export default function StatCard({
  icon,
  value,
  label,
}) {
  const IconComponent = icons[icon];

  return (
    <Card className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-indigo-500 hover:-translate-y-1">
      <CardHeader>
        <CardTitle>
          {IconComponent && (
            <IconComponent className="w-5 h-5 text-white" />
          )}
        </CardTitle>

        <CardDescription />
      </CardHeader>

      <CardContent className="space-y-2 pb-8">
        <h3 className="text-5xl font-bold text-white">
          {value}
        </h3>

        <p className="text-gray-400">
          {label}
        </p>
      </CardContent>
    </Card>
  );
}