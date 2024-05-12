import LanguagesPhoneDropdown from "./LanguagePhoneDropdown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./footer.css";
import Image from "next/image";
function Footer() {
  return (
    <article className="p-4 bg-gradient-to-b from-slate-gray to-dark-slate-gray text-white">
      <section className="text-center">
        <h2 className="text-[1.25rem] mt-8">Contact Us</h2>
        <h3 className="text-[1.75rem] mb-4">(800) 300-1506</h3>

        <LanguagesPhoneDropdown />

        <h4 className="mt-6">Service Center Hours</h4>
        <p>
          Monday to Friday: 8 a.m. to 6 p.m. <br />
          Saturday and Sunday: Closed
        </p>

        <h4 className="mt-20">New Customers</h4>
        <a className="font-bold mb-4 block" href="">
          Get a call back from a licensed agent.{" "}
          <ArrowForwardIcon fontSize="inherit" />
        </a>

        <hr />
      </section>
      <section className="flex flex-col items-center ">
        <h4>Follow Us</h4>
        <div className="flex items-center gap-6 mt-6">
          <a href="">
            <Image
              src="/assets/images/Footer/f_logo_white.png"
              width={27}
              height={27}
              alt="facebook logo"
            />
          </a>
          <a href="">
            <Image
              src="/assets/images/Footer/twitter_logo_white.png"
              width={27}
              height={27}
              alt="twitter logo"
            />
          </a>
          <a href="">
            <Image
              src="/assets/images/Footer/yt_logo_white.png"
              width={85}
              height={27}
              alt="youtube logo"
            />
          </a>
          <a href="">
            <Image
              src="/assets/images/Footer/insta_logo_white.png"
              width={27}
              height={27}
              alt="Instagram logo"
            />
          </a>
        </div>
      </section>
      <hr />
      <section className="flex gap-8">
        <div>
          <h4>Shop</h4>
          <hr />
          <ul>
            <li>Shop and Compare</li>
            <li>Find an Enroller</li>
            <li>Apply</li>
          </ul>
          <h4>My Account</h4>
          <hr />
          <ul>
            <li>Sign In</li>
            <li>Create an Account</li>
          </ul>
          <ul className="font-bold">
            <li>Covered California for Small Business</li>
            <li>Enrollment Partners and Agents</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Register to Vote</li>
          </ul>
        </div>
        <div>
          <h4>Learn</h4>
          <hr />
          <ul>
            <li>Learning Center</li>
            <li>Support</li>
            <li>Health</li>
            <li>Dental</li>
            <li>Vision</li>
            <li>Members</li>
            <li>What is Covered California?</li>
            <li>American Indians and Alaska Natives</li>
            <li>Health Care Blog</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
export default Footer;
