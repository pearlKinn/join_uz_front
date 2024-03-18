import PhoneNumberAuthentication from "@/app/ui/phoneNumberAuthentication";
import TitleHeader from "@/components/titleHeader/titleHeader";

const AuthenticationCodeRequestPage = () => {
  return (
    <section className="min-w-[360px] h-lvh flex flex-col px-4">
      <TitleHeader
        title="비밀번호 찾기"
        subTitle="비밀번호 찾기"
        description="가입 시 등록한 휴대폰 전화를 입력해주세요."
      />
      <main className="flex flex-col items-center">
        <PhoneNumberAuthentication>
          <progress
            className="w-[328px] h-1 bg-gray-300 mb-3"
            id="progress"
            value={100 / 3}
            max="100"
          />
        </PhoneNumberAuthentication>
      </main>
    </section>
  );
};

export default AuthenticationCodeRequestPage;
