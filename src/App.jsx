import Body from "./components/Body";
import BoxChat from "./components/BoxChat";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTopButton />
      <Body />
      <Features />
      <BoxChat />
      <Footer />
    </div>
  );
}

export default App;
