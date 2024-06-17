"use client";
import OptionCard from "./components/OptionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/a11y";

import { useTranslations } from "next-intl";
import planData from "../../../data/plans.json";

function CoverageOptions() {
  const t = useTranslations("home.CoverageOptions");

  return (
    <article
      id="coverage-options"
      className="bg-gradient-to-b from-primary to-denim shadow-md"
    >
      <div className="flex flex-col items-center mx-auto max-w-4xl">
        <h2 className="text-white mt-12">{t("title")}</h2>
        <p className="text-center text-white mx-8 mt-2">{t("subtitle")}</p>
        <div className="w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets" }}
            keyboard
            slidesPerView={1}
            modules={[Navigation, Pagination, A11y, Keyboard]}
          >
            {planData.map((plan) => (
              <SwiperSlide key={plan.name}>
                <OptionCard {...plan} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-between w-full px-8 mb-12 gap-12">
          <button
            className="bg-white rounded-full h-8 w-1/2 font-bold text-primary"
            type="button"
          >
            {t("apply")}
          </button>
          <button
            className="bg-white rounded-full h-8 w-1/2 font-bold text-primary"
            type="button"
          >
            {t("changePlan")}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CoverageOptions;
