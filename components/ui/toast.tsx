"use client";

import { ReactNode, useCallback, useEffect, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import useOutsideClick from "@/hooks/use-outside-click";
import CloseIcon from "@/assets/icons/close.svg";
import InfoIcon from "@/assets/icons/info-fill.svg";
import CloseFillIcon from "@/assets/icons/close-filled.svg";
import CircleLoaderIcon from "@/assets/icons/circle-loader.svg";
import { generateUniqueId } from "@/lib/helper";

type ToastTypes = "loading" | "info" | "success" | "error" | "warning";
type ToastContext = { id?: string; type: ToastTypes; content: ReactNode; duration: number };

type ToastState = {
  open: boolean;
  toastArray: Array<ToastContext>;
};

const icons = {
  loading: <CircleLoaderIcon className="size-4 text-primary-main" />,
  info: <InfoIcon className="size-4 text-blue-500" />,
  success: <InfoIcon className="size-4 text-green-500" />,
  error: <CloseFillIcon className="size-4" />,
  warning: <InfoIcon className="size-4 text-red-500" />,
};

enum ACTION_TYPES {
  OPEN = "OPEN",
  DESTROY = "DESTROY",
}

type Action = { type: keyof typeof ACTION_TYPES; value?: ToastContext; id?: string };

const initState = { open: false, toastArray: [] };

const reducerFunc = (state: ToastState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.OPEN:
      const update = {
        open: true,
        toastArray: [{ ...action.value }, ...state.toastArray] as ToastState["toastArray"],
      };
      return update;
    case ACTION_TYPES.DESTROY:
      const removeToast = state.toastArray.filter((toast) => toast.id !== action.id);
      return { open: removeToast.length > 0, toastArray: removeToast };
    default:
      return state;
  }
};

const Toast = () => {
  const callback = useRef(() => dispatch({ type: "DESTROY" }));
  const toastRef = useOutsideClick(callback);
  const [state, dispatch] = useReducer(reducerFunc, initState);

  const callbackFunc = useRef(((event: CustomEvent<Action>) => {
    const id = generateUniqueId();
    if (event.detail.type === ACTION_TYPES.DESTROY) {
      dispatch({ type: "DESTROY", id: event.detail.id });
    } else if (event.detail.type === ACTION_TYPES.OPEN) {
      if (event.detail.value) {
        const payload = { ...event.detail, value: { ...event.detail.value, id } };
        dispatch(payload);

        setTimeout(
          () => {
            dispatch({ type: "DESTROY", id });
          },
          (event.detail.value.duration || 2) * 1000
        );
      }
    } else {
      dispatch({ type: "OPEN", value: { content: "Wrong type selected", duration: 2, type: "error" } });
    }
  }) as EventListener);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener("toast-signal", callbackFunc.current, { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);

  const assignRef = useCallback(
    (elem: unknown) => {
      if (elem) {
        toastRef.current.splice(0, 1, elem as HTMLElement);
      }
    },
    [toastRef]
  );

  const closeToast = (id?: string) => dispatch({ type: "DESTROY", id });

  return (
    <AnimatePresence initial={false}>
      <>
        {state.open && (
          <div className="fixed left-1/2 top-4 z-[22] -translate-x-1/2 space-y-3">
            <AnimatePresence propagate>
              {state.toastArray.map((item) => (
                <motion.div
                  key={item.id}
                  ref={assignRef}
                  initial={{ opacity: 0, translateY: -100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -100 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="flex min-h-8 w-fit max-w-[95%] items-center justify-between gap-2 rounded-[6px] bg-white px-4 py-[10px] text-sm shadow-[0_2px_8px_0_#00000026] md:max-w-[600px]"
                >
                  {icons[item.type]}
                  {item.content}
                  <button type="button" className="size-fit" onClick={() => closeToast(item?.id)}>
                    <CloseIcon className="size-[18px] text-gray-700" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </>
    </AnimatePresence>
  );
};

class Message {
  private async sendSignal(payload: Action | "destroy") {
    const customEvent = new CustomEvent("toast-signal", {
      detail: payload,
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    window?.dispatchEvent(customEvent);
    return "signal-sent";
  }

  async open(payload: Omit<ToastContext, "id">): Promise<string> {
    return await this.sendSignal({ type: "OPEN", value: { ...payload } });
  }

  async destroy(id?: string) {
    return await this.sendSignal({ type: "DESTROY", id });
  }
}

const message = new Message();

export { Toast, message };
