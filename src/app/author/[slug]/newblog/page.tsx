"use client";
import { useForm } from "react-hook-form";
import React from "react";
import { Editor } from "novel";
const NewBlogpage = () => {
  const form = useForm<FormValues>();

  type FormValues = {
    title: string;
    backgroundImage: string;
  };
  const { register, handleSubmit } = form;
  const onSubmit = (data: FormValues) => {
    console.log("form Submited", data);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" {...register("title")} />
          <label htmlFor="backgroundImage">Background Image</label>
          <input
            type="file"
            id="backgroundImage"
            {...register("backgroundImage")}
          />
          <label htmlFor="backgroundImage">Background Image</label>
          <input
            type="file"
            id="backgroundImage"
            {...register("backgroundImage")}
          />
        </form>
      </div>
      <Editor
        onUpdate={(data) => {
          console.log(data?.getHTML());
        }}
      />
    </div>
  );
};

export default NewBlogpage;
