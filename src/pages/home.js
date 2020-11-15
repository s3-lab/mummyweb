import Product from "../components/Product";
import Hero from "../components/Hero";
import './home.scss'

export default function Home({ counter, handleAdd, data}) {

  return (
    <>
      <Hero />
      <div className="newProducts">
        <Product handleAdd={handleAdd} data={data}/>
      </div>
      <p>{counter}</p>

    </>
  );
}
