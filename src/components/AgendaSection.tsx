"use client";

import { useState } from "react";
import { data } from "../data/data";
import styles from "../app/page.module.css";

export default function AgendaSection() {
  const [lang, setLang] = useState<"en" | "pl">("en");
  const agenda = data[lang].agenda;

  return (
    <div className={styles.contentItem}>
      <h2 className={styles.subtitle}>
        [{agenda.title}]{" "}
        <button
          onClick={() => setLang(lang === "en" ? "pl" : "en")}
          style={{ fontFamily: "inherit", fontSize: "inherit", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", padding: 0 }}
        >
          [{lang === "en" ? "PL" : "EN"}]
        </button>
      </h2>
      {agenda.parts.map((part, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <p><strong>{part.time}</strong></p>
          <p>{part.title}</p>
          <p>{part.description}</p>
          {part.schedule.length > 0 && (
            <ul style={{ paddingLeft: "1.2rem", margin: "0.5rem 0" }}>
              {part.schedule.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <p><strong>{agenda.price.title}:</strong></p>
      <ul style={{ paddingLeft: "1.2rem", margin: "0.5rem 0" }}>
        {agenda.price.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
