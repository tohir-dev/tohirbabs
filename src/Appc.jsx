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

  const ProjectButton = ({ project, index }) => {
    return (
      <button
        onClick={() => setModal(index)}
        className={`flex w-full gap-3 items-center p-1 ${
          index === modal && "bg-white text-black"
        }`}
      >
        <span>0{index}.</span>
        <h3 className="flex-1  text-left text-xl lg:text-2xl">
          {project.title}
        </h3>
        <span>{project.year}</span>
      </button>
    );
  };

  return (
    <div className="bg-black relative w-screen min-h-screen lg:overflow-hidden   flex flex-col text-white  font-grotesk gap-1">
      <header className="flex relative  top-0 p-2  lg:flex-row flex-col justify-between lg:items-end gap-1">
        <div className="flex flex-col gap-1">
          <h1 className="font-mono text-[2.5rem] leading-[2.5rem]  font-bold pr-3">
            <img
              src="/images/selfai.png"
              alt=""
              className=" w-12 h-12 inline align-baseline mr-1 rounded from-white to-black bg-gradient-to-r "
            />
            {/* &lt;🐼&gt; */}
            tohir_babs
          </h1>
          <h2 className=" text-2xl font-normal">
            <img
              src="/images/star.svg"
              alt=""
              className="w-6 h-6 inline align-middle mr-2"
            />
            creative web developer
          </h2>
        </div>
        {/* <div className="flex gap-4 w-full lg:w-[30vw] justify-between">
          <a href="https://github.com/TohirBabs" className="p-1  ">
            github
            <img
              src="/images/icons/arrow-angle.svg"
              alt=""
              className="w-4 h-4 inline align-middle"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tohir-babs-6a0045167/"
            className="p-1  "
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
            className="p-1  "
          >
            gmail
            <img
              src="/images/icons/arrow-angle.svg"
              alt=""
              className="w-4 h-4 inline align-middle"
            />
          </a>
          <a href="https://twitter.com/BabsTohir" className=" p-1 ">
            x
            <img
              src="/images/icons/arrow-angle.svg"
              alt=""
              className="w-4 h-4 inline align-middle"
            />
          </a>
        </div> */}
      </header>
      <main className="flex flex-col flex-1  gap-1 p-2  relative">
        <div
          className={`text-right text-2xl w-full flex  flex-col flex-1 transition-all duration-1000
          ${modal !== -1 ? "items-start" : "items-end"}
          justify-center gap-2`}
        >
          <p className=" lg:w-[36%]">Hey there!, I&#39;m Tohir babs.</p>
          <p className=" lg:w-[36%]">
            I can help showcase your brand/product on the web by bridging design
            and development with creative storytelling...
          </p>
        </div>

        <div className="flex flex-col    col-span-4 w-full lg:w-[36%] justify-end ">
          {projects.map((project, index) => (
            <ProjectButton key={index} project={project} index={index} />
          ))}
        </div>

        {modal !== -1 && (
          <div className="absolute bg-[#d9d9d9]  right-0 lg:w-[63%] w-full h-full  flex flex-col gap-2 font-mono bottom-0  p-2">
            <img
              src={projects[modal].display}
              alt=""
              className="min-h-[200px] object-cover rounded-3xl "
            />
            <div className="  w-full flex-1 flex flex-col text-black ">
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
