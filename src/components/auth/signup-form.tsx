"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthLogo, authInputClassName } from "@/components/auth/auth-logo";
import { supabase } from "@/lib/supabase";

const MIN_PASSWORD_LENGTH = 6;

function mapSignUpError(message: string): string {
  const normalized = message.toLowerCase();

  if (
    normalized.includes("already registered") ||
    normalized.includes("already been registered") ||
    normalized.includes("user already exists")
  ) {
    return "Este e-mail já está cadastrado.";
  }

  if (
    normalized.includes("password") &&
    (normalized.includes("weak") ||
      normalized.includes("short") ||
      normalized.includes("at least"))
  ) {
    return "Senha muito fraca. Use pelo menos 6 caracteres.";
  }

  return "Não foi possível criar a conta. Tente novamente.";
}

export function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setError("Senha muito fraca. Use pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    const { error: authError } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
      options: {
        data: {
          full_name: trimmedName,
        },
      },
    });

    setLoading(false);

    if (authError) {
      setError(mapSignUpError(authError.message));
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <div className="flex w-full flex-col">
        <AuthLogo />

        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
            Criar sua conta
          </h1>
          <p
            role="status"
            className="mt-6 rounded-[12px] border border-primary/20 bg-success-bg px-4 py-3.5 text-[13px] font-medium leading-relaxed text-primary"
          >
            Verifique seu email para confirmar a conta
          </p>
        </div>

        <p className="mt-8 text-center text-[13px] text-muted">
          <Link
            href="/login"
            className="font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Já tenho conta → Entrar
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <AuthLogo />

      <div className="mb-8 text-center">
        <h1 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
          Criar sua conta
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        {error && (
          <p
            role="alert"
            className="rounded-[12px] border border-expense/20 bg-expense/5 px-3 py-2.5 text-[13px] font-medium text-expense"
          >
            {error}
          </p>
        )}

        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="text-[13px] font-medium text-foreground"
          >
            Nome completo
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Seu nome"
            className={authInputClassName}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-[13px] font-medium text-foreground"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className={authInputClassName}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="text-[13px] font-medium text-foreground"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={authInputClassName}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="confirmPassword"
            className="text-[13px] font-medium text-foreground"
          >
            Confirmar senha
          </label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className={authInputClassName}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-primary text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(0,200,150,0.3)] transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <span
                className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                aria-hidden
              />
              Criando conta…
            </>
          ) : (
            "Criar conta"
          )}
        </button>
      </form>

      <p className="mt-8 text-center text-[13px] text-muted">
        <Link
          href="/login"
          className="font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          Já tenho conta → Entrar
        </Link>
      </p>
    </div>
  );
}
