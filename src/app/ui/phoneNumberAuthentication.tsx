"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { MouseEventHandler } from "react";

interface PhoneNumberAuthenticationProps {
  children: React.ReactNode;
}

const PhoneNumberAuthentication = ({
  children,
}: PhoneNumberAuthenticationProps) => {
  return (
    <>
      <div className="mb-[129.74px]">
        <Input type="number" id="userNumber" placeholder="휴대폰 번호 입력">
          <span className="text-outlineInactive textXS pl-[10px]">
            휴대폰 번호를 입력해주세요. (‘-’없이)
          </span>
        </Input>
      </div>
      {children}
      <Button size="xl" StyleType="cta" type="submit" onClick={() => {}}>
        인증번호 받기
      </Button>
    </>
  );
};

export default PhoneNumberAuthentication;
