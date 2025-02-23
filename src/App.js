import SiteCard from "./SiteCard";
import siteList from "./siteList";

//TODO: create site cards programmatically from siteList
const App = () => {
  return (
    <div>
      <h1>Payton's Sites</h1>
      <div>
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
