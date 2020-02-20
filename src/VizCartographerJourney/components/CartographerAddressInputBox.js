import React from 'react';
import { withRouter } from 'react-router-dom';
import FoamNavbar from '../../common-utils/components/FoamNavbar';

const CartographerAddressInputBox = (props) => {
  const { display, history } = props;
  let cartographerAddressInput = null;

  const getCartographerDetailsWhenPressedEnter = (event) => {
    const code = event.keyCode || event.which;
    const { value } = event.target;
    if (code === 13 && history) history.push(`/cartographer-journey/${value}`);
  };

  React.useEffect(() => {
    if (display) cartographerAddressInput.focus();
  }, []);

  if (display === false) return null;

  return (
    <div className="abs-container input-container max-width-any">
      <div className="dm-none get-w-100">
        <FoamNavbar
          title="Cartographer's journey"
          info="Part of FOAMViz project"
        />
      </div>
      <div className="" />
      <input
        id="cartographer-address"
        ref={(input) => {
          cartographerAddressInput = input;
        }}
        className="address-input-box main-container"
        type="text"
        placeholder="Enter Cartographer Address"
        onKeyPress={getCartographerDetailsWhenPressedEnter}
      />
    </div>
  );
};

export default withRouter(CartographerAddressInputBox);
