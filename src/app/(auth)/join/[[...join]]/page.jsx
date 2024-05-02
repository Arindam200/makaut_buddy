import { SignUp } from "@clerk/nextjs";

export default function PageJoin() {
  return (
    <div className="bg-[#171717] min-h-screen flex items-center justify-center py-8 px-2">
      <SignUp
        appearance={{
          layout: { shimmer: true },
          variables: {
            borderRadius: "0",
            colorBackground: "#d9d9d9",
            colorInputBackground: "#d9d9d9",
            colorPrimary: "#171717",
          },
        }}
        signInUrl="/login"
      />
    </div>
  );
}
