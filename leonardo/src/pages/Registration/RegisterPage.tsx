
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Link } from "@tanstack/react-router";
import { SignapStep1 } from "./SignapStep1";
import { SignapStep2 } from "./SignapStep2";
import { useState } from "react";
import { Progress } from "@/components/ui/progress"

interface Registration {
  username?: string;
  fullName?:string;
  email?: string;
  password?: string;
}

export function RegisterForm() {

  const [allInfo, setAllInfo] = useState<Registration>();
  const [step, setStape] = useState<number>(0)

  const HandleFirstSubmit = () => {
    //if (step < 1 && allInfo?.email != undefined && allInfo?.fullName != undefined && allInfo?.username != undefined && allInfo?.password != undefined)
    //{
    //  setStape(step => step + 1);
    //}
    if (step < 1)
    {
      setStape(step => step + 1);
    }
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
      className: '',
      text: "Nice to",
    },
    {
      text: "meet you!",
      className: "",
    },
  ];

  return (
	<div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
	  <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
	  <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full">
	    <TypewriterEffectSmooth words={words} />
	    <Card className="mx-auto w-full w-[90%] md:max-w-xl p-6 ">
        <div className="flex justify-center mb-5">
          <Progress value={step * 50} className="w-[90%]"></Progress>
        </div>
		    <CardContent>
        {step === 0 &&
          <>
            <SignapStep1 setAllInfo={setAllInfo}/>
            <div className="flex justify-end mt-4">
              <Button
              type="submit"
              className="w-1/3 bg-gray-600 text-white py-2 px-4 rounded-full shadow-custom"
              onClick={HandleFirstSubmit}>
                  Next step
              </Button>
            </div>
          </>
        }
        {step === 1 &&
          <>
            <SignapStep2 />
            <div className="flex justify-between mt-4">
              <Button
              type="submit"
              className="w-1/3 bg-gray-600 text-white py-2 px-4 rounded-full shadow-custom"
              onClick={HandleSubmitBack}>
                  Back
              </Button>
              <Button
              type="submit"
              className="w-1/3 bg-gray-600 text-white py-2 px-4 rounded-full shadow-custom"
              >
                  Register
              </Button>
            </div>
          </>
        }
        </CardContent>
          <CardFooter className="flex justify-center text-sm">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
