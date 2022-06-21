import React, { useState } from "react";
import "../form/form.css";

const Form = () => {
  const [text, setText] = useState("");
  const [adding_tags, setAdding_tags] = useState([]);


  const addText = (e) => {
    setText(e.target.value);
  };

  const postText = (e) => {
    // e.preventDefault()
    setAdding_tags([...adding_tags, text]);
    setText("");

    console.log(adding_tags);
  };

  const remove_tags = (id) => {
    setAdding_tags(adding_tags.filter((tags, index) => index !== id));
  };
  return (
    <>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => addText(e)}
          className={text.length <= 0 ? "value" : "norm_value"}
        />
        <input
          type="submit"
          onClick={() => postText()}
          disabled={!text}
          className={text ? "button_input" : "button_input_error"}
        />
      </form>

      <div>
        {text.length <= 0 ? (
          <p className="error_list">Поля вода не должно быть пустым</p>
        ) : (
          <p></p>
        )}
      </div>

      <div className="text_list_conteyner">
        {adding_tags.map((tags, index) => {
          return (
            <p key={index} className="list_tags">
              {tags}
              <button
                className="delete_x"
                onClick={() => remove_tags(index)}
              >
                x
              </button>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Form;
