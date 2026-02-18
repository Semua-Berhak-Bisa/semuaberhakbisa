import { NavLink } from "react-router-dom";
import offline from "../../assets/img/offline.webp";
import online from "../../assets/img/online.webp";

export default function MetodeBelajar() {
  return (
    <section className="bg-light dark:bg-dark-gray w-full flex justify-center px-6 py-16 md:px-10 md:py-20">
      <div className="container flex flex-wrap justify-between gap-10">
        <div className="w-full lg:w-2/5">
          <h2 className="text-2xl font-inter font-bold text-black-soft dark:text-light leading-tight md:text-3xl">
            Metode Belajar{" "}
            <span className="text-firstcol">#SemuaBerhakBisa</span>
          </h2>
          <p className="mt-2 mb-6 text-black-soft dark:text-light max-w-md md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
            tellus.
          </p>
          <NavLink
            to="/layanan"
            className="btn-template font-semibold md:text-sm"
          >
            Lihat Layanan
          </NavLink>
        </div>

        <div className="w-full lg:w-11/20 space-y-6">
          <Card
            img={offline}
            title="Metode Belajar Online"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Card
            img={online}
            title="Metode Belajar Offline"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ img, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex gap-6 items-center">
      <img src={img} alt={title} className="w-20" />
      <div>
        <h3 className="font-semibold text-black-soft text-base md:text-lg">
          {title}
        </h3>
        <p className="mt-2 md:text-sm text-black-soft">{desc}</p>
      </div>
    </div>
  );
}
