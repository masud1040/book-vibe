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

  const books: IBook[] = await getBooks();

  // Find book by ID
  const book: IBook | undefined = books.find(
    (item: IBook) => item.bookId === Number(bookid)
  );

  // Book not found
  if (!book) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          Book not found
        </h2>
      </div>
    );
  }

  // Explicitly define tags as string array
  const tags: string[] = book.tags;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

        {/* ================= BOOK IMAGE ================= */}
        <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={350}
            height={450}
            className="max-h-[450px] w-auto rounded-lg object-contain"
          />
        </div>

        {/* ================= BOOK DETAILS ================= */}
        <div className="flex flex-col justify-center">

          {/* Book Name */}
          <h1 className="text-4xl font-bold text-gray-900">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-lg text-gray-600">
            By:{" "}
            <span className="font-semibold text-gray-800">
              {book.author}
            </span>
          </p>

          {/* Category */}
          <div className="mt-5 border-y border-gray-200 py-4">
            <span className="font-medium text-gray-600">
              Category
            </span>

            <p className="mt-1 text-gray-900">
              {book.category}
            </p>
          </div>

          {/* Review */}
          <div className="mt-5">
            <p className="leading-7 text-gray-600">
              <span className="font-bold text-gray-900">
                Review:
              </span>{" "}
              {book.review}
            </p>
          </div>

          {/* ================= TAGS ================= */}
          <div className="mt-5">
            <span className="font-bold text-gray-900">
              Tags
            </span>

            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* ================= BOOK INFORMATION ================= */}
          <div className="mt-5 space-y-3 border-t border-gray-200 pt-5">

            {/* Pages */}
            <div className="flex justify-between">
              <span className="text-gray-500">
                Number of Pages:
              </span>

              <span className="font-semibold text-gray-800">
                {book.totalPages}
              </span>
            </div>

            {/* Publisher */}
            <div className="flex justify-between">
              <span className="text-gray-500">
                Publisher:
              </span>

              <span className="font-semibold text-gray-800">
                {book.publisher}
              </span>
            </div>

            {/* Publishing Year */}
            <div className="flex justify-between">
              <span className="text-gray-500">
                Year of Publishing:
              </span>

              <span className="font-semibold text-gray-800">
                {book.yearOfPublishing}
              </span>
            </div>

            {/* Rating */}
            <div className="flex justify-between">
              <span className="text-gray-500">
                Rating:
              </span>

              <span className="font-semibold text-gray-800">
                ⭐ {book.rating}
              </span>
            </div>

          </div>

          {/* ================= BUTTONS ================= */}
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