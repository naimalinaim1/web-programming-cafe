import React from "react";
import ReadTime from "./ReadTime";
import BookMarked from "./BookMarked";

const Cart = () => {
  return (
    <div className="space-y-5">
      <ReadTime />
      <BookMarked />
    </div>
  );
};

export default Cart;
