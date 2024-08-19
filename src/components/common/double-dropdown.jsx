import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { IoIosSwap } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

export const DoubleDropdown = () => {
  return (
    <section className="flex items-center px-2 text-light-white gap-2 justify-between border rounded-lg h-10">
      <Menu>
        <MenuButton className="flex items-center gap-2">
          <p>LangA</p>
          <IoChevronDown />
        </MenuButton>
        <MenuItems>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </MenuItems>
      </Menu>
      <IoIosSwap className="w-5 h-5" />
      <Menu>
        <MenuButton className="flex items-center gap-2">
          <p>LangB</p>
          <IoChevronDown />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-fit px-2 mt-3 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-1 bg text-light-white py-2 divide-y divide-gray "
        >
          <MenuItem id="1">
            <section>Zulu</section>
          </MenuItem>
          <MenuItem id="2">
            <section>Swati</section>
          </MenuItem>
          <MenuItem id="3">
            <section>XiTsonga</section>
          </MenuItem>
        </MenuItems>
      </Menu>
    </section>
  );
};

/* import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <div className="fixed top-24 w-52 text-right">
      <Menu __demoMode>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <PencilIcon className="size-4 fill-white/30" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘E
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Square2StackIcon className="size-4 fill-white/30" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <TrashIcon className="size-4 fill-white/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
} */
