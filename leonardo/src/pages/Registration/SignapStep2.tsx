
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerDemo } from "@/components/ui/datepicker";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from 'react-hook-form';


export function SignapStep2() {

	return(
    <div className="grid gap-3">
		  <div className="flex flex-col">
          <label className="text-sm font-medium">Data di nascita</label>
          <input
            type="date"
            className="border border-gray-300 rounded p-2 mt-1"
          />
        </div>

      <div className="grid gap-2">
        <Label htmlFor="MaritalStatus">Marital status</Label>
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
      <div className="grid gap-2 mt-2">
        <label className="text-sm font-medium">Do you have: </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Children
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Elderly parents
            </label>
          </div>
        </div>
      </div>
      <div className="grid gap-2 mt-2">
        <label className="text-sm font-medium">Interests: </label>
      </div>
      <div className="flex items-center justify-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            welfare pilastri
            </label>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            welfare pilastri
            </label>
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            welfare pilastri
            </label>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            welfare pilastri
            </label>
      </div>
    </div>
    </div>
  </div>
	);
}

