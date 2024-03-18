import ForumIcon from "@mui/icons-material/Forum";
import PublicIcon from "@mui/icons-material/Public";
import ForwardIcon from "@mui/icons-material/Forward";
function ApplyNow() {
  return (
    <div className="p-4 pt-4 h-[850px] relative text-black">
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

      <h1 className=" text-5xl leading-tight font-bold mt-14">
        Get affordable healthcare.
      </h1>
      <p className="mt-4 text-xl">Check your eligibility in 5 minutes.</p>

      <button className="flex items-center bg-denim text-white p-4 px-6 mt-10 rounded-lg font-bold text-xl shadow-md">
        Apply now
        <div className="ml-4">
          <ForwardIcon />
        </div>
      </button>

      <button className="border-black border-2 flex items-center  h-10 rounded-md px-4 shadow-md font-bold mt-16">
        Aplica ahora
        <div className="ml-4">
          <ForwardIcon />
        </div>
      </button>

      <button className="border-black border-2 flex items-center  h-10 rounded-md px-4 shadow-md font-bold mt-8 ">
        立刻申請
        <div className="ml-4">
          <ForwardIcon />
        </div>
      </button>

      <img
        className="absolute -z-10  bottom-0 right-0"
        fetchpriority="high"
        width={400}
        src="/assets/images/SEP-24-hero-small.webp"
        alt="Smiling mother carrying young son on her shoulders"
      />
    </div>
  );
}
export default ApplyNow;
