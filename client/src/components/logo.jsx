import logoImage from '/logoImage.png';



const Logo = () => {
    const handleImageLoad = () => {
        console.log('Image loaded');
    };

    return (
        <div>
            <img src={logoImage} alt="logo" width="100" height="100" onLoad={handleImageLoad} />
        </div>
    );
};

export default Logo;


