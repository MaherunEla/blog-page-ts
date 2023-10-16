import React, { useContext } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GlobalContext } from "@/context";
import { Input } from "@/components/ui/input";

const TageValue = ({ tagName }: any) => {
  const { tagformname, setTagformname } = useContext(GlobalContext);

  // const createBlogFormSchema = z.object({
  //   title: z.string(),
  //   backgroundImage: z.string(),
  //   categoryname: z.string(),
  //   tagname: z
  //     .array(
  //       z.object({
  //         value: z.string(),
  //       })
  //     )
  //     .optional(),
  // });
  // type FormValues = z.infer<typeof createBlogFormSchema>;

  // const defaultValues: Partial<FormValues> = {
  //   title: "This is my first Blog",
  //   tagname: [{ value: "Data" }, { value: "Technology" }],
  // };
  // const form = useForm<FormValues>({
  //   resolver: zodResolver(createBlogFormSchema),
  //   defaultValues,
  //   mode: "onChange",
  // });

  // const { register, control, handleSubmit } = form;

  // const { fields, append } = useFieldArray({
  //   name: "tagname",
  //   control,
  // });
  const { control } = useFormContext();
  return (
    <div className="border border-red-500 flex items-center justify-center gap-2">
      <FormField
        control={control}
        name={tagName}
        render={({ field }) => (
          <FormItem>
            <FormDescription>{field.value}</FormDescription>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TageValue;
