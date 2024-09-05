"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin")
    }
  }, [status, router])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="mx-auto my-12 max-w-72">
      <h1 className="text-3xl font-bold mb-6">
        Hello, {session?.user?.name?.split(" ")[0]}
      </h1>
      <Button
        onClick={() =>
          signOut({
            callbackUrl: "/",
          })
        }
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Sign out
      </Button>
    </div>
  )
}
