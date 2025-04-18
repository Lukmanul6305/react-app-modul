import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import Top from "./top";
import Main from "./Main";

function App() {
  return (
    <>
      <Header list="langsung" />
      <Header nama="home" />
      <Main />
      <br />
      <Top />
      <List />
      <Footer />
      <Footer by="Lukman" />
    </>
  );
}

export default App;
