import PopularProduct from "./PopularProduct";
import { useState } from "react";
import search from "../images/search.png"

function ProductList() {
  const [viewType] = useState({ grid: true });

  return (
    <div className="container py-4 px-xl-5 justify-content-center">
      <div className="row mb-4 mt-lg-3">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search products..."
                    aria-label="search input"
                  />
                  <button className="btn btn-outline-dark">
                  <img src={search} alt="search icon" style={{width: '15px', height: '15px'}} />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4 px-md-5 flex-shrink-0 " +
                (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
              }
            >
              {Array.from({ length: 12 }, (_, i) => {
                if (viewType.grid) {
                  return (
                    <PopularProduct key={i} percentOff={i % 2 === 0 ? 15 : null} />
                  );
                }
                return (
                  <PopularProduct key={i} percentOff={i % 4 === 0 ? 15 : null} />
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProductList;