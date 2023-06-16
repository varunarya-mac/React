import React from "react";
import { useForm } from 'react-hook-form'
import style from "./form.module.css";

type FormValues = {
    name: string;
    email: string;
    channel: string;

}

export const Form = () => {

    const form = useForm<FormValues>();
    const {register, handleSubmit, formState} = form;
    const { errors } = formState;
    //Now we have to register the fileds with form

    //one of the way to register one field, we are not using this
    const { name, ref, onChange, onBlur   } = register('name');
    // another way to use register as spead opretor

    const onSubmit = (data: FormValues): void => {
        console.log(data);
    }

  return (
    <div>
      <form  onSubmit={handleSubmit(onSubmit)} className={style.form} noValidate>
        <div>
          <label htmlFor="name">User Name</label>
          <input id="name" type="text" {...register('name', {
            required: 'User name is required',
           //custom validation
            validate: {
                noAdmin : (fieldValue) => {
                    return fieldValue != 'admin' || "Can't use Admin as user name"
                },
                noRoot: (fieldValue) => {
                    return fieldValue != 'root' || "Can't use Root as user name"
                }
            }
          })}/>
          <p className={style.error}>{errors.name?.message}</p>
          
        </div>

        <div>
          <label htmlFor="email">Email ID</label>
          <input id="email" type="email" {...register('email', {
            pattern: {
                value: /[A-C]/,
                message: 'Email format is not corrrect'
            },
            required: 'Email is required'
          })} />
          <p className={style.error}>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <input id="channel" type="text" {...register('channel', {
            required: {
                value: true,
                message: "Required field"
            }
          })} />
          <p className={style.error}>{errors.channel?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
