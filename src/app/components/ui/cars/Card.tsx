"use client";
import { Car } from "@lib/types/types";
import { useState } from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`border-2 p-4 hover:cursor-pointer ${
        isActive ? "bg-green-500" : "bg-grey-200"
      }`}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <h2 className="font-bold text-3xl">{car.name}</h2>
      <div>{car.color}</div>
      <div>{car.type}</div>
      <div>{car.motor.hp} BHP</div>
      {isActive ? "active" : "inactive"}
    </div>
  );
}
