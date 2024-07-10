import { useState } from 'react';

interface QuantityProps {
  initialValue?: number;
}

export const useQuantity = (props: QuantityProps) => {
  const [quantity, setQuantity] = useState(props.initialValue || 1);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return { quantity, increment, decrement };
};

