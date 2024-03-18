"use client";
import Button from "@/components/button/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  return (
    <section className="min-w-[360px] h-lvh flex flex-col items-center">
      <h1 className="sr-only">회원가입 축하</h1>
      <h2 className="text-primary700 text-center text-[32px] font-bold mt-[74.5px]">
        함께할래의
      </h2>
      <h2 className="text-primary700 text-center text-[32px] font-bold">
        가입을 축하합니다!
      </h2>
      <h3 className="textSM text-center mb-[59px]">
        가족 또는 친구들과 함께 집안일을 해보세요!
      </h3>
      <Image
        src="/Graphic/가입완료일러스트.svg"
        width={400}
        height={400}
        alt="회원가입축하 일러스트"
        priority
      />
      <Button
        type="button"
        StyleType="cta"
        onClick={() => router.replace("/logIn")}
      >
        시작하기
      </Button>
    </section>
  );
};

export default SuccessPage;
