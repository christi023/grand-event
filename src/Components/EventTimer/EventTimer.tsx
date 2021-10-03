import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EventTimer.css';

const EventTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Deadline for event
  const DeadLine = new Date('Dec, 27, 2027');

  // function
  const getTimer = () => {
    const now = new Date();
    const timer = DeadLine.getTime() - now.getTime();
    if (timer < 0) {
      console.log('Date have passed');
    } else {
      // setting seconds
      const secs = Math.floor((timer / 1000) % 60);
      setSeconds(secs);
      // setting minutes
      const mins = Math.floor((timer / 1000 / 60) % 60);
      setMinutes(mins);
      // setting hours
      const hrs = Math.floor((timer / (1000 * 60 * 60)) % 24);
      setHours(hrs);
      // setting days
      const ds = Math.floor(timer / (1000 * 60 * 60 * 24));
      setDays(ds);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTimer(), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="countdown-timer section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="heading-count">
              <h6 className="wow fadeInDown" data-wow-delay="0.2s">
                Event Starts In
              </h6>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div
              className="row time-countdown justify-content-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div id="clock" className="time-count">
                <div className="time-entry days">
                  <span>{days}</span>
                  <div className="">Days</div>
                </div>
                <div className="time-entry hours">
                  <span>{hours}</span>
                  <div className="">Hours</div>
                </div>
                <div className="time-entry minutes">
                  <span className="">{minutes}</span>
                  <div className="">Minutes</div>
                </div>
                <div className="time-entry seconds">
                  <span className="">{seconds}</span>
                  <div className="">Seconds</div>
                </div>
              </div>
            </div>
            <Link to="/calender" className="btn btn-primary">
              Add To Calender
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimer;

/*
    <div className="countdown_wrapper">
      <div className="countdown_top">Event starts in</div>
      <div className="countdown_bottom">
        <div className="countdown_item">
          <div className="countdown_time">{days}</div>
          <div className="countdown_tag">Days</div>
        </div>
        <div className="countdown_item">
          <div className="countdown_time">{hours}</div>
          <div className="countdown_tag">Hrs</div>
        </div>
        <div className="countdown_item">
          <div className="countdown_time">{minutes}</div>
          <div className="countdown_tag">Min</div>
        </div>
        <div className="countdown_item">
          <div className="countdown_time">{seconds}</div>
          <div className="countdown_tag">Sec</div>
        </div>
      </div>
    </div> */
