"use client";
import { BooksContext } from '@/context/bookcontext';
import { IBook } from '@/types/booktype';
import React, { useContext } from 'react';




const ReadButton = ({ book }: { book: IBook }) => {
    const { readBook,setReadBook } = useContext(BooksContext);
    
    const handleReadBook = () => {
    setReadBook([...readBook, book]);
        
        
    };
    return (
        <div>
            <button onClick={() => handleReadBook()} className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
                            Read
                        </button>
        </div>
    );
};

export default ReadButton;