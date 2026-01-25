import styles from "./page.module.css";
import { data } from "../data/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.title}>
          Exp<span>erimental</span>
          <br />
          Open
          <br />
          Space
        </h1>
      </section>
      <section className={styles.sectionGrid}>
        <div className={styles.content4}>
          <h2 className={styles.subtitle}>[{data.en.concept.title}]</h2>
          <p>{data.en.concept.description}</p>
        </div>
      </section>
      <section className={styles.sectionGrid}>
        <div className={styles.content3}>
          <h2 className={styles.subtitle}>[{data.en.style.title}]</h2>
          <p>{data.en.style.description}</p>
        </div>
      </section>
      <section className={styles.sectionGrid}>
        <div className={styles.content1}>
          <div className={styles.contentItem}>
            <h2 className={styles.subtitle}>[Upcoming]</h2>
            <p>Please let me know on IG if you are coming</p>
          </div>
          <div className={styles.contentItem}>
            <h3 className={styles.subtitle}>[Location]</h3>
            <p>Ruch Space, Warszawa, ul.Mikołaja Drygały 5</p>
          </div>
          <div className={styles.contentItem}>
            <h3 className={styles.subtitle}>[Day | Time | Price]</h3>
            <p>Saturday 31 January | 19:00 - 21:00 | 30 PLN</p>
          </div>
          <div className={styles.contentItem}>
            <h3 className={styles.subtitle}>[Links]</h3>
            <a
              href={"https://maps.app.goo.gl/3RGo3vBGBMLo9btW7"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Maps Location
            </a>
            <a href="/event.ics" target="_blank" rel="noopener noreferrer">
              Calendar Event
            </a>
          </div>
        </div>
      </section>
      <section className={styles.sectionGrid}>
        <div className={styles.content1}>
          <div className={styles.contentItem}>
            <h2 className={styles.subtitle}>[Planning]</h2>
            <p>Saturday, February 7 - CoDa Movement</p>
            <p>Saturday, February 14 - CoDa Movement</p>
          </div>
        </div>
      </section>
    </div>
  );
}
