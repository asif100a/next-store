import AllProducts from '@/components/Sections/AllProducts';
import React from 'react';

const AllProductsPage = () => {
    const productTitle = "Rescue Bots Deformation Transformer Car One-Step Car Robot Vehicle Model Action Figures Toy Transform Car for Kids";

    const cards = Array.from(Array(15).keys());

    return (
        <>
            <AllProducts
                productTitle={productTitle}
                cards={cards}
            />
        </>
    );
};

export default AllProductsPage;