import { Car } from "@lib/types/types";
import CarList from "../components/ui/cars/CarList";


const cars: Car[] = [
  {
    name: "Sports Car",
    type: "Mercedes E63s",
    color: "silver",
    motor: {
      serialNumber: 1234,
      hp: 650,
    },
  },
  {
    name: "Luxury Sedan",
    type: "BMW M5",
    color: "black",
    motor: {
      serialNumber: 5678,
      hp: 625,
    },
  },
  {
    name: "Muscle Car",
    type: "Dodge Challenger SRT Hellcat",
    color: "red",
    motor: {
      serialNumber: 9101,
      hp: 717,
    },
  },
  {
    name: "Electric Car",
    type: "Tesla Model S Plaid",
    color: "blue",
    motor: {
      serialNumber: 1121,
      hp: 1020,
    },
  },
  {
    name: "Modified Car",
    type: "BRABUS Rocket 900",
    color: "black",
    motor: {
      serialNumber: 1161,
      hp: 900,
    },
  },
  {
    name: "F1 Car",
    type: "Petronas Mercedes",
    color: "blue",
    motor: {
      serialNumber: 1129,
      hp: 1020,
    },
  },
  {
    name: "Family Car",
    type: "Mercedes GLS",
    color: "silver",
    motor: {
      serialNumber: 11231,
      hp: 550,
    },
  },
  {
    name: "Supercar",
    type: "Lamborghini Huracán Performante",
    color: "yellow",
    motor: {
      serialNumber: 3141,
      hp: 640,
    },
  },
];

export default function page() {
  return (
    <div>
      <h1>Cars</h1>
      <CarList cars={cars} />
    </div>
  );
}
