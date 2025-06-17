import { Outlet } from "react-router-dom";

// Componente creado por Tomás

export default function HeaderFooter() {
  return (
    <>
      <div className="bg-[#0f47ad] w-full h-[70px] fixed flex items-center justify-between z-10">
        <div className="bg-[url(/logo-funval.png)] bg-cover bg-center h-[50px] w-[150px] rounded-xl ml-[10px]"></div>
        <button>
          <img
            className="w-[40px] mr-[10px] hover:cursor-pointer hover:scale-115 ease-in-out duration-100"
            src="/person-circle.svg"
            alt="profile image"
          />
        </button>
      </div>
      <Outlet />
      <div className="bg-[#0f47ad] w-full h-[300px] mt-[18px] grid grid-cols-1 place-items-center grid-rows-[80px_80px_1fr]">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-[#fff] text-[18px]">Contáctanos</h3>
          <div className="flex gap-1">
            <button className="w-[40px] h-[40px] bg-[#fff] rounded-lg hover:cursor-pointer hover:scale-115 ease-in-out duration-100">
              <a
                className="flex justify-center"
                href="https://www.fundaciondevalores.org/"
                target="blank"
              >
                <img
                  className="w-[30px]"
                  src="/world.svg"
                  alt="instagram logo"
                />
              </a>
            </button>
            <button className="w-[40px] h-[40px] bg-[#fff] rounded-lg hover:cursor-pointer hover:scale-115 ease-in-out duration-100">
              <a className="flex justify-center" href="tel:+502 2293-0321">
                <img
                  className="w-[30px]"
                  src="/telephone.svg"
                  alt="instagram logo"
                />
              </a>
            </button>
            <button className="w-[40px] h-[40px] bg-[#fff] rounded-lg hover:cursor-pointer hover:scale-115 ease-in-out duration-100">
              <a
                className="flex justify-center"
                href="mailto:itsupport@fundaciondevalores.org"
              >
                <img
                  className="w-[30px]"
                  src="/envelope.svg"
                  alt="instagram logo"
                />
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-[#fff] text-[18px]">Síganos</h3>
          <div className="flex gap-1">
            <button className="w-[40px] h-[40px] bg-[#fff] rounded-lg hover:cursor-pointer hover:scale-115 ease-in-out duration-100">
              <a
                className="flex justify-center"
                href="https://www.facebook.com/fundet?mibextid=LQQJ4d"
                target="blank"
              >
                <img
                  className="w-[30px]"
                  src="/facebook.svg"
                  alt="instagram logo"
                />
              </a>
            </button>
            <button className="w-[40px] h-[40px] bg-[#fff] rounded-lg hover:cursor-pointer hover:scale-115 ease-in-out duration-100">
              <a
                className="flex justify-center"
                href="https://www.youtube.com/channel/UC3mlp-KW6mSDrsfsp8OOlIQ"
                target="blank"
              >
                <img
                  className="w-[30px]"
                  src="/youtube.svg"
                  alt="instagram logo"
                />
              </a>
            </button>
            <button className="w-[40px] h-[40px] bg-[#fff] rounded-lg hover:cursor-pointer hover:scale-115 ease-in-out duration-100">
              <a
                className="flex justify-center"
                href="https://www.instagram.com/funvalinternacional/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="blank"
              >
                <img
                  className="w-[30px]"
                  src="/instagram.svg"
                  alt="instagram logo"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
