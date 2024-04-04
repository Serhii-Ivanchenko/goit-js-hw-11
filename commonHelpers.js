import{i as f,S as d}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=document.querySelector(".js-search-form ");document.querySelector(".search-button");const c=document.querySelector(".search-input"),n=document.querySelector("ul.gallery"),l=document.querySelector(".loader"),h="https://pixabay.com/api/",y="43222860-c920ce4922a75b9f5ac3c35c2";let u="";p.addEventListener("submit",g);function g(i){if(i.preventDefault(),n.innerHTML="",c.value.trim()==="")return alert("Fill the field!");u=c.value,l.classList.toggle("visible"),L(u).then(s=>{s.hits.length===0?(f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.toggle("visible")):(n.insertAdjacentHTML("beforeend",b(s.hits)),new d(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh(),l.classList.toggle("visible"))}).catch(s=>console.log(s)).finally(()=>p.reset())}function L(i){const s=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return fetch(`${h}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function b(i){return i.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:m})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${r}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${a}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${o}</li>
                <li class="description-items"><span class="accent">Downloads </span>${m}</li>
              </ul>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
