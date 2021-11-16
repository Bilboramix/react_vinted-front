import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setIsConnected }) => {
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
      const userName = response.data.account.username;
      const userId = response.data.account._id;
      console.log(userId);
      if (Cookies.get("token") !== token) {
        Cookies.set("token", token, { expires: 30 });
      }
      if (Cookies.get("username") !== userName) {
        Cookies.set("username", userName, { expires: 30 });
      }
      if (Cookies.get("userid") !== userId) {
        Cookies.set("userid", userId, { expires: 30 });
      }
      navigate("/");
      setIsConnected(true);
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
        <Link to="/register">Pas de compte ? Inscrivez vous</Link>
      </form>
    </main>
  );
};

export default Login;
