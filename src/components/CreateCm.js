
import React, { useState } from 'react';
import Rating from 'react-rating';
import { useForm, Controller } from "react-hook-form";

const CreateCm = () => {
  const {
    
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      rating: 0,
    },
  });
  
  function onSubmit(data) {
    alert(JSON.stringify(data, undefined, 2));
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      

      <div>
        <div id="rating_label">Rating</div>
        <Controller
          control={control}
          name="rating"
          rules={{
            validate: (rating) => rating > 0,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Rating
              value={value}
              isRequired
              onChange={onChange}
              visibleLabelId="rating_label"
              onBlur={onBlur}
            />
          )}
        />
        {errors.rating && <div>Rating is required.</div>}
      </div>

      <button type="submit">
        Submit review
      </button>
      </form>
)};

export default CreateCm;
