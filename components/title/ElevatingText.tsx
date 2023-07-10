import React from 'react';

type ElevatingTextProps = {
    mainText: string;
    subText: string;
};

const ElevatingText: React.FC<ElevatingTextProps> = ({
                                                         mainText,
                                                         subText,
                                                     }) => {
    return (
        <>
     <span className=" text-3xl font-semibold md:my-3 md:text-4xl md:leading-[50px]" style={{ color: 'black' }}>
        {mainText}
      </span>
   <span className="text-3xl font-semibold md:my-3 md:text-4xl md:leading-[50px]" style={{ color: '#ac9b79' }}>
       {subText}
      </span>
        </>
    );
};

export default ElevatingText;