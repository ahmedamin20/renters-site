import { IonIcon } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";

const BestSeatcion = ({product1,product2}) => {
    return (
    <div className="product-featured m-4">
      <h2 className="title">Top Rented</h2>

      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src={product1?.main_image}
                alt="img"
                className="showcase-img"
              />
            </div>

            <div className="showcase-content">
              {/*<div className="showcase-rating">
                <IonIcon icon="star"></IonIcon>
                <IonIcon icon="star"></IonIcon>
                <IonIcon icon="star"></IonIcon>
                <IonIcon icon="star-outline"></IonIcon>
                <IonIcon icon="star-outline"></IonIcon>
                </div>*/}

              <a href="#">
                <h3 className="showcase-title">
                  {product1?.name}
                </h3>
              </a>

              <p className="showcase-desc">
                {product1?.description}
              </p>

              <div className="price-box">
                <p className="price">{product1?.price}EGP</p>

                {/*<del>$200.00</del>*/}
              </div>

              <Link to={`/product/${product1?.id}`} className="add-cart-btn">Rent</Link>

              

              <div className="countdown-box">
                <p className="countdown-desc">Some Details</p>

                <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">{product1?.minimum_days}</p>

                    <p className="display-text">Minimum Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">{product1?.maximum_days}</p>
                    <p className="display-text">Maximum Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">{product1?.health}%</p>
                    <p className="display-text">Health</p>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src={product2?.main_image}
                alt="img"
                className="showcase-img"
              />
            </div>

            <div className="showcase-content">
              {/*<div className="showcase-rating">
                <IonIcon icon="star"></IonIcon>
                <IonIcon icon="star"></IonIcon>
                <IonIcon icon="star"></IonIcon>
                <IonIcon icon="star-outline"></IonIcon>
                <IonIcon icon="star-outline"></IonIcon>
                </div>*/}

              <a href="#">
                <h3 className="showcase-title">
                  {product2?.name}
                </h3>
              </a>

              <p className="showcase-desc">
                {product2?.description}
              </p>

              <div className="price-box">
                <p className="price">{product2?.price}EGP</p>

                {/*<del>$200.00</del>*/}
              </div>

              <Link to={`/product/${product2?.id}`} className="add-cart-btn">Rent</Link>

              

              <div className="countdown-box">
                <p className="countdown-desc">Some Details</p>

                <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">{product2?.minimum_days}</p>

                    <p className="display-text">Minimum Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">{product2?.maximum_days}</p>
                    <p className="display-text">Maximum Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">{product2?.health}%</p>
                    <p className="display-text">Health</p>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeatcion;
