import { useEffect } from "react";
import { useSelector } from "react-redux";
import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Information = () => {
  return (
    <div className="information">
      <div className="container">
        <h2 className="information__title">Information</h2>
        <nav className="information__nav">
          <ul className="information__menu">
            <li className="information__menu-list">
              <a className="information__menu-link" href="#contacts">
                contacts
              </a>
            </li>
            <li className="information__menu-list">
              <a className="information__menu-link" href="#delivery">
                delivery
              </a>
            </li>

            <li className="information__menu-list">
              <a className="information__menu-link" href="#payment">
                payment
              </a>
            </li>
            <li className="information__menu-list">
              <a className="information__menu-link" href="#location">
                our location
              </a>
            </li>
          </ul>
        </nav>
        <div className="information__wrap">
          <h3 className="information__subtitle" id="contacts">
            Contacts
          </h3>
          <div className="information__content">
            <p className="information__text">Mail: goldstarcoffee@gmail.com</p>
            <p className="information__text">Phone: +375 (29) 348-43-67</p>
            <p className="information__text">Telegram: @goldstarcoffee</p>
            <p className="information__text">
              Address: 220012, Minsk, Independence Avenue, 90
            </p>
            <div className="information__icons">
              <a className="information__icon" href="https://twitter.com/">
                <FontAwesomeIcon
                  className="information__icon-svg"
                  icon={faTelegram}
                />
              </a>
              <a
                className="information__icon"
                href="https://www.instagram.com/"
              >
                <FontAwesomeIcon
                  className="information__icon-svg"
                  icon={faInstagram}
                />
              </a>
              <a className="information__icon" href="https://www.facebook.com/">
                <FontAwesomeIcon
                  className="information__icon-svg"
                  icon={faFacebook}
                />
              </a>
            </div>
          </div>
          <div className="information__content">
            <p className="information__text  information__text-delivery">
              Pickup
            </p>
            <p className="information__text">
              Pickup We have a pickup point in Moscow. You can always pick up
              the order yourself for free, just by contacting the manager in
              advance.
            </p>
            <p className="information__text information__text-delivery">
              Courier delivery
            </p>
            <p className="information__text">
              It may be convenient for you to receive the order by courier. The
              cost of delivery in Minsk by courier is $2.
            </p>
          </div>
          <h3 className="information__subtitle" id="delivery">
            Delivery
          </h3>
          <h3 className="information__subtitle" id="payment">
            Payment
          </h3>
          <div className="information__content">
            <p className="information__text">
              You can pay for the order by card on the site. If the payment does
              not go through, please contact us and we will definitely sort out
              the problem or select another payment method that suits you. You
              can write to the mail or telegram:
            </p>
            <p className="information__text">Email: takeyourmuse@gmail.com</p>
            <p className="information__text">Telegram: @takeyourmuse</p>
          </div>
          <div className="information__content">
            <p className="information__text">
              Welcome to our cozy coffee shop! We are a team of enthusiasts who
              passionately love coffee and want to share this love with you.
              Here you will find a wide selection of aromatic coffee varieties,
              prepared with love and skill. We take pride in using only the
              freshest and highest quality coffee beans. Our team carefully
              selects each batch to ensure you can enjoy the true taste of
              coffee. We also offer various coffee brewing methods, so that
              everyone can choose what they like the most.
            </p>
            <p className="information__text">
              Our coffee shop is not just a place to enjoy a cup of aromatic
              coffee, but also a space to relax and savor the atmosphere. We
              have a cozy interior, friendly staff, and pleasant music that will
              help you unwind and enjoy the moment. We also offer a variety of
              snacks and desserts, so you can fully indulge in your coffee
              experience. Our team of chefs prepares delicious and fresh dishes
              that pair perfectly with our coffee.
            </p>
            <p className="information__text">
              We are always delighted to see you in our coffee shop! Come visit
              us to savor the taste of real coffee and spend time in a pleasant
              atmosphere. We are confident that you will be satisfied with our
              service and the taste of our coffee.
            </p>
          </div>
          <h3 className="information__subtitle" id="location">
            Our location
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Information;

//   const ref = React.useRef<HTMLDivElement>(null);
//   const [map, setMap] = React.useState<google.maps.Map>();

//   React.useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

//   return <div ref={ref} />;
// };
