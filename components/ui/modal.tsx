import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import CloseIcon from "@/assets/icons/close.svg";

type Props = {
  open: boolean;
  children: ReactNode;
  onChange: (arg: boolean) => void;
  disableBackdropClick?: boolean;
};
const boxVariants = {
  initial: { scale: 0, rotate: "12.5deg" },
  visible: { opacity: 1, scale: 1, rotate: "0deg" },
  hidden: { opacity: 0, scale: 0.95, rotate: "0deg" },
};
const wrapperVariants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

const Modal = ({ open, children, onChange, disableBackdropClick = false }: Props) => {
  const handleClose = () => {
    if (disableBackdropClick) return;
    onChange(!open);
  };

  const callback = useRef(((arg: CustomEvent<"close-modal-gpXPLoY">) => {
    if (arg.detail === "close-modal-gpXPLoY") onChange(false);
  }) as EventListener);

  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener("close-modal", callback.current, { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <>
          {createPortal(
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={wrapperVariants}
              transition={{ delay: 0.2 }}
              key="modal-wrapper"
              className="fixed inset-0 z-[20] flex h-dvh max-h-dvh w-full flex-col items-center justify-end overflow-y-auto overscroll-contain sm:justify-center"
            >
              <motion.div className="absolute inset-0 h-dvh w-full bg-black/40 px-5" onClick={handleClose} />
              {children}
            </motion.div>,
            document.body,
            "the-modal"
          )}
        </>
      )}
    </AnimatePresence>
  );
};

type ContentProps = { className?: string; children: ReactNode; hideClose?: boolean };
const Content = ({ children, className, hideClose }: ContentProps) => {
  const closeModal = (arg: Event) => {
    const customEvent = new CustomEvent("close-modal", {
      detail: "close-modal-gpXPLoY",
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    arg.target?.dispatchEvent(customEvent);
  };

  return (
    <AnimatePresence propagate>
      <motion.div
        initial="initial"
        animate="visible"
        exit="hidden"
        variants={boxVariants}
        transition={{ delay: 0.1 }}
        key="modal-content"
        className={cn(
          "relative bottom-0 z-[1] mx-auto min-h-[381px] w-full overflow-y-auto bg-white px-5 py-7 max-md:max-h-[85vh] max-sm:rounded-t-2xl sm:bottom-auto sm:max-w-[540px] sm:rounded-lg md:px-12 md:py-12",
          className
        )}
      >
        {!hideClose && (
          <CloseIcon
            className="absolute right-4 top-4 size-6 cursor-pointer text-gray-700 hover:text-red-400"
            onClick={closeModal}
          />
        )}
        <span className="absolute left-[50%] top-3 h-2 w-16 -translate-x-[50%] rounded-lg bg-gray-100 md:hidden" />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

Modal.Content = Content;
Content.displayName = "ModalContent";

export default Modal;
