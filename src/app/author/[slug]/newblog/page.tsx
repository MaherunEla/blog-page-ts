"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { Editor } from "novel";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogDemo } from "../Components/DialogDemo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
const NewBlogpage = () => {
  const createBlogFormSchema = z.object({
    title: z.string(),
    backgroundImage: z.string(),
    categoryname: z.string(),
    tagname: z
      .array(
        z.object({
          value: z.string(),
        })
      )
      .optional(),
  });
  type FormValues = z.infer<typeof createBlogFormSchema>;

  const defaultValues: Partial<FormValues> = {
    title: "This is my first Blog",
    tagname: [{ value: "Data" }, { value: "Technology" }],
  };
  const form = useForm<FormValues>({
    resolver: zodResolver(createBlogFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { register, control, handleSubmit } = form;
  const { fields, append } = useFieldArray({
    name: "tagname",
    control,
  });
  const onSubmit = (data: FormValues) => {
    console.log("form Submited", data);
  };
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-5">
        <Form {...form}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Blog Title" {...field} />
                </FormControl>
                <FormDescription>This is your Blog Title.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backgroundImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormDescription>
                  This is your Blog Background Image.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Category</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                      <DialogDemo />
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>This is your Blog Category.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="border border-red-500 flex items-center justify-center gap-2">
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`tagname.${index}.value`}
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
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              className=""
              onClick={() => append({ value: "" })}
            >
              Add Tage
            </Button>
          </div>
          <Label htmlFor="description">Description</Label>
          <Editor
            onUpdate={(data) => {
              console.log(data?.getHTML());
            }}
          />

          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="feature">Feature Blog</Label>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewBlogpage;
