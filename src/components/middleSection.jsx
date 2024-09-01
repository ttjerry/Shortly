const image = {
  backgroundImage: "url('./images/bg-shorten-desktop.svg')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
function Middle() {
  return (
    <div className="bg-backSection2 relative flex h-screen gap-28 flex-col items-center">
      <section
        className="flex relative justify-center items-center w-3/4 top-12 content-center bg-urlSection rounded-md"
        style={image}
      >
        <div className="flex justify-center gap-5 p-10 w-full">
          <input
            type="text"
            className="p-2 w-10/12 rounded-md outline-none"
            placeholder="Shorten a link here.."
          />
          <button className="bg-customGreen p-2 rounded-md text-white px-4">Shorten It!</button>
        </div>
      </section>

      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl p-1" style={{fontFamily: 'poppinsRegular'}}>Advanced Statistics</h1>
          <h5 className="text-customGrey text-center text-sm leading-6 w-8/12">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </h5>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Middle;
