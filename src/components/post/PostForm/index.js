import React, { useEffect, useRef, useState } from 'react';
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useForm } from "react-hook-form";
import { throttle } from "lodash";
import Inner from '../../style/Inner'
import Btn from '../../common/Btn';
function PostForm({categories, post, savePost}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [thumbnails, setThumbnails] = useState([]);
  const editor = useRef();

  useEffect(() => {
    editor.current.getInstance().setHTML(post.content);
    reset(post);
  }, [post]);

  const selectThumbnail = (index) => {
    setThumbnails((thumb) =>
      thumb.map((t, i) => ({ ...t, selected: i === index }))
    );
  };

  const deleteThumbnail = (index) => {
    let content = editor.current.getInstance().getHTML();
    const div = document.createElement("div");
    div.innerHTML = content;
    div.querySelectorAll("img").forEach(i => i.src === thumbnails[index].url && i.remove());
    editor.current.getInstance().setHTML(div.innerHTML);
  }

  const findThumbnail = (url) => {
    const index = thumbnails.findIndex(e => e.url === url);
    setThumbnails((thumb) =>
      thumb.map((t, i) => ({ ...t, selected: i === index }))
    );
  };

  const handleEditorChange = throttle(content => {
    extractThumbnails(content);
  }, 1000);

  const extractThumbnails = (content, thumbnail = null) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    let urls = [];
    div.querySelectorAll("img")
      .forEach((img, i) => {
        const selected = (img.src === thumbnail) || (i === 0 && !thumbnail)
        img && urls.push({ url: img.src, selected });
      });
    setThumbnails(urls);
  };

  const onSubmit = async (data, html) => {
    const content = editor.current.getInstance().getHTML();
    const selectedThumbnail = thumbnails.find((t) => t.selected);
    const newData = {
      ...data,
      thumbnail: selectedThumbnail && selectedThumbnail.url,
      content
    }
    savePost(newData);
  };

  return (
<form id="postWriteForm" onSubmit={handleSubmit(onSubmit)}>
  <Inner>
          <div className="form_group">
            <div className="form_label">title</div>
            <input
              type="text"
              className="form_input"
              {...register("title", { required: true })}
            />
            {errors?.title && <p className="error_text">Title is reuiqred</p>}
          </div>
          <div className="form_group">
            <div className="form_label">category</div>
            <select
              className="form_input"
              {...register("categoryId", { required: true })}
            >
              <option value="">select category</option>
              {categories && categories.map((c) => (
                <option value={c.id} key={c.id}>{c.name}</option>
              ))}
            </select>
            {errors?.categoryId && <p className="error_text">Category is reuiqred</p>}
          </div>
          <div className="form_group">
            <div className="form_label">thumbnail</div>
            <ul className="thumb_list">
              {thumbnails.length ? thumbnails.map((t, i) => (
                <li
                  className={`thumb_item ${t.selected && "selected"}`}
                  key={t.url + i}
                  onClick={() => selectThumbnail(i)}
                >
                  <img className="thumb_image" src={t.url} />
                  <button className="thumb_del_bttn" type="button" onClick={() => deleteThumbnail(i)}>
                    <i className="las la-times"></i>
                  </button>
                </li>
              )) : <p className="secondary_text">Nothing is selected</p>}
            </ul>
          </div>
          <div className="form_group">
            <div className="form_label">content</div>
            <Editor
              ref={editor}
              initialValue="hello react editor world!"
              previewStyle="vertical"
              height="600px"
              initialEditType="markdown"
              useCommandShortcut={true}
              //hooks={{ addImageBlobHook: onImageAdd }}
              // onChange={() => handleEditorChange()}
              onBeforePreviewRender={(t) => handleEditorChange(t)}
            />
          </div>
          <div className="form_bottom">
            <Btn size="lg" isSubmit={true}>submit</Btn>
          </div>
          </Inner>
        </form>
  );
}

export default PostForm;