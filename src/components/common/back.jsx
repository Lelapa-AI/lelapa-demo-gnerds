import { useNavigate } from "@tanstack/react-router";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { Button } from "./button";

export const Back = () => {
  const navigate = useNavigate();

  const goBack = () => navigate({ to: "/" });

  return (
    <Button variant="text" className="flex px-0" onClick={goBack}>
      <section className="flex gap-2 justify-center items-center">
        <IoArrowBackCircleOutline className="w-6 h-6 text-primary" />
        <span className="text-xs text-light-white">Back</span>
      </section>
    </Button>
  );
};
