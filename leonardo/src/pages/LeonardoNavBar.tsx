import { Card } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LNavBarProps {
  icon: number;
}

export const LNavBar: React.FC<LNavBarProps> = ({ icon }) => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 md:fixed md:top-1/2 md:right-4 md:left-auto md:transform md:-translate-y-1/2 md:translate-x-0 bottom-4 md:bottom-auto z-50">
      <Card className="w-auto p-3 rounded-full flex flex-row md:flex-col items-center space-x-4 md:space-y-4 md:space-x-0">
        <div className="w-8 h-8 flex items-center justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>?
        <div className={`flex items-center justify-center rounded-full ${icon === 3 && "bg-black border-black border-2"}`}>
          <Link to="/search" className="w-8 h-8 flex items-center justify-center">
            <GoSearch size={24} className={icon === 3 ? "text-white" : " "} />
          </Link>
        </div>
        <div className={`flex items-center justify-center rounded-full ${icon === 2 ? "bg-black border-black border-2" : "border-gray-300"}`}>
          <Link to="/profile" className="w-8 h-8 flex items-center justify-center">
            <GoPerson size={24} className={icon === 2 ? "text-white" : " "} />
          </Link>
        </div>
        <div className={`flex items-center justify-center rounded-full ${icon === 1 && "bg-black border-black border-2"}`}>
          <Link to="/" className="w-8 h-8 flex items-center justify-center">
            <GoHome size={24} className={icon === 1 ? "text-white" : " "} />
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LNavBar;
