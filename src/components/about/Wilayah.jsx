export default function Wilayah() {
  return (
    <section class="w-full flex justify-center px-6 py-20 md:px-12 md:py-20">
      <div class="container flex justify-center flex-wrap">
        <div class="flex flex-wrap justify-center">
          <h2 class="w-full font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Zona Wilayah Offline{" "}
            <span class="text-firstcol">#SemuaBerhakBisa</span>
          </h2>
          <p class="text-center mt-2 md:text-base text-black-soft dark:text-light mb-10 max-w-md md:max-w-xl">
            Tersedia sesi pembelajaran offline di beberapa wilayah Tangerang
            untuk memudahkan akses belajar secara langsung dan interaktif.
          </p>

          <div class="w-full flex flex-wrap justify-center gap-4 md:gap-x-10 md:max-w-3xl">
            <Location loc="Kab. Tangerang" district="Kec. Sepatan"></Location>
            <Location loc="Kab. Tangerang" district="Kec. Rajeg"></Location>
            <Location
              loc="Kab. Tangerang"
              district="Kec. Sepatan Timur"
            ></Location>
            <Location
              loc="Kab. Tangerang"
              district="Kec. Pasar Kemis"
            ></Location>
            <Location loc="Kab. Tangerang" district="Kec. Mauk"></Location>
            <Location loc="Kota Tangerang" district="Kec. Karawaci"></Location>
            <Location loc="Kota Tangerang" district="Kec. Periuk"></Location>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location({ loc, district }) {
  return (
    <div class="flex justify-start items-center gap-1 w-48 px-2 py-2 border-2 border-firstcol rounded-lg">
      <i class="fa-solid text-firstcol text-xl"></i>

      <div class="text-sm">
        <p class="text-firstcol font-bold text-sm">{district}</p>
        <p class="text-xs">{loc}</p>
      </div>
    </div>
  );
}
