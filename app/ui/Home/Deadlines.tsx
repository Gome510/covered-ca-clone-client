import Image from "next/image";

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
        <Image
          src={"/assets/images/CCA-Logo-mobile.svg"}
          height={50}
          width={50}
          alt="Covered California Logo"
        />
        <div className="flex flex-col">
          <p>Feb. 29</p>
          <p>Deadline for Coverage Starting March 1</p>
        </div>
      </div>
    </div>
  );
}
export default Deadlines;
