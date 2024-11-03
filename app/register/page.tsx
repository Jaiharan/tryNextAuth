import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Register = async () => {
  return (
    <div className=" mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <h2 className="pb-2 text-2xl font-semibold">Welcome to MyApp</h2>
      <p className=" pb-2 text-1xl">
        *Please Provide all necessary information
      </p>
      <form className="my-8">
        <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className=" flex flex-col">
            <Label htmlFor="firstname" className=" mb-2">
              First Name
            </Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              name="firstname"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="lastname" className=" mb-2">
              Last Name
            </Label>
            <Input
              id="lastname"
              placeholder="Cena"
              type="text"
              name="lastname"
            />
          </div>
        </div>

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
          placeholder="********"
          type="password"
          name="password"
          className=" mb-5"
        />

        <Button>Sign Up &rarr;</Button>

        <p className=" text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className=" hover:text-neutral-900 hover:font-medium ease-in duration-150"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
