
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerDemo } from "@/components/ui/datepicker";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import preventionRegister from '@/assets/preventionRegister.jpg';
import leisureRegisterImage from '@/assets/leisureRegister.jpg';
import redingRegister from '@/assets/redingRegister.jpg';
import sportRegister from '@/assets/sportRegister.jpg';
import { Switch } from "@/components/ui/switch";



export function SignapStep2() {

	return(
    <div className="grid gap-4">
		  <div className="grid gap-2">
        <Label htmlFor="username">Date of birth</Label>
        <DatePickerDemo/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Marital status</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Marital status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="single">single</SelectItem>
              <SelectItem value="married">married</SelectItem>
              <SelectItem value="divorced">divorced</SelectItem>
              <SelectItem value="widowed">widowed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Have children
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              elderly parents
            </label>
          </div>
        </div>
      </div>
      <div className="">
        <Label htmlFor="Interests">Interests</Label>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <DirectionAwareHover imageUrl={leisureRegisterImage} children={
                <>
                  <div className="flex items-center space-x-2">
                    <Switch id="leisure" />
                    <Label htmlFor="leisure">leisure</Label>
                  </div>
                </>
              }></DirectionAwareHover>
            </CarouselItem>
            <CarouselItem>
              <DirectionAwareHover imageUrl={sportRegister} children={
                <>
                 <div className="flex items-center space-x-2">
                   <Switch id="sports" />
                   <Label htmlFor="sports">sports</Label>
                 </div>
                </>
              }></DirectionAwareHover>
            </CarouselItem>
            <CarouselItem>
              <DirectionAwareHover imageUrl={redingRegister} children={
                <>
                <div className="flex items-center space-x-2">
                  <Switch id="reading" />
                  <Label htmlFor="reading">reading</Label>
                </div>
               </>
              }></DirectionAwareHover>
            </CarouselItem>
            <CarouselItem>
              <DirectionAwareHover imageUrl={preventionRegister} children={
                <>
                <div className="flex items-center space-x-2">
                  <Switch id="prevention" />
                  <Label htmlFor="prevention">prevention</Label>
                </div>
               </>
              }></DirectionAwareHover>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
	);
}
