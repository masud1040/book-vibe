"use client";


import { BooksContext } from "@/context/bookcontext";
import { IBook } from "@/types/booktype";
import React, { useContext } from "react";
import { toast } from "react-toastify";


const WishlistButton = ({ book }: { book: IBook }) => {
  const {wishlist, setWishlist} = useContext(BooksContext);

  const handleReadBook = () => {
    console.log("wishlist btn triggered", book);

    // setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
    setWishlist([...wishlist, book]);
    toast.success("Book added to Wishlist");
  
  };
  return (
    <button className="btn btn-primary flex-1" onClick={() => handleReadBook()}>
      Wishlist
    </button>
  );
};

export default WishlistButton;