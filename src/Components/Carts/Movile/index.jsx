import React from 'react';
import IsEmpty from './isEmpty';
import IsLoading from './isLoading';
import IsErrorServer from './isErrorServer';
import IsItems from './isItems';
import { useSelector, useDispatch } from 'react-redux';

const Index = (props) => {
  const [carts, setCarts] = React.useState();
  const [isStatus, setStatus] = React.useState(2);
  const products = useSelector((state) => state.cart.items);
  /*0=isLoading, 1 = isErrorServer, 2 = isItems, default = isEmpty*/

  if (isStatus === 0) {
    return <IsLoading />;
  }

  if (isStatus === 1) {
    return <IsErrorServer />;
  }

  if (isStatus === 2) {
    return <IsItems handleCart={props.handleCart} />;
  }
  /*Return Default*/
  return <IsEmpty />;
};

export default Index;
