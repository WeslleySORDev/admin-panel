import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface ProductNameAndDescriptionProps {
  form: UseFormReturn<
    {
      name: string;
      description: string;
      price: number;
      category: "Imobiliario" | "Automotivo" | "Geral";
      status: string;
      stock: number;
    },
    any,
    {
      name: string;
      description: string;
      price: number;
      category: "Imobiliario" | "Automotivo" | "Geral";
      status: string;
      stock: number;
    }
  >;
}

export function ProductNameAndDescription({
  form,
}: ProductNameAndDescriptionProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Nome do Produto" {...field} />
            </FormControl>
            <FormDescription>
              O nome do produto deve ser único e descritivo.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
              <Input placeholder="Descrição detalhada do produto" {...field} />
            </FormControl>
            <FormDescription>
              Forneça uma descrição clara e concisa do produto.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
