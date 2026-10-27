import "./Home.css";
import homeBackground from "../assets/home-background.jpg";

function Home() {
    return (
        <section className="home-page">
            <img
                src={homeBackground}
                alt="Welcome to Shop Flow"
                className="home-background"
            />
        </section>
    );
}

export default Home;