import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Message Sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <form onSubmit={submit} className="max-w-md mx-auto space-y-4">
        <input className="w-full p-3 bg-gray-800" placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="w-full p-3 bg-gray-800" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea className="w-full p-3 bg-gray-800" placeholder="Message"
          onChange={e => setForm({ ...form, message: e.target.value })} />
        <button className="bg-primary px-6 py-3 rounded">Send</button>
      </form>
    </section>
  );
}
