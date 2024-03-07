import Image from "next/image";

const Logo = () => {
  return (
    <div className="logoWrapper relative">
      <Image
        src="/Graphic/로고배경.svg"
        alt="로고 배경"
        width={0}
        height={0}
        className="w-full h-auto"
        priority
      />
      <Image
        className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-auto "
        src="/Graphic/함께할래로고.svg"
        alt="함께 할래"
        width={0}
        height={0}
        priority
      />
    </div>
  );
};

export default Logo;
