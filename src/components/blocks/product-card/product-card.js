import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import OrderButton from '../../hoc/order-button/order-button';
import CatalogButton from '../../ui/catalog-button/catalog-button';
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

  // Extract complex conditional logic for better readability
  const isTechnicalInspection = product.id === 6;
  const hasExperts = Boolean(product.experts);
  const hasPrice = Boolean(product.price);

  return (
    <li className="catalog__card">
      <div className="card__image-wrapper">
        <img 
          src={product.image} 
          alt={`Изображение услуги ${product.name}`} 
          width="130" 
          height="130" 
          loading="lazy"
        />
      </div>
      
      <h3 className="card__title">{product.name}</h3>
      
      <div className="card__description">
        <span className="card__description-text">
          {product.description}
          
          {isTechnicalInspection && (
            <div className="card__inspection-info">
              <div className="card__inspection-notice">
                График работы техосмотра уточняйте в разделе{' '}
                <Link to="/documents" className="card__link">Документы</Link>
              </div>
              
              <div className="card__inspection-warning">
                <em>
                  Обращаем внимание, что с 1 сентября 2025-го в России вводится госпошлина 500
                  рублей за внесение данных в Единую автоматизированную информационную систему
                  техосмотра (ЕАИСТО), она обязательна для уплаты при прохождении техосмотра
                  автомобиля. <br />
                  Льготы и инструкцию по оплате госпошлины смотрите в разделе{' '}
                  <Link to="/documents" className="card__link">Документы</Link>
                </em>
              </div>
            </div>
          )}
        </span>
      </div>
      
      {hasExperts && (
        <div className="card__experts">
          <span className="card__experts-text">Эксперты: {product.experts}</span>
        </div>
      )}
      
      {/* Блок с ценой и кнопкой прижаты к низу */}
      <div className="card__footer">
        {hasPrice && (
          <div className="card__price-section">
            <hr className="card__divider" />
            <div className="card__price">Цена: {product.price} руб.</div>
          </div>
        )}
        
        <div className="card__button-wrapper">
          <OrderButtonCard onClick={() => onSelectService(product.name)} />
        </div>
      </div>
    </li>
  );
};

// Enhanced PropTypes with more specific validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
    experts: PropTypes.string
  }).isRequired,
  isOpened: PropTypes.bool,
  setOpen: PropTypes.func
};

// Default props for optional values
ProductCard.defaultProps = {
  isOpened: false,
  setOpen: () => {}
};

export default ProductCard;