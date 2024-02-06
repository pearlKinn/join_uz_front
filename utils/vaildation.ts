export function phoneReg(phoneNumber: string) {
  const nonNumericRegex = /[^0-9]/;

  if (!nonNumericRegex.test(String(phoneNumber).toLowerCase())) {
    return { message: "숫자 외에 다른 문자가 있어요.", isValid: false };
  }

  if (phoneNumber.length !== 11) {
    return { message: "번호를 다시 입력해주세요.", isValid: false };
  }

  return { message: "", isValid: true };
}
