import "./Home.css"
import ProductList from "./ProductList";
function Home({products}) {
  return (
    <>
      {products.map((p) => (
        <ProductList
        key={p.id}
        id={p.id}
        thumbnail={p.thumbnail}
        title={p.title}
        price={p.price}
        brand={p.brand}
        discountPercentage={p.discountPercentage}
        rating={p.rating}>

        </ProductList>

      ))}
          
     </>
    )

}
  

export default Home;
