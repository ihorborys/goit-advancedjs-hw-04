var y=Object.defineProperty;var b=(s,t,o)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o;var m=(s,t,o)=>b(s,typeof t!="symbol"?t+"":t,o);import{a as L,i as f,S}from"./assets/vendor-BNE1jlQL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l={searchForm:document.querySelector(".js-form"),searchInput:document.querySelector(".js-search-input"),loader:document.querySelector(".js-loader"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn")},u="active",a={page:1,perPage:15,query:"",maxPage:1},v="https://pixabay.com/api/",x="49309172-5f8130b15ef3c43c70e2ee30a",P="photo",E="horizontal",q="true";async function h(s){const t={key:x,q:s,image_type:P,orientation:E,safesearch:q,per_page:a.perPage,page:a.page};return(await L.get(v,{params:t})).data}const A=()=>{f.error({title:"❌ Please, enter a query!",message:"",position:"topRight",color:"red",icon:""})},C=()=>{f.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topRight",color:"red",icon:""})};function I(s){return s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:c,downloads:p})=>`<li class="gallery-card">
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
              <li class="info-card-value likes">${c}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${p}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const T=new S(".gallery-link",{captionsData:"alt",captionDelay:250});async function w(){a.page+=1,n.disable();try{const s=await h(a);console.log(s)}catch(s){console.log(s),n.hide()}}async function D(s){s.preventDefault(),n.hide(),a.page=1,a.maxPage=1;const t=l.loader,o=s.currentTarget,i=o.elements.user_query.value.trim();if(!i)return A();t.classList.add(u),a.query=i;try{const e=await h(i);if(t.classList.remove(u),a.maxPage=Math.ceil(e.total/e.hits.length),console.log(e),console.log(a.maxPage),!e.total)return l.gallery.innerHTML="",l.loadMoreBtn.classList.remove(u),C();if(l.gallery.innerHTML=I(e.hits),a.maxPage===1)return;n.show(),n.enable(),n.button.addEventListener("click",w),l.loadMoreBtn.classList.add(u),T.refresh()}catch(e){t.classList.remove(u),console.log(e)}finally{o.reset()}}const d=class d{constructor(t){this.button=t,this.prevText=""}disable(){this.button.disabled=!0,this.prevText=this.button.textContent,this.button.textContent="Loading..."}enable(){this.button.disabled=!1,this.button.textContent=this.prevText||this.button.textContent}hide(){this.button.classList.add(d.HIDDEN_CLASS)}show(){this.button.classList.remove(d.HIDDEN_CLASS)}};m(d,"HIDDEN_CLASS","is-hidden");let g=d;l.searchForm.addEventListener("submit",D);const n=new g(l.loadMoreBtn);
//# sourceMappingURL=index.js.map
