"use client";

import Image from "next/image";
import React, { useState } from "react";

interface InputProps {
  id: string;
  placeholder: string;
  type: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  defaultValue,
  onChange,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const visibility = isVisible ? (
    <Image
      src="/Icon/Eye/OnIcon.svg"
      width={24}
      height={24}
      alt="비밀번호 보기"
    />
  ) : (
    <Image
      src="/Icon/Eye/OffIcon.svg"
      width={24}
      height={24}
      alt="비밀번호 숨기기"
    />
  );

  const handleTypeChange = () => {
    if (id === "ID") {
      // ID일 경우에는 항상 text로 고정되며, maxLength는 12입니다.
      return "text";
    } else if (id === "password" || id === "checkPassword") {
      // password일 경우에는 버튼을 클릭할 때마다 text와 password를 왔다갔다 합니다.
      return isVisible ? "text" : "password";
    } else {
      return type;
    }
  };

  const handleInputChange = (value) => {
    console.log(value);
  };

  return (
    <div className="w-[328px] h-[74px] relative">
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        className="w-full h-[56px] pl-[10px] pt-[10px] pb-[14px] pr-10 focus:outline-none border-b border-b-gray300 focus:border-b-primary600"
        type={handleTypeChange()}
        name={id}
        id={id}
        placeholder={placeholder}
        maxLength={type === "text" ? 12 : 20}
        defaultValue={defaultValue}
        onChange={(e) => handleInputChange(e.target.value)}
        required
      />
      {type === "password" && (
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute top-3 right-3"
        >
          {visibility}
        </button>
      )}
      {children}
    </div>
  );
};

export default Input;
