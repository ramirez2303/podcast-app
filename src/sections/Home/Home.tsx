import Header from "./components/Header";
import TrendingSection from "./components/TrendingSection";

const Home = () => {
    return (
        <div className="min-w-[100vw] min-h-[100vh] flex flex-col gap-12 py-8 px-24">
            <Header />
            <div className="mx-auto max-w-[70%] flex justify-center items-center">
                <TrendingSection />
            </div>
        </div>
    );
};

export default Home;
