import Image from "next/image";
import Logo from "../../assets/CCA-Logo-mobile.svg";
import "./deadlines.css";

function Deadlines() {
  return (
    <article className="bg-dark-slate-gray p-4 pt-2">
      <div className="flex justify-between my-4 font-bold">
        <p className="text-white">Coming Soon</p>
        <p className="text-gold underline">
          <a href="">see all</a>
        </p>
      </div>
      <section className="flex bg-white rounded-lg mb-8">
        <div className="flex justify-center items-center bg-lavender min-w-28 rounded-l-lg min-h-28">
          <Logo className="text-primary" width={55} height={70} />
        </div>
        <div className="flex flex-col p-4 font-bold">
          <p>Feb. 29</p>
          <h3>Deadline for Coverage Starting March 1</h3>
        </div>
      </section>
      <section className="rounded-lg border border-primary ">
        <div className="text-white text-center rounded-t-lg bg-gradient-to-b from-dark-slate-gray to-primary pt-12">
          <h2 className="text-[1.6875rem] mb-2">Never miss a deadline.</h2>
          <p className="mb-4">
            Sign up for email updates to get <br />
            deadline reminders and other
            <br />
            important information
          </p>
          <Image
            src="/assets/images/Deadlines/arrow-tip-mobile.svg"
            width={402}
            height={42}
            alt=""
          />
        </div>

        <form
          className="bg-white flex flex-col rounded-b-lg -mt-1 px-8 pb-2"
          action=""
        >
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="e.g. John" />
          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" placeholder="12345" />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="youremail@example.com"
            required
          />
          <p className="text-xs mb-4">* required</p>
          <button
            className="bg-primary rounded-full text-white text-sm py-2 w-3/5 m-auto"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </section>
    </article>
  );
}
export default Deadlines;
