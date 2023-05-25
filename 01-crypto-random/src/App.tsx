import "./App.css";
import { useRandom } from "./hooks/randomApiHooks";

export const App = () => {
  const query = useRandom();
  return (
    <div className="App App-header">
      <h2>
        Numero Aleatorio:{" "}
        {query.isFetching ? "..." : !query.isError && query.data}
      </h2>
      {query.isError && <h3>{`${query.error}`}</h3>}
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "Cargando data" : "Obtener nuevo número"}
      </button>
    </div>
  );
};
