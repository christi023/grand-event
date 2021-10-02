import Carousel from 'react-bootstrap/Carousel';
// style
import './Carrousel.css';

type CarrouselProps = {
  hero: string;
  hero1: string;
  hero2: string;
  children: string;
};

const Carrousel = ({ hero, hero1, hero2, children }: CarrouselProps) => {
  return (
    <>
      <header>
        <Carousel>
          <Carousel.Item>
            <img className={hero} src={hero} alt="" /> {children}
          </Carousel.Item>
          <Carousel.Item>
            <img className={hero1} src={hero1} alt="" /> {children}
          </Carousel.Item>
          <Carousel.Item>
            <img className={hero2} src={hero2} alt="" /> {children}
          </Carousel.Item>
        </Carousel>
      </header>
    </>
  );
};

export default Carrousel;
