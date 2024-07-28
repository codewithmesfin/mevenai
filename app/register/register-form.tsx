"use client";

import { CreateUserInput, createUserSchema } from "@/lib/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpWithEmailAndPassword } from "../_actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { ChevronRightIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const methods = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<CreateUserInput> = (values) => {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword({
        data: values,
        emailRedirectTo: `${location.origin}/auth/callback`,
      });
      const { error } = JSON.parse(result);
      if (error?.message) {
        toast.error(error.message);
        console.log("Error message", error.message);
        reset({ password: "" });
        return;
      }

      toast.success("registered successfully");
      router.push("/login");
    });
  };

  const input_style =
    "form-control block w-full px-4 py-3 text-sm font-normal text-gray-300 bg-gray-600 bg-clip-padding border border-solid border-gray-600 rounded-lg transition ease-in-out m-0 focus:text-gray-200 focus:bg-gray-800 focus:border-blue-600 focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6">
        <div className="mb-2 w-full">
          <div className="py-2">
            <label className="text-gray-300">First Name</label>
          </div>
          <input
            {...register("name")}
            placeholder="Name"
            className={`${input_style}`}
          />
          {errors["name"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["name"]?.message as string}
            </span>
          )}
        </div>
        <div className="mb-2 w-full">
          <div className="py-2">
            <label className="text-gray-300">Last Name</label>
          </div>
          <input
            {...register("name")}
            placeholder="Name"
            className={`${input_style}`}
          />
          {errors["name"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["name"]?.message as string}
            </span>
          )}
        </div>
        <div className="mb-2 w-full">
          <div className="py-2">
            <label className="text-gray-300">Email</label>
          </div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email address"
            className={`${input_style}`}
          />
          {errors["email"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["email"]?.message as string}
            </span>
          )}
        </div>
        <div className="mb-2 w-full">
          <div className="py-2">
            <label className="text-gray-300">Phone Number</label>
          </div>
          <input
            type="email"
            {...register("email")}
            placeholder="Phone Number"
            className={`${input_style}`}
          />
          {errors["email"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["email"]?.message as string}
            </span>
          )}
        </div>

        <div className="mb-2 w-full">
          <div className="py-2">
            <label className="text-gray-300">Password</label>
          </div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className={`${input_style}`}
          />
          {errors["password"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["password"]?.message as string}
            </span>
          )}
        </div>
        <div className="mb-2 w-full">
          <div className="py-2">
            <label className="text-gray-300">Confirm Password</label>
          </div>
          <input
            type="password"
            {...register("passwordConfirm")}
            placeholder="Confirm Password"
            className={`${input_style}`}
          />
          {errors["passwordConfirm"] && (
            <span className="text-red-500 text-xs pt-1 block">
              {errors["passwordConfirm"]?.message as string}
            </span>
          )}
        </div>

        <div className="md:flex md:items-center md:space-x-3 mt-3">
          <button
            disabled={isPending}
            style={{ backgroundColor: `${isPending ? "#ccc" : ""}` }}
            className="w-full flex justify-evenly items-center space-x-1 md:space-x-3 border border-[#ff4533] rounded-xl bg-[#ff4533] hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
          >
            <span> {isPending ? "loading..." : "Submit"}</span>
          </button>
        </div>

        <div className="w-full flex justify-evenly md:items-center space-x-2 md:space-x-3">
          <p className="text-gray-300">Already have an account ?</p>
          <Link href={"/signin"}
            className="text-[#ff4533] font-semibold hover:text-green-600"
          >Sign in</Link>
        </div>



      </div>






    </form>
  );
};
