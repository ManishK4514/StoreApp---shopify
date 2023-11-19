import React, { useState } from 'react';
import { Shopify } from '@shopify/shopify-api-node';

const ProductPicker = () => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClick = async () => {
    const shopify = new Shopify({
      shopName: 'storeapp',
      accessToken: '8e075f50079ca91bc9db878724c6ea41',
    });

    await shopify.productPicker.open();
    setShowPicker(false);
  };

  return (
    <div>
      {!showPicker && <button onClick={() => setShowPicker(true)}>Open Product Picker</button>}
      {showPicker && <ProductPickerModal onClose={() => setShowPicker(false)} />}
    </div>
  );
};

const ProductPickerModal = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: 400,
        height: 400,
        background: 'white',
        padding: 20,
      }}>
        <ProductPicker />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductPicker;
