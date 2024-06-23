
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerDemo } from "@/components/ui/datepicker";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  birthdate: yup
    .date()
    .required('La data di nascita è obbligatoria')
    .typeError('Inserisci una data valida'),
  status: yup
    .string()
    .required('Lo stato è obbligatorio')
    .oneOf(['active', 'inactive'], 'Stato non valido'),
});

export function SignapStep2() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };


	return(
    <div className="grid gap-4">
		  <div className="flex flex-col">
          <label className="text-sm font-medium">Data di nascita</label>
          <input
            type="date"
            {...register('birthdate')}
            className="border border-gray-300 rounded p-2 mt-1"
          />
          {errors.birthdate && (
            <span className="text-red-500 text-sm">{errors.birthdate.message}</span>
          )}
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
      Interessi:
      <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             afalcone
            </label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             afalcone
            </label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             afalcone
            </label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             afalcone
            </label>
            </div>
            <div className="flex items-center space-x-2">

            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              afalcone
            </label>
      </div>
    </div>
    <div className="flex items-center space-x-2">
    <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             afalcone
            </label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             afalcone
            </label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             afalcone
            </label>
            </div>
    <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              afalcone
            </label>
            <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              afalcone
            </label>
      </div>
      </div>
      </div>
    </div>
	);
}

