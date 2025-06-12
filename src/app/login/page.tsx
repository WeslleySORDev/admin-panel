"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Alert, AlertDescription } from "@/src/components/ui/alert"
import { InputField } from "@/src/components/forms/form-field"
import { useAuth } from "@/src/hooks/use-auth"
import { AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const success = await login(email, password)

      if (success) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        router.push("/dashboard")
      } else {
        setError("Email ou senha inválidos")
      }
    } catch {
      setError("Ocorreu um erro ao fazer login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Painel Administrativo</CardTitle>
          <CardDescription className="text-center">Entre com suas credenciais para acessar o painel</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <InputField label="Email" name="email" type="email" placeholder="admin@loja.com" required />
              <InputField label="Senha" name="password" type="password" placeholder="••••••••" required />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          <p className="w-full">Para teste, use: admin@loja.com / admin123</p>
        </CardFooter>
      </Card>
    </div>
  )
}
