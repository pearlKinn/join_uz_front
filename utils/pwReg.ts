export function pwReg(text: string) {
  const lowerCaseRegExr = /^(?=.*[a-z]).{1,}$/;
  const numberRegExr = /^(?=.*[0-9]).{1,}$/;
  const specialCharRegExr = /^(?=.*[!@#$%^*+=-]).{1,}$/;
  const minLengthRegExr = /^.{8,}$/;
  const maxLengthRegExr = /^.{,20}$/;

  if (!lowerCaseRegExr.test(String(text).toLowerCase())) {
    return {
      message: "문자가 빠졌어요. 문자를 포함시켜주세요!",
      isValid: false,
    };
  }

  if (!numberRegExr.test(String(text).toLowerCase())) {
    return {
      message: "숫자가 빠졌어요. 숫자를 포함시켜주세요!",
      isValid: false,
    };
  }

  if (!specialCharRegExr.test(String(text).toLowerCase())) {
    return {
      message: "특수문자가 빠졌어요. 특수문자를 포함시켜주세요!",
      isValid: false,
    };
  }

  if (!minLengthRegExr.test(String(text))) {
    return { message: "비밀번호 수가 너무 짧아서 부족해요!", isValid: false };
  }

  if (!maxLengthRegExr.test(String(text))) {
    return { message: "비밀번호가 너무 길어서 줄여주세요!", isValid: false };
  }

  return { message: "", isValid: true };
}
