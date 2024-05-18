// "use client";
import { auth } from "@clerk/nextjs/server";
import Title from "./title";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Card(props) {
  const { userId, sessionClaims } = auth();

  const isAdmin = sessionClaims?.metadata?.role === "admin";
  return (
    <div className="flex flex-col border-2 border-[#FFFFFF20] rounded-lg m-1">
      <div className="basis-9/12">
        <Title title={props.title} />
      </div>
      <div className="flex justify-between p-4 basis-3/12">
        <div className="pr-5">
          <div className="text-[#FFFFFF80] text-xl font-medium pb-1">
            {props.title}
          </div>
          <div className="text-[#FFFFFF50] text-sm">{props.description}</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          {isAdmin && (
            <>
              <div className="bg-[#D9D9D9] p-2 rounded-full" id="edit">
                <MdModeEdit style={{ color: "black" }} />
              </div>
              <div className="bg-[#D9D9D9] p-2 rounded-full" id="delete">
                <MdDelete style={{ color: "black" }} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
