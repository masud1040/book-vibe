import React from 'react';

import { IBook } from '@/types/booktype';
import BooksCard from '@/components/shared/bookCard';

const getBooks = async () => {
    const response = await fetch(
        'http://localhost:3000/booksData.json'
    );

    const data = await response.json();

    return data;
};

const Books = async () => {
    const books = await getBooks();

    return (
        <div className="w-full">
            <section className="mx-auto max-w-7xl px-4 py-10">

                {/* Section Header */}
                <div className="mb-8 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Explore Our Collection
                    </p>

                    <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Popular Books
                    </h3>

                    <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                        Discover popular books from different categories
                        and find your next favorite read.
                    </p>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {books.map((book: IBook) => (
                        <BooksCard
                            key={book.bookId}
                            book={book}
                        />
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Books;