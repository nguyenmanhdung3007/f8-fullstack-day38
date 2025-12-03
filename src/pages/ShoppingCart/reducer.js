import {
  ADD_CART,
  CLEAR_CART,
  REMOVE_CART,
  RESTORE,
  UPDATE_QUANTITY,
} from "./consts";

// Khởi tạo State
export const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const reducer = (state, action) => {
  console.log(state, action);

  //   Xử lý và trả về trả về state mới => component sẽ re-render với state mới
  switch (action.type) {
    // thêm items vào cart
    case ADD_CART: {
      // lấy product từ payload
      const product = action.payload;
      console.log(product);

      //   kiểm tra tồn tại product trong cart
      const existingProductId = state.items.find(
        (item) => item.id === product.id
      );

      let updatedItems;

      //   nếu tồn tại + 1 quantity
      if (existingProductId) {
        updatedItems = state.items.map((item) =>
          item.id === product.item
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // nếu không thêm mới vào cart
        updatedItems = [...state.items, { ...product, quantity: 1 }];
      }

      console.log(updatedItems);

      //   tính tổng số tiền của số lượng items trong cart
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // tính tổng số lượng items trong cart
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return { items: updatedItems, totalPrice, totalQuantity };
    }

    // xóa items khỏi cart
    case REMOVE_CART: {
      // lấy ra id của item từ payload
      const itemId = action.payload;

      const updatedItems = state.items.filter((item) => item.id !== itemId);

      // tính lại tổng số lượng và tổng tiền
      // tổng tiền
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // tổng số lượng
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return { items: updatedItems, totalPrice, totalQuantity };
    }

    // cập nhật số lượng thông qua btn + và -
    case UPDATE_QUANTITY: {
      const { itemId, quantity } = action.payload;

      // tăng giảm số lượng nhưng không nhỏ hơn 1
      const updatedItems = state.items
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(quantity, 1) }
            : item
        )
        .filter((item) => item.quantity > 0); // nếu  = 0 thì xóa

      // tính lại tổng số lượng và tổng tiền
      // tổng tiền
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // tổng số lượng
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return { items: updatedItems, totalPrice, totalQuantity };
    }

    // xóa toàn bộ khỏi cart
    case CLEAR_CART:
      return initialState;

    // restore từ localStorage
    case RESTORE:
      return action.payload;

    default:
      throw new Error(`Action ${action.type} is invalid`);
  }
};
