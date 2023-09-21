import type { ChangeEventHandler } from "react";
import { useRef } from "react";

import type { ObjectType } from "types/utilities";

export const useForm = () => {
  const form = useRef<ObjectType>({});

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    form.current = { ...form.current, [e.target.name]: e.target.value };
  };

  const register = (name: string) => ({
    name,
    onChange,
  });

  return {
    form,
    register,
  };
};
