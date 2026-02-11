"use client";
import Image from "next/image";
import HomePage from "./home/page";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
   
        <HomePage />
     
    </div>
  );
}
