import styles from "./Hero.module.css";

type Props = {
  first: string;
  second: string;
};

const Hero = ({ first, second }: Props) => {
  return (
    <section className={styles["hero-section"]}>
      <article className={styles["hero-title"]}>
        <span className={styles["hero-span"]}>{first}</span>
        <span className={styles["hero-span"]}>{second}</span>
      </article>
    </section>
  );
};

export default Hero;
