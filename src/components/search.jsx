import React from "react";
import { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);

  async function getInfo() {
    const inputBody = {
      url: `${inputValue}`,
      expiry: "5m",
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": "sk_b5732825b661468e94a47b1b4a546982",
    };
    try {
      const response = await fetch(
        "https://api.manyapis.com/v1-create-short-url",
        {
          method: "POST",
          body: JSON.stringify(inputBody),
          headers: headers,
        }
      );
      const datum = await response.json();
      // setLink(datum.shortUrl);
      alert(datum.shortUrl)
      setLinks({ id: "1", short: `${datum.shortUrl}` });
    } catch (error) {
      console.log("error:", error);
    }
  }

  return (
    <span className="flex flex-col gap-10 top-24 relative h-auto overflow-hidden z-50">
      <section className="imageBackground flex flex-col relative md:left-60 left-16 items-center z-50 top-16 w-4/6 content-center bg-urlSection rounded-md">
        <div className="flex md:flex-row flex-col justify-center gap-5 md:p-10 p-4 w-full">
          <input
            type="text"
            className="p-2 md:w-9/12 rounded-md outline-none"
            placeholder="Shorten a link here.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-customGreen p-2 rounded-md text-white px-4"
            onClick={getInfo}
          >
            Shorten It!
          </button>
        </div>
      </section>
      <div className="flex relative top-12 bg-red gap-4 bg-white w-6/12">
        <div className="z-50">black and white</div>
      </div>
    </span>
  );
}

export default Search;
