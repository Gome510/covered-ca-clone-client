import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/utils";

const colors: { [key: string]: string } = {
  bronze: "bg-bronze",
  silver: "bg-silver",
  gold: "bg-gold",
  platinum: "bg-platinum",
};

type OptionCardProps = {
  name: string;
  description: string;
  coverage: string;
  premiums: string;
  outOfPocket: string;
};

function OptionCard({
  name,
  description,
  coverage,
  premiums,
  outOfPocket,
}: OptionCardProps) {
  return (
    <div className={` w-64 ${colors[name]} rounded-xl py-4 mt-4 mb-10 mx-auto`}>
      <div className="bg-white h-full px-4 ">
        <div className="flex justify-between pt-4 font-bold mb-4">
          <div>
            <p>Covered California</p>
            <h3>{capitalizeFirstLetter(name)}</h3>
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
            <strong className="text-primary block mb-2">{premiums}</strong>
            <p>Out-of-Pocket</p>
            <strong className="text-primary">{outOfPocket}</strong>
          </div>
          <Image
            src={`/assets/images/CoverageOptions/${name}.svg`}
            height={120}
            width={111.5}
            alt={`Pie chart with '${coverage}% coverage' inside`}
          />
        </div>
        <p className="text-xs mt-8">{description}</p>

        <div className="flex justify-center">
          <Link
            href={`/${name}`}
            className=" bg-primary font-bold text-white text-center rounded-full py-1 my-4 w-40"
          >
            Learn More 🡢
          </Link>
        </div>
      </div>
    </div>
  );
}
export default OptionCard;
