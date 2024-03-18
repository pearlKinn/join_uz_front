"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TitleHeader from "@/components/titleHeader/titleHeader";
import { useState } from "react";

const AuthenticationCodeConfirmPage = () => {
  const [authenticationCode, setAuthenticationCode] = useState("");

  return (
    <section className="min-w-[360px] h-lvh flex flex-col px-4">
      <TitleHeader
        title="비밀번호 찾기"
        subTitle="인증번호 입력"
        description="전송받은 인증번호를 입력해주세요"
      />
      <main className="flex flex-col items-center">
        <div className="mb-3">
          <Input
            type="number"
            id="authenticationCode"
            placeholder="인증번호 입력"
            defaultValue={authenticationCode}
            onChange={(e) => setAuthenticationCode(e.target.value)}
          >
            <span className="text-outlineInactive textXS pl-[10px]">
              인증 번호를 입력해주세요.
            </span>
            <div className="flex gap-2 items-center absolute top-3 right-0">
              <span className="text-[#EA4335] textXS">03:45</span>
              <button
                type="submit"
                className="disabled:bg-gray200 bg-gray600 hover:bg-gray500 disabled:text-textInactive text-gray100 rounded w-[66px] h-7 px-3 textSM"
                onClick={() => {}}
              >
                재전송
              </button>
            </div>
          </Input>
        </div>
        <button
          type="submit"
          className={`disabled:bg-gray200 bg-gray600 disabled:text-textInactive text-gray100 rounded w-[328px] h-10 px-3 textSM ${
            authenticationCode ? "hover:bg-gray500" : ""
          }`}
          disabled={authenticationCode ? false : true}
          onClick={() => {}}
        >
          인증번호 확인
        </button>
        <ul className="list-disc textXS mb-[37.74px]">
          <li className="">3분 이내로 인증번호(6자리)를 입력해주세요.</li>
          <li>
            인증번호가 전송되지 않았을 때 &quot;재전송&quot; 버튼을 눌러주세요.
          </li>
        </ul>
        <progress
          className="w-[328px] h-1 bg-gray-300 mb-3"
          id="progress"
          value={200 / 3}
          max="100"
        />
        <Button size="xl" StyleType="cta" type="submit">
          확인
        </Button>
      </main>
    </section>
  );
};

export default AuthenticationCodeConfirmPage;
