var g=Object.defineProperty;var y=(s,t,o)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o;var d=(s,t,o)=>y(s,typeof t!="symbol"?t+"":t,o);import{a as p,i as f,S as h}from"./assets/vendor-BNE1jlQL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l={searchForm:document.querySelector(".js-form"),searchInput:document.querySelector(".js-search-input"),loader:document.querySelector(".js-loader"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn")},n="active",c=class c{constructor(t){this.button=t,this.prevText=""}disable(){this.button.disabled=!0,this.prevText=this.button.textContent,this.button.textContent="Loading..."}enable(){this.button.disabled=!1,this.button.textContent=this.prevText}hide(){this.button.classList.add(c.HIDDEN_CLASS)}show(){this.button.classList.remove(c.HIDDEN_CLASS)}};d(c,"HIDDEN_CLASS","is-hidden");let u=c,L=1,S=3;const b=new u(l.loadMoreBtn);console.log(b);const v="https://pixabay.com/api/",E="49309172-5f8130b15ef3c43c70e2ee30a",A="photo",I="horizontal",C="true";async function T(s){const t={key:E,q:s,image_type:A,orientation:I,safesearch:C,per_page:S,page:L};return(await p.get(v,{params:t})).data}const q=()=>{f.error({title:"❌ Please, enter a query!",message:"",position:"topRight",color:"red",icon:""})},x=()=>{f.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topRight",color:"red",icon:""})};function D(s){return s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:m})=>`<li class="gallery-card">
      <a class="gallery-link" href="${o}">
        <img
        class="gallery-img"
        src="${t}"
        alt="${i}">
        <div class="gallery-img-info">
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Likes</li>
              <li class="info-card-value likes">${e}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Views</li>
              <li class="info-card-value likes">${r}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Comments</li>
              <li class="info-card-value likes">${a}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${m}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const P=new h(".gallery-link",{captionsData:"alt",captionDelay:250});async function k(s){s.preventDefault();const t=l.loader,o=s.currentTarget,i=o.elements.user_query.value.trim();if(!i)return q();t.classList.add(n);try{const e=await T(i);if(t.classList.remove(n),!e.total)return l.gallery.innerHTML="",l.loadMoreBtn.classList.remove(n),x();l.gallery.innerHTML=D(e.hits),l.loadMoreBtn.classList.add(n),P.refresh()}catch(e){t.classList.remove(n),console.log(e)}finally{o.reset()}}l.searchForm.addEventListener("submit",k);
//# sourceMappingURL=index.js.map
