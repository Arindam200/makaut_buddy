import { auth } from "@clerk/nextjs/server";
import Title from "./title";
import { MdModeEdit, MdDelete } from "react-icons/md";
import React from "react";

const Card = React.memo(({ title, description }) => {
  const { userId, sessionClaims } = auth();
  const isAdmin = sessionClaims?.metadata?.role === "admin";

  return (
    <div className="flex flex-col border-2 border-[#FFFFFF20] rounded-lg m-1">
      <div className="basis-9/12">
        <Title title={title} />
      </div>
      <div className="flex justify-between p-4 basis-3/12">
        <div className="pr-5">
          <div className="text-[#FFFFFF80] text-xl font-medium pb-1">
            {title}
          </div>
          <div className="text-[#FFFFFF50] text-sm">{description}</div>
        </div>
        {isAdmin && (
          <div className="flex justify-center items-center gap-2">
            <button
              className="bg-[#D9D9D9] p-2 rounded-full"
              id="edit"
              aria-label="Edit"
            >
              <MdModeEdit style={{ color: "black" }} />
            </button>
            <button
              className="bg-[#D9D9D9] p-2 rounded-full"
              id="delete"
              aria-label="Delete"
            >
              <MdDelete style={{ color: "black" }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default Card;
