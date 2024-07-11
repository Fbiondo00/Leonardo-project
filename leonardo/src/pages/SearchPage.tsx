import LNavBar from "./LeonardoNavBar"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FormSchema = z.object({
  search: z.string(),
})

export const SearchPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {

    }

  return (
    <div className="relative flex justify-center items-start w-full h-[100vh] bg-gray-100">
      <LNavBar icon={3}/>
      <Card className="fixed w-1/2 top-0 mt-4 p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-4 items-stretch">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input placeholder="search" {...field} className="h-full"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}
