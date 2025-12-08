import zelleHari from "../assets/qr-zelle.png";
import venmoHari from "../assets/qr-venmo.png";
export default function Payments() {
  return (
    <main>
      <h1>Donations</h1>

      <details className="payment-section">
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem", color: "inherit" }}>
          Harisri Yerramsetti
        </summary>

        <div style={{ marginTop: "1rem" }}>
          <section style={{ marginTop: "1rem" }}>
            <h2 style={{ margin: 0, fontSize: "1rem" }}>Zelle</h2>
            <img
              src={zelleHari}
              alt="Zelle QR"
              className="qr-image"
            />
          </section>

          <section style={{ marginTop: "1rem" }}>
            <h2 style={{ margin: 0, fontSize: "1rem" }}>Venmo</h2>
            <img
              src={venmoHari}
              alt="Venmo QR"
              className="qr-image"
            />
          </section>
        </div>
      </details>

      <details className="payment-section">
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem", color: "inherit" }}>
          Samarth Appalabattula
        </summary>
        <div style={{ marginTop: "1rem" }}>
          Cash Payments accepted.
        </div>
      </details>

      <details className="payment-section">
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem", color: "inherit" }}>
          Arjun Krishna Gundimeda
        </summary>
        <div style={{ marginTop: "1rem" }}>
          Cash Payments accepted.
        </div>
      </details>
    </main>
  );
}
