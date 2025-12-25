import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [data, setData] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.token) {
      localStorage.setItem("token", result.token);
      onLogin();
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-40 space-y-4">
      <input
        className="w-full p-3 bg-gray-800"
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        className="w-full p-3 bg-gray-800"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button className="bg-primary w-full p-3 rounded">Login</button>
    </form>
  );
}
