import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <>
  <div className="flex justify-center pt-3">
  <UserProfile path="/user-profile" />
  </div>
  </>
  
);

export default UserProfilePage;