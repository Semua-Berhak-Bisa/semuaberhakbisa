import { useState } from "react";

export default function Layanan() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const services = [
    {
      title: "Front-end Web Dasar",
      category: "pemrograman",
      col: "firstcol",
      tag: "Pemrograman",
      iconType: "fa-solid",
      logo: "",
      materi: ["HTML", "CSS", "JavaScript", "Project Sederhana"],
    },
    {
      title: "Bahasa Pemrograman Dasar",
      category: "pemrograman",
      col: "firstcol",
      tag: "Pemrograman",
      iconType: "fa-solid",
      logo: "",
      materi: ["Bahasa Pemrograman Python", "Bahasa Pemrograman PHP"],
    },
    {
      title: "Adobe Photoshop",
      category: "design",
      col: "secondcol",
      tag: "Desain Grafis",
      iconType: "fa-solid",
      logo: "",
      materi: [
        "Retouching gambar",
        "Konten media sosial",
        "Materi Pemasaran",
        "Manipulasi Foto Surealis",
        "Desain produk/mockup",
      ],
    },
    {
      title: "Adobe Ilustrator",
      category: "design",
      col: "secondcol",
      tag: "Desain Grafis",
      iconType: "fa-solid",
      logo: "",
      materi: ["Desain logo", "Brand guidlines", "Desain Vektor 2d"],
    },
    {
      title: "Figma",
      category: "design",
      col: "secondcol",
      tag: "Desain Grafis",
      iconType: "fa-solid",
      logo: "",
      materi: ["UX research", "UI Guidlines", "Design Thinking"],
    },
    {
      title: "Cisco Packet Tracer",
      category: "jaringan",
      col: "thirdcol",
      tag: "Jaringan Komputer",
      iconType: "fa-solid",
      logo: "",
      materi: [
        "Dasar Jaringan",
        "IP Address & Subnetting",
        "Switch & VLAN",
        "Routing",
        "Inter-VLAN, NAT & ACL",
        "Wireless & Server",
      ],
    },
    {
      title: "WinBox Mikrotik",
      category: "jaringan",
      col: "thirdcol",
      tag: "Jaringan Komputer",
      iconType: "fa-solid",
      logo: "",
      materi: [
        "Pengenalan MikroTik & Winbox",
        "IP Address & Subnetting",
        "DHCP & DNS",
        "Routing & Gateway",
        "NAT & Firewall",
        "Manajemen Bandwidth",
        "Wireless",
        "Bridge & VLAN",
        "Hotspot & PPP",
      ],
    },

    {
      title: "Microsoft Word",
      category: "office",
      col: "fourthcol",
      tag: "Microsoft Office",
      iconType: "fa-brands",
      logo: "",
      materi: [
        "Pengenalan Microsoft Word",
        "Pengetikan, editing, font & paragraf",
        "Page setup, header, footer, nomor halaman",
        "Tabel, gambar, shape & text box",
        "Styles, heading, daftar isi & section break",
        "Sitasi dan referensi otomatis menggunakan Mendeley",
      ],
    },
    {
      title: "Microsoft Excel",
      category: "office",
      col: "fourthcol",
      tag: "Microsoft Office",
      iconType: "fa-brands",
      logo: "",
      materi: [
        "Pengenalan Microsoft Excel & manajemen worksheets",
        "Rumus & fungsi dasar",
        "Fungsi lanjutan, sort, filter & conditional formatting",
        "Chart, grafik & visualisasi data",
        "Pivot table, data validation & analisis data",
      ],
    },
    {
      title: "Microsoft Powerpoint",
      category: "office",
      col: "fourthcol",
      tag: "Microsoft Office",
      iconType: "fa-brands",
      logo: "",
      materi: [
        "Antarmuka PowerPoint, slide & layout",
        "Tema, background & konsistensi desain",
        "Teks, gambar, shape, icon & align",
        "Slide master, transition & animation",
        "Multimedia, hyperlink & interaksi",
        "Presenter view, export & teknik presentasi",
      ],
    },
  ];

  return (
    <section className="w-full flex justify-center px-6 py-10 md:px-12 md:py-12">
      <div className="container">
        <div className="flex flex-wrap justify-between space-y-6 md:space-x-10">
          <div className="w-full md:w-[30%]">
            <div className="mb-2">
              <h2 className="text-2xl font-inter font-bold text-black-soft dark:text-light leading-tight md:text-3xl">
                Materi Belajar <br />
                <span className="text-firstcol">#SemuaBerhakBisa</span>
              </h2>
            </div>

            {/* sm layout */}
            <div className="space-x-2 space-y-3 md:hidden">
              <button
                onClick={() => handleFilter("all")}
                className={`filter-btn ${activeFilter === "all" ? "active" : ""} w-fit rounded-full border border-firstcol px-3 py-1.5 text-[10px] hover:bg-transparent transition cursor-pointer`}
              >
                Lihat Semua
              </button>

              <button
                onClick={() => handleFilter("pemrograman")}
                className={`filter-btn ${
                  activeFilter === "pemrograman" ? "active" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-[10px] hover:bg-transparent transition cursor-pointer`}
              >
                Pemrograman
              </button>

              <button
                onClick={() => handleFilter("design")}
                className={`filter-btn ${
                  activeFilter === "design" ? "active" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-[10px] hover:bg-transparent transition cursor-pointer`}
              >
                Desain Grafis
              </button>

              <button
                onClick={() => handleFilter("jaringan")}
                className={`filter-btn ${
                  activeFilter === "jaringan" ? "active" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-[10px] hover:bg-transparent transition cursor-pointer`}
              >
                Jaringan Komputer
              </button>

              <button
                onClick={() => handleFilter("office")}
                className={`filter-btn ${
                  activeFilter === "office" ? "active" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-[10px] hover:bg-transparent transition cursor-pointer`}
              >
                Microsoft Office
              </button>
            </div>

            {/* md layout */}
            <div className="space-y-3 hidden md:block">
              <button
                onClick={() => handleFilter("all")}
                className={`filter-btn ${activeFilter === "all" ? "active" : ""} w-full rounded-sm border text-left px-4 py-2 text-sm hover:bg-transparent transition cursor-pointer`}
              >
                Lihat Semua
              </button>

              <button
                onClick={() => handleFilter("pemrograman")}
                className={`filter-btn ${
                  activeFilter === "pemrograman" ? "active" : ""
                } w-full rounded-sm border text-left px-4 py-2 text-sm hover:bg-transparent transition cursor-pointer`}
              >
                Pemrograman
              </button>

              <button
                onClick={() => handleFilter("design")}
                className={`filter-btn ${
                  activeFilter === "design" ? "active" : ""
                } w-full rounded-sm border text-left px-4 py-2 text-sm hover:bg-transparent transition cursor-pointer`}
              >
                Desain Grafis
              </button>

              <button
                onClick={() => handleFilter("jaringan")}
                className={`filter-btn ${
                  activeFilter === "jaringan" ? "active" : ""
                } w-full rounded-sm border text-left px-4 py-2 text-sm hover:bg-transparent transition cursor-pointer`}
              >
                Jaringan Komputer
              </button>

              <button
                onClick={() => handleFilter("office")}
                className={`filter-btn ${
                  activeFilter === "office" ? "active" : ""
                } w-full rounded-sm border text-left px-4 py-2 text-sm hover:bg-transparent transition cursor-pointer`}
              >
                Microsoft Office
              </button>
            </div>
          </div>

          <div className="w-full md:w-[65%] space-y-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                category={service.category}
                activeFilter={activeFilter}
                title={service.title}
                col={service.col}
                tag={service.tag}
                iconType={service.iconType}
                logo={service.logo}
                materi={service.materi}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  category,
  activeFilter,
  title,
  col,
  tag,
  iconType,
  logo,
  materi,
}) {
  if (activeFilter !== "all" && activeFilter !== category) {
    return null;
  }

  return (
    <div className="service-card">
      <div
        className={`card flex flex-wrap border-2 border-${col} rounded-xl shadow-sm`}
      >
        <div
          className={`w-full border-b-2 border-${col} px-3 pb-4 pt-7 flex flex-wrap justify-between md:w-[40%] md: md:border-r-2 md:border-b-0 md:px-5 md:py-7`}
        >
          <div className="w-[65%] md:w-full">
            <h3 className="text-lg/5 font-bold mb-2 md:text-xl">{title}</h3>

            <div className="flex items-center space-x-1">
              <div
                className={`w-6 h-6 flex justify-center items-center rounded-full bg-${col}`}
              >
                <i
                  className={`${iconType} text-xs text-light transition-all duration-500 ease md:text-sm`}
                >
                  {logo}
                </i>
              </div>
              <p className={`text-${col} font-semibold text-sm md:text-base`}>
                {tag}
              </p>
            </div>
          </div>

          <div className="mt-2 md:mt-8">
            <a
              href="#"
              className={`btn-template bg-${col} border-${col} hover:bg-transparent`}
            >
              Mulai Belajar
            </a>
          </div>
        </div>

        <div className="px-3 pt-4 pb-7 md:px-5 md:py-7">
          <h4 className="font-semibold text-base md:text-lg">
            Pilihan Materi :
          </h4>

          <ol className="block">
            <Materi items={materi} />
          </ol>
        </div>
      </div>
    </div>
  );
}

function Materi({ items }) {
  return (
    <ol className="block">
      {items.map((item, index) => (
        <li key={index}>
          <p className="md:text-sm">
            {index + 1}. {item}
          </p>
        </li>
      ))}
    </ol>
  );
}
