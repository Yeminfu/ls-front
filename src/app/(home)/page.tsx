// import Body from "./components/body/body";
// import Footer from "./components/footer";
// import Header from "./components/header/header";
import type { Metadata } from "next";
import { Cause } from "./components/cause";

export const metadata: Metadata = {
  icons: {
    icon: "v", // Путь к файлу в папке public
    apple: "./images/icon.jpg",
    // ... другие иконки
  },
};

export default function Home() {
  return (
    <>
      <Cause
        cause={{
          title: "title",
          description: "description",
        }}
      />
    </>
  );
}
