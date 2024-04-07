import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function CoverageOptions() {
  return (
    <div
      id="coverage-options"
      className="flex flex-col items-center bg-gradient-to-b from-primary to-denim"
    >
      <h2 className="text-3xl text-white font-bold mt-12">
        Our Coverage Options
      </h2>
      <p className="text-lg text-center text-white mx-8 mt-2">
        Health, dental and vision care - all in one place
      </p>
      <div className="w-full flex items-center justify-between">
        <ArrowBackIosIcon htmlColor="white" />
        <div className="h-80 w-60 bg-white rounded-xl">option carousel</div>
        <ArrowForwardIosIcon htmlColor="white" />
      </div>
      <div>
        <button type="button">Apply</button>
        <button type="button">Change Plan</button>
      </div>
    </div>
  );
}
export default CoverageOptions;
