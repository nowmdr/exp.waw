"use client";

import { useState, FormEvent } from "react";
import { mailerlite } from "../../data/mailerlite";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ticketType, setTicketType] = useState<"workshop_jam" | "workshop" | "jam">("workshop_jam");
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
            fields: { name, ticket_type: ticketType },
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
      setTicketType("workshop_jam");
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

      <div className={styles.radioGroup}>
        {(
          [
            { value: "workshop_jam", label: "Workshop + Jam" },
            { value: "workshop", label: "Workshop Only" },
            { value: "jam", label: "Jam Only" },
          ] as const
        ).map(({ value, label }) => (
          <label key={value} className={styles.radioLabel}>
            <input
              type="radio"
              name="ticketType"
              value={value}
              checked={ticketType === value}
              onChange={() => setTicketType(value)}
            />
            {label}
          </label>
        ))}
      </div>

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
