import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Registration {
  username?: string;
  fullName?:string;
  email?: string;
  password?: string;
}

interface SignapStep1Props {
  setAllInfo: React.Dispatch<React.SetStateAction<Registration | undefined>>;
}

export function SignapStep1({ setAllInfo }: SignapStep1Props) {

  const [psw , setPsw] = useState<string>("");
  const [error, setError] = useState<number>(0);


  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string): boolean => {
    const re = /^(?=.*[A-Z])(?=.*[!@#?$&*]).{8,}$/;
    return re.test(String(password));
  };

  const validateConfirmPassword = (confirmPassword: string): boolean => {
    return psw === confirmPassword;
  };


  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAllInfo((prevInfo) => ({
      ...prevInfo,
      fullName: e.target.value,
    }));
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAllInfo((prevInfo) => ({
      ...prevInfo,
      username: e.target.value,
    }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (validateEmail(e.target.value) == false)
    {
      setAllInfo((prevInfo) => ({
        ...prevInfo,
        email: undefined,
      }));
      setError(1);
    }
    else
    {
      setAllInfo((prevInfo) => ({
        ...prevInfo,
        email: e.target.value,
      }));
      setError(0);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (validatePassword(e.target.value) == false)
      setError(2);
    else
    {
      setPsw(e.target.value);
      setError(0);
    }
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (validateConfirmPassword(e.target.value) == false)
    {
      setAllInfo((prevInfo) => ({
        ...prevInfo,
        password: undefined,
      }));
      setError(3);
    }
    else
    {
      setAllInfo((prevInfo) => ({
        ...prevInfo,
        password: e.target.value,
      }));
      setError(0);
    }
  };


	return(
            <div className="grid gap-4">
				      <div className="grid gap-2">
                <Label htmlFor="username">Full Name</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleFullNameChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Your username"
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@mail.com"
                  onChange={handleEmailChange}
                  required
                />
                { error == 1 &&
                  <>
                    <span className="text-red-500">Email non valida</span>
                  </>
                }
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                  onChange={handlePasswordChange}
                  required
                />
                { error == 2 &&
                  <>
                    <span className="text-red-500">Psw non valida</span>
                  </>
                }
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                </div>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="*********"
                  onChange={handleConfirmPasswordChange}
                  required
                />
                { error == 3 &&
                  <>
                    <span className="text-red-500">Psw non valida</span>
                  </>
                }
              </div>
            </div>
	);
}
