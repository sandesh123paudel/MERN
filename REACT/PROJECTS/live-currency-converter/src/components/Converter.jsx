const CurrencyConverter = () => {
  return (
    <>
      <h3>Currency Converter</h3>

      <label htmlFor="Currency" className="label">
        Enter Amount
      </label>
      <input
        type="text"
        id="amount"
        className="inputCurr animated-input"
        placeholder="1000.00"
        value=""
      />
    </>
  );
};

export default CurrencyConverter;
