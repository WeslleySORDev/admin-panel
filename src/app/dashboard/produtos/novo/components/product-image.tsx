import { Button } from "@/src/components/ui/button";
import { ImagePlus } from "lucide-react";

export function ProductImage() {
  return (
    <article className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Imagem do Produto</label>
        <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 h-[300px]">
          {/* {product?.image ? (
            <div className="relative w-full h-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          ) : ( */}
          <div className="flex flex-col items-center justify-center text-center">
            <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Arraste uma imagem ou clique para fazer upload
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PNG, JPG ou WEBP (máx. 2MB)
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() =>
                alert("Funcionalidade de upload não implementada neste exemplo")
              }
              disabled
            >
              Selecionar Arquivo
            </Button>
          </div>
          {/* )} */}
        </div>
      </div>
    </article>
  );
}
