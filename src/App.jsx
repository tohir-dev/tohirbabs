import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-col text-white lg:p-4 p-2 font-grotesk font-light">
        <header className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <img
              src="/images/selfai.png"
              alt=""
              className="w-12 h-12 bg-white"
            />
            <h1 className="lg:text-[2.5rem] text-3xl font-mono">
              tohir babatunde
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <h2 className="lg:text-2xl text-lg">creative web developer</h2>
            <img src="/images/star.svg" alt="" className="w-6 h-6" />
          </div>
        </header>
        <body className="flex-1 flex flex-col">
          <div className="text-right w-full flex flex-col flex-1 items-end justify-center gap-2 text-sm lg:text-base">
            <p className=" max-w-[500px]">
              The goal of font pairing is to select fonts that share an
              overarching theme yet have a pleasing contrast. Which fonts work
              together is largely a matter of intuition, but we approach this
              problem with a neural net.
            </p>
            <p className=" max-w-[500px]">
              See Github for more technical details. The goal of font pairing is
              to select fonts that share an overarching theme yet havdetails.
            </p>
          </div>
          <div className="flex-col lg:flex-row flex items-end justify-between gap-8">
            <div className="flex flex-col max-w-[500px] w-full gap-2 text-sm">
              <div className="flex w-full gap-5 items-center ">
                <span>01.</span>
                <h3 className="flex-1 text-2xl">southsidefoods</h3>
                <span>2023</span>
              </div>
              <div className="flex w-full gap-5 items-center">
                <span>02.</span>
                <h3 className="flex-1 text-2xl">greeeth</h3>
                <span>2023</span>
              </div>
              <div className="flex w-full gap-5 items-center">
                <span>03.</span>
                <h3 className="flex-1 text-2xl">galaria</h3>
                <span>2022</span>
              </div>
              <div className="flex w-full gap-5 items-center">
                <span>04.</span>
                <h3 className="flex-1 text-2xl">pollshare</h3>
                <span>2022</span>
              </div>
              <div className="flex w-full gap-5 items-center">
                <span>05.</span>
                <h3 className="flex-1 text-2xl">font-pair</h3>
                <span>2021</span>
              </div>
              <div className="flex w-full gap-5 items-center">
                <span>06.</span>
                <h3 className="flex-1 text-2xl">page404</h3>
                <span>2020</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a href="">twitter</a>
              <a href="">github</a>
              <a href="">threads</a>
              <a href="">email</a>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
