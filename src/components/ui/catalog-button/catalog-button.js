import React from "react";
import { useDispatch } from "react-redux";
import { selectService } from "../../../store/actions";

const CatalogButton = ({onClick, selectedService}) => {
  const dispatch = useDispatch();
  const onSelectService = (service) => dispatch(selectService(service));
  const onCatalogClick = () => {
    onClick();
    onSelectService(selectedService);
  }
  return (
    <button className="card__button" onClick={() => onCatalogClick()}>Записаться на услугу</button>
  );
};

export default CatalogButton;
