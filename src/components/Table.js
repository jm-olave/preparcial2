import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { FormattedDate, FormattedMessage } from "react-intl";

export const Table = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("movie") === null) {
        setMovies([]);
      } else {
        let parser = JSON.parse(localStorage.getItem("movie"));
        setMovies(parser.peliculas);
      }
    } else {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json"
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          const peliculas = {
            peliculas: data,
          };
          localStorage.setItem("movie", JSON.stringify(peliculas));
        });
    }
  }, []);
  console.log(movies);
  let million = "million"
  function pluralizable (budget) {
    
  if(navigator.language.includes("es"))
  {
    if(budget == 1)
    {
      million = "millon"
    }
    else{
      million = "millones"
    }
    
  }

  }
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Name" />
            </th>
            <th scope="col">
              <FormattedMessage id="DirectedBy" />
            </th>
            <th scope="col">
              <FormattedMessage id="Country" />
            </th>
            <th scope="col">
              <FormattedMessage id="Budget" />
            </th>
            <th scope="col">
              <FormattedMessage id="Release" />
            </th>
            <th scope="col">
              <FormattedMessage id="Views" />
            </th>
          </tr>
        </thead>
        {movies.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.directedBy}</td>
              <td>{item.country}</td>
              {pluralizable(item.budget)}
              <td>{item.budget} <FormattedMessage id = {million} /> </td>
              <td>
                {" "}
                <FormattedDate
                  value={new Date(item.releaseDate)}
                  year="numeric"
                  month="long"
                  day="numeric"
                  weekday="long"
                />
              </td>
              
              <td><FormattedMessage id={item.views.toLocaleString(navigator.language.includes("es")? "es":"en")} /></td>
            </tr>
          </tbody>
        ))}
      </table>
      <div>
        <Card movies={movies} />
      </div>
    </>
  );
};
