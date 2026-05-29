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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CAUSES.map((cause, i) => (
          <Cause key={i} cause={cause} />
        ))}
      </div>
    </>
  );
}
