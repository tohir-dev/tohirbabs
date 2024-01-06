import { useState } from "react";

function App() {
  const [modal, setModal] = useState(-1);
  const projects = [
    {
      display: "/images/southside.png",
      year: "2023",
      title: "southsidefoods",
      description:
        "The goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net. See Github for more technical details.",
      link: "",
    },
    {
      display: "/images/southside.png",
      year: "2022",
      title: "galaria",
      description:
        "The goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net. See Github for more technical details.",
      link: "",
    },
    {
      display: "/images/southside.png",
      year: "2022",
      title: "greeeth",
      description:
        "The goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net. See Github for more technical details.",
      link: "",
    },
    {
      display: "/images/southside.png",
      year: "2022",
      title: "pollshare",
      description:
        "The goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net. See Github for more technical details.",
      link: "",
    },
    {
      display: "/images/southside.png",
      year: "2022",
      title: "font-pair",
      description:
        "The goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net. See Github for more technical details.",
      link: "",
    },
    {
      display: "/images/southside.png",
      year: "2022",
      title: "qntm",
      description:
        "The goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net. See Github for more technical details.",
      link: "",
    },
  ];

  return (
    <div className="  relative flex flex-col text-white font-grotesk gap-1 bg-[#000000]">
      <img
        src="/images/bg2.svg"
        alt=""
        className="absolute  opacity-30 h-[130vh] object-cover w-screen"
      />
      <header className="flex flex-col gap-2  p-3 absolute top-0 ">
        <h1 className="font-mono text-3xl  font-bold pr-3">
          {/* <img
            src="/images/selfai.png"
            alt=""
            className=" w-14 h-14 inline align-bottom mr-1 "
          /> */}
          &lt;🐼&gt; tohir_babs
        </h1>
        <h2 className=" text-2xl font-normal">
          <img
            src="/images/star.svg"
            alt=""
            className="w-6 h-6 inline align-middle mr-2"
          />
          creative web developer
        </h2>
      </header>
      <main className="flex flex-col  relative gap-5  ">
        {/* <div className="flex gap-4 w-full lg:w-[450px] justify-between p-3 lg:pt-3 pt-16 self-end mix-blend-difference z-10 sticky top-0">
          <a
            href="https://www.linkedin.com/in/tohir-babs-6a0045167/"
            className="p-2 "
          >
            linkedin
            <img
              src="/images/icons/arrow-angle.svg"
              alt=""
              className="w-4 h-4 inline align-middle"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tohirbabs@gmail.com&su=SUBJECT&body=BODY"
            className=" p-2"
          >
            gmail
            <img
              src="/images/icons/arrow-angle.svg"
              alt=""
              className="w-4 h-4 inline align-middle"
            />
          </a>
          <a href="https://github.com/TohirBabs" className=" p-2">
            github
            <img
              src="/images/icons/arrow-angle.svg"
              alt=""
              className="w-4 h-4 inline align-middle"
            />
          </a>
          <a href="https://twitter.com/BabsTohir" className=" p-2">
            x
            <img
              src="/images/icons/arrow-angle.svg"
              alt=""
              className="w-4 h-4 inline align-middle"
            />
          </a>
        </div> */}
        <div className=" flex items-end self-end lg:p-5 p-2 flex-col pt-[30vh] gap-[10vh] lg:pt-20 h-[100vh] w-full justify-center relative text-right">
          <h2 className="lg:text-[6rem]  text-[3rem] leading-[3.2rem] lg:leading-[5.5rem]">
            bridging
            <br /> web{" "}
            <span className=" text-[#336BB7] lg:text-[8+rem]  font-medium">
              design
            </span>{" "}
            and <br />
            <span className="text-[#336BB7] font-medium">development</span>{" "}
            <br />
            with <span className="text-[#336BB7] font-medium">creativity</span>
            ...
          </h2>
          <p className="text-2xl text-[#d9d9d9]  self-start text-left max-w-[400px]">
            I help create unique web experiences that effectively communicate
            your brand image so you can stand out from the competition.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-12 items-end gap-2">
            <img
              src={projects[0].display}
              alt=""
              className="lg:col-span-7 col-span-12 object-cover "
            />
            <p className="lg:col-span-5 col-span-12">
              {projects[0].description}
            </p>
            <img
              src="/images/menucard.svg"
              alt=""
              className="lg:col-span-3 col-span-12 object-cover"
            />{" "}
            <img
              src="/images/about.svg"
              alt=""
              className="lg:col-span-9 col-span-12 object-cover"
            />
            <img
              src={projects[0].display}
              alt=""
              className="lg:col-span-7 col-span-12 object-cover "
            />
          </div>
        </div>

        {modal !== -1 && (
          <div className="absolute bg-[#d9d9d9] right-0 lg:w-[63%] w-full h-full  flex flex-col gap-2 font-mono bottom-0  p-2">
            <img
              src={projects[modal].display}
              alt=""
              className="min-h-[200px] object-cover rounded-3xl "
            />
            <div className=" bg-[#d9d9d9] w-full flex-1 flex flex-col text-black ">
              <div className="flex flex-1 flex-col-reverse lg:flex-row w-full items-center gap-4">
                <div className="flex lg:items-center gap-2 flex-1 w-full">
                  <h3 className="lg:text-3xl text-2xl">
                    {projects[modal].title}
                  </h3>
                  <img
                    src="/images/shape.svg"
                    alt=""
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="flex flex-row-reverse items-center flex-1 w-full lg:items-center">
                  <button
                    onClick={() => setModal(-1)}
                    className="flex w-full h-max items-center gap-2  p-2 border-black border-2 "
                  >
                    <img
                      src="/images/icons/close.svg"
                      alt=""
                      className="w-4 h-4"
                    />

                    <p className="">close</p>
                  </button>
                  <p className="w-full font-bold text-xl">0{modal}.</p>
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
                  <button className="flex justify-end lg:justify-normal flex-1 items-center gap-2  p-2 bg-black text-white">
                    <img
                      src="/images/icons/arrow-down.svg"
                      alt=""
                      className="w-4 h-4"
                    />

                    <p className="">case study</p>
                  </button>
                </div>
                <p className="flex-1 text-sm">{projects[modal].description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
