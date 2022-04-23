import { Button } from "@material-ui/core";

//Types
import { CartItemType } from "../App";

//Styles
import { Wrapper } from "./ProductItem.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <h3>{item.description}</h3>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
  );
};

export default Item;
