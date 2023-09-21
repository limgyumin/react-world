import type { ComponentPropsWithoutRef, FormEventHandler } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"form">;

export const Root = forwardRef<HTMLFormElement, Props>(({ children, className, onSubmit, ...rest }, ref) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form ref={ref} {...rest} onSubmit={handleSubmit} className={clsx("flex flex-col gap-5", className)}>
      {children}
    </form>
  );
});
