import React from "react";
import Movie from "./movie";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListMovies() {
  const [listfilm, setListfilm] = useState([]);
  const [error, setError] = useState();
  // const options = {
  //   method: "GET",
  //   url: "http://omdbapi.com/?s=marvel&apikey=339b64b7",
  //   params: { q: "game of thr" },
  //   headers: {
  //     "X-RapidAPI-Key": "f8a6723a65mshe461129648e12ecp1fff88jsnd3d3b35c979d",
  //     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //   },
  // };

  // with Axios
  const url = "http://omdbapi.com/?s=marvel&apikey=339b64b7";

  const getMovies = async () => {
    await axios(url).then((response) => {
      setListfilm(response.data.Search);
    });
  };
  useEffect(() => {
    getMovies();

    // fetch(
    //   "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%of%thr",
    //   options
    // )
    //   .then((response) => response.json())
    //   // .then((response) => console.log(response.d))
    //   .then((response) => setListfilm(response.d))
    //   .catch((err) => {
    //     setError(err.message);
    //     setListfilm();
    //   });
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {listfilm.map((movie, index) => {
        return (
          <Movie
            key={index}
            url={movie.Poster}
            title={movie.Title}
            description={movie.Type}
          />
        );
      })}
      {/* <Movie
          img={
            "https://wallpaper.dog/large/10915475.jpg"
          }
          title={"AQUAMAN"}
          genre={"Adventure"}
          rate={"5.0"}
/> */}{" "}
      {/* <Movie
        url="https://i.ytimg.com/vi/9KGaCGFRqnU/mqdefault.jpg"
        title="VAILLANTE"
        description="vghn ghjk ghjhhhhhhbv gbcfgthbv fgvcfg fgbvcfg fghb vfgyuikl;,nb"
      ></Movie> */}
      {/* <Movie
        url="https://www.leparisien.fr/resizer/v9WQ2XLZjWQ5Ri9JeQ4CvZ8Tj40=/840x525/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/6YM665OEPJ3A645OQXEADU7FLY.jpg"
        title="LORAX"
        description="vghn ghjk ghjhhhhhhbv gbcfgthbv fgvcfg fgbvcfg fghb vfgyuikl;,nb"
      ></Movie>
      <Movie
        url="https://www.voo.be/fr/tv/regarder/content/voo/files/vod/images/376239.still.jpg"
        title="RAYA"
        description="vghn ghjk ghjhhhhhhbv gbcfgthbv fgvcfg fgbvcfg fghb vfgyuikl;,nb"
      ></Movie>
      <Movie
        url="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2022/04/belle%20dormant%20dplus.jpeg"
        title="LA BELLE"
        description="vghn ghjk ghjhhhhhhbv gbcfgthbv fgvcfg fgbvcfg fghb vfgyuikl;,nb"
      ></Movie> */}
    </div>
  );
}
