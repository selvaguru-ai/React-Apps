import logo from './logo.svg';
import './App.css';
import spiderman from './assets/images/spiderman.jpg'
import ReactPlayer from 'react-player/youtube';

function App() {
  const randomImgURL = "https://i.pinimg.com/564x/28/85/ee/2885ee8e17f042949cc8d49cb4c78898.jpg"
  return (
    <>
    <div className='video-content'>
    <ReactPlayer url='https://www.youtube.com/watch?v=z19HM7ANZlo&t=191s' playing={false} width="640px" height="360px"/>
    </div>
    <div className="App">
     <h1>Add 3 images with some styling: </h1>
     <img height={250} src={spiderman} alt='image of spiderman' />
    </div>
    <div className="App">
      <img height={250} src={require("./assets/images/spiderman.jpg")} alt='img of spiderman using require' />
    </div>
    <div className="App">
      <img height={250} src={randomImgURL} alt='img of spiderman using url' />
    </div>
    </>
  );
}

export default App;
