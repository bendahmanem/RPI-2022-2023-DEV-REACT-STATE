import React, { useEffect, useState } from 'react';

import { findAll } from './services/films';

const App = () => {
  const [loading, setLoading] = useState(false)
  const [films, setFilms] = useState([])

  const fetchData = async () => {
      setLoading(true)

      const res = await findAll()

      setFilms([...res])
      setLoading(false)
      console.log('response: ', res)
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
    <div>
      <button onClick={() => {alert('clicked')}} >HTTP</button>

      <section>
            <header>
                <h2>Films</h2>
            </header>

            { loading && 
                <p>loading...</p>
            }

            <ul>
                {films.length > 0 && films.map(film => (
                    <p key={film.id} >{film.Titre}</p>
                ))}
            </ul>
        </section>
    </div>
  );
};

export default App;
