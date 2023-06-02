import Button from "../button/Button";
import InputForm from "../input/InputForm";
import {Login} from "../../services/auth.services.js";
import { useRef, useEffect, useState } from "react";

function FormLogin() {
  const [failedLogin, setfailedLogin] = useState("");
  function submithandler(event) {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products"
      } else {
        setfailedLogin(res.response.data)
      }
    });
  }
  // username:  johnd
  // password: m38rmF$
  // username: mor_2314
  // password: 83r5^_
  // localStorage.setItem("email", event.target.email.value);
  // localStorage.setItem("password", event.target.password.value);
  // const acc = localStorage.getItem("email");
  // const pas = localStorage.getItem("password");
  // if (acc == "aa@a" && pas == "123") {
  //   window.location.replace("/products");
  // } else {
  //   alert("email or password does't match ,try agains");
  // }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form action="" onSubmit={(e) => submithandler(e)}>
      <p>username:  johnd password: m38rmF$</p>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="example udinnnnn"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="***"
      />
      <Button variant="bg-blue-600" type="submit">
        Login
      </Button>
      {failedLogin && (
        <p className="text-center text-red-600">
          {failedLogin}
        </p>
      )}
    </form>
  );
}
export default FormLogin;
