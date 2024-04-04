(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".js-search-form ");document.querySelector(".search-button");const o=document.querySelector(".search-input"),f=document.querySelector("ul.gallery"),d="https://pixabay.com/api/",p="43222860-c920ce4922a75b9f5ac3c35c2";let a="";l.addEventListener("submit",m);function m(c){if(c.preventDefault(),o.value.trim()==="")return alert("Fill the field!");a=o.value,h(a).then(r=>f.insertAdjacentHTML("beforeend",y(r.hits))).catch(r=>console.log(r)).finally(()=>l.reset())}function h(c){const r=new URLSearchParams({key:p,q:c,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function y(c){return c.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${s}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${i}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${n}</li>
                <li class="description-items"><span class="accent">Downloads </span>${u}</li>
              </ul>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
