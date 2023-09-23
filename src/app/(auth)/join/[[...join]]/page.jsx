import { SignUp } from "@clerk/nextjs";

export default function PageJoin() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-2">
      <SignUp />
    </div>
  );
}
