import Header from "./components/Header";
import TrendingSection from "./components/TrendingSection";

const Home = () => {
    return (
        <div className="min-w-[100vw] min-h-[100vh] flex flex-col gap-12 ">
            <Header />
            <div className="md:mx-auto md:max-w-[70%] flex justify-center items-center py-0 px-8 md:py-8 md:px-24">
                <TrendingSection />
            </div>
        </div>
    );
};

export default Home;
