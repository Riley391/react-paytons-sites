import SiteCard from "./SiteCard";
import siteList from "./siteList";
import "./Home.css";

//TODO: learn hooks and animate box shadows OR just add static box shadows
//IF box shadows are animated, make the default a lil shadow
//TODO: remove CSS files, add the CSS to the JS files in style tags
//TODO: add a favicon
//TODO: fix styles such that cards are horizontal instead of vertical
const Home = () => {
  return (
    <div className="home">
      <h1>Payton's Sites</h1>
      <div className="box-box">
        {siteList.map((site) => (
          <SiteCard
            key={site.id}
            title={site.title}
            link={site.link}
            thumbnail={site.thumbnail}
            year={site.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
