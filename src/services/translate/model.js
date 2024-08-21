export const translationModel = ({ data }) => ({
  translation: data?.translation?.[0]?.translated_text ?? "",
});
