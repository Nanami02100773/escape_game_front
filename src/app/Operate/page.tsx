"use client";
import React from "react";
import NavigationBar from "./components/NavigationBar";
// import Title from "./components/Title";
import Description from "./components/Description";

export default function Page() {
  return (
    <div className="description-page">
      <NavigationBar />
      <Description />
    </div>
  );
}
