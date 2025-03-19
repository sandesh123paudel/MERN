import css from "./Hero.module.css";
const Hero = () => {
  return (
    <main className={css.hero}>
      <div className={css.heroContent}>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE <br />
          THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
          SHOES.
        </p>
        <div className={css.heroButton}>
          <button className={css.primaryBtn}>Shop Now</button>
          <button className={css.secondaryBtn}>Category</button>
        </div>
        <div className={css.available}>
          <p>Also Available On</p>
          <div className={css.brands}s>
            <img src="images/flipkart.png" alt="Flipcart" />

            <img src="images/amazon.png" alt="Amazon" />
          </div>
        </div>
        .
      </div>

      <div className={css.heroImage}>
        <img src="images/shoe_image.png" alt="Shoe" />
      </div>
    </main>
  );
};

export default Hero;
