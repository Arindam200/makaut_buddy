import { UserProfile } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";

export default function UserProfilePage() {
  const { userId } = auth();
  
  if (!userId) {
    redirect("/join");
  }
  return (
    <>
  <div className="flex justify-center pt-3">
    <UserProfile path="/user-profile" />
  </div>
  </>
  );
}