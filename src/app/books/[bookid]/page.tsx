import React from 'react';
interface IDetailBookPqarams {
    params: {
        bookid: string;
    };
}

const BookId = ({ params }:IDetailBookPqarams) => {
    const { bookid } = params;
    return (
        <div>
            <h3>kasdfaik</h3>
            
        </div>
    );
};

export default BookId;