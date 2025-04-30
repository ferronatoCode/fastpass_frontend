import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Cadastro({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Cadastrar Usuário</CardTitle>
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Nome completo:</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="nome exemplo"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>   <div className="grid gap-2">
                <Label htmlFor="email">CPF:</Label>
                <Input
                  id="CPF"
                  type="text"
                  placeholder="123456789"
                  required
                />
              </div>   <div className="grid gap-2">
                <Label htmlFor="email">Data de Nascimento</Label>
                <Input
                  id="nasc"
                  type="date"
                  placeholder="dd/MM/YYYY"
                  required
                />
              </div>   <div className="grid gap-2">
                <Label htmlFor="email">Endereço:</Label>
                <Input
                  id="end"
                  type="text"
                  placeholder="cidade/rua/bairro/país"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Salvar
              </Button>
              
            </div>
          
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
