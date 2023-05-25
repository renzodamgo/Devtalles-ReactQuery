import { useEffect, useState } from "react";
import "./App.css";

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const number = await res.text();
  return +number;
};

export const App = () => {
  const [number, setNumber] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getRandomNumberFromApi()
      .then((number) => {
        setLoading(false);
        setNumber(number);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App App-header">
      <h2>Numero Aleatorio: {loading ? "..." : number}</h2>
    </div>
  );
};
