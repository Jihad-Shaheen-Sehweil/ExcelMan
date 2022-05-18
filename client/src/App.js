import Navbar from "./components/Navbar";
import Questions from "./components/Questions";

function App() {
    return (
        <main className="w-screen h-full bg-[#F2F2F2] scrollbar-hide">
            <Navbar />

            <div className="px-10 pd-10">
                <Questions />
                <p className="mx-auto py-5">CopyRights 2022</p>
            </div>
        </main>
    );
}

export default App;
