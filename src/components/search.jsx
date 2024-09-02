function Search(){
    return(
        <section className="imageBackground flex relative left-60 z-50 top-16 justify-center items-center w-4/6 content-center bg-urlSection rounded-md">
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
    );
}

export default Search;