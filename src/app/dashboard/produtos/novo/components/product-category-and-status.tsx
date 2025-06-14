import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/src/components/ui/form";
import { CATEGORIAS_PRODUTO, statusOptions } from "@/src/constants";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/components/ui/select";
import { UseFormReturn } from "react-hook-form";

const categoriaOptions = CATEGORIAS_PRODUTO.map((categoria) => ({
  value: categoria,
  label: categoria,
}));

interface ProductCategoryAndStatusProps {
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

export function ProductCategoryAndStatus({
  form,
}: ProductCategoryAndStatusProps) {
  return (
    <article className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Categoria</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categoriaOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              A categoria à qual o produto pertence.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Status</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              O status de disponibilidade do produto.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </article>
  );
}
