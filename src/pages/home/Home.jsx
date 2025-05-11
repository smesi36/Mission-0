import Card from "./components/Card";
import NavBar from "./components/NavBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <section className={styles.middleSection}>
        <h1>Does Marketing Degree Adds More Tools To My Toolbox?</h1>
        {/* onSubmit={submitSearch} */}
        <form className={styles.searchForm}>
          {/* onChange={handleNewSearch} */}
          <input type="text" placeholder="type your search here" />
          <button className={styles.submitBtn}>Search</button>
        </form>
      </section>
      <section className={styles.cardSection}>
        <Card />
      </section>
    </main>
  );
}
