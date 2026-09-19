import Image from 'next/image';
import React from 'react';
import banner from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
<section className="bg-slate-100 py-20 px-10 container mx-auto rounded-2xl" >
        <div className=" container mx-auto grid grid-cols-2 gap-2 items-center ">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">Books to freshen up <br></br>your bookshelf</h2>
                <button className="btn btn-primary">Explore</button>

            </div>


            <div>
                <Image src={banner} alt="book" />

            </div>

            
        </div>
        </section>
    );
};

export default Banner;