export type ExportFormat = "padrao" | "meu";

export const exportHero = {
  title: "Planilha de Maio 2026",
  subtitle: "63 transações classificadas · Pronta para exportar",
  downloadLabel: "Baixar Excel — Maio 2026",
} as const;

export const formatOptions = [
  {
    id: "padrao" as const,
    label: "Formato Padrão",
    emoji: "📗",
    description: "Data · Descrição · Valor · Categoria",
    badge: null,
  },
  {
    id: "meu" as const,
    label: "Meu Formato",
    emoji: "🧠",
    description: "Usa estrutura da sua planilha atual",
    badge: "Ativo" as const,
  },
] as const;

export const previousExports = [
  { id: "1", label: "Abril 2026", transactions: 58 },
  { id: "2", label: "Março 2026", transactions: 61 },
  { id: "3", label: "Fevereiro 2026", transactions: 54 },
] as const;

export const exportSettings = [
  { id: "tags", label: "Incluir tags", defaultOn: true },
  { id: "recorrentes", label: "Marcar recorrentes", defaultOn: true },
  { id: "transferencias", label: "Excluir transferências", defaultOn: true },
] as const;
