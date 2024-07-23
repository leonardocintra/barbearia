import FormUsuario from "@/components/usuario/FormUsuario";
import { Suspense } from "react";

export default function UsuarioPage() {
  return (
    <Suspense fallback={<>Carregando ...</>}>
      <FormUsuario />
    </Suspense>
  );
}
