import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-black w-screen min-h-screen lg:overflow-hidden  relative flex flex-col text-white p-2 font-grotesk gap-2">
      <header className="flex  lg:flex-row flex-col justify-between lg:items-end gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <img
              src="/images/selfai.png"
              alt=""
              className="w-9 h-9 lg:w-12 lg:h-12 bg-white"
            />
            <h1 className="lg:text-[2.5rem] text-3xl font-mono">
              tohir babatunde
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <h2 className="lg:text-2xl text-xl">creative web developer</h2>
            <img src="/images/star.svg" alt="" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex gap-1 py-1 w-full lg:w-[30vw]">
          <a
            href="https://twitter.com/BabsTohir"
            className=" p-1 flex-1 bg-white text-black"
          >
            twitter
          </a>
          <a href="" className="p-1 flex-1 bg-white text-black">
            github
          </a>
          <a href="" className="p-1 flex-1 bg-white text-black">
            threads
          </a>
          <a href="" className="p-1 flex-1 bg-white text-black">
            email
          </a>
        </div>
      </header>
      <main className="flex flex-col flex-1  gap-1  relative">
        <div
          className={`text-right w-full flex  flex-col flex-1 ${
            modal ? "items-start" : "items-end"
          } justify-center gap-2`}
        >
          <p className=" lg:w-[40%]">
            The goal of font pairing is to select fonts that share an
            overarching theme yet have a pleasing contrast. Which fonts work
            together is largely a matter of intuition, but we approach this
            problem with a neural net.
          </p>
          <p className=" lg:w-[40%]">
            See Github for more technical details. The goal of font pairing is
            to select fonts that share an overarching theme yet havdetails.
          </p>
        </div>

        <div className="flex flex-col    col-span-4 w-full lg:w-[40%] justify-end gap-2 ">
          <div
            onClick={() => setModal(true)}
            className="flex w-full gap-3 items-center "
          >
            <span>01.</span>
            <h3 className="flex-1  text-xl lg:text-2xl">southsidefoods</h3>
            <span>2023</span>
          </div>
          <div className="flex w-full gap-3 items-center">
            <span>02.</span>
            <h3 className="flex-1 text-xl lg:text-2xl">greeeth</h3>
            <span>2023</span>
          </div>
          <div className="flex w-full gap-3 items-center">
            <span>03.</span>
            <h3 className="flex-1  text-xl lg:text-2xl">galaria</h3>
            <span>2022</span>
          </div>
          <div className="flex w-full gap-3 items-center">
            <span>04.</span>
            <h3 className="flex-1  text-xl lg:text-2xl">pollshare</h3>
            <span>2022</span>
          </div>
          <div className="flex w-full gap-3 items-center">
            <span>05.</span>
            <h3 className="flex-1  text-xl lg:text-2xl">font-pair</h3>
            <span>2021</span>
          </div>
        </div>

        {modal && (
          <div className="absolute bg-[#d9d9d9] right-0 lg:w-[58%] w-full h-full flex flex-col gap-2 font-mono bottom-0 p-2">
            <img
              src="/images/southside.png"
              alt=""
              className="min-h-[30%] object-cover rounded-3xl "
            />
            <div className=" bg-[#d9d9d9] w-full flex-1 flex flex-col text-black ">
              <div className="flex flex-1 flex-col-reverse lg:flex-row w-full items-center gap-4">
                <div className="flex lg:items-center gap-2 flex-1 w-full">
                  <h3 className="lg:text-3xl text-2xl">southsidefoods</h3>
                  <img
                    src="/images/shape.svg"
                    alt=""
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="flex flex-row-reverse items-center flex-1 w-full lg:items-center">
                  <button
                    onClick={() => setModal(false)}
                    className="flex w-full h-max items-center gap-2  p-2 border-black border-2 "
                  >
                    <img
                      src="/images/icons/close.svg"
                      alt=""
                      className="w-4 h-4"
                    />

                    <p className="">close</p>
                  </button>
                  <p className="w-full font-bold text-xl">01.</p>
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row flex-1 gap-2 w-full items-end">
                <div className="flex lg:flex-1 w-full items-center gap-2  ">
                  <button className="flex flex-1 justify-end  items-center gap-2 p-2 bg-black text-white">
                    <img
                      src="/images/icons/arrow-angle.svg"
                      alt=""
                      className="w-4 h-4"
                    />

                    <p className="">view site</p>
                  </button>
                  {/* <button className="flex justify-end lg:justify-normal flex-1 items-center gap-2  p-2 bg-black text-white">
                  <img
                    src="/images/icons/arrow-down.svg"
                    alt=""
                    className="w-4 h-4"
                  />

                  <p className="">case study</p>
                </button> */}
                </div>
                <p className="flex-1 text-sm">
                  The goal of font pairing is to select fonts that share an
                  overarching theme yet have a pleasing contrast. Which fonts
                  work together is largely a matter of intuition, but we
                  approach this problem with a neural net. See Github for more
                  technical details.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
