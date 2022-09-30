import React from 'react';
import Cat4 from '../../../../../assets/images/categories/category-4.jpg';
import Cat5 from '../../../../../assets/images/categories/category-5.jpg';
import Cat6 from '../../../../../assets/images/categories/category-6.jpg';
import Cat7 from '../../../../../assets/images/categories/category-7.jpg';
import Cat8 from '../../../../../assets/images/categories/category-8.jpg';
import Cat9 from '../../../../../assets/images/categories/category-9.jpg';
import Cat10 from '../../../../../assets/images/categories/category-10.jpg';
import Cat11 from '../../../../../assets/images/categories/category-11.jpg';

const CategoriesSlider = () => {
  return (
    <div className="shop-default-category category-ellipse-section mb-6" style={{ marginTop: '50px' }}>
      <div
        className="swiper-container swiper-theme shadow-swiper"
        data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 2,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 3
                                },
                                '576': {
                                    'slidesPerView': 4
                                },
                                '768': {
                                    'slidesPerView': 6
                                },
                                '992': {
                                    'slidesPerView': 7
                                },
                                '1200': {
                                    'slidesPerView': 8,
                                    'spaceBetween': 30
                                }
                            }
                        }">
        <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img
                    src={Cat4}
                    alt="Categroy"
                    width="190"
                    height="190"
                    // style={{ backgroundColor: '#5C92C0' }}
                  />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Sports</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img src={Cat5} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#B8BDC1' }} />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Babies</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img src={Cat6} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#99C4CA' }} />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Sneakers</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img src={Cat7} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#4E5B63' }} />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Cameras</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img src={Cat8} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#D3E5EF' }} />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Games</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img src={Cat9} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#65737C' }} />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Kitchen</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img src={Cat10} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#E4E4E4' }} />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Watches</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="swiper-slide category-wrap">
            <div className="category category-ellipse">
              <figure className="category-media">
                <a href="shop-banner-sidebar.html">
                  <img src={Cat11} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#D3D8DE' }} />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop-banner-sidebar.html">Clothes</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
