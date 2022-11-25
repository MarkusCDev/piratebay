import Image from "../images/psword.jpg";
import { Link } from "react-router-dom";


function Product1() {

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <div className="row mb-4">

        {/* Product pain photo*/}
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={Image}
              />
            </div>
          </div>
        
        {/* Extra product images*/}
           <div className="row mt-2">
            <div className="col-12">
              <div
                className="d-flex flex-nowrap"
                style={{ overflowX: "scroll" }}
              >
                {Array.from({ length: 8 }, (_, i) => {
                  return (
                    <a key={i} href="!#">
                      <img
                        className="cover rounded mb-2 me-2"
                        width="70"
                        height="70"
                        alt=""
                        src={Image}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">Pirate Sword</h2>
            <h4 className="text-muted mb-4">$1,000 USD</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  Add to cart
                </button>
              </div>
              <div className="col">
                <Link to="./cart">
                <button className="btn btn-dark py-2 w-100">Buy now</button>
              </Link>
              </div>
            </div>

            {/* Description of product details */}

            <h4 className="mb-0">Details</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Code</dt>
              <dd className="col-sm-8 mb-3">0001</dd>

              <dt className="col-sm-4">Category</dt>
              <dd className="col-sm-8 mb-3">Weapon</dd>

              <dt className="col-sm-4">Brand</dt>
              <dd className="col-sm-8 mb-3">Spanish</dd>

              <dt className="col-sm-4">Manufacturer</dt>
              <dd className="col-sm-8 mb-3">Spain</dd>

              <dt className="col-sm-4">Color</dt>
              <dd className="col-sm-8 mb-3">Rose Gold</dd>

              <dt className="col-sm-4">Status</dt>
              <dd className="col-sm-8 mb-3">New</dd>

              <dt className="col-sm-4">Rating</dt>
              <dd className="col-sm-8 mb-3">4.9/5.0</dd>
            </dl>

            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>You can't be a pirate without a sword!</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product1;