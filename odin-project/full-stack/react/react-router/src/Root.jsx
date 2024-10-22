
import './App.css'
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header style={{
        backgroundColor : "lightblue",
        height: 50,
        width: "100vw"
      }}>
        <h2>This is the Header</h2>
      </header>
      <Outlet/>
      <footer style={{
        backgroundColor : "lightblue",
        height: 50,
        width: "100vw"
      }}>
        <h2>This is the Footer</h2>
      </footer>
    </div>
  );
};

export default Root;
