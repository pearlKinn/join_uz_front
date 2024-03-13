"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TitleHeaderProps {
  title: string;
  subTitle?: string;
  description?: string;
}
const TitleHeader: React.FC<TitleHeaderProps> = ({
  title,
  subTitle,
  description,
}) => {
  const router = useRouter();

  return (
    <>
      <header className="flex gap-[103px] py-3">
        <h1 className="font-semibold order-1">{title}</h1>
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/chevron-left.svg"
            width={24}
            height={24}
            alt="뒤로 가기"
          />
        </button>
      </header>
      <div role="description" className="mt-2">
        <h2 className="font-bold text-primary600 text-2xl">{subTitle}</h2>
        <span className="textSM text-gray800">{description}</span>
      </div>
    </>
  );
};

export default TitleHeader;
