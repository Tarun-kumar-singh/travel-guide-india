import React from 'react';
import {Helmet} from 'react-helmet';

function BackgroundColor() {
  return (
        <div className="application">
            <Helmet>
                <style>{'body { background-color: #121212; }'}</style>
            </Helmet>             
        </div>
        );
}

export default BackgroundColor;
