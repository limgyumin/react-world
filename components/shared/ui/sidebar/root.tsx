import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

const enum Position {
  LEFT = "left",
  RIGHT = "right",
}

type PositionValue = "left" | "right";

type BaseProps = {
  position: PositionValue;
  top?: number;
};

type Props = Override<ComponentPropsWithoutRef<"div">, BaseProps>;

export const Root = forwardRef<HTMLDivElement, Props>(({ children, className, position, top = 0, ...rest }, ref) => {
  return (
    <div ref={ref} style={{ top }} {...rest} className={clsx(styles.base, styles.position[position], className)}>
      <div className="relative">{children}</div>
    </div>
  );
});

const styles = {
  base: "absolute px-10",
  position: {
    [Position.LEFT]: "right-[100%]",
    [Position.RIGHT]: "left-[100%]",
  },
} as const;
