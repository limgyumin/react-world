import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"fieldset">;

export const Field = forwardRef<HTMLFieldSetElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <fieldset ref={ref} {...rest} className={clsx("flex flex-col gap-3", className)}>
      {children}
    </fieldset>
  );
});
