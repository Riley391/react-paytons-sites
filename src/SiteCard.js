import { Link } from "react-router-dom";

const SiteCard = (props) => {
  return props.routed ? (
    <Link to={props.link}>
      <div className="site-box">
        <img
          src={props.thumbnail}
          alt={props.title + " Thumbnail"}
          width="250px"
          height="125"
        />
        <p class="site-title card-text">
          <strong>{props.title}</strong>
        </p>
        <p class="site-year card-text">
          <em>Est. {props.year}</em>
        </p>
      </div>
    </Link>
  ) : (
    <a href={props.link}>
      <div className="site-box">
        <img
          src={props.thumbnail}
          alt={props.title + " Thumbnail"}
          width="250px"
          height="125"
        />
        <p class="site-title card-text">
          <strong>{props.title}</strong>
        </p>
        <p class="site-year card-text">
          <em>Est. {props.year}</em>
        </p>
      </div>
    </a>
  );
};

export default SiteCard;
