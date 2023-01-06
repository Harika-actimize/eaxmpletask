import React, { Component } from 'react';
// import ReactImageMagnify from 'ReactImageMagnify';
import ReactImageMagnify from 'react-image-magnify';

// import '../styles/examples.css';

import watchImg687 from '../images/wristwatch_687.jpg';
import watchImg1200 from '../images/wristwatch_1200.jpg';

export default class BasicExample extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: watchImg687,
                        },
                        largeImage: {
                            src: watchImg1200,
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '200%',
                            height: '150%'
                        },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false
                    }} />
                </div>
                <div style={{height: '500px'}} />
            </div>
        );
    }
}