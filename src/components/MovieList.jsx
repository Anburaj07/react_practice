import { useState } from "react";

function MovieList() {
  const [inputYear, setInputYear] = useState("");
  const [movieData, setMovieData] = useState([]);

  const [isClicked, setIsClicked] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/moviesdata?Year=${inputYear}`
      );
      const data = await response.json();
      console.log("data:", data.data);
      setIsClicked(true);
      setMovieData(data.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <section>
        <input
          type="number"
          value={inputYear}
          onChange={(e) => setInputYear(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </section>
      {isClicked === true && (
        <>
          {" "}
          {movieData.map((el) => (
            <li>{el.Title}</li>
          ))}
          {movieData.length == 0 && <div>no results</div>}
        </>
      )}
    </div>
  );
}

export default MovieList;
