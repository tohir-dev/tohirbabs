import React from "react";

export const Dashboard = () => {
  const salesData = [];
  return (
    <div className="flex bg-[#fafafa] w-screen h-screen">
      <div className="p-4 border rounded-2xl bg-[#fff] m-10 flex flex-col gap-6 h-max w-[60vw]">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c]">sales trends</p>
          <div className="flex items-center gap-2 text-sm">
            <p>sort by:</p>
            <div className="p-1 px-2 rounded-full border">weekly</div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col pb-6 justify-between">
            <p>5.00</p>
            <p>5.00</p>
            <p>5.00</p>
            <p>5.00</p>
            <p>5.00</p>
            <p>5.00</p>
            <p>5.00</p>
          </div>
          <div
            className="flex flex-1 justify-around items-end text-[#525252] capitalize
         relative h-72"
          >
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>jan</p>
            </div>
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-40 rounded-t-full bg-green-200"></div>
              <p>feb</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>mar</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>apr</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>may</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>jun</p>
            </div>
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>jul</p>
            </div>
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-40 rounded-t-full bg-green-200"></div>
              <p>aug</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>sep</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>oct</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>nov</p>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 relative bottom-0">
              <div className="w-7 h-20 rounded-t-full bg-green-200"></div>
              <p>dec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
