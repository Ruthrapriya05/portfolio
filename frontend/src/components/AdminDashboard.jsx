import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/messages", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(setMessages);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      {messages.map(msg => (
        <div key={msg._id} className="bg-gray-800 p-4 rounded mb-4">
          <h3 className="font-semibold">{msg.name}</h3>
          <p className="text-sm text-gray-400">{msg.email}</p>
          <p className="mt-2">{msg.message}</p>
        </div>
      ))}
    </div>
  );
}
