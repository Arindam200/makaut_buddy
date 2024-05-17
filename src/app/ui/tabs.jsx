"use client";

export default function tabs() {
  return (
    <div className="flex w-full p-2 border-2 border-[#FFFFFF20] rounded-lg">
      <div className="basis-1/2 py-2 text-black text-center bg-[#D9D9D9] rounded-md">
        Search manually
      </div>
      <div className="basis-1/2 py-2 text-[#D9D9D9] text-center">
        Search by streams
      </div>
    </div>
  );
}