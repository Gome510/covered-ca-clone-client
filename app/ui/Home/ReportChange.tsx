function ReportChange() {
  return (
    <div className="flex flex-col items-center">
      <h2>Need to Report a Change?</h2>
      <p>
        Not sure? Watch the video below or{" "}
        <a href=""> click here to learn more.</a>
      </p>
      <iframe
        className="rounded-xl"
        width="364"
        height="208"
        src="https://www.youtube.com/embed/-d6qoR5N7GM?si=EYOMW8zfiXru1icY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default ReportChange;
