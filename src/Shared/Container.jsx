import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-screen-[4000px]'>
            {children}
            
        </div>
    );
};

export default Container;