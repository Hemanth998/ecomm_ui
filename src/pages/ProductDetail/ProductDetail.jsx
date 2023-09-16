import './ProductDetail.css';
const ProductDetail = () => {
  return (
    <div className="product-detail container">
      <div className="img-display">
        <img src="/img/cam.jpg" alt="cam" className="img-responsive" />
      </div>
      <div className="product-details">
        <h1>
          Canon EF 70-200mm f/2.8 is III USM with Lens Case and Lens Hood- Black
        </h1>
        <hr></hr>
        <h2>₹2,08,995</h2>
        <hr></hr>
        About this item Versatile telephoto zoom is designed for full-frame
        canon ef-mount dslrs, however can also be used with aps-c models where
        it provides a 112-320mm equivalent focal length range Canon ef 70-200mm
        f/2.8l is iii usm from canon is an l-series telephoto zoom distinguished
        by its bright design and advanced optics Supplied lens hood and lens
        case 2 year warranty from canon india
      </div>
    </div>
  );
};
export default ProductDetail;
