import{S as p}from"./assets/vendor-10cb7c31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".js-search-form ");document.querySelector(".search-button");const o=document.querySelector(".search-input"),f=document.querySelector("ul.gallery"),m="https://pixabay.com/api/",d="43222860-c920ce4922a75b9f5ac3c35c2";let a="";l.addEventListener("submit",y);function y(i){if(i.preventDefault(),o.value.trim()==="")return alert("Fill the field!");a=o.value,h(a).then(r=>{f.insertAdjacentHTML("beforeend",g(r.hits)),new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}).catch(r=>console.log(r)).finally(()=>l.reset())}function h(i){const r=new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function g(i){return i.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:c,downloads:u})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${s}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${n}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${c}</li>
                <li class="description-items"><span class="accent">Downloads </span>${u}</li>
              </ul>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
