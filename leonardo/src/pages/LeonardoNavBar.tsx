import { Card } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const LNavBar = () => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 md:fixed md:top-1/2 md:right-4 md:left-auto md:transform md:-translate-y-1/2 md:translate-x-0 bottom-4 md:bottom-auto ">
      <Card className="w-auto p-3 rounded-full flex flex-row md:flex-col items-center space-x-4 md:space-y-4 md:space-x-0">
        <div className="w-8 h-8 flex items-center justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Link to="/search" className="w-8 h-8 flex items-center justify-center">
          <GoSearch size={24} />
        </Link>
        <Link to="/profile" className="w-8 h-8 flex items-center justify-center">
          <GoPerson size={24} />
        </Link>
        <Link to="/" className="w-8 h-8 flex items-center justify-center">
          <GoHome size={24} />
        </Link>
      </Card>
    </div>
  );
}

export default LNavBar;
