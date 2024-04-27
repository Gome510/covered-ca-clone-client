import { Suspense } from "react";
import VideoSkeleton from "../components/VideoSkeleton";
function ReportChange() {
  return (
    <div className="flex flex-col items-center gap-8 pb-16">
      <h2 className="mt-12">Need to Report a Change?</h2>
      <p className="text-center px-8">
        Not sure? Watch the video below or{" "}
        <a className="text-primary underline" href="">
          click here to learn more.
        </a>
      </p>
      <Suspense
        fallback={
          <VideoSkeleton
            src="/assets/images/ReportChange/mqdefault.jpg"
            width={364}
            height={208}
            alt="Reporting Changes to Covered California"
          />
        }
      >
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
          Report Online
        </a>

        <p className="text-lg">or</p>

        <p className="text-primary font-bold text-2xl">Call: (800) 300-1506</p>
      </div>
    </div>
  );
}
export default ReportChange;
