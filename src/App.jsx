import reactLogo from "../public/assets/imgs/react.svg";
import "../public/css/App.css";
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header/>
      <p>I am learning react here</p>
      <div>
        <img src={reactLogo} alt="react logo" width={50} />
        <h1>Fun Facts about React</h1>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
          <li>Lorem ipsum dolor sit amet consectetur</li>
        </ul>
      </div>
    </>
  );
};

export default App;
