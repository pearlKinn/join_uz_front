import TitleHeader from "@/components/titleHeader/titleHeader";
import Link from "next/link";

const ViewIdPage = () => {
  return (
    <section className="min-w-[360px] h-lvh flex flex-col px-4">
      <TitleHeader title="아이디 찾기" />
      <span className="text-center text-primary600 textSM font-semibold mt-[56.54px]">
        휴대폰 번호 정보와 일치하는 아이디입니다.
      </span>
      <div className="w-[326px] h-[171px] bg-primary100 rounded flex justify-center items-center my-[20px]">
        <span>아이디: abcd****</span>
      </div>
      <progress
        className="w-[328px] h-1 bg-gray-300 mb-3"
        id="progress"
        value={100}
        max="100"
      />
      <Link
        href="/logIn"
        className="w-[328px] h-12 rounded-[10px] bg-ctaActive text-center leading-[48px] text-onColor"
      >
        로그인하러 가기
      </Link>
    </section>
  );
};

export default ViewIdPage;
