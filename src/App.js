import logo from "./logo.svg";
import { Dashboard } from "./Dashboard";
import NavBar from "./NavBar";
import SidePanel from "./SidePanel";
import Loans from "./Loans";
import "./App.css";

function App() {
  return (
    <>
      <SidePanel />
      <NavBar />
      <Loans/>
    </>
  );
}

export default App;
