function App() {
  return (
    <div className="bg-[#0e0e0e] text-[#fff] font-mono">
      <div className="max-w-6xl mx-auto ">
        <div className="grid grid-cols-12 gap-3 uppercase font-space">
          <div className="col-span-8   flex flex-col p-3 pr-0 gap-3">
            <img src="images/pandalogo.svg" className="w-full" />
            <img src="images/harvestgrove.png" className="" />
          </div>
          <div className="col-span-4 flex flex-col p-3 pl-0 justify-between h-screen  sticky right-0 top-0">
            <div className="flex flex-col gap-5  pt-[5vw] ">
              <p className="flex flex-wrap items-center gap-x-2 justify-between">
                <span>hey</span>
                <span> there, </span>
                <span>i&#39;m</span>
                <span className="font-bold lowercase text-2xl text-[#000] px-3 bg-[#d9d9d9]">
                  tohir babs
                </span>{" "}
                <span className="font-bold lowercase text-2xl text-[#000] px-3 bg-[#d9d9d9]">
                  panda
                </span>{" "}
                <span>represents</span>
                <span> my </span>
                <span>creative</span>
                <span> outlet </span>
                <span>on </span>
                <span>the</span>
                <span> web.</span>
                <span> i </span>
                <span>craft</span>
                <span></span>
                <span>unique</span>
                <span> user </span>
                <span>interfaces</span>
                <span> and </span>
                <span>interactions</span>
                <span> with</span>
                <span> attention </span>
                <span>to </span>
                <span>detail</span>
                <span> and</span>
                <span> respect</span>
                <span> for </span>
                <span>principled </span>
                <span>design</span>
              </p>
              {/* <p className="">
              i craft unique user interfaces and interactions with attention to
              detail and respect for principled design.
            </p> */}
            </div>
            <div className="flex flex-col gap-3 text-right ">
              <p>harvestgrove .00</p>
              <p>heroUI .01</p>
              <p>galaria .02</p>
              <p>project .03</p>
              <p>project .04</p>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex justify-between gap-3 text-sm">
                <p>twitter</p>
                <p>github</p>
                <p>linkedin</p>
              </div>

              <img src="images/pandalogo.svg" className="w-full border-t" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
