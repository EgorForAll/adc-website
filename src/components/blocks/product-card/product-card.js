import React from 'react';
import OrderButton from '../../hoc/order-button/order-button';
import CatalogButton from '../../ui/catalog-button/catalog-button';
import { Link } from 'react-router-dom/cjs/react-router-dom';
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
          <span className="card__description-text">
            {product.description}{' '}
            {product.id == 6 ? (
              <>
                <div>
                  График работы техосмотра уточняйте в разделе{' '}
                  <Link to="/documents">Документы</Link>
                </div>
                <br/>
                <div>
                  <i>
                    Обращаем внимание, что с 1 сентября 2025-го в России вводится госпошлина 500
                    рублей за внесение данных в Единую автоматизированную информационную систему
                    техосмотра (ЕАИСТО), она обязательна для уплаты при прохождении техосмотра
                    автомобиля. <br />
                    Льготы и инструкцию по оплате госпошлины смотрите в разделе{' '}
                    <Link to="/documents">Документы</Link>
                  </i>
                </div>
              </>
            ) : null}
          </span>
        </div>
        {product.experts ? (
          <div className="card__description" style={{ marginBottom: '10px' }}>
            <span className="card__description-text">Эксперты: {product.experts}</span>
          </div>
        ) : null}
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
