import React from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuItem = ({ title, enable, reference }) => {
  return (
    <div>
      {!enable ? (
        <Menu.Item>
          {({ active }) => (
            <p
              className={classNames(
                "block px-4 py-2 text-md text-gray-400 uppercase"
              )}
            >
              {title}
            </p>
          )}
        </Menu.Item>
      ) : (
        <Menu.Item>
          {({ active }) => (
            <a href={reference} target="_blank" rel="noopener noreferrer">
              <p
                className={classNames(
                  active ? "bg-gray-500 text-gray-100" : "text-gray-200",
                  "block px-4 py-2 text-sm capitalize"
                )}
              >
                {title}
              </p>
            </a>
          )}
        </Menu.Item>
      )}
    </div>
  );
};

export default MenuItem;
