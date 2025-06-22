import timhortons from "../assets/timhortons.svg";
import wildandthemoon from "../assets/wildandthemoon.svg";
import punjabgrill from "../assets/punjabgrill.svg";
import aj from "../assets/aj.svg";
import zaza from "../assets/zaza.svg";
import genesis from "../assets/genesis.svg";
import hyundai from "../assets/hyundai.svg";
import tata from "../assets/tata.svg";
import mignas from "../assets/mignas.svg";
import rewind from "../assets/rewind.svg";
import eos from "../assets/eos.svg";
import alkabban from "../assets/alkabban.svg";
import dayls from "../assets/dayls.svg";
import orshana from "../assets/oshana.svg";
import zoya from "../assets/zoya.svg";
import m from "../assets/m.svg";
import simplyfy from "../assets/simplyfy.svg";
import apt from "../assets/apt.svg";
import timeless from "../assets/timeless.svg";
import missan from "../assets/missan.svg";
import govt from "../assets/govt.svg";
import jwelex from "../assets/jwelex.svg";
import petrepblic from "../assets/petreblic.svg";
import mnv from "../assets/mnv.svg";
import blackfox from "../assets/blackfox.svg";
import bankai from "../assets/bankai.svg";
import something from "../assets/something.svg";
import bpi from "../assets/bpi.svg";

const companyLogos = [
  timhortons,
  wildandthemoon,
  punjabgrill,
  aj,
  zaza,
  genesis,
  hyundai,
  tata,
  mignas,
  rewind,
  eos,
  alkabban,
  dayls,
  orshana,
  zoya,
  m,
  simplyfy,
  apt,
  timeless,
  missan,
  govt,
  jwelex,
  petrepblic,
  mnv,
  blackfox,
  bankai,
  something,
  bpi,
];

const CompanyLogos = ({ className }) => {
  const logos = companyLogos.concat(companyLogos); // double for scroll loop

  return (
      <div className={`w-screen overflow-hidden py-6 ${className}`}>
        <h5 className="tagline mb-4 text-center text-n-[2.5rem]">
          Helping people create beautiful content at
        </h5>
      
      <div
        className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-[4.9rem] w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default CompanyLogos;
