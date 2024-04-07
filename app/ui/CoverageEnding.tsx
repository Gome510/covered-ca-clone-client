import Image from "next/image";

function CoverageEnding() {
  return (
    <div className="h-[700px] px-4">
      <img
        className="m-auto mt-16"
        src="/assets/images/MediCalCalendar-1.svg"
        alt="Medi-Cal Logo and Calendar"
      />

      <h2 className="text-2xl font-bold mt-8 px-4">
        Is your Medi-Cal coverage ending?
      </h2>

      <p className="mt-6 px-4">
        <strong>If you got a notice</strong> saying you have a new plan through
        Covered California after losing Medi-Cal, you'll need to complete
        enrollment. You can, change or cancel this plan now.
      </p>

      <button className="bg-primary rounded-full w-full py-2 text-white mt-10">
        Continue
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
          <strong>
            Will <i>you</i> be affected by the upcoming changes to Medi-Cal?
          </strong>
          <p>
            <a
              className="underline text-primary"
              href="https://www.coveredca.com/keep-your-coverage/"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CoverageEnding;
