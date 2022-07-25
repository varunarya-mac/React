import { Fragment } from "react";
import classes from "./Order-detail.module.css";
import { useForm } from "react-hook-form";

const OrderDetail = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: 'varun',
      email: 'varun@gmail.com',
      pincode: '232413'
    }
  });

  const submit = (data) => {
    console.log("-----------------", data);
  };

  return (
      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        <div className={classes.control}>
        <label>Name</label>
        <input
          type='text'
          {...register("name", { required: "Name is required field" })}
        ></input>
        {errors.name?.type === "required" && (
          <p style={{ background: "red", color: "white" }}>
            {errors.name.message}
          </p>
        )}
        </div>
       
        <div className={classes.control}> 

        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required field",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email is invalid",
            },
          })}
          type="email"
        ></input>
        {errors.email ? (
          <>
            {errors.email.type === "required" && (
              <p style={{ background: "red", color: "white" }}>
                {errors.email.message}
              </p>
            )}
            {errors.email.type === "pattern" && (
              <p style={{ background: "orange", color: "white" }}>
                {errors.email.message}
              </p>
            )}
          </>
        ) : null}
        </div>

<div className={classes.control}>
        <label>Pincode</label>
        <input  {...register("pincode", { required: true })} type="text"></input>
        {errors.pincode?.type === "required" && (
          <p style={{ background: "red", color: "white" }}>
            {errors.pincode.message}
          </p>
        )}
        </div>
        <div className={classes.actions}>
        <button className={classes.submit} type="submit"> submit </button>
        </div>
      </form>
  );
};

export default OrderDetail;
