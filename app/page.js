"use client";
import { Html, Head, Main, NextScript } from "next/document";
import { Hero } from "./components/Hero";
import { Input } from "./components/Input";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Test } from "./test";
import { FindPostcard } from "./components/FindPostcard";
import { PopularPostcode } from "./components/PopularPostcode";
import { Booking } from "./components/Booking";

export default function Home() {
  return (
    <>
      {/* <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </Html> */}
    
      <Navbar/>
      <Hero />
      <Booking/>
      <PopularPostcode/>
      <FindPostcard/>
      <Footer/>
    </>
  );
}
