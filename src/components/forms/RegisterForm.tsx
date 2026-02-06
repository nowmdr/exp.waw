"use client";

import { useState, FormEvent } from "react";
import { mailerlite } from "../../data/mailerlite";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mailerlite.apiKey}`,
          },
          body: JSON.stringify({
            email,
            fields: { name },
            groups: [mailerlite.groupId],
          }),
        },
      );

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Registration failed");
      }

      setStatus("success");
      setEmail("");
      setName("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  if (status === "success") {
    return <p>Thank you for registering!</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        className={styles.input}
        placeholder="Provide your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        id="name"
        name="name"
        className={styles.input}
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button
        className={styles.submitButton}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Register"}
      </button>
      {status === "error" && <p>{errorMessage}</p>}
    </form>
  );
}
