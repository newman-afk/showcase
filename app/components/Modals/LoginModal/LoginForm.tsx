import useRegisterModal from "@/app/hooks/zustand/useRegisterModal";
import useLoginModal from "@/app/hooks/zustand/useLoginModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function LoginForm() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const router = useRouter();

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  });

  type LoginFormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(schema) });

  function submit(data: LoginFormData) {
    toast.loading("Loging...", { id: "login" });
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callbacks) => {
      toast.remove("login");

      if (!callbacks?.error) {
        toast.success("Login successful");
        loginModal.onClose();
        router.refresh();
      }

      if (callbacks?.error) {
        toast.error(callbacks?.error);
      }
    });
  }
  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          id="email"
          autoFocus
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="name@company.com"
          required
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.email?.message}
        </p>
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          {...register("password")}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          required
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.password?.message}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Lost Password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login to your account
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?
        <button
          type="button"
          className="text-blue-700 hover:underline dark:text-blue-500"
          onClick={() => {
            loginModal.onClose();
            registerModal.onOpen();
          }}
        >
          Create account
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
