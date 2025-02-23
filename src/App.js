import SiteCard from "./SiteCard";
import siteList from "./siteList";
import "./App.css";

//TODO: learn hooks and animate box shadows OR just add static box shadows
//IF box shadows are animated, make the default a lil shadow
const App = () => {
  return (
    <div className="app">
      <h1>Payton's Sites</h1>
      <div className="box-box">
        {siteList.map((site) => (
          <SiteCard
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
