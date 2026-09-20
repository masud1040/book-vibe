"use client";

import React, { createContext, ReactNode, useState } from "react";

import { IBook } from "@/types/booktype";

interface IBooksContext {
  readBook: IBook[];
  setReadBook: React.Dispatch<React.SetStateAction<IBook[]>>;

  wishlistBook: IBook[];
  setWishlistBook: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext({}as IBooksContext);

const BookContextProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState<IBook[]>([]);

  const [wishlistBook, setWishlistBook] = useState<IBook[]>([]);

  const sharedData: IBooksContext = {
    readBook,
    setReadBook,
    wishlistBook,
    setWishlistBook,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BookContextProvider;
