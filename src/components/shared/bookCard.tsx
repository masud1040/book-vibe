import { IBook } from '@/types/booktype';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookProps {
    book: IBook;
}

const BooksCard = ({ book }: IBookProps) => {
    const {
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        yearOfPublishing,
    } = book;

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Book Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={bookName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
                    {category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 rounded-full bg-black/75 px-3 py-1 text-sm font-semibold text-white">
                    ⭐ {rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Book Name */}
                <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    by{' '}
                    <span className="font-medium text-gray-700">
                        {author}
                    </span>
                </p>

                {/* Book Information */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>📖 {totalPages} Pages</span>

                    <span>📅 {yearOfPublishing}</span>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                <button className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 active:scale-95">
                    View Details
                </button></Link>
                
            </div>
        </div>
    );
};

export default BooksCard;