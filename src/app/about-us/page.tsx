import OurImpact from '@/components/UI-parts/For_AboutUs/OurImpact';
import OurPlanet from '@/components/UI-parts/For_AboutUs/OurPlanet';
import WhatWeDo from '@/components/UI-parts/For_AboutUs/WhatWeDo';
import WhoWeAre from '@/components/UI-parts/For_AboutUs/WhoWeAre';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact us page of the NextStore app'
};

const page = () => {
    return (
        <section>
            <WhoWeAre />
            <WhatWeDo />
            <OurImpact />
            <OurPlanet />
        </section>
    );
};

export default page;