function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequireb76a;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},r.parcelRequireb76a=n),(0,n.register)("kyEFX",function(e,r){Object.defineProperty(e.exports,"register",{get:function(){return t},set:function(e){return t=e},enumerable:!0,configurable:!0});var t,o=new Map;t=function(e,r){for(var t=0;t<r.length-1;t+=2)o.set(r[t],{baseUrl:e,path:r[t+1]})}}),n("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["cZK9K","index.d5c45465.js","c8l1C","mobile-image-hero-1.0adf4be4.jpg","8Q6rW","desktop-image-hero-1.495b33c1.jpg","d1oyI","mobile-image-hero-2.4bb1e4e7.jpg","kUpZs","desktop-image-hero-2.524b2452.jpg","2iQoJ","mobile-image-hero-3.a1322951.jpg","28MaG","desktop-image-hero-3.9603d773.jpg"]'));var i={};i=JSON.parse('[{"heading":"Discover innovative ways to decorate","content":"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},{"heading":"We are available all across the globe","content":"With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today."},{"heading":"Manufactured with the best materials","content":"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}]');var a={};a=new URL("mobile-image-hero-1.0adf4be4.jpg",import.meta.url).toString();var d={};d=new URL("desktop-image-hero-1.495b33c1.jpg",import.meta.url).toString();var s={};s=new URL("mobile-image-hero-2.4bb1e4e7.jpg",import.meta.url).toString();var u={};u=new URL("desktop-image-hero-2.524b2452.jpg",import.meta.url).toString();var l={};l=new URL("mobile-image-hero-3.a1322951.jpg",import.meta.url).toString();var c={};function f(e,r){window.addEventListener("keydown",({code:e})=>{("ArrowLeft"===e||"ArrowRight"===e)&&r()}),e.addEventListener("click",r)}function g(r,t,o,n){let i;if(!Array.isArray(t))throw Error("Invalid structure: Not an array");switch(o){case 0:i=`url(${n?e(d):e(a)})`;break;case 1:i=`url(${n?e(u):e(s)})`;break;case 2:i=`url(${n?e(c):e(l)})`}r.style.backgroundImage=i;let f=document.querySelector("#slider-heading"),g=document.querySelector("#slider-content");f.innerText=t[o].heading,g.innerText=t[o].content}c=new URL("desktop-image-hero-3.9603d773.jpg",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",function(e){let r=new Set(e||[]),t=0,o=window.innerWidth>=768,n=document.querySelector("#hero-slider"),i=document.querySelector("#slider-next"),a=document.querySelector("#slider-prev"),d=Array.from(r);f(i,()=>{g(n,d,t=t>=r.size-1?0:++t,o)}),f(a,()=>{g(n,d,t=t<=0?r.size-1:--t,o)}),window.addEventListener("resize",()=>{o=window.innerWidth>=768,g(n,d,t,o)}),g(n,d,t,o)}(i));
//# sourceMappingURL=index.d5c45465.js.map