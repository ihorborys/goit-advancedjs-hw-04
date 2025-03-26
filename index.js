var L=Object.defineProperty;var v=(s,t,r)=>t in s?L(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r;var f=(s,t,r)=>v(s,typeof t!="symbol"?t+"":t,r);import{a as S,i as m,S as x}from"./assets/vendor-BNE1jlQL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l={searchForm:document.querySelector(".js-form"),searchInput:document.querySelector(".js-search-input"),loader:document.querySelector(".js-loader"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn")},c="active",a={page:1,perPage:3,query:"",maxPage:1},P="https://pixabay.com/api/",E="49309172-5f8130b15ef3c43c70e2ee30a",A="photo",C="horizontal",q="true";async function h(s){const t={key:E,q:s,image_type:A,orientation:C,safesearch:q,per_page:a.perPage,page:a.page};return(await S.get(P,{params:t})).data}const I=()=>{m.error({title:"❌ Please, enter a query!",message:"",position:"topRight",color:"red",icon:""})},T=()=>{m.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topRight",color:"red",icon:""})},k=()=>{m.info({title:"We're sorry, but you've reached the end of search results.",message:"",position:"topRight",color:"blue"})};function p(s){return s.map(({webformatURL:t,largeImageURL:r,tags:n,likes:e,views:o,comments:u,downloads:b})=>`<li class="gallery-card">
      <a class="gallery-link" href="${r}">
        <img
        class="gallery-img"
        src="${t}"
        alt="${n}">
        <div class="gallery-img-info">
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Likes</li>
              <li class="info-card-value likes">${e}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Views</li>
              <li class="info-card-value likes">${o}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Comments</li>
              <li class="info-card-value likes">${u}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${b}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const w=new x(".gallery-link",{captionsData:"alt",captionDelay:250});async function y(){a.page+=1,i.disable(),i.hide(),l.loader.classList.add(c);try{const s=await h(a);console.log(s);const t=p(s.hits);l.loader.classList.remove(c),l.gallery.insertAdjacentHTML("beforeend",t),i.show(),i.enable(),a.page===a.maxPage&&(i.hide(),i.button.removeEventListener("click",y),k())}catch(s){console.log(s),i.hide()}}async function D(s){s.preventDefault(),i.hide(),a.page=1,a.maxPage=1;const t=l.loader,r=s.currentTarget,n=r.elements.user_query.value.trim();if(!n)return I();t.classList.add(c),a.query=n;try{const e=await h(n);if(t.classList.remove(c),a.maxPage=Math.ceil(e.total/e.hits.length),console.log(e),console.log(a.maxPage),!e.total)return l.gallery.innerHTML="",l.loadMoreBtn.classList.remove(c),T();if(l.gallery.innerHTML=p(e.hits),a.maxPage===1)return;i.show(),i.enable(),i.button.addEventListener("click",y),l.loadMoreBtn.classList.add(c),w.refresh()}catch(e){t.classList.remove(c),console.log(e)}finally{r.reset()}}const d=class d{constructor(t){this.button=t,this.prevText=""}disable(){this.button.disabled=!0,this.prevText=this.button.textContent,this.button.textContent="Loading..."}enable(){this.button.disabled=!1,this.button.textContent=this.prevText||this.button.textContent}hide(){this.button.classList.add(d.HIDDEN_CLASS)}show(){this.button.classList.remove(d.HIDDEN_CLASS)}};f(d,"HIDDEN_CLASS","is-hidden");let g=d;l.searchForm.addEventListener("submit",D);const i=new g(l.loadMoreBtn);
//# sourceMappingURL=index.js.map
