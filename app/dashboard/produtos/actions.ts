"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Tipos
export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  estoque: number;
  status: "Ativo" | "Inativo";
  imagem?: string;
}

// Dados mockados para simulação
let produtos: Produto[] = [
  {
    id: "1",
    nome: "Suvinil Fosco Completo Branco",
    descricao:
      "Tinta acrílica premium com acabamento fosco, ideal para disfarçar imperfeições e proporcionar um toque suave às paredes internas e externas.",
    preco: 195.0,
    categoria: "Tintas Imobiliárias",
    estoque: 70,
    status: "Ativo",
    imagem: "/suvinil-fosco-completo-branco.jpg",
  },
  {
    id: "2",
    nome: "Suvinil Esmalte Cor & Proteção Tabaco",
    descricao:
      "Esmalte sintético base água para madeiras e metais, com alta durabilidade e secagem rápida.",
    preco: 85.5,
    categoria: "Tintas para Madeira e Metal",
    estoque: 50,
    status: "Ativo",
    imagem: "/suvinil-esmalte-cor-protecao-tabaco.jpg",
  },
  {
    id: "3",
    nome: "Suvinil Toque de Brilho Gelo",
    descricao:
      "Tinta acrílica lavável com um suave toque acetinado, perfeita para quem busca elegância e praticidade em ambientes internos.",
    preco: 230.0,
    categoria: "Tintas Especiais",
    estoque: 55,
    status: "Ativo",
    imagem: "/suvinil-toque-de-brilho-gelo.jpg",
  },
  {
    id: "4",
    nome: "Suvinil Massa Corrida",
    descricao:
      "Massa corrida para nivelar e corrigir imperfeições em superfícies internas de alvenaria e gesso.",
    preco: 55.0,
    categoria: "Complementos para Pintura",
    estoque: 120,
    status: "Ativo",
    imagem: "/suvinil-massa-corrida.jpg",
  },
  {
    id: "5",
    nome: "Suvinil Verniz Proteção Total Brilhante",
    descricao:
      "Verniz marítimo de alta performance para madeiras, oferece proteção contra sol, chuva e umidade.",
    preco: 110.0,
    categoria: "Vernizes e Stains",
    estoque: 40,
    status: "Ativo",
    imagem: "/suvinil-verniz-protecao-total-brilhante.jpg",
  },
];

// Funções de ação do servidor
export async function getProdutos() {
  // Em um ambiente real, você buscaria do banco de dados
  return produtos;
}

export async function getProduto(id: string) {
  // Em um ambiente real, você buscaria do banco de dados
  return produtos.find((p) => p.id === id) || null;
}

export async function createProduto(formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newProduto: Produto = {
    id: (produtos.length + 1).toString(),
    nome: formData.get("nome") as string,
    descricao: formData.get("descricao") as string,
    preco: Number.parseFloat(formData.get("preco") as string),
    categoria: formData.get("categoria") as string,
    estoque: Number.parseInt(formData.get("estoque") as string),
    status: formData.get("status") as "Ativo" | "Inativo",
    imagem: "/placeholder.svg?height=200&width=200",
  };

  produtos.push(newProduto);

  revalidatePath("/dashboard/produtos");
  redirect("/dashboard/produtos");
}

export async function updateProduto(id: string, formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = produtos.findIndex((p) => p.id === id);

  if (index !== -1) {
    produtos[index] = {
      ...produtos[index],
      nome: formData.get("nome") as string,
      descricao: formData.get("descricao") as string,
      preco: Number.parseFloat(formData.get("preco") as string),
      categoria: formData.get("categoria") as string,
      estoque: Number.parseInt(formData.get("estoque") as string),
      status: formData.get("status") as "Ativo" | "Inativo",
    };
  }

  revalidatePath("/dashboard/produtos");
  redirect("/dashboard/produtos");
}

export async function deleteProduto(id: string) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000));

  produtos = produtos.filter((p) => p.id !== id);

  revalidatePath("/dashboard/produtos");
}
