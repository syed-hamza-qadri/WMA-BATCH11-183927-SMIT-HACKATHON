import { useEffect } from "react";
import axios from "axios";

function App() {
  const fetchAPI = async () => {
    const reponse = await axios.get("http://localhost:8080/api");
    console.log(reponse.data.tasks);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
