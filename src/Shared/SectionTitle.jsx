import React from 'react';
import '../Shared/Style.css'

const SectionTitle = ({tittle}) => {
    return (
        <>

        <div className='lg:text-[40px] font-medium  text-[25px]  Medium'>
            <h1>  {tittle}</h1>
        </div>

            
        </>
    );
};

export default SectionTitle;