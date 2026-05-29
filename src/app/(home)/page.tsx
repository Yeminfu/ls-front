import type { Metadata } from "next";
import { Cause } from "./components/cause";
import { CAUSES } from "./data/causes.data";

export const metadata: Metadata = {
  icons: {
    icon: "v", 
    apple: "./images/icon.jpg",
  },
};

export default function Home() {
  return (
    <>
      {CAUSES.map((cause, i) => (
        <Cause key={i} cause={cause} />
      ))}
    </>
  );
}
