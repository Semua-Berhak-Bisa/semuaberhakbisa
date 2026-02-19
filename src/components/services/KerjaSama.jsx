import { useNavigate } from "react-router-dom";

export default function KerjaSama({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!data) {
      navigate("/404");
    }
  };
  return (
    <section className="w-full flex justify-center px-6 py-20 md:px-12 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <div className="flex flex-wrap justify-center">
          <h2 className="w-full font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Ingin Bekerja Sama?
          </h2>
          <p className="text-center mt-2 md:text-base text-black-soft dark:text-light mb-10 max-w-md md:max-w-xl">
            Tertarik berkolaborasi bersama kami dalam program pendidikan dan
            pengembangan skill? Mari wujudkan dampak positif bersama.
          </p>

          <div className="w-full flex justify-center">
            <button
              onClick={handleClick}
              className="btn-template font-semibold md:text-sm"
            >
              Diskusi Kolaborasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
