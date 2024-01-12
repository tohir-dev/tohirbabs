function App() {
  return (
    <div className="bg-[#0e0e0e] text-[#fff] font-mono">
      <div className="max-w-6xl mx-auto ">
        <div className="grid grid-cols-12 gap-10 uppercase font-space">
        <div className="col-span-3 flex flex-col p-3 pr-0 justify-between h-screen  sticky right-0 top-0">
        <div className="flex flex-col gap-3 ">
            <img src="images/pandalogo.svg" className="w-full border-b" />
            <div className="flex justify-between gap-3 text-sm">
              <a href="/">twitter</a>
              <a href="/">github</a>
              <a href="/">linkedin</a>
            </div>
            </div>       
            <div className="flex flex-col gap-3">
              <p>harvestgrove .00</p>
              <p>heroUI .01</p>
              <p>galaria .02</p>
              <p>project .03</p>
              <p>project .04</p>
            </div>           
          </div>
          <div className="col-span-9 flex flex-col p-3 pl-0 gap-3">
            <p className="text-xl">inspirations for clean header and footer web design ui <br/> with free access to it's frontend codes</p>
           <div className="grid w-full grid-cols-12 gap-2 items-center">
           <img src="images/harvestgrove.png" className="col-span-9" />
           <img src="images/mobile.png" className="rounded-3xl col-span-3 p-2 bg-[#fff]"/>
             </div>            
              <img src="images/Footer.png" className=""/>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
