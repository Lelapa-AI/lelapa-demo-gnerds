import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { IoIosSwap } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import map from "lodash/map";
import PropTypes from "prop-types";

export const DoubleDropdown = ({ options }) => {
  return (
    <section className="flex items-center px-2 text-light-white gap-2 justify-between border rounded-lg h-10">
      <Menu>
        <MenuButton className="flex items-center gap-2">
          <p className="text-xs">{options?.[0]?.name}</p>
          <IoChevronDown />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-fit px-2 mt-3 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-1 bg text-light-white py-2 divide-y divide-gray "
        >
          {map(options, ({ name }) => (
            <MenuItem key={name}>
              <p>{name}</p>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <IoIosSwap className="w-5 h-5" />
      <Menu>
        <MenuButton className="flex items-center gap-2">
          <p className="text-xs">{options?.[1]?.name}</p>
          <IoChevronDown />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-fit px-2 mt-3 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-1 bg text-light-white py-2 divide-y divide-gray "
        >
          {map(options, ({ name }) => (
            <MenuItem key={name}>
              <p>{name}</p>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </section>
  );
};

DoubleDropdown.propTypes = {
  options: PropTypes.array.isRequired,
};
