import { LuChevronLeft, LuTrash, LuX } from "react-icons/lu";
export const Portfolio = () => {
  const CircleButton = ({ children }) => {
    return (
      <button className="group w-10 h-10 rounded-full border border-slate-950 bg-slate-600/50 p-[1px] active:bg-slate-800">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-700/50 group-active:bg-slate-800 rounded-full">
          {children}
        </div>
      </button>
    );
  };
  const Separator = () => {
    return (
      <div className="border border-t-slate-950 border-b-slate-700/50 border-l-transparent border-r-transparent" />
    );
  };
  return (
    <div className="w-screen relative flex font-mono h-screen bg-[#04060b] p-2 text-white">
      <div className="rounded-[24px] border border-[#04060b]/60 bg-gradient-to-b h-max from-slate-800 to-slate-900">
        <div className="rounded-[23px] border border-slate-900/80">
          <div className="rounded-[22px] border border-slate-950">
            <div className="rounded-[21px] border  border-slate-900/70">
              <div className="flex flex-col border border-slate-700/50 rounded-[20px]  sticky h-[95vh]   w-72  ">
                <div className="flex items-center justify-between p-2 pb-3 ">
                  <div className="flex items-center gap-2 tracking-tight">
                    <img
                      src="/images/selfai.png"
                      alt=""
                      className="w-11 h-11 object-cover border border-slate-950 bg-slate-600 rounded-xl"
                    />
                    <div className="">
                      <h1 className="capitalize   font-semibold ">
                        tohir babátúndé
                      </h1>
                      <h2 className="leading-none  text-slate-200">
                        ui-developer
                      </h2>
                    </div>
                  </div>
                  <CircleButton>
                    <LuChevronLeft />
                  </CircleButton>
                </div>
                <Separator />
                <div className="flex flex-col gap-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center p-[5%] ">
        <div className="max-w-3xl">
          <div className="flex flex-col font-grotesk  gap-6">
            <p>
              Hi 👋 I&#39;m Tohir (meaning &#34;Pure&#34; in English), a ui
              developer, writer, and minimalist and art collector
            </p>
            <p>
              I develop unique user interfaces as a Frontend Engineer at Dotun
              Philips Consults. Previously, I worked as a Senior Frontend
              Software Engineer at heycar, Frontend Software Engineer at
              Yemeksepeti, Fullstack Software Engineer at Sistas, Mobile
              Developer at Tanbula, and Specialist at Apple.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
