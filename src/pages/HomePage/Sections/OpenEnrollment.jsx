import React from "react";
import "./OpenEnrollment.css";

import OpenEnrollForm from "./OpenEnrollForm";
import QuickQuote from "./QuickQuote";

function OpenEnrollment() {
  return (
    <section className="bg-denim px-8 flex flex-col items-center text-center pt-6 gap-2">
      <h3 className="font-bold text-gold text-lg">Open Enrollment</h3>
      <h2 className="font-bold text-3xl">
        Your well-being and <br />
        financial health matter.
      </h2>
      <p>
        You could get great health insurance for <br /> $10 a month or less
        through Covered <br /> California, or for free through Medi-Cal.
      </p>
      <div className="md:flex">
        <OpenEnrollForm />
        <QuickQuote />
      </div>
    </section>
  );
}

export default OpenEnrollment;
