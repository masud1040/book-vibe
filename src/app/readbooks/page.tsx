'use client';
import { BooksContext } from '@/context/bookcontext';
import React, { useContext } from 'react';

const ReadBook = () => {
    const { readBook } = useContext(BooksContext);
    console.log(readBook);

    return (
        <div>
            
        </div>
    );
};

export default ReadBook;