import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return <div>
  I am dashboard
    <UserProfile />
  </div>;
}
