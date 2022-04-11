import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log("movie : ", movie);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>{movie.title_english}</h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <div>
            <ul>
              <li>rating : {movie.rating}</li>
              <li>runtime : {movie.runtime}</li>
              <li>language : {movie.language}</li>
              {/* <li>genres : {movie.genres.map((genre) => ` ${genre},`)}</li> */}
            </ul>
            <p>{movie.description_intro}</p>
            <a href={movie.url} target="_blank">
              See more &gt;{" "}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;

// ':' 기호를 사용해 path에 변수 삽입, useParams header를 사용해 링크의 변수를 가져옴
