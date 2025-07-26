import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const phoneRegex = new RegExp(
  /^\+?[1-9]\d{1,14}$/
);

const formSchema = z.object({
  email: z.email("Invalid email").nonempty("Email is required"),
  fname: z.string().nonempty("First name is required"),
  lname: z.string().nonempty("Last name is required"),
  tel: z.string().regex(phoneRegex, 'Invalid Number!').nonempty("Phone number is required"),
});

export const ContactForm = ({title, quantity, price}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        fname: "",
        lname: "",
        tel: "",
        },
    });

    const router = useRouter();

    const onSubmit = async (data) => {
    try {
      data = {...data, "title": title, "quantity": quantity, "price": price};
      console.log(data);
      const response = await fetch('api/emailSend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Email failed');
      alert('Email sent!');
      form.reset();
      router.push('/');
    } catch (err) {
      alert('Something went wrong');
      console.error(err);
    }
  };

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-[60%] gap-6">
            {['email', 'fname', 'lname', 'tel'].map((field, idx) => (
            <FormField
                key={idx}
                control={form.control}
                name={field}
                render={({ field: inputField }) => (
                <FormItem className="flex flex-col gap-3">
                    <FormLabel className="self-start">
                    {field === 'email' ? 'E-mail address' :
                    field === 'fname' ? 'First name' :
                    field === 'lname' ? 'Last name' :
                    'Phone number'} <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                    <Input type={field === 'email' ? 'email' : 'text'} placeholder="type here..." {...inputField} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            ))}

            <Button type="submit">Place order</Button>
        </form>
        </Form>
    )
}