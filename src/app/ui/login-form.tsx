"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogInFormProps {
  children: React.ReactNode;
}

const LoginForm = ({ children }: LogInFormProps) => {
  const [persistLogin, setPersistLogin] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("id", id);
    console.log("pw", password);
  };

  return (
    <form onSubmit={handleLogIn} className="flex flex-col items-center">
      <Input
        type="text"
        id="ID"
        placeholder="아이디 입력"
        defaultValue={id}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setId(e.target.value)
        }
      />
      <Input
        type="password"
        id="password"
        placeholder="비밀번호 입력"
        defaultValue={password}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setPassword(e.target.value)
        }
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
      {children}
    </form>
  );
};

export default LoginForm;
