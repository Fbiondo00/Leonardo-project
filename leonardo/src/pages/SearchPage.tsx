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
import { Card } from "@/components/ui/card"
import { CardOver } from "@/components/ui/CardOver";

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

	const cards = [
		{
		  title: "Card 1",
		  description: "Description for card 1",
		  background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		  over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
		},
		{
		  title: "Card 2",
		  description: "Description for card 2",
		  background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		  over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
		},
		{
		  title: "Card 3",
		  description: "Description for card 3",
		  background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		  over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
		},
		{
		  title: "Card 4",
		  description: "Description for card 4",
		  background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		  over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
		},
		{
		  title: "Card 5",
		  description: "Description for card 5",
		  background: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		  over: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
		},
	  ];

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-gray-800">
      <div className="fixed inset-0 w-full h-full bg-leonardoWhite bg-contain bg-no-repeat bg-center filter opacity-20"></div>
      <LNavBar icon={3} />
      <Card className="w-full max-w-md mt-4 p-6 z-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-4 items-stretch">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input placeholder="search" {...field} className="h-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
      <div className="w-full px-20 mt-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map(card => (
            <CardOver
              title={card.title}
              description={card.description}
              background={card.background}
              over={card.over}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
