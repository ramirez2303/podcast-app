import DetailSection from "./components/DetailSection";
import Header from "./components/Header";
import TrendingSection from "./components/TrendingSection";

const Home = () => {
    return (
        <div className="min-w-[100vw] min-h-[100vh] flex flex-col gap-6">
            <Header />
            <div className="md:mx-auto max-w-[100vw] md:max-w-[85%] min-[1700px]:max-w-[70%] flex justify-center items-center py-0 max-[768px]:px-8 md:px-0 md:py-8 max-[1600px]:px-24">
                <TrendingSection />
            </div>
            <DetailSection />
        </div>
    );
};

export default Home;
