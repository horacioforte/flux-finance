import { SignupForm } from "@/components/auth/signup-form";

export default function CadastroPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-10 sm:px-6">
        <SignupForm />
      </main>
    </div>
  );
}
