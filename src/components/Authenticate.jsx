import { useState } from "react";

export default function Authenticate({token}) {
  const [sucessMessage, setSucessMessage] = useState(null);
  const [error, setError] = useState(null);
  async function handleClick() {
    console.log("hello");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSucessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <section>
      <h2 id="authenticate">Authenticate</h2>
      {sucessMessage && <p>{sucessMessage}</p>}
      {error && <p>{error}</p>}
      <button id = "button" onClick={handleClick}>Authenticate Token!</button>
    </section>
  );
}
