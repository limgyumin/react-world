import type { PropsWithChildren } from "react";

const RegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center">
      <div className="page-sm relative">
        <div className="pt-20">{children}</div>
      </div>
    </div>
  );
};

export default RegisterLayout;
