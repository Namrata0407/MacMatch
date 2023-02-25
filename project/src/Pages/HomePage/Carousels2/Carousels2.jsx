import styles from "./Carousels2.module.css";
import { Link } from "react-router-dom";

export function MyCard({ src, cap }) {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "auto",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft: "-10px",
        border: "1px solid lightgray",
        borderRadius: "10px",
      }}
    >
      <img
        src={src}
        alt="i"
        style={{ borderRadius: "10px", height: "310px", margin: "auto" }}
      />
      <div className={styles.myCardCaption}>
        <Link to="/">{cap}</Link>
      </div>
    </div>
  );
}

export function Carousels2() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <Link to="/store?filter=MacBook+Air&filter=MacBook+Pro">
            <MyCard
              src="https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg"
              cap="Mac Book"
            />
          </Link>
          <Link to="/store?filter=iPhone">
            <MyCard
              src="https://m.media-amazon.com/images/I/610pghkO81L._SX679_.jpg"
              cap="iPhone"
            />
          </Link>
          <Link to="/store?filter=iPad">
            <MyCard
              src="https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg"
              cap="iPad"
            />
          </Link>
          <Link to="/store?filter=Watch">
            <MyCard
              src="https://m.media-amazon.com/images/I/91z5KuonXrL._SX679_.jpg"
              cap="Watch"
            />
          </Link>
          <Link to="/store?filter=Airpods">
            <MyCard
              src="https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
              cap="Air Pods"
            />
          </Link>
          <Link to="/store?filter=Tv+%26+Home">
            <MyCard
              src="https://m.media-amazon.com/images/I/815g8Uo656S._SX679_.jpg"
              cap="TV & Home"
            />
          </Link>
          <Link to="/store?filter=Entertainment">
            <MyCard
              src="https://m.media-amazon.com/images/I/71L5lSfJIPS._SX522_.jpg"
              cap="Entertainment"
            />
          </Link>
          <Link to="/store?filter=Accessorires">
            <MyCard
              src="https://m.media-amazon.com/images/I/41C5VPNqasL._SX679_.jpg"
              cap="Accessories"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
