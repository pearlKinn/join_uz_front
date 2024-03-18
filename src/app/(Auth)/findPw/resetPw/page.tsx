import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TitleHeader from "@/components/titleHeader/titleHeader";

const resetPw = () => {
  return (
    <section className="min-w-[360px] h-lvh flex flex-col px-4">
      <TitleHeader
        title="비밀번호 재설정"
        subTitle="비밀번호를 다시 설정해주세요."
        description="비밀번호는 8~20자의 영문, 숫자, 특수문자를 포함해야 합니다."
      />
      <main className="flex flex-col items-center">
        <div className="relative">
          <Input type="password" id="password" placeholder="비밀번호 입력" />
          <span className="text-gray400 textXS absolute bottom-0 left-[10px]">
            영문, 숫자, 특수문자(-!@#$%^&^) 조합 8~20자리
          </span>
        </div>
        <Input type="password" id="checkPassword" placeholder="비밀번호 입력" />
        <progress
          className="w-[328px] h-1 bg-gray-300 mb-3"
          id="progress"
          value={100 / 3}
          max="100"
        />
        <Button type="submit" StyleType="cta" size="xl">
          비밀번호 변경
        </Button>
      </main>
    </section>
  );
};

export default resetPw;
