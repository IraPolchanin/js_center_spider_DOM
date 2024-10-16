'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const xPosition = wall.offsetWidth / 2 - spider.offsetWidth / 2;
const yPosition = wall.offsetHeight / 2 - spider.offsetHeight / 2;

spider.style.left = `${xPosition}px`;
spider.style.top = `${yPosition}px`;
