import React from 'react';
import gall1 from '../../../images/gall1.jpg';
import gall3 from '../../../images/gall3.jpg';
import gall4 from '../../../images/bg5.jpg';
import gall5 from '../../../images/gall5.jpg';
import gall6 from '../../../images/gall6.jpg';
import gall7 from '../../../images/gall7.jpg';
import gall8 from '../../../images/gall4.jpg';
import gall9 from '../../../images/gall9.jpg';
import gall2 from '../../../images/gall2.jpg';
import GalleryDetail from '../GalleryDetail/GalleryDetail';
const imgData = [
    {
        pic1: gall1,
        pic2: gall2,
        pic3: gall3,
        id: 1
    },
    {
        pic1: gall4,
        pic2: gall5,
        pic3: gall6,
        id:2
    },
    {
        pic1: gall7,
        pic2: gall8,
        pic3: gall9,
        id:3
    }

]

const Gallery = () => {
    return (
        <div className="container px-5">
            <h4 className="services pb-5">GALLERY</h4>
            <div className="row justify-content-center">
                {
                    imgData.map( img => <GalleryDetail key={img.id} img={img}></GalleryDetail>)
                }
            </div>
        </div>
    );
};

export default Gallery;