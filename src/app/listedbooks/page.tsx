"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { BooksContext } from "@/context/bookcontext";

import {
  FiBookOpen,
  FiCalendar,
  FiStar,
  FiUsers,
  FiFileText,
  FiHeart,
  FiEye,
} from "react-icons/fi";
import ListedBooksCard from "@/components/shared/listedbookscard";
import { IBook } from "@/types/booktype";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  // console.log(sortBy);

  const sortedBooks =(books:IBook[]) =>{
    const sortBooks=[...books];
    if(sortBy === "rating"){
      sortBooks.sort((a, b) => b.rating - a.rating);
    }
     else if(sortBy === "pages"){
      sortBooks.sort((a, b) => b.totalPages - a.totalPages);
    }
    else if(sortBy === "year"){
     sortBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortBooks;
  }

  const sortedReadBooks = sortedBooks(readBooks);
  const sortedWishlist = sortedBooks(wishlist);

  // console.log(sortedReadBooks);
  // console.log(sortedWishlist);
  return (
    <div className="container mx-auto px-4 py-5">
      {/* Page Title */}
      <h1 className="my-3 rounded-xl bg-amber-100 py-14 text-center text-3xl font-bold text-gray-900">
        Listed Books
      </h1>
      <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
       defaultValue="Pick a Runtime"
      className="select select-success">
        <option disabled={true}>sort by</option>
        <option value={"rating"}>Rating</option>
        <option value={"pages"}>Number of pages</option>
        <option value={"year"}>Published Year</option>
      </select>

      {/* Tabs */}
      <div className="tabs tabs-box mt-6">
        {/* ================= READ BOOKS ================= */}
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-4 md:p-6">
          {readBooks.length > 0 ? (
            <div className="space-y-5">
              {sortedReadBooks.map((book) => (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
              <FiBookOpen className="mb-4 text-5xl text-gray-400" />

              <h2 className="text-2xl font-bold text-gray-800">
                No Read Books Yet
              </h2>

              <p className="mt-2 text-gray-500">
                You added any books to your read list.
              </p>
            </div>
          )}
        </div>

        {/* ================= WISHLIST ================= */}
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Wishlist"
        />

        <div className="tab-content border-base-300 bg-base-100 p-4 md:p-6">
          {wishlist.length > 0 ? (
            <div className="space-y-5">
              {sortedWishlist.map((book) => (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              ))}
            </div>
          ) : (
            /* Empty Wishlist */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
              <FiHeart className="mb-4 text-5xl text-gray-400" />

              <h2 className="text-2xl font-bold text-gray-800">
                No Wishlist Books Yet
              </h2>

              <p className="mt-2 text-gray-500">
                You added any books to your wishlist.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
