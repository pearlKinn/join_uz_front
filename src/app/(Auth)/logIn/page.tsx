"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import Logo from "@/components/logo/logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [persistLogin, setPersistLogin] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <section className="min-w-[360px] h-lvh flex flex-col">
      <header>
        <h1 className="sr-only">LoginPage</h1>
        <Logo />
      </header>
      <main>
        <form onSubmit={handleLogIn} className="flex flex-col items-center">
          <Input
            type="text"
            id="ID"
            placeholder="아이디 입력"
            defaultValue={id}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setId(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            defaultValue={password}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPassword(e.target.value)}
          />

          <div className="w-full px-4 flex justify-between mb-[28.33px]  py-[2px]">
            <div className="flex gap-3">
              <button
                type="button"
                className="w-6 h-6"
                onClick={() => setPersistLogin(!persistLogin)}
              >
                {persistLogin ? (
                  <Image
                    src="/Icon/CheckBox/Check=On, Status=Default, Size=28, Type=Gray.svg"
                    width={24}
                    height={24}
                    alt="로그인상태 유지"
                  />
                ) : (
                  <Image
                    src="/Icon/CheckBox/Check=Off, Status=Default, Size=28, Type=Gray.svg"
                    width={24}
                    height={24}
                    alt="로그인상태 해제"
                  />
                )}
              </button>
              <span
                className={`inline-block textSM font-semibold  ${
                  persistLogin ? "text-gray600" : "text-gray400"
                }`}
              >
                로그인 상태 유지
              </span>
            </div>
            <div className="flex gap-1">
              <Link
                href="/findId/authenticationCodeRequest"
                className="textSM text-gray500"
              >
                아이디
              </Link>
              <span className="textSM text-gray500">ㅣ</span>
              <Link
                href="/findPw/authenticationCodeRequest"
                className="textSM text-gray500"
              >
                비밀번호 찾기
              </Link>
            </div>
          </div>
          <Button size="xl" type="cta" disabled={id && password ? false : true}>
            로그인
          </Button>
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
        </form>
      </main>
    </section>
  );
};

export default LoginPage;
