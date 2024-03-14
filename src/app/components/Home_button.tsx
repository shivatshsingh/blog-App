import { Home } from "lucide";
import Link from "next/link";
import React from "react";

function Home_button() {
  return (
    <div>
      <Link href={"/"}>
        <span>home</span>
      </Link>
    </div>
  );
}

export default Home_button;
