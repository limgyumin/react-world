import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, Props>(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
      className={clsx(
        "rounded-[4px] border-[1px] border-zinc-200 px-4 py-3 text-sm font-normal text-zinc-900 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-zinc-400",
        className,
      )}
    />
  );
});
