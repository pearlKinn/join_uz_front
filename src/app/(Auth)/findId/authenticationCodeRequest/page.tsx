"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TitleHeader from "@/components/titleHeader/titleHeader";
import { useState } from "react";

const AuthenticationCodeRequestPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <section className="min-w-[360px] h-lvh flex flex-col px-4">
      <TitleHeader
        title="아이디 찾기"
        subTitle="아이디 찾기"
        description="가입 시 등록한 휴대폰 전화를 입력해주세요."
      />
      <main className="flex flex-col items-center">
        <div className="mb-[129.74px]">
          <Input
            type="number"
            id="userNumber"
            placeholder="휴대폰 번호 입력"
            defaultValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          >
            <span className="text-outlineInactive textXS pl-[10px]">
              휴대폰 번호를 입력해주세요. (‘-’없이)
            </span>
          </Input>
        </div>
        <progress
          className="w-[328px] h-1 bg-gray-300 mb-3"
          id="progress"
          value={100 / 4}
          max="100"
        />
        <Button size="xl" type="cta" disabled={phoneNumber ? false : true}>
          인증번호 받기
        </Button>
      </main>
    </section>
  );
};
export default AuthenticationCodeRequestPage;
