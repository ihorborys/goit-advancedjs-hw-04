var v=Object.defineProperty;var S=(r,e,o)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var h=(r,e,o)=>S(r,typeof e!="symbol"?e+"":e,o);import{a as x,i as m,S as C}from"./assets/vendor-BNE1jlQL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const i={searchForm:document.querySelector(".js-form"),searchInput:document.querySelector(".js-search-input"),loader:document.querySelector(".js-loader"),gallery:document.querySelector(".js-gallery"),galleryCard:document.querySelector(".js-gallery-card"),loadMoreBtn:document.querySelector(".js-load-more-btn")},c="active",l={page:1,perPage:15,query:"",maxPage:1},P="https://pixabay.com/api/",E="49309172-5f8130b15ef3c43c70e2ee30a",q="photo",w="horizontal",A="true";async function f(r){const e={key:E,q:r,image_type:q,orientation:w,safesearch:A,per_page:l.perPage,page:l.page};return(await x.get(P,{params:e})).data}const k=()=>{m.error({title:"❌ Please, enter a query!",message:"",position:"topRight",color:"red",icon:""})},I=()=>{m.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topRight",color:"red",icon:""})},T=()=>{m.info({title:"We're sorry, but you've reached the end of search results.",message:"",position:"topRight",color:"blue"})};function y(r){return r.map(({webformatURL:e,largeImageURL:o,tags:n,likes:t,views:s,comments:u,downloads:L})=>`<li class="gallery-card js-gallery-card">
      <a class="gallery-link js-gallery-link" href="${o}">
        <img
        class="gallery-img"
        src="${e}"
        alt="${n}">
        <div class="gallery-img-info">
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Likes</li>
              <li class="info-card-value likes">${t}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Views</li>
              <li class="info-card-value likes">${s}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Comments</li>
              <li class="info-card-value likes">${u}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${L}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const j=new C(".gallery-link",{captionsData:"alt",captionDelay:250});function p(){const r=document.querySelector(".js-gallery-card");if(!r){console.log("No card yet");return}const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}async function b(){l.page+=1,a.disable(),a.hide(),i.loader.classList.add(c);try{const r=await f(l),e=y(r.hits);i.loader.classList.remove(c),i.gallery.insertAdjacentHTML("beforeend",e),p(),a.show(),a.enable(),l.page===l.maxPage&&(a.hide(),a.button.removeEventListener("click",b),T())}catch(r){console.log(r),a.hide()}}async function D(r){r.preventDefault(),a.hide(),l.page=1,l.maxPage=1;const e=i.loader,o=r.currentTarget,n=o.elements.user_query.value.trim();if(!n)return k();e.classList.add(c),l.query=n;try{const t=await f(n);if(e.classList.remove(c),l.maxPage=Math.ceil(t.total/t.hits.length),!t.total)return i.gallery.innerHTML="",i.loadMoreBtn.classList.remove(c),I();if(i.gallery.innerHTML=y(t.hits),p(),l.maxPage===1)return;a.show(),a.enable(),a.button.addEventListener("click",b),j.refresh()}catch(t){e.classList.remove(c),console.log(t)}finally{o.reset()}}const d=class d{constructor(e){this.button=e,this.prevText=""}disable(){this.button.disabled=!0,this.prevText=this.button.textContent,this.button.textContent="Loading..."}enable(){this.button.disabled=!1,this.button.textContent=this.prevText||this.button.textContent}hide(){this.button.classList.add(d.HIDDEN_CLASS)}show(){this.button.classList.remove(d.HIDDEN_CLASS)}};h(d,"HIDDEN_CLASS","is-hidden");let g=d;i.searchForm.addEventListener("submit",D);const a=new g(i.loadMoreBtn);
//# sourceMappingURL=index.js.map
