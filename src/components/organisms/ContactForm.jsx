import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/utils/form-schema";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
      data = {...data, "title": title, "quantity": quantity, "price": price};
      await fetch('api/emailSend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      toast.success('Email sent!');
      form.reset();
      router.push('/');
   
  };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full max-w-xl mx-auto gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start">
                  E-mail address <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...inputField} className="w-full min-w-[250px] md:min-w-[350px] lg:min-w-[400px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fname"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start">
                  First name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John" {...inputField} className="w-full min-w-[250px] md:min-w-[350px] lg:min-w-[400px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lname"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start">
                  Last name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Doe" {...inputField} className="w-full min-w-[250px] md:min-w-[350px] lg:min-w-[400px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start">
                  Phone number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="+1 234 567 890" {...inputField} className="w-full min-w-[250px] md:min-w-[350px] lg:min-w-[400px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Place order</Button>
        </form>
      </Form>
    )
}