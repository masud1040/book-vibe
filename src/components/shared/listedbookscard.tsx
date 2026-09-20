import { IBook } from '@/types/booktype';
import Image from 'next/image';
import React from 'react';
import { FiBookOpen, FiCalendar, FiEye, FiFileText, FiStar, FiUsers } from 'react-icons/fi';

const ListedBooksCard = ({book}: {book: IBook}) => {
    return (
         <div
                          key={book.bookId}
                          className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md md:flex-row"
                        >
                          {/* Image */}
                          <div className="flex h-52 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 md:h-48 md:w-44">
                            <Image
                              src={book.image}
                              alt={book.bookName}
                              width={160}
                              height={200}
                              className="h-full w-full object-contain p-3"
                            />
                          </div>
        
                          {/* Content */}
                          <div className="flex flex-1 flex-col">
                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900">
                              {book.bookName}
                            </h2>
        
                            {/* Author */}
                            <p className="mt-2 text-sm text-gray-600">
                              By :{" "}
                              <span className="font-semibold text-gray-800">
                                {book.author}
                              </span>
                            </p>
        
                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                              <span className="font-semibold text-gray-700">Tag:</span>
        
                              {book.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
        
                            {/* Information */}
                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                              <span className="flex items-center gap-2">
                                <FiCalendar />
                                Year:
                                <strong className="text-gray-700">
                                  {book.yearOfPublishing}
                                </strong>
                              </span>
        
                              <span className="flex items-center gap-2">
                                <FiUsers />
                                Publisher:
                                <strong className="text-gray-700">
                                  {book.publisher}
                                </strong>
                              </span>
        
                              <span className="flex items-center gap-2">
                                <FiFileText />
                                Pages:
                                <strong className="text-gray-700">
                                  {book.totalPages}
                                </strong>
                              </span>
                            </div>
        
                            {/* Bottom */}
                            <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                                Category: {book.category}
                              </span>
        
                              <span className="flex items-center gap-1 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-500">
                                <FiStar />
                                {book.rating}
                              </span>
        
                              <button className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600">
                                <FiEye />
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
      
)};

export default ListedBooksCard;