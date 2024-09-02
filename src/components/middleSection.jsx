import Card from "./cards";

function Middle() {
  return (
    <div className="bg-backSection2 relative  flex flex-col justify-evenly h-screen items-center">
        {/* search section */}
      <section className="imageBackground flex relative justify-center items-center w-4/6 content-center bg-urlSection rounded-md">
        <div className="flex justify-center gap-5 p-10 w-full">
          <input
            type="text"
            className="p-2 w-9/12 rounded-md outline-none"
            placeholder="Shorten a link here.."
          />
          <button className="bg-customGreen p-2 rounded-md text-white px-4">
            Shorten It!
          </button>
        </div>
      </section>

      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-center text-3xl p-1"
            style={{ fontFamily: "poppinsRegular" }}
          >
            Advanced Statistics
          </h1>
          <h5 className="text-customGrey text-center text-sm leading-6 w-8/12">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </h5>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center align-start relative -top-[20px] pb-20 overflow-y-hidden h-80">
            <Card name="Brand Recognition" image="/images/icon-brand-recognition.svg" details="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"/>
            <Card name="Detailed Records" image="/images/icon-detailed-records.svg" details="Gain insight into who is clicking your links.Knowing when and where people engage with your content helps inform better deciscions." styling={{transform: 'translateY(10%)'}}/>
            <Card name="Fully Customizable" image="/images/icon-fully-customizable.svg" details="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." styling={{transform: 'translateY(20%)'}}/>
        </div>
    </div>
  );
}

export default Middle;
