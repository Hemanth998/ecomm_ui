import './Cart.css';
const Cart = () => {
  return (
    <div className="container cart">
      Cart
      <div className="cart-item">
        <div className="cart-item-img">
          <img src="/img/cam.jpg" alt="cam" />
        </div>
        <div className="cart-item-details">
          <h2>
            Canon EF 70-200mm f/2.8 is III USM with Lens Case and Lens Hood-
            Black
          </h2>
          <h3>8,099.00</h3>
        </div>
      </div>
      <div className="cart-item">
        <div className="cart-item-img">
          <img src="/img/cam.jpg" alt="cam" />
        </div>
        <div className="cart-item-details">
          <h2>
            Canon EF 70-200mm f/2.8 is III USM with Lens Case and Lens Hood-
            Black
          </h2>
          <h3>8,099.00</h3>
        </div>
      </div>
      <div className="cart-item">
        <div className="cart-item-img">
          <img src="/img/cam.jpg" alt="cam" />
        </div>
        <div className="cart-item-details">
          <h2>
            Canon EF 70-200mm f/2.8 is III USM with Lens Case and Lens Hood-
            Black
          </h2>
          <h3>8,099.00</h3>
        </div>
      </div>
    </div>
  );
};
export default Cart;
