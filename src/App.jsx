import "./App.css";
import Card from "./components/Card";
import DataObj from "./components/Data.js";
import Navbar from "./components/Navbar";

function App() {
  const data = DataObj.map((item) => {
    return <Card {...item} key={item.id} />;
  });
  return (
    <div>
      <Navbar />
      <div className="main_content">{data}</div>
    </div>
  );
}

export default App;
