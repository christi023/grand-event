import './Banner.css';
type BannerProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const Banner = (props: BannerProps) => {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <div />
      <p>{props.subtitle}</p>
      {props.children}
    </div>
  );
};

export default Banner;
