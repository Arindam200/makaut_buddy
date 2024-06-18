import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function UserProfilePage() {
  const { userId } = await auth().protect({ unauthorizedUrl: "/join" });

  if (!userId) {
    return null;
  }

  return (
    <div className="flex justify-center pt-3">
      <UserProfile
        appearance={{
          layout: { shimmer: true },
          variables: {
            borderRadius: "0.5rem",
            colorBackground: "#d9d9d9",
            colorInputBackground: "#d9d9d9",
            colorPrimary: "#171717",
          },
          elements: {
            footer: "hidden",
            navbar: "hidden",
          },
        }}
        path="/user-profile"
      />
    </div>
  );
}
