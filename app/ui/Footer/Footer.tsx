import LanguagesPhoneDropdown from "./LanguagePhoneDropdown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useTranslations } from "next-intl";
import Image from "next/image";
import "./footer.css";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <article className="p-4 bg-gradient-to-b from-slate-gray to-dark-slate-gray text-white">
      <div className="mx-auto max-w-4xl md:flex md:gap-8">
        <div>
          <section className="text-center">
            <h2 className="text-[1.25rem] mt-8">{t("contactUs.title")}</h2>
            <h3 className="text-[1.75rem] mb-4">
              {t("contactUs.phoneNumber")}
            </h3>

            <LanguagesPhoneDropdown />

            <h4 className="mt-6">{t("contactUs.serviceCenterHours.title")}</h4>
            <p>
              {t("contactUs.serviceCenterHours.weekdays")} <br />
              {t("contactUs.serviceCenterHours.weekends")}
            </p>

            <h4 className="mt-20">{t("newCustomers.title")}</h4>
            <a className="font-bold mb-4 block" href="">
              {t("newCustomers.description")}{" "}
              <ArrowForwardIcon fontSize="inherit" />
            </a>

            <hr />
          </section>
          <section className="flex flex-col items-center ">
            <h4>{t("followUs")}</h4>
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
        </div>
        <section className="flex gap-8">
          <div>
            <h4>{t("shop.title")}</h4>
            <hr />
            <ul>
              <li>{t("shop.shopAndCompare")}</li>
              <li>{t("shop.findAnEnroller")}</li>
              <li>{t("shop.apply")}</li>
            </ul>
            <h4>{t("myAccount.title")}</h4>
            <hr />
            <ul>
              <li>{t("myAccount.signIn")}</li>
              <li>{t("myAccount.createAnAccount")}</li>
            </ul>
            <ul className="font-bold">
              <li>{t("business.title")}</li>
              <li>{t("enrollmentPartnersAndAgents.title")}</li>
              <li>{t("newsroom.title")}</li>
              <li>{t("careers.title")}</li>
              <li>{t("registerToVote.title")}</li>
            </ul>
          </div>
          <div>
            <h4>{t("learn.title")}</h4>
            <hr />
            <ul>
              <li>{t("learn.learningCenter")}</li>
              <li>{t("support.title")}</li>
              <li>{t("support.health")}</li>
              <li>{t("support.dental")}</li>
              <li>{t("support.vision")}</li>
              <li>{t("members.title")}</li>
              <li>{t("members.whatIsCoveredCalifornia")}</li>
              <li>{t("members.americanIndiansAndAlaskaNatives")}</li>
              <li>{t("members.healthCareBlog")}</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
export default Footer;
