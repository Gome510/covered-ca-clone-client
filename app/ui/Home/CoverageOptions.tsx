import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Link from "next/link";
function CoverageOptions() {
  return (
    <article
      id="coverage-options"
      className="bg-gradient-to-b from-primary to-denim shadow-md"
    >
      <div className="flex flex-col items-center mx-auto max-w-4xl">
        <h2 className=" text-white mt-12">Our Coverage Options</h2>
        <p className=" text-center text-white mx-8 mt-2">
          Health, dental and vision care - all in one place
        </p>
        <div className="w-full flex items-center justify-between">
          <ArrowBackIosIcon htmlColor="white" />
          <div className=" w-64 bg-bronze rounded-xl py-4 mt-4 mb-10">
            <div className="bg-white h-full px-4 ">
              <div className="flex justify-between pt-4 font-bold mb-4">
                <div>
                  <p>Covered California</p>
                  <h3>Bronze</h3>
                </div>
                <Image
                  src={"/assets/images/CoverageOptions/stethoscope-icon.svg"}
                  className="pt-3"
                  width={40}
                  height={40}
                  alt="Icon of Stethoscope"
                />
              </div>
              <div className="flex justify-between items-center px-1">
                <div className="text-xs">
                  <p>Premiums</p>
                  <strong className="text-primary block mb-2">LOWEST</strong>
                  <p>Out-of-Pocket</p>
                  <strong className="text-primary">HIGHEST</strong>
                </div>
                <Image
                  src={"/assets/images/CoverageOptions/bronze.svg"}
                  height={120}
                  width={111.5}
                  alt="Pie chart with '60% coverage' inside"
                />
              </div>
              <p className="text-xs mt-8">
                Lower monthly premium if you qualify for financial help.
              </p>

              <div className="flex justify-center">
                <Link
                  href={"/bronze"}
                  className=" bg-primary font-bold text-white text-center rounded-full py-1 my-4 w-40"
                >
                  Learn More 🡢
                </Link>
              </div>
            </div>
          </div>
          <ArrowForwardIosIcon htmlColor="white" />
        </div>
        <div className="flex justify-between w-full px-8 mb-12 gap-12">
          <button
            className="bg-white rounded-full h-8 w-1/2 font-bold text-primary"
            type="button"
          >
            Apply
          </button>
          <button
            className="bg-white rounded-full h-8 w-1/2 font-bold text-primary"
            type="button"
          >
            Change Plan
          </button>
        </div>
      </div>
    </article>
  );
}
export default CoverageOptions;
