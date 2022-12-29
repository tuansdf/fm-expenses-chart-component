"use client";

import Image from "next/image";
import ChartBar from "/app/chart-bar";
import logo from "/public/logo.svg";

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

export default function Page() {
  const max = data.reduce((p, c) => (c.amount > p ? c.amount : p), 0);

  return (
    <>
      <div className="flex items-center justify-between rounded-xl bg-soft-red p-6 text-very-pale-orange lg:p-8">
        <div>
          <div>My balance</div>
          <div className="text-3xl font-bold">$921.48</div>
        </div>
        <Image src={logo} alt="" />
      </div>

      <div className="mt-4 space-y-6 rounded-xl bg-very-pale-orange p-6 text-dark-brown lg:p-8">
        <div className="mb-14 text-2xl font-bold lg:mb-16 lg:text-3xl">
          Spending - Last 7 days
        </div>

        {/* chart */}
        <div className="flex h-48 items-end justify-between lg:h-44">
          {data.map((col, i) => (
            <ChartBar
              name={col.day}
              number={col.amount}
              max={max}
              highlighted={col.day === "wed"}
              key={i}
            />
          ))}
        </div>

        <div className="h-0.5 w-full bg-cream"></div>

        <div className="flex items-end justify-between">
          <div>
            <div className="mb-2 text-medium-brown">Total this month</div>
            <div className="text-4xl font-bold lg:text-5xl">$478.33</div>
          </div>

          <div>
            <div className="text-end font-bold">+2.4%</div>
            <div className="text-medium-brown">from last month</div>
          </div>
        </div>
      </div>
    </>
  );
}
