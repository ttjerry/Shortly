import Card from "./cards";

const info = {
  firstCard: {
    name: "Brand Recognition",
    image: "/images/icon-brand-recognition.svg",
    details:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
  },
  secondCard: {
    name: "Detailed Records",
    image: "/images/icon-detailed-records.svg",
    details:
      "Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better deciscions.",
  },
  thirdCard: {
    name: "Fully Customizable",
    image: "/images/icon-fully-customizable.svg",
    details:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
};

function Middle() {
  return (
    <div className="bg-backSection2 relative py-24  flex flex-col justify-evenly md:h-screen items-center">
      {/* search section */}

      {/*  */}
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

      <div className="flex md:flex-row flex-col justify-center items-center relative -top-[20px] md:pb-20 overflow-y-hidden md:h-80">
        <Card
          name={info.firstCard.name}
          image={info.firstCard.image}
          details={info.firstCard.details}
        />
        {/*  */}
          <span className="line md:rotate-0 rotate-180"></span>
        <Card
          name={info.secondCard.name}
          image={info.secondCard.image}
          details={info.secondCard.details}
          styling={"md:translate-y-[10%]"}
        />
        {/*  */}
        <span className="line rotate-180"></span>
        <Card
          name={info.thirdCard.name}
          image={info.thirdCard.image}
          details={info.thirdCard.details}
          styling={"md:translate-y-[20%]"}
        />
      </div>
    </div>
  );
}

export default Middle;
