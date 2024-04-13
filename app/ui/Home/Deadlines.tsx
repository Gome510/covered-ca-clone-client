import Image from "next/image";
import Logo from "../../assets/CCA-Logo-mobile.svg";

function Deadlines() {
  return (
    <div className="bg-dark-slate-gray px-4">
      <div className="flex justify-between my-4">
        <p className="text-white">Coming Soon</p>
        <p className="text-gold">
          <a href="">see all</a>
        </p>
      </div>
      <div className="flex bg-white">
        <Logo style={{ fill: "red" }} />
        <div className="flex flex-col">
          <p>Feb. 29</p>
          <p>Deadline for Coverage Starting March 1</p>
        </div>
      </div>
    </div>
  );
}
export default Deadlines;
