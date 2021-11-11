import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
        const response = await axios.post("https://vinted-bilbo.herokuapp.com/user/signup", objectToPost);
        const token = response.data.account.token;
        Cookies.set("token", token, { expires: 30 });
        navigate("/login");
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
        <button type="submit">S'inscrire</button>
      </form>
    </main>
  );
};

export default Register;
