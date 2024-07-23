import Servico from "../servico/Servico";

export const servicos: Servico[] = [
  {
    id: 1,
    nome: "Corte Clássico",
    descricao: "Corte tradicional, mantendo o estilo clássico e elegante.",
    preco: 30.0,
    quantidadeSlots: 5,
    imagemURL: "/servicos/corte-de-cabelo.jpg",
  },
  {
    id: 2,
    nome: "Barba Completa",
    descricao: "Barba feita com toalha quente, aparação e alinhamento.",
    preco: 25.0,
    quantidadeSlots: 3,
    imagemURL: "/servicos/combo.jpg",
  },
  {
    id: 3,
    nome: "Viadagem",
    descricao: "Manicure e pedicure, faça suas unnhas lindas",
    preco: 35.0,
    quantidadeSlots: 4,
    imagemURL: "/servicos/manicure-pedicure.jpg",
  },
  {
    id: 4,
    nome: "Corte Infantil",
    descricao: "Corte especial para crianças, com muito cuidado e paciência.",
    preco: 20.0,
    quantidadeSlots: 6,
    imagemURL: "/servicos/corte-infantil.jpg",
  },
  {
    id: 5,
    nome: "Corte e Barba",
    descricao: "Pacote completo de corte e barba para um visual impecável.",
    preco: 50.0,
    quantidadeSlots: 4,
    imagemURL: "/servicos/corte-de-barba.jpg",
  },
  {
    id: 6,
    nome: "Dia do noivo",
    descricao:
      "Tratamento de hidratação profundo para barba, deixando-a macia e saudável.",
    preco: 20.0,
    quantidadeSlots: 2,
    imagemURL: "/servicos/dia-de-noivo.jpg",
  }
];
