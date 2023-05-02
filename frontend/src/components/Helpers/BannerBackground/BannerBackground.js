const BannerBackground = ({ businesses }) => {
    const imgUrl = businesses[0]?.imageUrls
        ? businesses[0].imageUrls[0]
        : "https://zelp99-seeds.s3.us-west-1.amazonaws.com/Sprouts_a1.jpeg";
    return (
        <>
            
            <div style={{opacity: 0.5, backgroundColor: "red"}}>  
               <div style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",          
                }}
            >

            </div>
            </div> 
        </>
    );
};

export default BannerBackground;