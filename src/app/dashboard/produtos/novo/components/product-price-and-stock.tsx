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

interface ProductPriceAndStockProps {
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

export function ProductPriceAndStock({ form }: ProductPriceAndStockProps) {
  return (
    <article className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preço (R$)</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={0}
                placeholder="0.00"
                {...field}
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
              />
            </FormControl>
            <FormDescription>O preço de venda do produto.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="stock"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Estoque</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={0}
                placeholder="0"
                {...field}
                onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
              />
            </FormControl>
            <FormDescription>
              A quantidade disponível em estoque.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </article>
  );
}
