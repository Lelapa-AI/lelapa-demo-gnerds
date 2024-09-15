import { useEffect } from "react";
import { createSwapy } from "swapy";

import { PageLayout } from "../templates";

export const Profile = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const swapy = createSwapy(container);
    swapy.enable(true);
  }, []);

  return (
    <PageLayout hasBack title="Profile">
      <div className="container grid grid-flow-row">
        <div
          className="section-1 bg-tertiary text-3xl font-bold flex justify-center rounded-lg py-4 w-1/2"
          data-swapy-slot="foo"
        >
          <div className="content-a" data-swapy-item="a">
            <p>Foo</p>
          </div>
        </div>

        <div className="section-2" data-swapy-slot="bar">
          <div className="content-b" data-swapy-item="b">
            <p>Bar</p>
            <div className="handle" data-swapy-handle></div>
          </div>
        </div>

        <div className="section-3" data-swapy-slot="baz">
          <div className="content-c" data-swapy-item="c">
            <p>Baz</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
