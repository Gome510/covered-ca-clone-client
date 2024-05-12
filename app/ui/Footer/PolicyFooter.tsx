import "./policyfooter.css";
function PolicyFooter() {
  return (
    <article className="px-4 text-xs">
      <div className="flex flex-col items-center  gap-2 mt-8">
        <a href="">Accessibility and Nondiscrimination</a>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">Protecting Our Consumers</a>
      </div>
      <hr className="border-slate-gray" />

      <ul id="language-links" className="flex flex-wrap gap-2 justify-center">
        <li>
          <a href="/espanol/">Español</a>
        </li>

        <li>
          <a href="/arabic/">العربية</a>
        </li>

        <li>
          <a href="/chinese/">繁中</a>
        </li>

        <li>
          <a href="/chinese-simplified/">简中</a>
        </li>

        <li>
          <a href="/hmong/">hmoob</a>
        </li>

        <li>
          <a href="/korean/">한국어</a>
        </li>

        <li>
          <a href="/russian/">ру́сский</a>
        </li>

        <li>
          <a href="/tagalog/">Tagalog</a>
        </li>

        <li>
          <a href="/armenian/">հայերեն</a>
        </li>

        <li>
          <a href="/farsi/">فارسی</a>
        </li>

        <li>
          <a href="/khmer/">Khmer</a>
        </li>

        <li>
          <a href="/lao/">Lao</a>
        </li>

        <li>
          <a href="/vietnamese/">Tiếng Việt</a>
        </li>
      </ul>

      <p>
        <a href="">CoveredCA.com</a> is sponsored by Covered California and the{" "}
        <a href="">Department of Health Care Services</a>, which work together
        to support health insurance shoppers to get the coverage and care
        that&apos;s right for them
      </p>

      <p className="mt-4 text-center mb-8">
        Copyright © 2024 Covered California
      </p>
    </article>
  );
}
export default PolicyFooter;
