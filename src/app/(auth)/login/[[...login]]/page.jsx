import { SignIn } from "@clerk/nextjs";

export default function PageJoin() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8 px-2">
      <SignIn />
    </div>
  );
}
