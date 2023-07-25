import React, { useEffect } from 'react';
import OrderButton from '../../hoc/order-button/order-button';
import CatalogButton from '../../ui/catalog-button/catalog-button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { selectService } from '../../../store/actions';

const ProductCard = ({ product, isOpened, setOpen }) => {
  const dispatch = useDispatch();
  const onSelectService = (service) => dispatch(selectService(service));
  const OrderButtonCard = OrderButton(
    CatalogButton,
    isOpened,
    setOpen,
    onSelectService,
    product.name
  );

  return (
    <>
      <li className="catalog__card">
        <div className="card__image-wrapper">
          <img src={product.image} alt="Изображение услуги" width="130px" height="130px" />
        </div>
        <h3 className="card__title">{product.name}</h3>
        <div className="card__description">
          <span className="card__description-text">{product.description}</span>
        </div>
        <div className="card__button-wrapper">
          <OrderButtonCard onClick={() => onSelectService(product.name)} />
        </div>
      </li>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }),
  isOpened: PropTypes.bool,
  setOpen: PropTypes.func
};
