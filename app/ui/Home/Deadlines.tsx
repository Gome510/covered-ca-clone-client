import Image from "next/image";
import { useTranslations } from "next-intl";
import Logo from "../../assets/CCA-Logo-mobile.svg";
import "./deadlines.css";

function Deadlines() {
  const t = useTranslations("home.Deadlines");

  return (
    <article className="bg-dark-slate-gray p-4 pt-2">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-between my-4 font-bold">
          <p className="text-white">{t("comingSoon")}</p>
          <p>
            <a className="text-gold underline" href="">
              {t("seeAll")}
            </a>
          </p>
        </div>
        <section className="flex bg-white rounded-lg mb-8">
          <div className="flex justify-center items-center bg-lavender min-w-28 rounded-l-lg min-h-28">
            <Logo className="text-primary" width={55} height={70} />
          </div>
          <div className="flex flex-col p-4 font-bold">
            <p>{t("deadlineDate")}</p>
            <h3>{t("deadlineTitle")}</h3>
          </div>
        </section>
        <section className="rounded-lg border border-primary ">
          <div className="text-white text-center rounded-t-lg bg-gradient-to-b from-dark-slate-gray to-primary pt-12">
            <h2 className="text-[1.6875rem] mb-2">{t("title")}</h2>
            <p className="mb-4">{t("subtitle")}</p>
            <Image
              src="/assets/images/Deadlines/arrow-tip-mobile.svg"
              className="w-full"
              width={402}
              height={42}
              alt=""
            />
          </div>

          <form
            className="bg-white flex flex-col rounded-b-lg -mt-1 px-8 pb-2"
            action=""
          >
            <label htmlFor="first-name">{t("firstName")}</label>
            <input
              type="text"
              id="first-name"
              placeholder={t("placeholderFirstName")}
            />
            <label htmlFor="zip-code">{t("zipCode")}</label>
            <input
              type="number"
              id="zip-code"
              placeholder={t("placeholderZipCode")}
            />
            <label htmlFor="email">{t("email")}</label>
            <input
              type="email"
              id="email"
              placeholder={t("placeholderEmail")}
              required
            />
            <p className="text-xs mb-4">{t("required")}</p>
            <button
              className="bg-primary rounded-full text-white text-sm py-2 w-3/5 m-auto"
              type="submit"
            >
              {t("subscribe")}
            </button>
          </form>
        </section>
      </div>
    </article>
  );
}
export default Deadlines;
