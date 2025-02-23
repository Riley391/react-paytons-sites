import SiteCard from "./SiteCard";
import siteList from "./siteList";
import "./App.css";

//TODO: learn hooks and animate box shadows OR just add static box shadows
//IF box shadows are animated, make the default a lil shadow
//TODO: learn react router and make the site cards link to their respective sites
const App = () => {
  return (
    <div className="app">
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

export default App;
