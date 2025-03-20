import{a as f,i as u,S as g}from"./assets/vendor-BNE1jlQL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a={searchForm:document.querySelector(".js-form"),searchInput:document.querySelector(".js-search-input"),loader:document.querySelector(".js-loader"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn")},n="active",m="https://pixabay.com/api/",y="49309172-5f8130b15ef3c43c70e2ee30a",p="photo",h="horizontal",L="true";let c=1,v=3,S="";async function E(l){console.log(l);const o={key:y,q:l,image_type:p,orientation:h,safesearch:L,per_page:v,page:c},t=await f.get(m,{params:o});return c+=1,console.log(c),t.data}const q=()=>{u.error({title:"❌ Please, enter a query!",message:"",position:"topRight",color:"red",icon:""})},I=()=>{u.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topRight",color:"red",icon:""})};function M(l){return l.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:i,downloads:d})=>`<li class="gallery-card">
      <a class="gallery-link" href="${t}">
        <img
        class="gallery-img"
        src="${o}"
        alt="${s}">
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
              <li class="info-card-value likes">${i}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${d}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const k=new g(".gallery-link",{captionsData:"alt",captionDelay:250});async function A(l){l.preventDefault();const o=a.loader,t=l.currentTarget,s=t.elements.user_query.value.trim();if(!s)return q();o.classList.add(n);try{const e=await E(s);if(console.log(S),o.classList.remove(n),!e.total)return a.gallery.innerHTML="",a.loadMoreBtn.classList.remove(n),I();a.gallery.innerHTML=M(e.hits),k.refresh(),a.loadMoreBtn.classList.add(n)}catch(e){o.classList.remove(n),console.log(e)}finally{t.reset()}}function b(){console.log("Hello!")}a.searchForm.addEventListener("submit",A);a.loadMoreBtn.addEventListener("click",b);
//# sourceMappingURL=index.js.map
