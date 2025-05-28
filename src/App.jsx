import axios from "axios";
import { useEffect, useState } from "react";
import ActressesCard from "./components/ActressesCard";

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
            <ActressesCard key={act.id} act={act} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
