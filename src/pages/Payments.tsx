import zelleHari from "../assets/qr-zelle.png";
import venmoHari from "../assets/qr-venmo.png";
export default function Payments() {
  return (
    <main style={{ paddingTop: "0.5rem", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "2rem" }}>
      <h1>Donations</h1>

      <details style={{ marginTop: "1.5rem", border: "1px solid #ddd", borderRadius: 8, padding: "0.75rem 1rem", backgroundColor: "white" }}>
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem" }}>
          Harisri Yerramsetti
        </summary>

        <div style={{ marginTop: "1rem" }}>
          <section style={{ marginTop: "1rem" }}>
            <h2 style={{ margin: 0, fontSize: "1rem" }}>Zelle</h2>
            <img
              src={zelleHari}
              alt="Zelle QR"
              style={{ width: 200, display: "block" }}
            />
          </section>

          <section style={{ marginTop: "1rem" }}>
            <h2 style={{ margin: 0, fontSize: "1rem" }}>Venmo</h2>
            <img
              src={venmoHari}
              alt="Venmo QR"
              style={{ width: 200, display: "block" }}
            />
          </section>
        </div>
      </details>

      <details style={{ marginTop: "1.5rem", border: "1px solid #ddd", borderRadius: 8, padding: "0.75rem 1rem", backgroundColor: "white" }}>
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem" }}>
          Samarth Appalabattula
        </summary>
        <div style={{ marginTop: "1rem" }}>
          Cash Payments accepted.
        </div>
      </details>

      <details style={{ marginTop: "1.5rem", border: "1px solid #ddd", borderRadius: 8, padding: "0.75rem 1rem", backgroundColor: "white" }}>
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem" }}>
          Arjun Krishna Gundimeda
        </summary>
        <div style={{ marginTop: "1rem" }}>
          Cash Payments accepted.
        </div>
      </details>
    </main>
  );
}