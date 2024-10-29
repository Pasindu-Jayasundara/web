import reactLogo from "../../public/assets/imgs/react.svg";
import "../../public/css/mainContent.css";

const MainContent = () => {
  return (
    <>
      <p className="text">I am learning react here</p>
      <div className="body">
        <img src={reactLogo} alt="react logo" className="image"/>
        <h1>Fun Facts about React</h1>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
          <li>Lorem ipsum dolor sit amet consectetur</li>
        </ul>
      </div>
    </>
  );
};

export default MainContent;
