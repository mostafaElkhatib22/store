import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { LuUser2 } from "react-icons/lu";
async function UserIcone() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={profileImage}
        alt="profile image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcone;
