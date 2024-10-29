import styles from "./componentStyle/RandomMusicalStyle.module.css";
const RandomMusical = ({ kopisMusical }) => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.randomMusical}></div>
        </section>
    );
};

export default RandomMusical;
