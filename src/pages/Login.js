import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event, setFunc) => {
    const newInput = event.target.value;
    setFunc(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objectToPost = {
      password: password,
      mail: email,
    };
    try {
      const response = await axios.post("https://vinted-bilbo.herokuapp.com/user/login", objectToPost);
      const token = response.data.account.token;
      console.log(token);
      console.log();
      if (Cookies.get("token") === token) {
        navigate("/");
      } else {
        Cookies.set("token", token, { expires: 30 });
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          onChange={(event) => {
            handleChange(event, setEmail);
          }}
          type="email"
        />
        <p>Password</p>
        <input
          onChange={(event) => {
            handleChange(event, setPassword);
          }}
          type="password"
        />
        <button type="submit">Connect</button>
      </form>
    </main>
  );
};

export default Login;
