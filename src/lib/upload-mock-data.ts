export const supportedBanks = [
  "Nubank",
  "Itaú",
  "Bradesco",
  "Santander",
  "C6",
] as const;

export const recentImports = [
  {
    id: "1",
    name: "extrato-nubank-maio.pdf",
    bank: "Nubank",
    date: "23 mai, 14:32",
    status: "processing" as const,
    progress: 62,
  },
  {
    id: "2",
    name: "fatura-itau-cartao.pdf",
    bank: "Itaú",
    date: "22 mai, 09:15",
    status: "pending" as const,
  },
  {
    id: "3",
    name: "extrato-bradesco-abr.pdf",
    bank: "Bradesco",
    date: "20 mai, 18:40",
    status: "completed" as const,
  },
];
