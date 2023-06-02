import { useState, useEffect, useRef } from "react";
import Button from "../components/button/Button";
import CardProducts from "../components/fragments/CardProduct";
// import Counter from "../components/fragments/counter";
// import { json } from "react-router-dom";
import getProducts from "../services/product.services";
import { getUsername } from "../services/auth.services";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

// const products = [
//     {
//         id : 1,
//         title : 'Topi Malas',
//         img : "/products/prodc-1.jpg",
//         price: 1000000,
//         desc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quod molestiae odio asperiores animi quae?`
//     },
//     {
//         id : 2,
//         title : 'Topi double malas',
//         img : "/products/prodc-1.jpg",
//         price: 2000000,
//         desc : `molestiae odio asperiores animi quae?`
//     },
//     {
//         id : 3,
//         title : 'Topi auto malass',
//         img : "/products/prodc-1.jpg",
//         price: 69000000,
//         desc : `sama ajah cuman lebih mahal`
//     },
// ]

// const prod = products.find((e)=> e.id === 1)
// console.log(prod)

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  // const [user, setUser] = useState("");
  // cart
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
// handle login
  const user = useLogin()
  // get products api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
// cart 
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((prod) => prod.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
// cart
  function handleToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  }
// logout
  function logouthandler(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate('/login')
  }
// total price
  const handleTotalPrice = useRef();
  useEffect(() => {
    if (cart.length > 0) {
      handleTotalPrice.current.style.display = "table-row";
    } else {
      handleTotalPrice.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="bg-blue-500 flex px-10 py-4 justify-end items-center gap-3">
        <a className="text-white font-bold">{user}</a>
        <Button onClick={logouthandler}>log out</Button>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center gap-4 w-3/4 flex-wrap">
          {products.length > 0 &&
            products.map((i) => {
              return (
                <CardProducts key={i.id}>
                  <CardProducts.Head src={i.image} id={i.id}></CardProducts.Head>
                  <CardProducts.Body title={i.title}>
                    {i.description}
                  </CardProducts.Body>
                  <CardProducts.Footer
                    price={i.price}
                    id={i.id}
                    handleToCart={handleToCart}
                  ></CardProducts.Footer>
                </CardProducts>
              );
            })}
        </div>
        <div className="w-1/4">
          <div className="flex items-center gap-3 mt-4">
            <h1 className="text-3xl">Cart</h1>
          </div>
          <table className="text-left table-auto border-separate border-spacing-x-3 ">
            <thead>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const prod = products.find((e) => e.id === item.id);
                  const total = item.qty * prod.price;
                  return (
                    <tr key={item.id}>
                      <td> {prod.title.substring(0, 10)}...</td>
                      <td>
                        {" "}
                        {prod.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td> {item.qty}</td>
                      <td>
                        {" "}
                        {total.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={handleTotalPrice}>
                <td colSpan={3}>
                  {" "}
                  <b> total price </b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => setCart([])} variant="bg-teal-500">
            clear all item
          </Button>
          {/* <div>
                    <Counter></Counter>
                </div> */}
        </div>
      </div>
    </>
  );
}
export default ProductsPage;
