import Image from "next/image";

function BronzePlan() {
  return (
    <>
      <section className="text-center mb-16">
        <Image
          src="/assets/images/BronzePlan/bronze.svg"
          height={205}
          width={191}
          className="m-auto mt-12 mb-8"
          alt="60% Coverage"
        />
        <h1 className="text-4xl font-bold mb-4">Bronze Coverage</h1>
        <p className="text-xl mx-4">
          Didn&apos;t go to the doctor much last year? Looking for a plan that
          offers free services and protection in case something goes wrong? A
          Bronze plan could work for you, but expect big deductibles.
        </p>
      </section>
      <section className="bg-gradient-to-b from-bronze to-orange pt-12 px-4 pb-20 text-center">
        <h2 className="text-white mx-4 mb-12">
          Select Bronze Plan Type to see Details
        </h2>
        <div className="p-6 rounded-lg bg-white text-left">
          <h3 className="font-bold mb-2"> Standard Bronze Plan</h3>
          <p className=" mb-2">
            Bronze plans typically have the lowest monthly premiums but the
            highest costs when you get care.
          </p>
          <p>
            The first three non-preventive doctor visits are not subject to a
            deductible.
          </p>

          <div className="flex justify-center">
            <a
              className="bg-primary text-white text-center text-sm rounded-full w-40 py-2 my-8"
              href=""
            >
              Standard Bronze
            </a>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-white text-left mt-6">
          <h3 className="font-bold mb-2">
            {" "}
            High Deductible (HDHP) Bronze Plan
          </h3>
          <p className=" mb-2">
            The only plan type you can combine with an HSA to pay for certain
            services tax-free. You&apos;ll have to pay the full cost for
            non-preventive services until you meet your deductible.
          </p>

          <div className="flex justify-center">
            <a
              className="bg-primary text-white text-center text-sm rounded-full w-40 py-2 my-8"
              href=""
            >
              HDHP Bronze
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default BronzePlan;
