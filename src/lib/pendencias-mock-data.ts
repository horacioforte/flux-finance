export type PendingTransaction = {
  id: string;
  description: string;
  amount: number;
  dateLabel: string;
  bankLabel: string;
  aiConfidencePct: number;
  suggestionEmoji: string;
  suggestedCategory: string;
};

/** Total na fatura para o cálculo da barra (3 já revisados + 8 pendentes = 11). */
export const PENDENCIAS_TOTAL_LOTE = 11;

export const PENDENCIAS_REMAINING_START = 8;

export const pendenciasInitialTransactions: PendingTransaction[] = [
  {
    id: "p1",
    description: "POSTO SHELL RECIFE",
    amount: 180,
    dateLabel: "08 abr",
    bankLabel: "Itaú Visa",
    aiConfidencePct: 92,
    suggestionEmoji: "⛽",
    suggestedCategory: "Transporte — combustível",
  },
  {
    id: "p2",
    description: "PADARIA CENTRAL LTDA",
    amount: 42.5,
    dateLabel: "09 abr",
    bankLabel: "Itaú Visa",
    aiConfidencePct: 68,
    suggestionEmoji: "🥖",
    suggestedCategory: "Alimentação",
  },
  {
    id: "p3",
    description: "AMAZON MARKETPLACE BR",
    amount: 289.9,
    dateLabel: "10 abr",
    bankLabel: "Itaú Visa",
    aiConfidencePct: 88,
    suggestionEmoji: "🛒",
    suggestedCategory: "Compras online",
  },
  {
    id: "p4",
    description: "LABORATORIO CLINDI",
    amount: 156,
    dateLabel: "11 abr",
    bankLabel: "Itaú Visa",
    aiConfidencePct: 74,
    suggestionEmoji: "🩺",
    suggestedCategory: "Saúde",
  },
];
