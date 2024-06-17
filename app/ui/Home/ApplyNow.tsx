import ForumIcon from "@mui/icons-material/Forum";
import PublicIcon from "@mui/icons-material/Public";
import ForwardIcon from "@mui/icons-material/Forward";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

function ApplyNow() {
  const t = useTranslations("home.ApplyNow");

  return (
    <article className="p-4 pt-4 h-[850px] relative overflow-hidden text-black mx-auto max-w-4xl">
      <div className="flex justify-between">
        <button className="bg-primary text-white h-10 w-24 rounded-md font-bold shadow-md">
          <ForumIcon /> Chat
        </button>
        <button className="border-black border-2 flex items-center  h-10 rounded-md px-4 shadow-md">
          <PublicIcon fontSize="medium" />
          <span className="ml-2 text-left">
            <p className="text-sm font-bold leading-3">Translate</p>{" "}
            <p className="text-[9px]">Español, 中文</p>
          </span>
        </button>
      </div>

      <h1 className=" text-5xl leading-tight font-bold mt-14">{t("title")}</h1>
      <p className="mt-4 text-xl">{t("subtitle")}</p>

      <Link
        className="flex items-center bg-denim text-white p-4 px-6 mt-10 w-52 rounded-lg font-bold text-xl shadow-md"
        href={"/apply"}
      >
        Apply now
        <div className="ml-4">
          <ForwardIcon />
        </div>
      </Link>

      <Link
        className="border-black border-2 flex items-center w-44 h-10 rounded-md px-4 shadow-md font-bold mt-16"
        href={"/apply"}
      >
        Aplica ahora
        <div className="ml-4">
          <ForwardIcon />
        </div>
      </Link>

      <Link
        className="border-black border-2 flex items-center w-40 h-10 rounded-md px-4 shadow-md font-bold mt-8 "
        href={"/apply"}
      >
        立刻申請
        <div className="ml-4">
          <ForwardIcon />
        </div>
      </Link>

      <Image
        className="absolute -z-10  -bottom-10 -right-5"
        width={340}
        height={200}
        src="/assets/images/ApplyNow/doctor-patient.svg"
        alt="Smiling mother carrying young son on her shoulders"
        loading="eager"
      />
    </article>
  );
}
export default ApplyNow;
