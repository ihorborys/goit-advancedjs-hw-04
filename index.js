import{i as n,S as d}from"./assets/vendor-BvSoRH6M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const a={searchForm:document.querySelector(".js-form"),searchInput:document.querySelector(".js-search-input"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")},c="active",f="https://pixabay.com/api/",m="49309172-5f8130b15ef3c43c70e2ee30a",g="photo",y="horizontal",h="true";function p(s){const t=new URLSearchParams({key:m,q:s,image_type:g,orientation:y,safesearch:h});return fetch(`${f}?${t}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}const L=()=>{n.error({title:"❌ Please, enter a query!",message:"",position:"topRight",color:"red",icon:""})},S=()=>{n.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topRight",color:"red",icon:""})};function v(s){return s.map(({webformatURL:t,largeImageURL:l,tags:i,likes:e,views:r,comments:o,downloads:u})=>`<li class="gallery-card">
      <a class="gallery-link" href="${l}">
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
              <li class="info-card-value likes">${o}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${u}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const E=new d(".gallery-link",{captionsData:"alt",captionDelay:250});function k(s){s.preventDefault();const t=a.loader,l=s.currentTarget,i=l.elements.user_query.value.trim();if(!i)return L();t.classList.add(c),p(i).then(e=>{if(t.classList.remove(c),!e.total)return a.gallery.innerHTML="",S();a.gallery.innerHTML=v(e.hits),E.refresh()}).catch(e=>{t.classList.remove(c),console.log(e)}).finally(()=>{l.reset()})}a.searchForm.addEventListener("submit",k);
//# sourceMappingURL=index.js.map
