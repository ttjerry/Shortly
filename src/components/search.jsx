function Search(){
    return(
        <section className="imageBackground flex relative md:left-60 left-16 items-center z-50 top-16 w-4/6 content-center bg-urlSection rounded-md">
        <div className="flex md:flex-row flex-col justify-center gap-5 md:p-10 p-4 w-full">
          <input
            type="text"
            className="p-2 md:w-9/12 rounded-md outline-none"
            placeholder="Shorten a link here.."
          />
          <button className="bg-customGreen p-2 rounded-md text-white px-4">
            Shorten It!
          </button>
        </div>
      </section>
    );
}

export default Search;