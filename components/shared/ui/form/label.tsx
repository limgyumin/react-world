import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"label">;

export const Label = forwardRef<HTMLLabelElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <label ref={ref} {...rest} className={clsx("text-sm font-medium text-zinc-950", className)}>
      {children}
    </label>
  );
});
