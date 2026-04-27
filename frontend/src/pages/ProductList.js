import "./ProductLists.css";

function ProductList({thumbnail,
  title,
  price,
  brand,
  discountPercentage,
  rating,
}) {
  return (
    <div className="product-container">
    <div className="card m-3">
      
        <div className="card-header">
          <div
            className="product-images d-flex flex-row"
            style={{ width: "fit-content" }}
          >
            <div className=" discount ms-auto" >{discountPercentage}%</div>
            <img src={thumbnail} alt={title} />
            
            <span className="wishlist">♡</span>
          </div>

          <div className="card-body">
            <div className="d-flex flex-row gap-3">
              <div className="title">{title}</div>
              
            </div>
          

          <div className="d-flex flex-row gap-3">
            <div className="brand" style={{ fontWeight: "bolder" }}>
              {brand}
            </div>
            <label
                className="ms-auto"
                style={{ minWidth: "48px", color: "red" }}
              >
                Rs {price}
              </label>
            
          </div>
          

          <div className="d-flex flex-row gap-3">
            <span className="rating-number">☆{rating}</span>
            
            <button
              className="ms-auto"
              
            >
              Details
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductList;
