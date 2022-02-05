/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
            </h1>
            <Button href="https://www.instagram.com/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href="https://www.linkedin.com/in/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            <Button href="https://github.com/eful92" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - Racxstudio
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/eful92" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Syaiful Yusuf
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
