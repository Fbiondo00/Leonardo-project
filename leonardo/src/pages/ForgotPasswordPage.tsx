import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export const ForgotPasswordPage = () => {
  const words = [
		{
		  className: "text-white",
		  text: "Forgot",
		},
		{
		  text: "Password!",
		  className: "text-white",
		},
	  ];
  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full">
        <TypewriterEffectSmooth words={words} />
        <Card className="mx-auto w-full w-[90%] md:max-w-xl p-6 rounded-2xl">
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Enter your email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@mail.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gray-600 text-white py-2 px-4 rounded-full shadow-custom">
                Send Password Reset Link
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Remembered your password? <Link to="/login" className="text-blue-500">Login</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
