function ReportChange() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="mt-12">Need to Report a Change?</h2>
      <p className="text-center px-8">
        Not sure? Watch the video below or{" "}
        <a className="text-primary underline" href="">
          click here to learn more.
        </a>
      </p>
      <iframe
        className="rounded-xl"
        width="364"
        height="208"
        src="https://www.youtube.com/embed/-d6qoR5N7GM?si=EYOMW8zfiXru1icY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <a
        className=" bg-primary text-white text-lg font-semibold h-16 w-44 rounded-lg flex items-center justify-center"
        href=""
      >
        Report Online
      </a>

      <p>or</p>

      <p className="">Call: (800) 300-1506</p>
    </div>
  );
}
export default ReportChange;
