import { SignIn } from "@clerk/nextjs";

export default function PageJoin() {
  return (
    <div className="min-h-screen bg-[#171717] flex items-center justify-center py-8 px-2">
      <SignIn
        appearance={{
          layout: { shimmer: true },
          variables: {
            borderRadius: "0",
            colorBackground: "#d9d9d9",
            colorInputBackground: "#d9d9d9",
            colorPrimary: "#171717",
          },
        }}
        signUpUrl="/join"
      />
    </div>
  );
}
