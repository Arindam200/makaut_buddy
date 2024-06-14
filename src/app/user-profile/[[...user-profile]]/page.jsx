import { UserProfile } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server';

export default function UserProfilePage() {
  auth().protect({ unauthorizedUrl: "/join" });
  
  return <div className="flex justify-center pt-3">
    <UserProfile 
      appearance={{
        layout: { shimmer: true },
        variables: {
          borderRadius: "0.5",
          colorBackground: "#d9d9d9",
          colorInputBackground: "#d9d9d9",
          colorPrimary: "#171717",
        },
        elements:{
          footer:"hidden",
          navbar:"hidden",
        }
      }}
      path="/user-profile" 
    />
  </div>
  );
}