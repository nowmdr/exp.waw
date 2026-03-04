import styles from "./page.module.css";
import { data } from "../data/data";
import RegisterForm from "../components/forms/RegisterForm";
import AgendaSection from "../components/AgendaSection";

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
            <h3 className={styles.subtitle}>[Location]</h3>
            <p>CoDa Movement, Kijowska 11, 03-743 Warszawa</p>
          </div>
          <div className={styles.contentItem}>
            <h3 className={styles.subtitle}>[Day | Time]</h3>
            <p>Saturday, March 21 | 19:30 - 22:30</p>
          </div>
          <div className={styles.contentItem}>
            <h3 className={styles.subtitle}>[Links]</h3>
            <a
              href={
                "https://www.google.com/maps/place/Studio+Ruchu+i+Yogi+CoDa+Movement/@52.2532555,21.0462897,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecd0051fd61f3:0xab0b446522e1b4c5!8m2!3d52.2532522!4d21.0488646!16s%2Fg%2F11lnn2tkpn?hl=pl&entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Maps Location
            </a>
          </div>
        </div>
      </section>

      {/* <section className={styles.sectionGrid}>
        <div className={styles.content1}>
          <AgendaSection />
        </div>
      </section> */}
      <section className={styles.sectionGrid}>
        <div className={styles.content1}>
          <div className={styles.contentItem}>
            <h2 className={styles.subtitle}>[Register]</h2>
            <RegisterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
