import SiteCard from "./SiteCard";
import siteList from "./siteList";

//TODO: create site cards programmatically from siteList
const App = () => {
  return (
    <div>
      <h1>Payton's Sites</h1>
      <SiteCard
        title={siteList[0].title}
        link={siteList[0].link}
        thumbnail={siteList[0].thumbnail}
        year={siteList[0].year}
      />
      <SiteCard
        title={siteList[1].title}
        link={siteList[1].link}
        thumbnail={siteList[1].thumbnail}
        year={siteList[1].year}
      />
      <SiteCard
        title={siteList[2].title}
        link={siteList[2].link}
        thumbnail={siteList[2].thumbnail}
        year={siteList[2].year}
      />
    </div>
  );
};

export default App;
