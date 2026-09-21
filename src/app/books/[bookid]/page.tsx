import ReadButton from "@/components/bookdetails/readbutton";
import WishlistButton from "@/components/bookdetails/wishlistButton";
import { IBook } from "@/types/booktype";
import Image from "next/image";
import React from "react";

interface IDetailBookParams {
  params: Promise<{
    bookid: string;
  }>;
}

// Get all books
const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch("/booksData.json");

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data: IBook[] = await response.json();

  return data;
};

const BookId = async ({ params }: IDetailBookParams) => {
  const { bookid } = await params;

  const books = await getBooks();

  // Find the requested book
  const book = books.find((book) => book.bookId === Number(bookid));

  // If book doesn't exist
  if (!book) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Book Image */}
        <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={350}
            height={450}
            className="max-h-[450px] w-auto rounded-lg object-contain"
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col justify-center">
          {/* Book Name */}
          <h1 className="text-4xl font-bold text-gray-900">{book.bookName}</h1>

          {/* Author */}
          <p className="mt-3 text-lg text-gray-600">
            By:{" "}
            <span className="font-semibold text-gray-800">{book.author}</span>
          </p>

          {/* Category */}
          <div className="mt-5 border-y border-gray-200 py-4">
            <span className="font-medium text-gray-600">Category</span>

            <p className="mt-1 text-gray-900">{book.category}</p>
          </div>

          {/* Review */}
          <div className="mt-5">
            <p className="leading-7 text-gray-600">
              <span className="font-bold text-gray-900">Review:</span>{" "}
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <span className="font-bold text-gray-900">Tags</span>

            {book.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-1 text-sm text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="mt-5 space-y-3 border-t border-gray-200 pt-5">
            <div className="flex justify-between">
              <span className="text-gray-500">Number of Pages:</span>

              <span className="font-semibold">{book.totalPages}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Publisher:</span>

              <span className="font-semibold">{book.publisher}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Year of Publishing:</span>

              <span className="font-semibold">{book.yearOfPublishing}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Rating:</span>

              <span className="font-semibold">⭐ {book.rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <ReadButton book={book} />

            <WishlistButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookId;
