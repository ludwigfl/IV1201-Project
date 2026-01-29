import { registerUser } from "./api.js";

document
  .getElementById("registerForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const user = {
      username: event.target.username.value,
      passwordHash: event.target.password.value,
      email: event.target.email.value
    };

    try {
      await registerUser(user);
      alert("Registration successful!");
    } catch (error) {
      alert(error.message);
    }
  });
