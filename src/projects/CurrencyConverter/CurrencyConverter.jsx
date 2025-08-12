const { useState, useMemo } = "React";

export function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [convertFrom, setConvertFrom] = useState("")
  const [convertTo, setConvertTo] = useState("")

  return (
    <>
    <header>
    <h1>Currency Converter</h1>
    </header>
    <form>
      <label htmlFor="amount">Amount: </label>
      <input id="amount" value={amount} onChange={((e) => setAmount(e.target.value))} type="number" />
      <div className="select-container">
      <div className="select-wrapper">
      <label htmlFor="convert-from">Convert from: </label>
        <select onChange={(e) => setConvertFrom(e.target.value)}>
          <option>USD</option>
          <option>JPY</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
        </div>
        <div className="select-wrapper">
          <label htmlFor="convert-to">Convert to:</label>
          <select id="convert-to" onChange={(e) => setConvertTo(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
        </div>
      </div>
      <button type="submit">Convert</button>
      </form>
      <div className="results-container">
      <p>convertTo: {convertTo}</p>
      <p>convertFrom: {convertFrom}</p>
      <p>amount: {amount}</p>

      </div>
    </>
  )
}