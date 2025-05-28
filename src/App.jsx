import axios from "axios";
import { useEffect, useState } from "react";
import Actorcard from "./components/ActorCard";

function App() {
  const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/";
  const actorUrl = "https://lanciweb.github.io/demo/api/actors/";

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [render, setRender] = useState("");

  const fetchActresses = () => {
    axios.get(actressesUrl).then((res) => setActresses(res.data));
    setRender("Actress");
  };

  const fetchActors = () => {
    axios.get(actorUrl).then((res) => setActors(res.data));
    setRender("Actor");
  };

  useEffect(fetchActresses, []);

  return (
    <>
      <h1 className="text-center">Actors API</h1>

      <div className="d-flex justify-content-center my-4">
        <button className="mx-5 btn btn-primary" onClick={fetchActresses}>
          Mostra Attrici
        </button>
        <button className="mx-5 btn btn-primary" onClick={fetchActors}>
          Mostra Attori
        </button>
      </div>
      <div className="container my-5 ">
        <div className="row row-cols-4 g-4">
          {render === "Actress" &&
            actresses.map((act) => <Actorcard key={act.id} act={act} />)}
          {render === "Actor" &&
            actors.map((act) => <Actorcard key={act.id} act={act} />)}
        </div>
      </div>
    </>
  );
}

export default App;
