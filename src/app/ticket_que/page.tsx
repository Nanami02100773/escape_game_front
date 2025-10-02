"use client";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import Description1 from "./components/Description1";

export default function Page() {
  return (
    <div className="description-page">
      <NavigationBar />
      <Description1 />
    </div>
  );
}
