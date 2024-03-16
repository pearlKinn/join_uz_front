import LoginForm from "@/app/ui/login-form";
import Logo from "@/components/logo/logo";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="min-w-[360px] h-lvh flex flex-col">
      <header>
        <h1 className="sr-only">LoginPage</h1>
        <Logo />
      </header>
      <main>
        <LoginForm>
          <Link
            href="/signUp/termsOfServiceAgreement"
            className="w-[328px] h-12 text-base text-primary800 bg-primary100 text-center leading-[48px] rounded-[10px] mt-2 shadow-logoBoxShadow"
          >
            회원가입
          </Link>
          <span className="text-gray500 textSM font-semibold mt-[20.22px] mb-[15.09px]">
            OR
          </span>
          <div className="snsLoginWrapper flex gap-10">
            <Link href={""}>
              <Image
                className="shadow-logoBoxShadow rounded-full"
                src="/Icon/SNS/Name=Naver.svg"
                width={48}
                height={48}
                alt="네이버 로그인"
              />
            </Link>
            <Link href={""}>
              <Image
                className="shadow-logoBoxShadow rounded-full"
                src="/Icon/SNS/Name=Google.svg"
                width={48}
                height={48}
                alt="구글 로그인"
              />
            </Link>
          </div>
        </LoginForm>
      </main>
    </section>
  );
};

export default LoginPage;
