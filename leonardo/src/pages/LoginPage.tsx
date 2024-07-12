import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect"
import { Link } from "@tanstack/react-router"
import WelfareToggleRight from "@/components/ui/welfaretoggleright"
import WelfareToggleLeft from "@/components/ui/welfatoggleleft"


export const LoginForm = () => {

  const words = [
    {
      className: 'text-4xl font-bold text-gray-700',
      text: "Welcome Back!",
    },
  ];

  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
<<<<<<< HEAD
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full  ">
        <TypewriterEffectSmooth words={words} />
        <Card className="mx-auto w-full w-[90%] md:max-w-xl p-6">
        <WelfareToggleRight />
        <WelfareToggleLeft />
          <CardContent >
            <div className="grid gap-4 ">
=======
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20"></div>
      <WelfareToggleRight />
      <WelfareToggleLeft />
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full">
        <TypewriterEffectSmooth words={words}/>
        <Card className="mx-auto w-[90%] md:max-w-xl p-6 ">
          <CardContent>
            <div className="grid gap-4">
>>>>>>> afalconi
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@mail.com"
                  required
                />
              </div>
              <div className="grid gap-1">
                <div className="flex items-center justify-between ">
                  <Label htmlFor="password">Password</Label>
                  <div className="mt-1 text-center text-xs">
                    <Link to="/signup" className="text-red-500 hover:underline">Forgot Password?</Link>{" "}
                  </div>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                  required />
              </div>
              <Button type="submit" className="w-full bg-leonardoGrey text-white py-2 px-4 rounded-full shadow-custom">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Register</Link>{" "}
            </div>
          </CardContent>
        </Card>
        <div className="fixed bottom-0 left-0 w-full py-2 gray-100 text-center text-xs text-gray-600">
          <a href="/regolamento" className="mx-2 text-black-600 hover:underline">Regolamento</a> |
          <a href="/condizioni" className="mx-2 text-black-600 hover:underline">Condizioni d'uso</a> |
          <a href="/privacy" className="mx-2 text-black-600 hover:underline">Privacy</a> |
          <a href="/sicurezza" className="mx-2 text-black-600 hover:underline">Sicurezza</a>
        </div>
      </div>
    </div>
  )
}
