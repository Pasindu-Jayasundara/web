import "../public/css/App.css";
import Footer from "./components/Footer";
import Header from './components/Header';
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="background">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
};

export default App;
