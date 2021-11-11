import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event, setFunc) => {
    const newInput = event.target.value;
    setFunc(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objectToPost = {
      mail: email,
      password: password,
      userName: userName,
    };
    if (password === confirmPassword) {
      try {
        const response = await axios.post("https://vinted-bilbo.herokuapp.com/user/signup", objectToPost);
        console.log(response);
      } catch (error) {
        console.log(error.message);
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
            handleChange(event, setUsername);
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
