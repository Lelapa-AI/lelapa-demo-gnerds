import { Description, Field, Textarea } from "@headlessui/react";
import clsx from "clsx";
import { RxSpeakerModerate } from "react-icons/rx";
import PropTypes from "prop-types";

export const InputTextArea = ({ language }) => {
  return (
    <div className="">
      <Field className="w-full max-w-md px-4 bg-light-white rounded-xl">
        <Description className="text-sm/6 flex items-center gap-2 min-w-fit text-blue">
          {language}
          <RxSpeakerModerate />
        </Description>
        <Textarea
          className={clsx(
            "mt-3 block w-full resize-none rounded-lg border-none bg-light-white py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          rows={3}
        />
      </Field>
    </div>
  );
};

InputTextArea.propTypes = {
  language: PropTypes.string.isRequired,
};
