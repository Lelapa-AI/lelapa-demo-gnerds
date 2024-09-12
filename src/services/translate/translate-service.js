import { config } from "../../../config";
import { vulaAuthRequest } from "../auth";
import { translationDto } from "./dto";

const { hostUrl } = config;

const TRANSLATION_URL = `${hostUrl}/translate/process`;

const translate = (inputText, sourceLang, targetLang) => {
  const dto = translationDto(inputText, sourceLang, targetLang);
  return vulaAuthRequest.post(TRANSLATION_URL, dto);
};

export default {
  translate,
};
