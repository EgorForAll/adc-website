import React from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{margin: '20px'}}>
      <h1>
        404.
        <br />
        <small>Страница не найдена</small>
      </h1>
      <Link to="/" style={{color: `blue`}}>Вернуться на главную</Link>
    </div>
  );
};


export default PageNotFound;
