import ajril from "../../assets/img/mentor/ajril.webp";
import shandy from "../../assets/img/mentor/shandy.webp";
import rifki from "../../assets/img/mentor/rifki.webp";
import sahal from "../../assets/img/mentor/sahal.webp";
import yordan from "../../assets/img/mentor/yordan.webp";

export default function Layanan() {
  return (
    <section className="w-full flex justify-center px-6 py-20 md:px-12 md:py-20">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="mb-10 font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Mentor <span className="text-firstcol">#SemuaBerhakBisa</span>
          </h2>

          <div className="flex flex-wrap justify-center space-y-4">
            <Card
              img={ajril}
              nama="Ahmad Ajril Mumtazi"
              ig="instagram.com/ahmadajrl_"
              li="linkedin.com/in/ahmad-ajril-mumtazi-35a540369/"
              bidang="Desain Grafis"
              txt="Lorem ipsum dolor sit amet consectetur adipisicing elit
                  quisque faucibus ex sapien vitae pellentesque sem placerat in
                  id cursus mi."
              col="text-secondcol"
            ></Card>

            <Card
              img={shandy}
              nama="Shandy Dwi"
              ig="instagram.com/firshandydwi_"
              li="linkedin.com/in/firshandy-dwi-cahyo/"
              bidang="Pemrograman"
              txt="Lorem ipsum dolor sit amet consectetur adipisicing elit
                  quisque faucibus ex sapien vitae pellentesque sem placerat in
                  id cursus mi."
              col="text-firstcol"
            ></Card>

            <Card
              img={rifki}
              nama="Rifki Ardiansyah"
              ig="instagram.com/rifkiardiansyah_18"
              li="linkedin.com/in/rifki-ardiyansah-00aa7426a/"
              bidang="Jaringan Komputer"
              txt="Lorem ipsum dolor sit amet consectetur adipisicing elit
                  quisque faucibus ex sapien vitae pellentesque sem placerat in
                  id cursus mi."
              col="text-thirdcol"
            ></Card>

            <Card
              img={sahal}
              nama="Sahal Ferlyaqdhan Aufa"
              ig="instagram.com/shlll.fa"
              li="linkedin.com/in/sahal-ferlyaqdhan-aufa-858a8a318/"
              bidang="Microsoft Office"
              txt="Lorem ipsum dolor sit amet consectetur adipisicing elit
                  quisque faucibus ex sapien vitae pellentesque sem placerat in
                  id cursus mi."
              col="text-fourthcol"
            ></Card>

            <Card
              img={yordan}
              nama="Ahmad Yordan Pusilo"
              ig="instagram.com/yrdn666"
              li="linkedin.com/in/yordankece/"
              bidang="Jaringan Komputer"
              txt="Lorem ipsum dolor sit amet consectetur adipisicing elit
                  quisque faucibus ex sapien vitae pellentesque sem placerat in
                  id cursus mi."
              col="text-thirdcol"
            ></Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ img, nama, ig, li, bidang, txt, col }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="bg-white rounded-xl shadow p-4">
        <div className="w-full h-48 bg-radial from-[#115E7B] to-firstcol rounded-xl mb-4 relative">
          <img
            src={img}
            alt={nama}
            className="h-48 absolute bottom-0 left-1/2 -translate-x-1/2 object-contain"
          />
        </div>

        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-lg">{nama}</h3>
          <div className="flex gap-2">
            <a href={ig} target="_blank">
              <i className="fa-brands text-[18px]"></i>
            </a>
            <a href={li} target="_blank">
              <i className="fa-brands text-[18px]"></i>
            </a>
          </div>
        </div>

        <p className={`${col} text-sm font-semibold text-dark-gray mb-2`}>
          Mentor {bidang}
        </p>

        <p className="text-sm text-dark-gray leading-relaxed">{txt}</p>
      </div>
    </div>
  );
}
