import React, { useState } from 'react';
import { catalogList } from '../../../const';
import ProductCard from '../product-card/product-card';
import ModalWindow from '../modal-window/modal-window';
import Loader from '../../ui/loader/loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Catalog = ({ service }) => {
  const [isOpened, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  return (
    <section className="catalog">
      <div className="catalog__wrapper">
        <h2 className="catalog__title">Каталог услуг</h2>
        <ul className="catalog__services-container">
          {catalogList.map((item) => (
            <ProductCard key={item.id} product={item} isOpened={isOpened} setOpen={setOpen} />
          ))}
        </ul>
      </div>
      {isOpened ? <ModalWindow setOpen={setOpen} setLoader={setLoader} service={service} /> : null}
      {loader ? <Loader /> : null}
    </section>
  );
};

export { Catalog };

const mapStateToProps = (state) => ({ service: state.selectedService });

export default connect(mapStateToProps, null)(Catalog);

Catalog.propTypes = {
  service: PropTypes.string
};
