export const kpis = {
  income: 12450,
  expenses: 8320,
  balance: 4130,
};

export const categories = [
  { name: "Moradia", value: 2800, color: "#00C896" },
  { name: "Alimentação", value: 1850, color: "#0B0F14" },
  { name: "Transporte", value: 920, color: "#6B7280" },
  { name: "Lazer", value: 650, color: "#9CA3AF" },
  { name: "Outros", value: 1100, color: "#C4CAD4" },
] as const;

export const recentTransactions = [
  {
    id: "1",
    description: "Salário — Empresa XYZ",
    category: "Receita",
    date: "2026-05-22",
    amount: 8500,
    type: "income" as const,
  },
  {
    id: "2",
    description: "Supermercado Extra",
    category: "Alimentação",
    date: "2026-05-21",
    amount: -342.5,
    type: "expense" as const,
  },
  {
    id: "3",
    description: "Aluguel apartamento",
    category: "Moradia",
    date: "2026-05-20",
    amount: -2800,
    type: "expense" as const,
  },
  {
    id: "4",
    description: "Uber — viagens",
    category: "Transporte",
    date: "2026-05-19",
    amount: -87.9,
    type: "expense" as const,
  },
  {
    id: "5",
    description: "Netflix",
    category: "Lazer",
    date: "2026-05-18",
    amount: -55.9,
    type: "expense" as const,
  },
];
