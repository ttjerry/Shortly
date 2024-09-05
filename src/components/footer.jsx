import Button from "./button";

const footer = [
  {
    link1: "Features",
    link2: "link Shortening",
    link3: "Branded links",
    link4: "Analytics",
  },
  {
    link1: "Resources",
    link2: "Blog",
    link3: "Developers",
    link4: "support",
  },
  {
    link1: "Company",
    link2: "About",
    link3: "Our Team",
    link4: "careers",
    link5: "contact",
  },
];

const icons = [
  "/images/icon-facebook.svg",
  "/images/icon-twitter.svg",
  "/images/icon-pinterest.svg",
  "/images/icon-instagram.svg",
];

const color = {
  color: "white",
  fontSize: "14px",
};

function Footer() {
  return (
    <div className="flex flex-col w-full h-[60vh]">
      <div className="footer bg-urlSection h-[25vh]">
        <div className="flex flex-col justify-center gap-[15px] items-center h-full">
          <h2 className="footerText text-xl text-white">
            Boost your links today
          </h2>
          <Button name="Get Started" />
        </div>
      </div>

      <div className="flex justify-evenly items-center bg-footerBlack h-[35vh]">
        <div className="flex flex-row height-[30vh] justify-between w-[80%] gap-10 self-center">
          <img
            className="logoFooter self-start w-30 h-10"
            src="/images/logo.svg"
            alt="logo"
          />
          <section className="flex flex-row gap-16">
            {footer.map((links) => {
              return (
                <div className="flex flex-col self-start height-[40vh] justify-center" key={links.link4}>
                  <h4 style={color} className="font-bold" key={links.link3}>
                    {links.link1}
                  </h4>
                  <div
                    className="flex relative mt-6 flex-col gap-2"
                    key={links.link1}
                  >
                    <a href="#" style={color}>
                      {links.link2}
                    </a>
                    <a href="#" style={color}>
                      {links.link3}
                    </a>
                    <a href="#" style={color}>
                      {links.link4}
                    </a>
                    {links.link5 ? (
                      <a href="#" style={color}>
                        {links.link5}
                      </a>
                    ) : (
                      false
                    )}
                  </div>
                </div>
              );
            })}
          </section>
          <section>
            <div className="flex flex-row gap-8">
              {icons.map((icons) => {
                return (
                  <a href="#">
                    <img src={icons} alt="" />
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
