"use client";

import Image from "next/image";
import React, { useState } from "react";

interface InputProps {
  id: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, placeholder, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const input = isVisible ? "password" : "text";
  const visibility = isVisible ? (
    <Image
      src="/Icon/Eye/OffIcon.svg"
      width={24}
      height={24}
      alt="비밀번호 숨기기"
    />
  ) : (
    <Image
      src="/Icon/Eye/OnIcon.svg"
      width={24}
      height={24}
      alt="비밀번호 보기"
    />
  );

  return (
    <div className="w-[329px] h-[74px] relative">
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        className="w-full h-[56px] pt-[10px] pb-[14px] pr-10 focus:outline-none border-b border-b-gray300 focus:border-b-primary600"
        type={input}
        name={id}
        id={id}
        placeholder={placeholder}
        maxLength={type === "text" ? 12 : 20}
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
