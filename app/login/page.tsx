import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { login } from "@/action/user";
import { signIn } from "@/auth";

const Login = () => {
  return (
    <div className=" mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <form className="my-8" action={login}>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="johncena@example.com"
          type="email"
          name="email"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="*********"
          type="password"
          name="password"
          className=" mb-6"
        />

        <Button>Login &rarr;</Button>

        <p className=" text-neutral-600 mb-4 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Don't have an account?{" "}
          <Link
            href="/register"
            className=" hover:text-neutral-900 hover:font-medium ease-in duration-150"
          >
            Register
          </Link>
        </p>
      </form>
        {/* <div className=" bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
        <section className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <form action={
            async ()=>{
              'use server'
              await signIn('github');
            }
          }>
            <Button variant={"default"} type="submit">
              <IconBrandGithub className=" h-4 w-4 text-neutral-100" />
              <span className=" text-sm">Github</span>
            </Button>
          </form>
          <form action={
            async ()=>{
              'use server'
              await signIn("google");
            }
          }>
            <Button variant={"default"} type="submit">
              <IconBrandGoogle className=" h-4 w-4 text-neutral-100" />
              <span className=" text-sm">Google</span>
            </Button>
          </form>
        </section>
    </div>
  );
};

export default Login;
