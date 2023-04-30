import './Test.css'

const BackgroundComponent = () => (
  <div className="background">
    <h1>Background Component</h1>
  </div>
);

const TopComponent = () => (
  <div className="top">
    <h1>Top Component</h1>
  </div>
);

const Test = () => (
  <div className="container">
 
    <BackgroundComponent />
    <TopComponent />
  </div>
);

export default Test;
