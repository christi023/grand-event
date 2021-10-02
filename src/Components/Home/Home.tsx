import { Link } from 'react-router-dom';
import Carrousel from '../Carrousel/Carrousel';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <>
      <Carrousel hero={'defaultHero'} hero1={'defaultHero1'} hero2={'defaultHero2'}>
        <Banner title="Grand Events" subtitle="Tickets starting at $275">
          <Link to="/tickets" className="btn btn-primary">
            Buy Ticket
          </Link>
        </Banner>
      </Carrousel>
    </>
  );
};

export default Home;
