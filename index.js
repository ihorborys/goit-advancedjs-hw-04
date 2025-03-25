var L=Object.defineProperty;var v=(s,t,o)=>t in s?L(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o;var m=(s,t,o)=>v(s,typeof t!="symbol"?t+"":t,o);import{a as S,i as f,S as x}from"./assets/vendor-BNE1jlQL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n={searchForm:document.querySelector(".js-form"),searchInput:document.querySelector(".js-search-input"),loader:document.querySelector(".js-loader"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn")},u="active",a={page:1,perPage:15,query:"",maxPage:1},P="https://pixabay.com/api/",E="49309172-5f8130b15ef3c43c70e2ee30a",A="photo",q="horizontal",C="true";async function h(s){const t={key:E,q:s,image_type:A,orientation:q,safesearch:C,per_page:a.perPage,page:a.page};return(await S.get(P,{params:t})).data}const I=()=>{f.error({title:"❌ Please, enter a query!",message:"",position:"topRight",color:"red",icon:""})},T=()=>{f.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topRight",color:"red",icon:""})};function p(s){return s.map(({webformatURL:t,largeImageURL:o,tags:l,likes:e,views:r,comments:c,downloads:b})=>`<li class="gallery-card">
      <a class="gallery-link" href="${o}">
        <img
        class="gallery-img"
        src="${t}"
        alt="${l}">
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
              <li class="info-card-value likes">${b}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const k=new x(".gallery-link",{captionsData:"alt",captionDelay:250});async function y(){a.page+=1,i.disable();try{const s=await h(a);console.log(s);const t=p(s.hits);n.gallery.insertAdjacentHTML("beforeend",t),i.enable(),a.page===a.maxPage&&(i.hide(),i.button.removeEventListener("click",y))}catch(s){console.log(s),i.hide()}}async function w(s){s.preventDefault(),i.hide(),a.page=1,a.maxPage=1;const t=n.loader,o=s.currentTarget,l=o.elements.user_query.value.trim();if(!l)return I();t.classList.add(u),a.query=l;try{const e=await h(l);if(t.classList.remove(u),a.maxPage=Math.ceil(e.total/e.hits.length),console.log(e),console.log(a.maxPage),!e.total)return n.gallery.innerHTML="",n.loadMoreBtn.classList.remove(u),T();if(n.gallery.innerHTML=p(e.hits),a.maxPage===1)return;i.show(),i.enable(),i.button.addEventListener("click",y),n.loadMoreBtn.classList.add(u),k.refresh()}catch(e){t.classList.remove(u),console.log(e)}finally{o.reset()}}const d=class d{constructor(t){this.button=t,this.prevText=""}disable(){this.button.disabled=!0,this.prevText=this.button.textContent,this.button.textContent="Loading..."}enable(){this.button.disabled=!1,this.button.textContent=this.prevText||this.button.textContent}hide(){this.button.classList.add(d.HIDDEN_CLASS)}show(){this.button.classList.remove(d.HIDDEN_CLASS)}};m(d,"HIDDEN_CLASS","is-hidden");let g=d;n.searchForm.addEventListener("submit",w);const i=new g(n.loadMoreBtn);
//# sourceMappingURL=index.js.map
