import { Parallax } from 'react-parallax';
import backgroundImage from '../assets/manichino.jpg';
import './Herotwo.css';


function Herotwo() {
    return (
      <Parallax className='image' blur={0} bgImage={backgroundImage} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
          <span className="img-txt">Collezione primavera estate</span>
        </div>
      </Parallax>
    );
  };
  
  export default Herotwo;