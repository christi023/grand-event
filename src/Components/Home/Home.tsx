import { Link } from 'react-router-dom';
import Carrousel from '../Carrousel/Carrousel';
import Banner from '../Banner/Banner';
import EventTimer from '../EventTimer/EventTimer';

const Home = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Carrousel hero={'defaultHero'} hero1={'defaultHero1'} hero2={'defaultHero2'}>
          <Banner title="Grand Events" subtitle="Tickets starting at $275">
            <Link to="/tickets" className="btn btn-primary">
              Buy Ticket
            </Link>
          </Banner>
        </Carrousel>
      </div>
      <EventTimer />
    </>
  );
};

export default Home;
