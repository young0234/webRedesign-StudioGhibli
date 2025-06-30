
---
[README](https://github.com/dkssud-dus/webRedesign-StudioGhibli) | [README_en](https://github.com/dkssud-dus/webRedesign-StudioGhibli/blob/main/README_en.md)

`#RedesignProject` `#Website` `#TeamProject` `#3PeopleTeam` `#Responsive` `#Mobile`
# **Website Redesign Project Details:**
### Studio Ghibli

<br/>
<br/>
<br/>

## **Role**
| Name         | Responsibility Area           | Main Page Work                                          | Sub Page Work                                                  |
|--------------|-------------------------------|---------------------------------------------------------|----------------------------------------------------------------|
| 👑 조효희, Jo hyo hee | Info Delivery                 | Header, Navigation, Ghibli Event, Ghibli Location                                | Studio Ghibli Information, Notice, Event (Calendar), Q&A                            |
| 김채연, Kim chae yeon   | Visual + Info Blend           | Music Control, Main visual, Studio Ghibli information · history, Movies                          | Movie List, Movie Detail                                                           |
| 박서영, Park seo young | Info Delivery        | Notice, Inside, Email, Footer, Top button, Pagenation (section anchor)                          | Ghibli Location, Ghibli Museum, Ghibli Park, Ghibli Event (Weather)                 |

</br>

> README Author & Final Compiler: 김채연, Kim chae yeon

<br/>
<br/>
<br/>

## Table of Contents

1. [Project Overview](#1-Project-Overview)   
2. [Core Features](#2-Core-Features)   
3. [Page-wise Features](#3-Page-wise-Features)    
   
</br>
</br>
</br>

---

## 1. Project Overview
### 1.1. Background
Studio Ghibli is a global animation brand with numerous fans not only in Japan but also overseas. However, the official homepage only supported Japanese, making accessibility significantly low for international fans. Additionally, convenience and necessity features for users (search, top button, etc.) were lacking, which could cause difficulties in usage. Both main and sub pages displayed information in simple text format, failing to properly utilize Studio Ghibli's IP.

</br>

The purpose of this project is as follows:

</br>

1. We want to materialize the brand image of 'Studio Ghibli'.
2. We want to serve as a portal that delivers not only official information but also cultural content.
3. We want to create a global site that can be easily accessed by fans worldwide, not just domestic Japanese fans.

</br>
</br>
</br>

### 1.2. Keywords
1. **Warmth, Coziness**   
  1.1. Studio Ghibli's unique sensibility   
  1.2. Fairy tale-like atmosphere   
  1.3. Maximizing visual appeal

</br>

2. **Multilingual Support**   
  2.1. Official hub for Studio Ghibli fans worldwide

</br>

3. **Intuitiveness**   
  3.1. Simple and clear, considering user convenience   

</br>
</br>
</br>

---

## 2. Core Features
### Use of media content such as music and videos
1. Video playback using `iframe`
2. Music playback activation and progress bar control

</br>
</br>
</br>

### Accordion menu for delivering large amounts of information
1. Using JS
2. Used in sub pages such as Notice, Q&A

</br>
</br>
</br>

---

## 3. Page-wise Features

### 3.1. [Main Page](https://dkssud-dus.github.io/webRedesign-StudioGhibli/index_en.html)

---

### 3.1.1. Music Control
![mainpage-music](https://github.com/user-attachments/assets/8db360ac-28e7-451d-87e6-f9e4eb8da978)

<br/>

#### Implementation Summary
1. When accessing the main page, a music activation screen appears first.
2. Users can select ON/OFF, and afterwards, music can be activated through mute and play buttons at the bottom right of the screen.
3. Background images and GIF images utilized Studio Ghibli IP, allowing users to strongly imprint the "Studio Ghibli" image when first accessing the page.

<br/>

> Lead: 김채연, Kim chae yeon

</br>
</br>
</br>

### 3.1.2. Header + Navigation
![mainpage-nav](https://github.com/user-attachments/assets/fa19c116-6a82-476e-a885-f34f9acee669)

<br/>

#### Implementation Summary
1. The Ghibli logo is placed on the left to enable constant navigation to the main page.
2. On the right, search box, global button, and hamburger button are placed.
3. Clicking the global button allows language change to Korean, English, and Japanese.
4. Clicking the hamburger button makes navigation appear to fill the screen, with each menu arranged in a single line for easy finding.
5. When hovering over the menu, images are inserted to create a coloring effect.

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.1.3. Pagenation (section anchor)
![mainpage-pagenation](https://github.com/user-attachments/assets/5a58e712-113f-4778-924b-105bb21a13cc)

<br/>

#### Implementation Summary
1. Pagination is placed on the left side of the main page to navigate to each section, enhancing user convenience.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.4. Main visual
![mainpage-visual](https://github.com/user-attachments/assets/e65663c1-8d26-42c2-b258-58ae3552d7e9)

<br/>

#### Implementation Summary
1. A video appears in box format at the center of the main page.
2. When scrolling, the video size fills the screen, and Studio Ghibli movie quotes float upward (↑ direction).

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.1.5. Studio Ghibli information · history
![mainpage-company](https://github.com/user-attachments/assets/5f92443d-9553-448f-af4b-efead11fe03e)

<br/>

#### Implementation Summary
1. This is the area that continues from the main visual.
2. An overlay is placed over the main visual video, making the background video appear dark.
3. On the left, a brief description of Studio Ghibli is placed, and users can navigate to the sub page 'Company Introduction' through the 'More' button.
4. On the right, Studio Ghibli's work chronology moves upward (↑ direction) with animation effects, and can be paused when the mouse enters.
5. Clicking on the work titles on the right switches the background to an image swiper, allowing users to view images of each work.

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.1.6. Notice
![mainpage-news](https://github.com/user-attachments/assets/4da9fb28-f282-445c-9ee5-fbb52ef1d3cc)

<br/>

#### Implementation Summary
1. When mouse scrolling reaches the news section, AOS function is used to make elements appear from left and right, meeting in the center.
2. The left image has overlay disappear on hover, and the right content also changes text color values on hover.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.7. Ghibli Event
![mainpage-event](https://github.com/user-attachments/assets/01498a22-9426-420a-bb6d-bfa88efa7c88)

<br/>

#### Implementation Summary
1. Users can scroll through dates on the right and click to find the desired date.
2. When a date is clicked, events corresponding to that date appear in ticket form on the left.
3. Also, ongoing events can be checked using swiper, and users can check event content by pressing buttons.
4. Clicking the 'More' button navigates to the sub page "Ghibli Event".

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.1.8. Movies
![mainpage-movie](https://github.com/user-attachments/assets/6d1f9ee4-b3e6-42f8-9beb-35f62008ab11)

<br/>

#### Implementation Summary
1. This is Studio Ghibli's movie introduction section.
2. Since movies need to be displayed, the background is designed in the form of film strips.
3. Movie posters are inserted using swiper, and when hovering over each movie poster, the area scales and movie trailers auto-play in muted iframe format.
4. When the mouse doesn't enter, the swiper moves automatically and loops infinitely.

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.1.9. Inside
![mainpage-inside](https://github.com/user-attachments/assets/29e8932b-f0ff-4c54-95e8-3b4a4cf6f496)

<br/>

#### Implementation Summary
1. This area represents Studio Ghibli's pursued direction and identity, composed of six contents in tab format.
2. Clicking on the bottom images changes the content.
3. In responsive design, the bottom images change from six in a row to three in two rows.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.10. Ghibli Location
![mainpage-map](https://github.com/user-attachments/assets/0afe0333-a52e-4a32-9769-94bd4cea61ae)

<br/>

#### Implementation Summary
1. A map showing Ghibli Park and Ghibli Museum is created and placed in the center, with links on each location to navigate to sub pages.
2. Animation is inserted into icons to quickly identify locations within the map image, making them stand out to users.
3. Studio Ghibli IP is utilized in the background by placing character images throughout, with 360-degree rotating animations.

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.1.11. Email
![mainpage-email](https://github.com/user-attachments/assets/575381e3-626d-4b8f-abd4-9d3179109b64)

<br/>

#### Implementation Summary
1. Implemented to be as clean as possible while enabling quick information recognition.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.12. Footer
![mainpage-footer](https://github.com/user-attachments/assets/6ee13552-4519-445f-b73b-0db32544dba3)

<br/>

#### Implementation Summary
1. Efforts were made to compose it cleanly.
2. The top button was integrated into the work, and Studio Ghibli work characters were used inside the top button to utilize Ghibli's IP.
3. The top button appears only when a certain amount of scrolling occurs, and when clicked, it smoothly moves to the top.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

---

### 3.2. Sub Pages (9)

---

### 3.2.1. [Studio Ghibli Information](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/ghibli-data-en.html)
![subpage-company-banner](https://github.com/user-attachments/assets/09ac48f0-9504-45e5-9a46-671e8a19d61b)

<br/>

#### Implementation Summary
1. This is a sub page with information about Ghibli company.
2. The top banner uses left-right moving animation containing Ghibli work names, with colorless text to avoid eye fatigue, while hashtag parts use point colors for vivid expression.
  
<br/>
<br/>
<br/>
    
![subpage-company-content](https://github.com/user-attachments/assets/5583213f-2dad-4142-8982-edc1194b9261)

<br/>

#### Implementation Summary
1. Company information is implemented in table format for readability, and business content below is inserted with photos for intuitive confirmation.   
2. Business content is implemented so that overlay disappears on hover.   

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.2.2. [Notice](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/ghibli-news-en.html)
![subpage-news-banner](https://github.com/user-attachments/assets/d25938f7-5999-4969-a6e0-a8fc01b7cffa)

<br/>

#### Implementation Summary
1. This is a sub page for the latest information or announcements from Ghibli.
2. The top banner uses left-right moving animation containing Ghibli work names, with colorless text to avoid eye fatigue, while hashtag parts use point colors for vivid expression.
  
<br/>
<br/>
<br/>
    
![subpage-news-content](https://github.com/user-attachments/assets/64932e15-d556-43d9-b023-dd983a560ded)

<br/>

#### Implementation Summary
1. A search box is placed at the top for quick finding.   
2. Overall news is created in card format to check photos and content briefly, with three cards per row using grid layout.   
3. When hovering over cards, the photo scale inside the card enlarges.   
4. At the bottom, buttons to navigate to Ghibli Park and Museum are created for natural navigation to other sub pages.   

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.2.3. [Event](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/ghibi-event-en.html)
![subpage-event-banner](https://github.com/user-attachments/assets/ed6dfa8d-a62b-4a7a-bdf9-476bc5342643)

<br/>

#### Implementation Summary
1. This is a sub page to view Ghibli events.
2. The top banner uses left-right moving animation containing Ghibli work names, with colorless text to avoid eye fatigue, while hashtag parts use point colors for vivid expression.
   
<br/>
<br/>
<br/>
    
![subpage-event-content1](https://github.com/user-attachments/assets/6cdc5c2f-d4a1-45ed-bb89-ca6851c3bbde)

<br/>

#### Implementation Summary
1. The first appearing calendar shows how many events are on each date, with background color changes on hover for easy cursor position identification.   
2. When the calendar moves to May, a warning popup appears saying "No previous month information," and when moving to July, July calendar information appears.   
3. The event area shows a message to select a date when no date is clicked, and when a date is clicked, event information corresponding to that date appears in card format.   
4. In responsive design, the calendar shape is maintained, and events pop up in modal format.   

<br/>
<br/>
<br/>
    
![subpage-event-content2](https://github.com/user-attachments/assets/c76b2e39-67f9-41a2-a3bc-01afd8286cd4)

<br/>

#### Implementation Summary
1. Based on Tokyo, Studio Ghibli's headquarters, the current day's weather is shown when accessing the page.   
2. Clicking on the weather box shows a week's weather information.   
3. In responsive design, it's placed below the event calendar as fixed content, judged to be convenient from an information perspective.   

</br>

> Lead: 조효희, Jo hyo hee & 박서영, Park seo young

</br>
</br>
</br>

### 3.2.4. [Movie List](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/movie-list-en.html)
![subpage-movielist-banner](https://github.com/user-attachments/assets/94b940dd-aa11-4d2e-aee7-0c51f329acc9)

<br/>

#### Implementation Summary
1. Movie posters appearing when entering the page are designed to move in different directions using animation, by latest release order / release year order.

<br/>
<br/>
<br/>
    
![subpage-movielist-content](https://github.com/user-attachments/assets/d79c0800-3731-4d62-85a1-076d5adc408d)

<br/>

#### Implementation Summary
1. The search bar receives movie titles as arrays and automatically types them to give users hints for convenience.   
2. The work list is automatically sorted by latest release order / release year order / work title order.   
3. When hovering over each movie poster, the movie title and release date appear.   
4. In responsive design, the three-column arranged movie posters change to single-column arrangement.   

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.2.4.1. [Movie Detail](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/movie27-en.html)
![subpage-movie-banner](https://github.com/user-attachments/assets/44584e19-1dc3-45ec-ab8b-38908a9c24bf)

<br/>

#### Implementation Summary
1. When entering the page, movie trailers auto-play in muted state.

<br/>
<br/>
<br/>
    
![subpage-movie-content](https://github.com/user-attachments/assets/82aa1bcd-2842-4caa-adda-9e98bfc54509)

<br/>

#### Implementation Summary
1. The immediately appearing music controller can activate or deactivate music playback, and clicking the music progress bar allows adjustment of music progress position.
2. The ≪≫ buttons on both sides only serve to return the playing music to the beginning, since only one music track is inserted.
   
<br/>
<br/>
<br/>
    
![subpage-movie-content2](https://github.com/user-attachments/assets/b7b45031-b6da-42a1-9d37-b987cc6643ad)

<br/>

#### Implementation Summary
1. In "Meet the main characters of the animation", users can click on each character to see famous quotes, brief descriptions, and images.
2. Character icons / famous quotes and images, brief descriptions / video links are arranged in three columns.
3. In responsive design, the "Meet the main characters of the animation" layout changes so video links can be checked below images and descriptions.

<br/>
<br/>
<br/>
    
![subpage-movie-content3](https://github.com/user-attachments/assets/396e9ebd-959a-4b39-b879-1e76a9489ad1)

<br/>

#### Implementation Summary
1. In "Revisit scenes from the animation", swiper is used to view scenes from the movie.
2. In responsive design, three-column arranged images are arranged in single column only, allowing large viewing of one image.

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

#### 3.2.5. [Ghibli Location](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/total-ghibli-en.html)
![subpage-location](https://github.com/user-attachments/assets/bb4d111e-91ea-4076-8c82-d5cfcfe9da6b)

<br/>

#### Implementation Summary
1. Image size varies according to mouse position, and both directions can navigate to their respective sub pages.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

#### 3.2.5.1. [Ghibli Park](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/ghibli-park-en.html)
![subpage-park](https://github.com/user-attachments/assets/a6d9e4b1-3b96-4d56-b397-d94b237b8ab5)

<br/>

#### Implementation Summary
1. The ticket section is designed in receipt format to be more realistic while capturing Studio Ghibli's characteristic cute sensibility.
2. Precautions are composed in accordion format, and already activated accordions are deactivated when other accordion menus are clicked.
3. Map API is utilized to include location display functionality.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

#### 3.2.5.2. [Ghibli Museum](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/ghibli-museum-en.html)
![subpage-museum](https://github.com/user-attachments/assets/fc78825e-5491-4a51-8bb5-84dc74776f7f)

<br/>

#### Implementation Summary
1. The ticket section is designed in receipt format to be more realistic while capturing Studio Ghibli's characteristic cute sensibility.
2. Precautions are composed in accordion format, and already activated accordions are deactivated when other accordion menus are clicked.
3. Map API is utilized to include location display functionality.

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

#### 3.2.6. [Q&A](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_en/ghibli-QnA-en.html)
![subpage-qna-banner](https://github.com/user-attachments/assets/7d43857a-294a-4a20-9ed0-e552e8c294df)

<br/>

#### Implementation Summary
1. This is Ghibli's Q&A sub page.
2. The top banner uses left-right moving animation containing Ghibli work names, with colorless text to avoid eye fatigue, while hashtag parts use point colors for vivid expression.

<br/>
<br/>
<br/>
    
![subpage-qna-content](https://github.com/user-attachments/assets/22413aa9-49a5-4215-bf33-b30389b38c5f)

<br/>

#### Implementation Summary
1. Frequently asked questions utilize accordion format so questions are visible at a glance, and activated questions are deactivated when other questions are clicked.
2. The 'Content you're looking for' section changes color on hover and has animation effects that move slightly upward.
3. When changing to responsive, content in 'Content you're looking for' can change to simple keywords.
4. At the bottom, a form format is utilized to register questions.

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

---
