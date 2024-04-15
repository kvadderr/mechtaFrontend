import classNames from 'classnames';

type Props = {
  isOpen: boolean,
  close: () => void
}


const ProductInfo = ({isOpen, close}: Props) => {

  const modalClass = classNames('popup popup--big popup--product-card popup--border-large', {
    'popup--active': isOpen,
  });

  return (
    <div className={modalClass} data-popup="product">
      <div className="popup__container">
        <div className="popup__row">
          <div className="product">
            <div className="product__container">
              <div className="product__row">
                <div className="product__col product__col--right">
                  <div className="product__header">
                    <h2 className="product__title">Колбаса варёная Папа может сочная</h2>
                    <div className="product__weight">400&nbsp;г</div>
                    <div onClick={close} className="product__btn product__btn--close"></div>
                  </div>
                  <div className="product__parameters">
                    <div className="product__parameters-title">В&nbsp;100 граммах</div>
                    <div className="product__parameters-row">
                      <div className="product__parameters-col">
                        <div className="product__parameters-subtitle">158</div>
                        <div className="product__parameters-text">Ккал</div>
                      </div>
                      <div className="product__parameters-col">
                        <div className="product__parameters-subtitle">8 г</div>
                        <div className="product__parameters-text">Белки</div>
                      </div>
                      <div className="product__parameters-col">
                        <div className="product__parameters-subtitle">14 г</div>
                        <div className="product__parameters-text">Жиры</div>
                      </div>
                    </div>
                  </div>
                  <div className="product__section">
                    <div className="product__section-title">Состав</div>
                    <div className="product__section-text ">Изделие колбасное варёное из мяса
                      птицы 3 сорта. Мясо птицы механической обвалки куриное, вода, свинина, белковый стабилизатор куриный
                      и свиной, комплексные пищевые добавки.
                    </div>
                  </div>
                  <div className="product__section">
                    <div className="product__section-title">Срок хранения</div>
                    <div className="product__section-text">2 месяца</div>
                  </div>
                  <div className="product__section">
                    <div className="product__section-title">Условия хранения</div>
                    <div className="product__section-text">При температуре от&nbsp;0&deg;C до&nbsp;+6&deg;C</div>
                  </div>
                  <div className="product__section">
                    <div className="product__section-title">Производитель</div>
                    <div className="product__section-text">АО&nbsp;Останкинский мясоперерабатывающий комбинат, Россия</div>
                  </div>
                  <div className="product__section product__section--indent-vertical-big product__section--price-desktop">
                    <div className="product__btn product__btn--calc" data-price="2000">
                      <div className="product__btn-ctrl product__btn-ctrl--minus"></div>
                      <div className="product__btn-text">2000&nbsp;₽</div>
                      <div className="product__btn-ctrl product__btn-ctrl--plus"></div>
                    </div>
                  </div>
                  <div className="product__similar-products product__similar-products--mobile">
                    <div className="product__similar-products-title">Что еще пригодится</div>
                    <div className="product__similar-products-container">
                      <div className="preview-product preview-product--discount" data-product-id="200">
                        <div className="preview-product__container">
                          <div className="preview-product__row preview-product__row--image" data-link="product">
                            <div className="preview-product__quantity"></div>
                            <div className="preview-product__discount-label">−32%</div><img className="preview-product__img"
                              src="img/preview-product/1.png" alt="" />
                          </div>
                          <div className="preview-product__row preview-product__row--info">
                            <div className="preview-product__title" data-link="product">Fanta, апельсин</div>
                            <div className="preview-product__descr"><span className="preview-product__descr-text">1 л</span><span
                              className="preview-product__descr-text preview-product__descr-text--green">Участвует
                              в&nbsp;акции</span></div>
                            <div className="preview-product__row preview-product__row--controls preview-product__row--mobile">
                              <div className="preview-product__col preview-product__col--remove-product">
                                <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                              </div>
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div
                                className="preview-product__col preview-product__col--add-product preview-product__col--active">
                                <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                              </div>
                            </div>
                          </div>
                          <div className="preview-product__row preview-product__row--controls preview-product__row--desktop">
                            <div className="preview-product__col preview-product__col--remove-product">
                              <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                            </div>
                            <div
                              className="preview-product__col preview-product__col--add-product preview-product__col--active">
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="preview-product preview-product--discount" data-product-id="201">
                        <div className="preview-product__container">
                          <div className="preview-product__row preview-product__row--image" data-link="product">
                            <div className="preview-product__quantity"></div>
                            <div className="preview-product__discount-label">−32%</div><img className="preview-product__img"
                              src="img/preview-product/1.png" alt="" />
                          </div>
                          <div className="preview-product__row preview-product__row--info">
                            <div className="preview-product__title" data-link="product">Fanta, апельсин</div>
                            <div className="preview-product__descr"><span className="preview-product__descr-text">1 л</span><span
                              className="preview-product__descr-text preview-product__descr-text--green">Участвует
                              в&nbsp;акции</span></div>
                            <div className="preview-product__row preview-product__row--controls preview-product__row--mobile">
                              <div className="preview-product__col preview-product__col--remove-product">
                                <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                              </div>
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div
                                className="preview-product__col preview-product__col--add-product preview-product__col--active">
                                <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                              </div>
                            </div>
                          </div>
                          <div className="preview-product__row preview-product__row--controls preview-product__row--desktop">
                            <div className="preview-product__col preview-product__col--remove-product">
                              <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                            </div>
                            <div
                              className="preview-product__col preview-product__col--add-product preview-product__col--active">
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="preview-product preview-product--discount" data-product-id="202">
                        <div className="preview-product__container">
                          <div className="preview-product__row preview-product__row--image" data-link="product">
                            <div className="preview-product__quantity"></div>
                            <div className="preview-product__discount-label">−32%</div><img className="preview-product__img"
                              src="img/preview-product/1.png" alt="" />
                          </div>
                          <div className="preview-product__row preview-product__row--info">
                            <div className="preview-product__title" data-link="product">Fanta, апельсин</div>
                            <div className="preview-product__descr"><span className="preview-product__descr-text">1 л</span><span
                              className="preview-product__descr-text preview-product__descr-text--green">Участвует
                              в&nbsp;акции</span></div>
                            <div className="preview-product__row preview-product__row--controls preview-product__row--mobile">
                              <div className="preview-product__col preview-product__col--remove-product">
                                <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                              </div>
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div
                                className="preview-product__col preview-product__col--add-product preview-product__col--active">
                                <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                              </div>
                            </div>
                          </div>
                          <div className="preview-product__row preview-product__row--controls preview-product__row--desktop">
                            <div className="preview-product__col preview-product__col--remove-product">
                              <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                            </div>
                            <div
                              className="preview-product__col preview-product__col--add-product preview-product__col--active">
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="preview-product preview-product--discount" data-product-id="203">
                        <div className="preview-product__container">
                          <div className="preview-product__row preview-product__row--image" data-link="product">
                            <div className="preview-product__quantity"></div>
                            <div className="preview-product__discount-label">−32%</div><img className="preview-product__img"
                              src="img/preview-product/1.png" alt="" />
                          </div>
                          <div className="preview-product__row preview-product__row--info">
                            <div className="preview-product__title" data-link="product">Fanta, апельсин</div>
                            <div className="preview-product__descr"><span className="preview-product__descr-text">1 л</span><span
                              className="preview-product__descr-text preview-product__descr-text--green">Участвует
                              в&nbsp;акции</span></div>
                            <div className="preview-product__row preview-product__row--controls preview-product__row--mobile">
                              <div className="preview-product__col preview-product__col--remove-product">
                                <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                              </div>
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div
                                className="preview-product__col preview-product__col--add-product preview-product__col--active">
                                <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                              </div>
                            </div>
                          </div>
                          <div className="preview-product__row preview-product__row--controls preview-product__row--desktop">
                            <div className="preview-product__col preview-product__col--remove-product">
                              <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                            </div>
                            <div
                              className="preview-product__col preview-product__col--add-product preview-product__col--active">
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="preview-product preview-product--discount" data-product-id="204">
                        <div className="preview-product__container">
                          <div className="preview-product__row preview-product__row--image" data-link="product">
                            <div className="preview-product__quantity"></div>
                            <div className="preview-product__discount-label">−32%</div><img className="preview-product__img"
                              src="img/preview-product/1.png" alt="" />
                          </div>
                          <div className="preview-product__row preview-product__row--info">
                            <div className="preview-product__title" data-link="product">Fanta, апельсин</div>
                            <div className="preview-product__descr"><span className="preview-product__descr-text">1 л</span><span
                              className="preview-product__descr-text preview-product__descr-text--green">Участвует
                              в&nbsp;акции</span></div>
                            <div className="preview-product__row preview-product__row--controls preview-product__row--mobile">
                              <div className="preview-product__col preview-product__col--remove-product">
                                <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                              </div>
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div
                                className="preview-product__col preview-product__col--add-product preview-product__col--active">
                                <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                              </div>
                            </div>
                          </div>
                          <div className="preview-product__row preview-product__row--controls preview-product__row--desktop">
                            <div className="preview-product__col preview-product__col--remove-product">
                              <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                            </div>
                            <div
                              className="preview-product__col preview-product__col--add-product preview-product__col--active">
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="preview-product preview-product--discount" data-product-id="205">
                        <div className="preview-product__container">
                          <div className="preview-product__row preview-product__row--image" data-link="product">
                            <div className="preview-product__quantity"></div>
                            <div className="preview-product__discount-label">−32%</div><img className="preview-product__img"
                              src="img/preview-product/1.png" alt="" />
                          </div>
                          <div className="preview-product__row preview-product__row--info">
                            <div className="preview-product__title" data-link="product">Fanta, апельсин</div>
                            <div className="preview-product__descr"><span className="preview-product__descr-text">1 л</span><span
                              className="preview-product__descr-text preview-product__descr-text--green">Участвует
                              в&nbsp;акции</span></div>
                            <div className="preview-product__row preview-product__row--controls preview-product__row--mobile">
                              <div className="preview-product__col preview-product__col--remove-product">
                                <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                              </div>
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div
                                className="preview-product__col preview-product__col--add-product preview-product__col--active">
                                <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                              </div>
                            </div>
                          </div>
                          <div className="preview-product__row preview-product__row--controls preview-product__row--desktop">
                            <div className="preview-product__col preview-product__col--remove-product">
                              <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
                            </div>
                            <div
                              className="preview-product__col preview-product__col--add-product preview-product__col--active">
                              <div className="preview-product__price">
                                <div className="preview-product__price-item preview-product__price-item--old">250</div>
                                <div className="preview-product__price-item preview-product__price-item--new">2000&nbsp;₽
                                </div>
                              </div>
                              <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__section product__section--indent-vertical-big product__section--price-mobile">
                <div className="product__btn product__btn--calc" data-price="2000">
                  <div className="product__btn-ctrl product__btn-ctrl--minus"></div>
                  <div className="product__btn-text">2000&nbsp;₽</div>
                  <div className="product__btn-ctrl product__btn-ctrl--plus"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={close} className="popup__overlay" />
    </div>
  )
}

export default ProductInfo