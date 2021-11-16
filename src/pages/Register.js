import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = ({ setIsConnected }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (event, setFunc) => {
    const newInput = event.target.value;
    setFunc(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objectToPost = {
      mail: email,
      password: password,
      username: userName,
    };
    if (password === confirmPassword) {
      try {
        const response = await axios.post("http://localhost:3001/user/signup", objectToPost);
        const token = response.data.account.token;
        Cookies.set("token", token, { expires: 30 });
        setIsConnected(true);
        navigate("/");
      } catch (error) {
        console.log(error.response);
      }
    } else {
      alert("Password does not match");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          onChange={(event) => {
            handleChange(event, setUserName);
          }}
          type="text"
        />
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
        <p>Confirm your password</p>
        <input
          onChange={(event) => {
            handleChange(event, setConfirmPassword);
          }}
          type="password"
        />
        <input type="checkbox" name="machin" />
        <span>S'inscrire à la newsletter</span>
        <button type="submit">S'inscrire</button>
        <Link to="/login"> Vous avez déjà un compte ? Connectez vous ici.</Link>
      </form>
    </main>
  );
};

export default Register;
