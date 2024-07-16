import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainers";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "./features/cart/cartSlice";

function App() {
  const { isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <header>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </header>
  );
}
export default App;
