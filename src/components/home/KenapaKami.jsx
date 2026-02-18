export default function KenapaKami() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <div className="mb-10">
          <h2 className="font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Kenapa <span className="text-firstcol">#SemuaBerhakBisa</span>{" "}
            Akademi?
          </h2>
          <p className="text-center mt-2 md:text-base text-black-soft dark:text-light max-w-md md:max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full md:w-[75%] flex justify-between items-start flex-wrap">
          <div className="w-full space-y-3">
            <Item title="Belajar fleksibel kapan dan dimana saja">
              Belajar dapat dilakukan kapan saja sesuai waktu yang kamu miliki.
            </Item>
            <Item title="Metode pembelajaran offline & online">
              Tersedia metode pembelajaran tatap muka dan daring.
            </Item>
            <Item title="Belajar gratis dengan mentor berpengalaman">
              Mentor memiliki pengalaman profesional dan aktif di bidangnya.
            </Item>
            <Item title="Terdapat 4 bidang yang bisa kamu pelajari">
              Bidang disesuaikan dengan kebutuhan industri.
            </Item>
            <Item title="Panduan pembelajaran">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
              recusandae.
            </Item>
            <Item title="Bagaimana cara mendaftar belajar gratis?">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
              recusandae.
            </Item>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ title, children }) {
  return (
    <details className="group bg-light dark:bg-dark-gray rounded-lg p-4">
      <summary className="select-none flex cursor-pointer list-none items-center justify-between text-sm md:text-base">
        {title}
        <span className="transition-transform group-open:rotate-180">
          <i class="fa-solid text-[16px] text-black-soft dark:text-light transition-all duration-500 ease md:text-lg">
            
          </i>
        </span>
      </summary>
      <p className="mt-3 md:text-sm">{children}</p>
    </details>
  );
}
