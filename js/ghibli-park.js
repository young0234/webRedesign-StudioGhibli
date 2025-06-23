/* -------------- header ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const langHeader = document.documentElement.lang.toLowerCase();
  let headerFile = '/webRedesign-StudioGhibli/include/header.html'; // 기본 한국어

  if (langHeader.startsWith('en')) {  
    headerFile = '/webRedesign-StudioGhibli/include/header_en.html'; // 영어
  }else if(langHeader.startsWith('ja')){
    headerFile = '/webRedesign-StudioGhibli/include/header_jp.html'; // 일본어
  }else{
    headerFile = '/webRedesign-StudioGhibli/include/header.html'; // 한국어
  }

  fetch(headerFile)
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch header');
      return response.text();
    })
    .then(data => {
      const headerInclude = document.querySelector('.header-include');
      if (!headerInclude) {
        console.error('.header-include element not found');
        return;
      }
      headerInclude.innerHTML = data;

      // 언어 변경 이벤트
      const globalIcon = document.querySelector('.global-btn');
      const globalList = document.querySelector('.global-list');

      globalIcon.addEventListener('click', (e) => {
        e.preventDefault();
        globalList.style.display = (globalList.style.display === "block") ? "none" : "block";
      });

      // 서브메뉴 이벤트
      const hamburgerBtn = document.querySelector('.hamburger-btn');
      const subWrap = document.querySelector('.sub-wrap');
      const closeBtn = document.querySelector('.close-btn');

      hamburgerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        subWrap.style.display = (subWrap.style.display === "block") ? "none" : "block";
      });

      closeBtn.addEventListener('click', () => {
        subWrap.style.display = "none";
      });
    })
    .catch(err => {
      console.error('Header loading error:', err);
    });
});


/* -------------- footer ---------------- */
const langFooter = document.documentElement.lang.toLowerCase();

let footerFile;

if (langFooter.startsWith('en')) { 
  footerFile = '/webRedesign-StudioGhibli/include/footer_en.html';  // 영어
} else if (langFooter.startsWith('ja')){
  footerFile = '/webRedesign-StudioGhibli/include/footer_jp.html'; // 일본어
} else {
  footerFile = '/webRedesign-StudioGhibli/include/footer.html';     // 기본 한국어
}

fetch(footerFile)
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;

    window.onscroll = function () {
      let btn = document.getElementById("topBtn");
      btn.style.display = (window.scrollY > 300) ? "flex" : "none";
    };
  });
  
/* -------------- studio-wrap ---------------- */
function setupStudioClick(wrapId, leftClass, rightClass) {
  const container = document.getElementById(wrapId);

  if (!container) return;

  container.addEventListener('click', (e) => {
    const sideElement = e.target.closest('.side');
    if (!sideElement) return;

    // 모바일: 바로 이동
    if (window.innerWidth <= 600) {
      const targetUrl = sideElement.getAttribute('data-target');
      if (targetUrl) window.location.href = targetUrl;
      return;
    }

    // 중복 확장 방지
    if (
      container.classList.contains('expand-left') ||
      container.classList.contains('expand-right')
    ) {
      return;
    }

    // 방향 결정
    const isLeft = sideElement.classList.contains(leftClass);
    const expandClass = isLeft ? 'expand-left' : 'expand-right';
    container.classList.add(expandClass);

    const targetUrl = sideElement.getAttribute('data-target');
    if (!targetUrl) {
      console.warn('Missing data-target');
      return;
    }

    function onTransitionEnd(event) {
      if (['flex-grow', 'flex-basis', 'flex'].includes(event.propertyName)) {
        window.location.href = targetUrl;
        container.removeEventListener('transitionend', onTransitionEnd);
      }
    }

    container.addEventListener('transitionend', onTransitionEnd);
  });
}

// 한국어 페이지 설정
setupStudioClick('studio-wrap', 'ghibli-park-entrance-en', 'ghibli-museum-entrance');

// 영어 페이지 설정
setupStudioClick('studio-wrap-en', 'ghibli-park-entrance-en', 'ghibli-museum-entrance-en');

// 일본어 페이지 설정
setupStudioClick('studio-wrap-jp', 'ghibli-park-entrance-jp', 'ghibli-museum-entrance-jp');


/* -------------- accordion ---------------- */
function initAccordion() {
  let items = document.querySelectorAll(".notice-accordion-item");
  if (items.length === 0) return;

  items.forEach(item => {
    let title = item.querySelector(".notice-accordion-title");
    if (!title) return;
    let newTitle = title.cloneNode(true);
    title.parentNode.replaceChild(newTitle, title);
  });

  const itemsWithNewTitle = document.querySelectorAll(".notice-accordion-item");
  itemsWithNewTitle.forEach(item => {
    let title = item.querySelector(".notice-accordion-title");
    let content = item.querySelector(".notice-accordion-content");
    if (!title || !content) return;

    title.addEventListener("click", () => {
      let isActive = item.classList.contains("active");

      itemsWithNewTitle.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".notice-accordion-title").classList.remove("active");
        const c = i.querySelector(".notice-accordion-content");
        if (c) c.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        title.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
});

