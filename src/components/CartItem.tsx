import { Button } from "@material-ui/core";

import { CartItemType } from "../App";

import { Wrapper, InformationWrapper, ButtonsWrapper } from "./CartItem.styles";
import Item from "./ProductItem";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <InformationWrapper>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </InformationWrapper>

      <ButtonsWrapper>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </ButtonsWrapper>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
