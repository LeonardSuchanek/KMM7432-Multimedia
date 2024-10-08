import Lottie from "react-lottie";
import animationData from './lotties/Animation - 1728395459462np';


function App() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (<>
    <h1>Multimedia Projekt</h1>

      <div>
       <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </>
  );
}

export default App;
