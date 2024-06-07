import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center"></div>
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <Card className="mx-auto w-full w-[90%] md:max-w-xl p-6 rounded-2xl">
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Your username"
                  required
                />
              </div>
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
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                </div>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="*********"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gray-600 text-white py-2 px-4 rounded-full shadow-custom">
                Register
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account? <a href="/login" className="text-blue-500">Login</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
