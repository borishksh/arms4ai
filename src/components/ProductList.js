import React from 'react'

export default function ProductList(args) {
    const handleDiv = () => {
        const divs = [];
        let i;
        const argKeys = Object.keys(args);
        for(i=0;i<argKeys.length-1;i +=3) {
            const key1 = argKeys[i];
            const key2 = argKeys[i + 1];
            divs.push(
                <div className='ppa-holder' key={`div_${i}`}>
                    <div className={i%2===0 ? 'ppa-right': 'ppa-none'}>
                        <h3 key={`h3_${key1}`}>
                        {args[key1].text}
                        </h3>
                        <p key={`p_${key2}`}>
                        {args[key2].text}
                        </p>
                    </div>
                    <div className='ppa-center'>
                        <div>
                            
                        </div>
                    </div>
                    <div className={i%2!==0 ? 'ppa-right': 'ppa-none'}>
                        <h3 key={`h3_${key1}`}>
                        {args[key1].text}
                        </h3>
                        <p key={`p_${key2}`}>
                        {args[key2].text}
                        </p>
                    </div>
                </div>
            )
        }
        return divs;
    }
    return (   
        <div>
            {handleDiv()}
        </div>
    )
}
