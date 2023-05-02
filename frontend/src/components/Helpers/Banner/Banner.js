import SearchBar from "../../Navigation/SearchBar/SearchBar";

const Banner = (props) => {
    return (
        <>
           
                <div className="bannerContainer">
                    <div className={"leftBanner"}></div>
                    <div className="centerBanner">
                        <h2>Find a business to review</h2>
                        <p className="secondLine">
                            Review anything from your favorite patios spot to
                            your local flower shop.
                        </p>
                        <div id="bannerSearchBar">
                            <SearchBar />
                        </div>
                        <div className="bottomBanner">
                            <div>Visited one of these places recently?</div>
                        </div>
                    </div>
                    <div className="rightBanner"></div>
                </div>
        
        </>
    );
};

export default Banner;