import React, { useState, lazy } from 'react';
import { catalogList } from '../../../const';
import ModalWindow from '../modal-window/modal-window';
import LoaderModal from '../../ui/loaders/loader-modal/loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProductCard = lazy(() => import('../product-card/product-card'));

const Catalog = ({ service }) => {
  const [isOpened, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  return (
    <section className="catalog">
      <div className="catalog__wrapper">
        <h2 className="catalog__title">Услуги автосервиса</h2>
        <ul className="catalog__services-container">
          {catalogList.map((item) => (
            <ProductCard key={item.id} product={item} isOpened={isOpened} setOpen={setOpen} />
          ))}
        </ul>
      </div>
      {isOpened ? <ModalWindow setOpen={setOpen} setLoader={setLoader} service={service} /> : null}
      {loader ? <LoaderModal /> : null}
    </section>
  );
};

export { Catalog };

const mapStateToProps = (state) => ({ service: state.selectedService });

export default connect(mapStateToProps, null)(Catalog);

Catalog.propTypes = {
  service: PropTypes.string
};
