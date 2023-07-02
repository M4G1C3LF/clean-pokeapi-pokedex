export const decodeBase64FileString = (fileString: string): string => {
  let buff = Buffer.from(fileString, "base64");
  return buff.toString("utf8");
};
