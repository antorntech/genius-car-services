import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto my-4">
      <h1>Please add a service</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="name" {...register("name")} />
        <textarea
          className="mb-2"
          placeholder="description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="photo"
          {...register("img", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
