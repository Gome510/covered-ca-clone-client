import Image from "next/image";
import { useTranslations } from "next-intl";

function CoverageEnding() {
  const t = useTranslations("home.CoverageEnding");

  return (
    <article className="h-[700px] px-4 mx-auto max-w-4xl">
      <Image
        className="m-auto mt-16"
        width={165}
        height={152}
        src="/assets/images/MediCalCalendar-1.svg"
        alt="Medi-Cal Logo and Calendar"
      />

      <h2 className="text-2xl font-bold mt-8 px-4">{t("title")}</h2>

      <p className="mt-6 px-4">
        <strong>{t("subtitle")}</strong>
      </p>

      <button className="bg-primary rounded-full w-full py-2 text-white mt-10">
        {t("continue")}
      </button>

      <div className="h-0.5 rounded-full bg-gray-100 mt-6 mx-4"></div>

      <div className="flex mt-6 px-4 items-start">
        <Image
          src="/assets/images/mental-health.svg"
          width={50}
          height={50}
          alt="Outline of a person's head with a question mark inside"
        />

        <div className="ml-8">
          <strong>{t("affected")}</strong>
          <p>
            <a
              className="underline text-primary"
              href="https://www.coveredca.com/keep-your-coverage/"
            >
              {t("learnMore")}
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
export default CoverageEnding;
