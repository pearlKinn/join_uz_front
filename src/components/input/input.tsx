"use client";

import Image from "next/image";
import React, { useState } from "react";

interface InputProps {
  id: string;
  placeholder: string;
  type: string;
  defaultValue: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, placeholder, type, defaultValue,onChange }) => {
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
    } else if (id === "password") {
      // password일 경우에는 버튼을 클릭할 때마다 text와 password를 왔다갔다 합니다.
      return isVisible ? "text" : "password";
    } else {
      return type;
    }
  };

  return (
    <div className="w-[329px] h-[74px] relative">
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        className="w-full h-[56px] pt-[10px] pb-[14px] pr-10 focus:outline-none border-b border-b-gray300 focus:border-b-primary600"
        type={handleTypeChange()}
        name={id}
        id={id}
        placeholder={placeholder}
        maxLength={type === "text" ? 12 : 20}
        defaultValue={defaultValue}
        onChange={onChange}
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
    </div>
  );
};

export default Input;
