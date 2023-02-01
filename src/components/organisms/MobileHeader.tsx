import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="14" width="12" height="2" rx="1" fill="black"></rect>
          <rect x="10" y="21" width="24" height="2" rx="1" fill="black"></rect>
          <rect x="22" y="28" width="12" height="2" rx="1" fill="black"></rect>
        </svg>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        initialFocus={buttonRef}
      >
        <Dialog.Panel className="fixed top-0 left-0 h-screen w-screen bg-violet-900 flex flex-col justify-center items-center z-50">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed top-[18px] right-[32px] focus:ring-2 focus:ring-white focus:ring-opacity-25 focus:outline-none rounded-lg"
            ref={buttonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="w-8 h-8 text-gray-200 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Dialog.Title className="text-3xl text-white">Home</Dialog.Title>

          <div className="flex flex-col items-center space-y-2.5 mt-5">
            <a href="/" className="hover:text-white text-xl text-gray-200">
              Research
            </a>
            <a href="/" className="hover:text-white text-xl text-gray-200">
              Developer
            </a>
            <a href="/" className="hover:text-white text-xl text-gray-200">
              Enterprise
            </a>
            <a href="/" className="hover:text-white text-xl text-gray-200">
              Community
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
