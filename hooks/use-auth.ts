"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn")
      setIsAuthenticated(!!isLoggedIn)
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulação de autenticação
    if (email === "admin@loja.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true")
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsAuthenticated(false)
    router.push("/login")
  }

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
  }
}
