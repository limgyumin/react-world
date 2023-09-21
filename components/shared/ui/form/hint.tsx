import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"p">;

export const Hint = forwardRef<HTMLParagraphElement, Props>(({ className, children, ...rest }, ref) => {
  return (
    <p ref={ref} {...rest} className={clsx("text-sm font-normal text-red-400", className)}>
      {children}
    </p>
  );
});
