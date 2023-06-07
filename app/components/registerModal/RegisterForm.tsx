import useRegisterModal from "@/app/hooks/zustand/useRegisterModal";
import useLoginModal from "@/app/hooks/zustand/useLoginModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";

const schema = z
  .object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    password: z.string().min(6).max(20),
    confirmPassword: z.string().min(6).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof schema>;

function RegisterForm() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schema) });
  function submit(data: RegisterFormData) {
    toast.loading("Registering...", { id: "register" });
    axios
      .post("/api/auth/register", data)
      .then((response) => {
        toast.remove("register");
        if (response.data.ok) {
          toast.success(response.data.message);
          registerModal.onClose();
          loginModal.onOpen();
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          {...register("name")}
          type="text"
          name="name"
          id="name"
          autoFocus
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="john doe"
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.name?.message}
        </p>
      </div>
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
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="name@company.com"
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
        />{" "}
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.password?.message}
        </p>
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm your password
        </label>
        <input
          {...register("confirmPassword")}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="••••••••"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          required
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.confirmPassword?.message}
        </p>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        <button
          type="button"
          onClick={() => {
            registerModal.onClose();
            loginModal.onOpen();
          }}
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Back to Login
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
