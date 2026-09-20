"use client";

import Image from "next/image";
import { useContext } from "react";
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

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  return (
    <div className="container mx-auto px-4 py-5">
      {/* Page Title */}
      <h1 className="my-3 rounded-xl bg-amber-100 py-14 text-center text-3xl font-bold text-gray-900">
        Listed Books
      </h1>

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
              {readBooks.map((book) => (
               <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
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
              {wishlist.map((book) => (
                <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
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
