import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/";

  const [actresses, setActresses] = useState([]);

  const fetchActresses = () => {
    axios.get(actressesUrl).then((res) => setActresses(res.data));
  };

  useEffect(fetchActresses, []);

  return (
    <>
      <h1 className="text-center">Actress API</h1>
      <div className="container my-5">
        <div className="row row-cols-4 g-4">
          {actresses.map((act) => (
            <div key={act.id} className="col">
              <div className="card h-100">
                <img
                  src={act.image}
                  className="card-img-top h-50"
                  alt={act.name}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{act.name}</h5>
                  <p className="card-text">
                    <div>
                      <span>Anno di nascita:</span> {act.birth_year}
                    </div>
                    <div>
                      <span> Nazionalità:</span> {act.nationality}
                    </div>
                    <div>
                      <span> Bio:</span> {act.biography}
                    </div>

                    <div>
                      <span>Awards:</span> {act.awards}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
