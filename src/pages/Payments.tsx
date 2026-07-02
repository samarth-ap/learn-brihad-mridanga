import zelleQr from "../assets/qr-zelle.png";

export default function Payments() {
  return (
    <main className="payments-page">
      <section className="payments-hero">
        <div className="payments-hero__copy">
          <p className="payments-kicker">Payments</p>
          <h1>Zelle</h1>
          <p className="payments-intro">
            Monthly class payments, donations, and any other payments must be paid 
            via the Learn Brihad Mridanga business account via Zelle.
            Families and students must be enrolled with Zelle.
          </p>
        </div>

        <div className="payments-hero__chips" aria-label="Payment highlights">
          <span className="payment-chip">Business account</span>
          <span className="payment-chip">Zelle required</span>
          <span className="payment-chip">Monthly class billing</span>
        </div>
      </section>

      <details className="payment-dropdown">
        <summary className="payment-dropdown__summary">
          <span className="payment-dropdown__title-wrap">
            <span className="payment-dropdown__title">Instructions for Class Payments</span>
            <span className="payment-dropdown__subtitle">How monthly payments work</span>
          </span>
          <span className="payment-dropdown__chevron" aria-hidden="true">⌄</span>
        </summary>
        <div className="payment-dropdown__body">
          <ol className="payment-steps payment-steps--numbered">
            <li>
              The family of the student, or the student if they are old enough,
              should keep track of every class attended during the month.
            </li>
            <li>
              On the last day of the month, calculate the total number of classes
              attended that month. Cost per class is determined by the instructor upon
              enrollment.
            </li>
            <li>
              Submit payment for that month by 11:59 PM on the last day of the
              month.
            </li>
            {/* <li>
              If class is held on the last day of the month, include it in that
              month&apos;s total.
            </li> */}
          </ol>
        </div>
      </details>

      <details className="payment-dropdown">
        <summary className="payment-dropdown__summary">
          <span className="payment-dropdown__title-wrap">
            <span className="payment-dropdown__title">Details</span>
            <span className="payment-dropdown__subtitle">How to make Payments</span>
          </span>
          <span className="payment-dropdown__chevron" aria-hidden="true">⌄</span>
        </summary>
        <div className="payment-dropdown__body payment-dropdown__body--qr">
          <details className="payment-subdropdown">
            <summary className="payment-subdropdown__summary">
              <span className="payment-subdropdown__title-wrap">
                <span className="payment-subdropdown__title">Zelle QR code</span>
                <span className="payment-subdropdown__subtitle">Open to view the scan code</span>
              </span>
              <span className="payment-subdropdown__chevron" aria-hidden="true">⌄</span>
            </summary>
            <div className="payment-subdropdown__body payment-subdropdown__body--qr-layout">
              <div className="payment-subdropdown__copy">
                <p className="payment-panel__text payment-panel__text--tight">
                  Use the QR code, or pay via Zelle using one of the IDs below:
                </p>
                <ul className="payment-zelle-ids">
                  <li>learnbrihadmridanga@gmail.com</li>
                  <li>lbm-org</li>
                </ul>
              </div>
              <div className="payment-panel__qr-frame">
                <img
                  src={zelleQr}
                  alt="Learn Brihad Mridanga Zelle QR code"
                  className="payment-panel__qr"
                />
              </div>
              <p className="payment-panel__text payment-panel__text--centered">
                Both options above can be used for Zelle payments.
              </p>
            </div>
          </details>
          <details className="payment-subdropdown">
            <summary className="payment-subdropdown__summary">
              <span className="payment-subdropdown__title-wrap">
                <span className="payment-subdropdown__title">Memo format</span>
                <span className="payment-subdropdown__subtitle">Required for class payments</span>
              </span>
              <span className="payment-subdropdown__chevron" aria-hidden="true">⌄</span>
            </summary>
            <div className="payment-subdropdown__body payment-subdropdown__body--centered">
              <div className="payment-memo">instructor - student - # classes</div>
              <p className="payment-card__note">
                If you are making a monthly class payment, ensure the Memo field matches the format above.
              </p>
            </div>
          </details>
        </div>
      </details>

    </main>
  );
}