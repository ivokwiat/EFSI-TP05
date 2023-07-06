import React from 'react';

const Form = ({ respuesta, onChangeHandle, buttonOnsubmitHandler }) => {
  return (
    <div className="formEstilo">
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            name="resp"
            className="u-full-width"
            placeholder="Ingresa Bandera"
            value={respuesta}
            onChange={onChangeHandle}
          />
          <button
            type="button"
            onClick={buttonOnsubmitHandler}
            className="button-primary"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
