"use client";

import Image from "next/image";
import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "button" | "reset";
  iconPosition?: "left" | "right";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  StyleType?: "cta" | "normal" | "outline" | "text";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  type = "submit",
  size = "md",
  StyleType = "normal",
  iconPosition = "left",
  disabled = false,
}) => {
  const sizes = {
    xl: "w-[328px] h-12  text-base",
    lg: "w-[328px] h-10  text-base",
    md: "w-40 h-12  text-base",
    sm: "w-40 h-9 textSM",
    xs: "w-20 h-9 textSM",
    xxs: "w-[66px] h-7 textSM",
  };

  const StyleTypes = {
    cta: "bg-ctaActive hover:bg-ctaHover active:bg-ctaPushed disabled:bg-ctaInactive disabled:text-textInactive text-white",
    normal:
      "bg-btnActive hover:bg-btnHover active:bg-btnPushed disabled:bg-btnInactive disabled:text-textInactive  text-white",
    outline:
      "border border-outlineActive hover:border-outlineHover  hover:text-outlineHover active:border-outlinePushed active:text-outlinePushed disabled:border-outlineInactive disabled:text-outlineInactive  text-outlineActive",
    text: "outlineActive hover:outlineHover  hover:text-outlineHover active:outlinePushed active:text-outlinePushed disabled:text-outlineInactive  text-outlineActive",
  };

  const buttonSize = sizes[size];
  const buttonStyleType = StyleTypes[StyleType];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex gap-2 items-center justify-center px-6 py-3 rounded-[10px] font-semibold ${buttonSize} ${buttonStyleType}`}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <Image src={icon} alt="Icon" width={20} height={20} />
      )}
      {children && <span className="flex-shrink-0">{children}</span>}
      {icon && iconPosition === "right" && (
        <Image src={icon} alt="Icon" width={20} height={20} />
      )}
    </button>
  );
};

export default Button;
