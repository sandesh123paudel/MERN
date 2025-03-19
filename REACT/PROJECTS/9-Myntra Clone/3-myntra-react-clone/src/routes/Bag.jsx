import BagSummary from "../components/BagSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {
  return (
    <>
      <main>
        <div class="bag-page">
          <div class="bag-items-container"></div>
          <div class="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
