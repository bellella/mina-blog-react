import React from 'react';
import { useForm } from 'react-hook-form';
import Btn from '../../common/Btn';
function ReplyForm({handleReplySubmit}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data, e) => {
    handleReplySubmit(data);
  };

  return (
    <form action="" id="commentForm" onSubmit={handleSubmit(onSubmit)}>
    <div className="form_group">
      <label htmlFor="" className="form_label">
        comment
      </label>
      <textarea cols="30" rows="10" className="form_textarea"
      {...register("content", { required: true })}
      ></textarea>
      {errors?.content && <p className="error_text">Comment is reuiqred</p>}
    </div>
    <div className="form_row">
    <div className="form_group">
      <label className="form_label">
        name
      </label>
      <input
              type="text"
              className="form_input"
              {...register("name", { required: true })}
            />
            {errors?.name && <p className="error_text">Name is reuiqred</p>}
    </div>
    <div className="form_group">
      <label className="form_label">
        email
      </label>
      <input
              type="text"
              className="form_input"
              {...register("email", { required: true })}
            />
            {errors?.email && <p className="error_text">Email is reuiqred</p>}
    </div>
    </div>
    <div className="form_bottom">
      <Btn isSubmit={true}>send comment</Btn>
    </div>
  </form>
  );
}

export default ReplyForm;