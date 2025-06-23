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


/* -------------- qna ---------------- */
window.addEventListener("scroll", function () {
  const btn = document.getElementById("topBtn");
  if (btn) {
    btn.style.display = (window.scrollY > 300) ? "flex" : "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".qna-accordion-item");

  items.forEach(item => {
    const title = item.querySelector(".qna-accordion-title");
    const content = item.querySelector(".qna-accordion-content");

    title.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".qna-accordion-title").classList.remove("active");
        const c = i.querySelector(".qna-accordion-content");
        c.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        title.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

function updateQnAContent() {
  const qnaItems = document.querySelectorAll('.qna-btn-item span');
  const lang = document.documentElement.lang; // <html lang="en"> 확인!

  if (qnaItems.length >= 3) {
    if (window.innerWidth <= 768) {
      if (lang === 'en') {
        qnaItems[0].innerHTML = 'Ask a Question';
        qnaItems[1].innerHTML = 'Usage Info';
        qnaItems[2].innerHTML = 'Suggestions';
      } else if (lang === 'ja') {
        qnaItems[0].innerHTML = '質問登録';
        qnaItems[1].innerHTML = '利用情報';
        qnaItems[2].innerHTML = '意見提案';
      } else {
        qnaItems[0].innerHTML = '질문 등록';
        qnaItems[1].innerHTML = '이용 정보';
        qnaItems[2].innerHTML = '의견 제안';
      }
    } else {
      if (lang === 'en') {
        qnaItems[0].innerHTML = 'Leave your questions <br>and we’ll respond promptly.';
        qnaItems[1].innerHTML = 'We will provide <br>information about our website.';
        qnaItems[2].innerHTML = 'Share your suggestions or <br>report inconveniences while using the site.';
      } else if (lang === 'ja') {
        qnaItems[0].innerHTML = '知りたい事項を質問登録に<br>お残しになったら、<br>早い時間内に<br>返答するようにします。';
        qnaItems[1].innerHTML = 'ジブリホームページの利用情報を<br>教えて上げます。';
        qnaItems[2].innerHTML = 'ジブリホームページの利用の時、<br>不便なこと・提案したいことが<br>あれば意見を残して下さい。';
      } else {
        qnaItems[0].innerHTML = '궁금한 사항을 질문등록으로 <br>남겨주시면 신속히 답변드리겠습니다.';
        qnaItems[1].innerHTML = '지브리 홈페이지 이용정보를 <br>알려드리겠습니다.';
        qnaItems[2].innerHTML = '지브리 홈페이지 이용 시 불편하셨던 점이나 제안하실 의견을 남겨주세요.';
      }
    }
  }
}

updateQnAContent();
window.addEventListener('resize', updateQnAContent);

/* -------------- event ---------------- */
// ✅ 언어 구분 함수
function getLocalizedText(ko, en, ja) {
  const lang = document.documentElement.lang || 'ko';
  if (lang.startsWith('en')) return en;
  if (lang.startsWith('ja')) return ja;
  return ko;
}


// ✅ DOM 요소
const calendarContainer = document.getElementById('calendar');
const monthTitle = document.getElementById('monthTitle');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const defaultMessage = document.getElementById('defaultMessage');
const eventCards = document.getElementById('eventCards');

const monthsData = {
  6: { name: '6', lastDay: 30, firstWeekday: 0 },
  7: { name: '7', lastDay: 31, firstWeekday: 2 }
};

let currentYear = 2025;
let currentMonth = 6;

function toggleEventLabelsByScreenSize() {
  const eventLabels = document.querySelectorAll('.event-label');
  if (window.innerWidth <= 768) {
    eventLabels.forEach(label => label.style.display = 'none');
  } else {
    eventLabels.forEach(label => label.style.display = 'block');
  }
}

// 다국어 지원: 한국어, 일본어, 영어
function getLocalizedText(ko, en, jp) {
  const lang = document.documentElement.lang || 'ko';
  if (lang.startsWith('ja')) return jp || ko || en || '';
  if (lang.startsWith('en')) return en || ko || jp || '';
  return ko || en || jp || '';
}


function clearCalendar() {
  calendarContainer.innerHTML = '';
  if (defaultMessage) defaultMessage.style.display = 'block';
  if (eventCards) eventCards.style.display = 'none';
}

function renderCalendar(year, month) {
  clearCalendar();

  if (!monthsData[month]) {
    monthTitle.textContent = getLocalizedText(
      `${year}년 ${month}월 데이터 없음`,
      `No data for ${year}/${month}`,
      `${year}年${month}月のデータがありません`
    );
    return;
  }

  const { name, lastDay, firstWeekday } = monthsData[month];
  monthTitle.textContent = `${year}. ${name}.`;

  const totalCells = Math.ceil((firstWeekday + lastDay) / 7) * 7;

  for (let i = 0; i < firstWeekday; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day', 'empty');
    calendarContainer.appendChild(emptyCell);
  }

  for (let day = 1; day <= lastDay; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    const weekday = (firstWeekday + day - 1) % 7;

    let dateColor = '#333';
    let eventColor = '#7A8450';

    if (weekday === 0) {
      dateColor = '#FF6B6B';
      eventColor = '#FF6B6B';
    } else if (weekday === 6) {
      dateColor = '#4D96FF';
      eventColor = '#4D96FF';
    }

    const label = getLocalizedText("3개 이벤트", "3 events", "3件のイベント");

    dayDiv.innerHTML = `
      <div style="color:${dateColor}; font-weight:bold;">${day}</div>
      <div class="event-label" style="font-size:14px; color:${eventColor}; margin-top:10px;">${label}</div>
    `;

    dayDiv.addEventListener('click', () => {
      if (defaultMessage) defaultMessage.style.display = 'none';
      if (eventCards) eventCards.style.display = 'block';
    });

    calendarContainer.appendChild(dayDiv);
  }

  const remainingCells = totalCells - (firstWeekday + lastDay);
  for (let i = 0; i < remainingCells; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day', 'empty');
    calendarContainer.appendChild(emptyCell);
  }

  toggleEventLabelsByScreenSize();
}

prevMonthBtn?.addEventListener('click', () => {
  if (currentMonth > 6) {
    currentMonth--;
    renderCalendar(currentYear, currentMonth);
  } else {
    alert(getLocalizedText('이전 달 정보가 없습니다!', 'No previous month data!', '前月の情報がありません！'));
  }
});

nextMonthBtn?.addEventListener('click', () => {
  if (currentMonth < 7) {
    currentMonth++;
    renderCalendar(currentYear, currentMonth);
  } else {
    alert(getLocalizedText('다음 달 정보가 없습니다!', 'No next month data!', '次月の情報がありません！'));
  }
});

window.addEventListener('resize', toggleEventLabelsByScreenSize);
renderCalendar(currentYear, currentMonth);

// 날씨 위젯
const latitude = 35.682839; 
const longitude = 139.759455;
const mini = document.getElementById('weatherMini');
const detail = document.getElementById('weatherDetail');

async function fetchWeather() {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Tokyo`);
    const data = await res.json();

    const current = data.current;
    const temp = Math.round(current.temperature_2m);
    const desc = getWeatherDescription(current.weathercode);
    const icon = getWeatherIcon(current.weathercode);

    const now = new Date();
    const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

    mini.innerHTML = `
      <p>${getLocalizedText('도쿄의 날씨', 'Tokyo Weather', '東京の天気')}</p>
      <img src="${icon}" alt="날씨 아이콘" />
      <strong>${temp}℃</strong>
      <p>${desc}</p>
    `;

    const spans = detail.querySelectorAll('.weather-header span');
    spans[0].textContent = formattedDate;
    spans[1].textContent = getLocalizedText('📍도쿄', '📍Tokyo', '📍東京');
    detail.querySelector('.weather-header strong').textContent = getLocalizedText('도쿄의 날씨', 'Tokyo Weather', '東京の天気');

    const maxTemp = Math.round(data.daily.temperature_2m_max[0]);
    const minTemp = Math.round(data.daily.temperature_2m_min[0]);
    const wind = current.wind_speed_10m.toFixed(1);

    detail.querySelector('.weather-body').innerHTML = `
      <img src="${icon}" alt="날씨 아이콘" />
      <p><strong>${getLocalizedText(`최고: ${maxTemp}℃`, `Max: ${maxTemp}℃`, `最高: ${maxTemp}℃`)}</strong> <strong>${getLocalizedText(`최저: ${minTemp}℃`, `Min: ${minTemp}℃`, `最低: ${minTemp}℃`)}</strong></p>
      <p>${getLocalizedText(`${desc}입니다.`, `It is ${desc}.`, `${desc}です。`)}</p>
      <p>${getLocalizedText(`풍속은 최대 ${wind} m/s입니다.`, `Wind speed is up to ${wind} m/s.`, `風速は最大${wind} m/sです。`)}</p>
      <hr />
      <div class="weekly-forecast">
        ${data.daily.weathercode.map((code, i) => {
          const dayIndex = (now.getDay() + i) % 7;
          const dayNames = getLocalizedText(
            ['일', '월', '화', '수', '목', '금', '토'],
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['日', '月', '火', '水', '木', '金', '土']
          );
          const day = dayNames[dayIndex];
          const iconUrl = getWeatherIcon(code);
          const max = Math.round(data.daily.temperature_2m_max[i]);
          return `
            <div>
              <img src="${iconUrl}" alt="날씨 아이콘" />
              <br/>${day}<br/><small>${max}℃</small>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } catch (err) {
    console.error("날씨 정보 불러오기 실패:", err);
    mini.innerHTML = `<p>${getLocalizedText('날씨 불러오기 실패', 'Failed to load weather', '天気情報の読み込みに失敗しました')}</p>`;
  }
}

function getWeatherDescription(code) {
  const descriptions = {
    0: ["맑음", "Clear", "晴れ"],
    1: ["구름 조금", "Few Clouds", "薄い雲"],
    2: ["구름 많음", "Cloudy", "曇り"],
    3: ["흐림", "Overcast", "厚い雲"],
    45: ["안개", "Fog", "霧"],
    48: ["서리 안개", "Frost Fog", "霜の霧"],
    51: ["가벼운 비", "Light Rain", "小雨"],
    53: ["보통 비", "Moderate Rain", "普通の雨"],
    55: ["강한 비", "Heavy Rain", "強い雨"],
    56: ["가벼운 빙판비", "Light Freezing Rain", "軽い凍雨"],
    57: ["강한 빙판비", "Heavy Freezing Rain", "強い凍雨"],
    61: ["가벼운 소나기", "Light Showers", "軽いにわか雨"],
    63: ["보통 소나기", "Moderate Showers", "普通のにわか雨"],
    65: ["강한 소나기", "Heavy Showers", "強いにわか雨"],
    66: ["가벼운 빙판 소나기", "Light Freezing Showers", "軽い凍ったにわか雨"],
    67: ["강한 빙판 소나기", "Heavy Freezing Showers", "強い凍ったにわか雨"],
    71: ["가벼운 눈", "Light Snow", "軽い雪"],
    73: ["보통 눈", "Moderate Snow", "普通の雪"],
    75: ["강한 눈", "Heavy Snow", "強い雪"],
    77: ["눈알갱이", "Snow Grains", "雪の粒"],
    80: ["가벼운 소나기 비", "Light Rain Showers", "軽いにわか雨"],
    81: ["보통 소나기 비", "Moderate Rain Showers", "普通のにわか雨"],
    82: ["강한 소나기 비", "Heavy Rain Showers", "強いにわか雨"],
    85: ["가벼운 소나기 눈", "Light Snow Showers", "軽いにわか雪"],
    86: ["강한 소나기 눈", "Heavy Snow Showers", "強いにわか雪"],
    95: ["뇌우", "Thunderstorm", "雷雨"],
    96: ["약한 뇌우 우박", "Thunderstorm with slight hail", "軽い雹の雷雨"],
    99: ["강한 뇌우 우박", "Thunderstorm with heavy hail", "強い雹の雷雨"],
  };
  return descriptions[code] ? getLocalizedText(descriptions[code][0], descriptions[code][1], descriptions[code][2]) : '';
}

function getWeatherIcon(code) {
  const iconMap = {
    0: "01d", 1: "02d", 2: "03d", 3: "04d",
    45: "50d", 48: "50d", 51: "09d", 53: "09d", 55: "10d",
    56: "13d", 57: "13d", 61: "09d", 63: "10d", 65: "10d",
    66: "13d", 67: "13d", 71: "13d", 73: "13d", 75: "13d",
    77: "13d", 80: "09d", 81: "10d", 82: "10d",
    85: "13d", 86: "13d", 95: "11d", 96: "11d", 99: "11d"
  };
  return `https://openweathermap.org/img/wn/${iconMap[code] || "01d"}@2x.png`;

}

function showDetail() {
  detail.classList.add('show');
}

function hideDetail() {
  detail.classList.remove('show');
}

fetchWeather();


//모달
  // 날짜 클릭 시 모달 열기
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".event-modal");
  const modalClose = document.querySelector(".close-btn-modal");
  const calendarDates = document.querySelectorAll(".calendar");

  // 모바일에서 날짜 클릭 → 모달 열기
  if (modal && modalClose) {
    calendarDates.forEach(day => {
      day.addEventListener("click", () => {
        if (window.innerWidth <= 767) {
          modal.classList.add("active");
          console.log("모달 열림!");
        }
      });
    });

    // 모달 닫기 버튼
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
      console.log("모달 닫힘!");
    });
  } else {
    console.log("모달 또는 닫기버튼을 찾을 수 없음");
  }

  // Swiper 실행
  const swiper = new Swiper(".event-modal-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, 
  });
});

