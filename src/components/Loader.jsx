import React from 'react';
import './loader.css'
const Loader = () => {
    return (
        <div>
            <div class="cube-loader">
                <div class="cube-top"></div>
                <div class="cube-wrapper">
                    <span style="--i:0" class="cube-span"></span>
                    <span style="--i:1" class="cube-span"></span>
                    <span style="--i:2" class="cube-span"></span>
                    <span style="--i:3" class="cube-span"></span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
