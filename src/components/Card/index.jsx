// 参考ページ
// https://dubdesign.net/download/html-css/carddesign-6/#i

https: import styles from "./style.module.scss";

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <article className={styles.card__inner}>
          <div className={styles.card__header}>
            <p className={styles.card__title}>サムネイルのタイトル</p>
            <figure className={styles.card__thumbnail}>
              <img src="https://dubdesign.net/wp-content/uploads/2020/05/0514_inhouse_designereyecatch.jpg" alt="サムネイル" className={styles.card__image} />
            </figure>
          </div>
          <div className={styles.card__body}>
            <p className={styles.card__text}>これはカード型のデザインです。これはカード型のデザインです。これはカード型のデザインです。これはカード型のデザインです。</p>
          </div>
          <div className={styles.card__footer}>
            <p className={styles.card__text}>
              <a href="#" className={`${styles.button} ${styles.button__compact}`}>
                この記事を詳しく見る
              </a>
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Card;
