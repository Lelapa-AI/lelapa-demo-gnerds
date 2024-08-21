export const uploadDto = ({ file, encodedString, fileSize }) => ({
  file_name: file,
  audio_blob: encodedString,
  file_size: fileSize,
});
