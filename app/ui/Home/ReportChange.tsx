import { Suspense } from "react";
import { useTranslations } from "next-intl";
import VideoSkeleton from "../components/VideoSkeleton";

function ReportChange() {
  const t = useTranslations("home.Reportchange");

  return (
    <article className="flex flex-col items-center gap-8 pb-16 mx-auto max-w-4xl">
      <h2 className="mt-12">{t("title")}</h2>
      <p className="text-center -mt-4 px-8">
        {t("subtitle")}
        <a className="text-primary underline" href="">
          {t("subtitleLink")}
        </a>
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Suspense fallback={<VideoSkeleton />}>
          <iframe
            className="rounded-xl"
            width="364"
            height="208"
            src="https://www.youtube.com/embed/22bCxigeJEE?si=0VCEuEP1NDDRQRWr"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Suspense>

        <div className="flex flex-col items-center gap-2 ">
          <a
            className=" bg-primary text-white text-lg font-semibold h-16 w-44 rounded-lg flex items-center justify-center"
            href=""
          >
            {t("reportOnline")}
          </a>

          <p className="text-lg">{t("or")}</p>

          <p className="text-primary font-bold text-2xl">
            {t("call")}: (800) 300-1506
          </p>
        </div>
      </div>
    </article>
  );
}
export default ReportChange;
