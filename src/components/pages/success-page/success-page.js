import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const SuccessPage = () => {
  return (
    <div className="succes">
      <span>Ваша заявка успешно оптравлена</span>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  )
}

export default SuccessPage;
