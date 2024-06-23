
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Link } from "@tanstack/react-router";
import { SignapStep1 } from "./SignapStep1";
import { SignapStep2 } from "./SignapStep2";
import { useState } from "react";
import { Progress } from "@/components/ui/progress"
import WelfareToggleRight from "@/components/ui/welfaretoggleright";
import WelfareToggleLeft from "@/components/ui/welfatoggleleft";

interface Registration {
  username?: string;
  fullName?:string;
  email?: string;
  password?: string;
}

export function RegisterForm() {

  const [ck, setCk] = useState<boolean>(true)
  const [allInfo, setAllInfo] = useState<Registration>();
  const [step, setStape] = useState<number>(0)

  const HandleFirstSubmit = () => {
    // if (step < 1 && allInfo?.email != undefined && allInfo?.fullName != undefined && allInfo?.username != undefined && allInfo?.password != undefined)
    // {
     setStape(step => step + 1);
    // }
  };

  const HandleSubmitBack = () => {
    if (step > 0)
    {
      setStape(step => step - 1);
    }
    console.log(step);
  };


  const words = [
    {
      className: 'text-4xl font-bold text-gray-700',
      text: "Nice to meet you!",
    },
  ];

  return (
	<div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
	  <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
	  <WelfareToggleRight />
    <WelfareToggleLeft />
    <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full">
	    <TypewriterEffectSmooth words={words} />
	    <Card className="mx-auto w-full md:max-w-xl pt-6">
        <div className="flex justify-center mb-6">
          <Progress value={(step * 50) + 25} className="w-[90%]"></Progress>
        </div>
		    <CardContent>
        {step === 0 &&
          <>
            <SignapStep1 setAllInfo={setAllInfo} setCk={setCk}/>
            <div className="flex justify-end mt-5">
              {
                ck == false &&
                  <div className="flex justify-between w-full">
                    <span className="text-red-500">Dati non validi</span>
                    <Button
                    type="submit"
                    className="w-1/3 bg-leonardoBlue text-white py-2 px-4 rounded-full shadow-custom"
                    onClick={HandleFirstSubmit}>
                        Next step
                    </Button>
                  </div>
                ||
                  <Button
                  type="submit"
                  className="w-1/3 bg-leonardoBlue text-white py-2 px-4 rounded-full shadow-custom"
                  onClick={HandleFirstSubmit}>
                      Next step
                  </Button>
              }
            </div>
          </>
        }
        {step === 1 &&
          <>
            <SignapStep2 />
            <div className="flex justify-between mt-5">
              <Button
              type="submit"
              className="w-1/3 bg-leonardoBlue text-white py-2 px-4 rounded-full shadow-custom"
              onClick={HandleSubmitBack}>
                  Back
              </Button>
              <Button
              type="submit"
              className="w-1/3 bg-leonardoBlue text-white py-2 px-4 rounded-full shadow-custom"
              >
                  Register
              </Button>
            </div>
          </>
        }
        <div className="mt-4 text-center text-sm">
              Already have an account? <Link to="/login" className="text-blue-500">Login</Link>{" "}
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
  );
}
