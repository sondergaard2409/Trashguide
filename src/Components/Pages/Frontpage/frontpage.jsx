import Carousel from "./Pagecomps/carousel/carousel";
import FindLogin from "./Pagecomps/findlogin/findlogin";
import FrontArticles from "./Pagecomps/fpArticles/fparticles";

const Frontpage = () => {
    return (
        <>
        <Carousel />
        <FindLogin />
        <FrontArticles />
        </>
    );
};

export default Frontpage; 