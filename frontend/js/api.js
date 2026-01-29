const API_BASE_URL = "http://localhost:3000/api";

export async function registerUser(user) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return await response.json();
}
