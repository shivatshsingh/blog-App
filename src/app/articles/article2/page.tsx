import Comments from "@/app/components/Comments";
import Home_button from "@/app/components/Home_button";
import React from "react";

export default function page() {
  return (
    <div>
      <Home_button />
      <span>article2</span>
      <Comments articleName="article2" />
    </div>
  );
}
