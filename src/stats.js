import React from 'react';

import {
  CurrencyDollarIcon,
  ClockIcon,
  HomeIcon,
  ShoppingBagIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

import CountUp from 'react-countup';

const stats = [
  { id: 1, name: 'Assets under management', value: <CountUp end={160} duration={5} suffix="+ M"/> , icon: <CurrencyDollarIcon className="h-10 w-10 text-gray-600" aria-hidden="true" /> },
  { id: 3, name: 'Residential units', value: <CountUp end={1118} duration={5}/>, icon: <HomeIcon className="h-10 w-10 text-gray-600" aria-hidden="true" /> },
  { id: 4, name: 'Commercial spaces', value: <CountUp end={840000} duration={5} suffix=" Sq ft"/>, icon: <BuildingOffice2Icon className="h-10 w-10 text-gray-600" aria-hidden="true" /> },
];

export default function StatsNumber() {
  return (
    <div className="bg-white py-10 sm:py-14">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 items-center text-center">
              <dt className="text-base leading-7 text-gray-500">{stat.name}</dt>
              <dd className="order-first justify-center text-gray-400">
                {stat.icon}
              </dd>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <hr className=" mt-10 border-gray-200" />
    </div>
  );
}
