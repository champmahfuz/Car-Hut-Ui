import React from 'react';

import car1 from '../../../images/gallary/car1.jpg'
import car2 from '../../../images/gallary/car2.jpg'
import car3 from '../../../images/gallary/car3.jpg'
import car4 from '../../../images/gallary/car4.jpg'
import car5 from '../../../images/gallary/car5.jpg'
import car6 from '../../../images/gallary/car6.jpg'
import Album from '../Album/Album';

const albums = [
    {
        img: car1,
        name: 'Ferrari',

    },
    {
        img: car2,
        name: 'Parado',

    },
    {
        img: car3,
        name: 'Mercedes-Benz',

    },
    {
        img: car4,
        name: 'Land Rover',

    },
    {
        img: car5,
        name: 'Nissan',

    },
    {
        img: car6,
        name: 'Lamborghini',

    }

]


const Albums = () => {
    return (
        <div className="container">
            <h2 className="text-primary">Galarry</h2>
            <div className="row">
                {
                    albums.map(album => <Album
                        key={album.name}
                        album={album}
                    >
                    </Album>)
                }
            </div>
        </div>
    );
};

export default Albums;