import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { url } from "inspector"
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect"
import { Link } from "react-router-dom"


export function LoginForm() {

  const words = [
    {
      className: "text-white",
      text: "Welcome",
    },
    {
      text: "Back",
      className: "text-white",
    },
  ];

  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full">
        <TypewriterEffectSmooth words={words} />
        <Card className="mx-auto w-full w-[90%] md:max-w-xl p-6 ">
          <CardContent >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@mail.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>

                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                  required />
              </div>
              <Button type="submit" className="w-full bg-gray-700 text-white py-2 px-4 rounded-full shadow-custom">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?<a href="/register" className="text-blue-500">Register</a>{" "}
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
