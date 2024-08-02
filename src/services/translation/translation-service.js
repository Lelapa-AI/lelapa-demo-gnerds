import config from "../../../config";
import { authRequest } from "../auth";
import { translationDto } from "./dto";

const { hostUrl } = config;

const TRANSLATION_URL = `${hostUrl}/translate/process`;

const translate = (inputText, sourceLang, targetLang) => {
  const dto = translationDto(inputText, sourceLang, targetLang);
  return authRequest.post(TRANSLATION_URL, dto);
};

export default {
  translate,
};
