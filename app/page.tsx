"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <div className="mx-auto my-12 max-w-72">
      <h1 className="text-3xl font-bold mb-6">example-next-auth-provider</h1>
      <p>
        <b>example-next-auth-provider</b> is a simple repository to explore and
        test various authentication providers using <b>next-auth</b>.
      </p>

      <div className="flex flex-col items-start gap-2 mt-12">
        <Button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          variant="outline"
        >
          Sign in with GitHub
        </Button>

        <Button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          variant="outline"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}
