import "./ProductList.css";

function ProductList({
  thumbnail,
  title,
  price,
  brand,
  discountPercentage,
  rating,
}) {
  return (
    <div className="card m-2">
      <div className="product-container">
        <div className="card-header">
          <div
            className="product-images d-flex flex-row"
            style={{ width: "fit-content" }}
          >
            <img src={thumbnail} alt={title} />
            <span className="wishlist">♡</span>
          </div>

          <div className="card-body">
            <div className="d-flex flex-row gap-3">
              <div className="title">{title}</div>
              <label
                className="ms-auto"
                style={{ minWidth: "48px", color: "red" }}
              >
                Rs {price}
              </label>
            </div>
          

          <div className="d-flex flex-row gap-3">
            <div className="brand" style={{ fontWeight: "bolder" }}>
              {brand}
            </div>
            <div className="ms-auto">Rs {discountPercentage}</div>
          </div>

          <div className="d-flex flex-row gap-3">
            <span className="rating-number">☆{rating}</span>
            <button
              className="ms-auto"
              style={{ backgroundColor: "purple",fontSize:"12px" }}
            >
              Add to Cart
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
