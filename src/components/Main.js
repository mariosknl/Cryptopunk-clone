import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img src={activePunk.image_url} className="selectedPunk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
