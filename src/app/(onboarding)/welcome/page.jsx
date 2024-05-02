"use client"

import React from "react";
import {UserButton} from "@clerk/nextjs";


export default function page() {


  return (
    <div>
      <h1>Welcome <UserButton /></h1>

    </div>
  );
}
