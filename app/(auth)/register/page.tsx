"use client";
import Link from "next/link";

import { Button } from "components/shared/ui/button";
import { Form } from "components/shared/ui/form";
import { useForm } from "hooks/use-form";

type Form = { username: string; email: string; password: string };

const RegisterPage = () => {
  const { register } = useForm();

  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-medium text-zinc-950">Sign up</h1>

      <Form.Root onSubmit={(e) => console.log(e)}>
        <Form.Field>
          <Form.Label>Username</Form.Label>
          <Form.Input type="text" placeholder="Username" {...register("username")} />
        </Form.Field>

        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Input type="text" placeholder="Email" {...register("email")} />
          <Form.Hint>That email is already taken.</Form.Hint>
        </Form.Field>

        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Input type="password" placeholder="Password" {...register("password")} />
        </Form.Field>

        <div className="mt-6 flex flex-col">
          <Button type="submit" size="lg">
            Sign up
          </Button>

          <p className="mt-5 text-center text-sm font-normal text-zinc-500">
            <Link href="/login">Have an account?</Link>
          </p>
        </div>
      </Form.Root>
    </div>
  );
};

export default RegisterPage;
