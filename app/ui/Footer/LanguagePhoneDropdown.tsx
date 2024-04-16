"use client";
import { useState } from "react";
export default function LanguagesPhoneDropdown() {
  const [langCollapse, setLangCollapse] = useState(true);
  function handleLangDropdownClick() {
    setLangCollapse((prevLangCollapse) => !prevLangCollapse);
  }
  return (
    <>
      <button type="button" onClick={handleLangDropdownClick}>
        Other Languages
      </button>
      <table className={`m-auto text-left ${langCollapse ? "hidden" : "show"}`}>
        <tbody>
          <tr>
            <td>Arabic</td>
            <td>العربية</td>
            <td>(800) 826-6317</td>
          </tr>
          <tr>
            <td>Cantonese</td>
            <td>粵語</td>
            <td>(800) 300-1533</td>
          </tr>
          <tr>
            <td>Hmong</td>
            <td>Hmoob</td>
            <td>(800) 771-2156</td>
          </tr>
          <tr>
            <td>Korean</td>
            <td>한국어</td>
            <td>(800) 738-9116</td>
          </tr>
          <tr>
            <td>Russian</td>
            <td>русский</td>
            <td>(800) 778-7695</td>
          </tr>
          <tr>
            <td>Filipino</td>
            <td>Tagalog</td>
            <td>(800) 983-8816</td>
          </tr>
          <tr>
            <td>Armenian</td>
            <td>հայերեն</td>
            <td>(800) 996-1009</td>
          </tr>
          <tr>
            <td>Farsi</td>
            <td>فارسی</td>
            <td>(800) 921-8879</td>
          </tr>
          <tr>
            <td>Khmer</td>
            <td>Khmer</td>
            <td>(800) 906-8528</td>
          </tr>
          <tr>
            <td>Lao</td>
            <td>Lao</td>
            <td>(800) 357-7976</td>
          </tr>
          <tr>
            <td>Spanish</td>
            <td>Español</td>
            <td>(800) 300-0213</td>
          </tr>
          <tr>
            <td>Vietnamese</td>
            <td>Tiếng Việt</td>
            <td>(800) 652-9528</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
