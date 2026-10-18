// import Count from "../components/UI/Count";
// import Products from "../components/UI/Products";
// import Testt from "../components/UI/Products";
// import Greeting from "../components/UI/testt";
import Greeting from "../components/UI/Testt";
import UserForm from "../components/UI/UserForm";
import TodoList from "../components/UI/Testt";
// import Counter from "../components/UI/testt";
import ProductCard from "../components/UI/Testt";

const Home = () => (
  <main className="store">
    {/* <header className="store__header"> */}
    {/* <p className="store__eyebrow">Curated for you</p> */}
    {/* <h1>Our Products</h1> */}
    {/* <p className="store__intro"> */}
    {/* Explore our latest finds across tech, beauty, home, and more. */}
    {/* </p> */}
    {/* </header> */}

    {/* <Products /> */}
    <UserForm />
    <Greeting />
    <TodoList/>
    <ProductCard/>
  </main>
);

export default Home;
