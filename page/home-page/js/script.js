

function openCourse(courseId) {
// می‌ریم به صفحه اطلاعات دوره + ارسال نام دوره در URL
window.location.href = `course.html?course=${courseId}`;
}
const queryParams = new URLSearchParams(window.location.search);
const selectedCourseId = queryParams.get("course");
const selectedCourseData = courseData[selectedCourseId];



////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    function setupInfiniteSlider({
      wrapperSelector,
      prevBtnSelector,
      nextBtnSelector,
      dotsContainerSelector,
      boxWidth = 290,
      gap = 10,
      visibleBoxes = 4,
      totalBoxes = 12,
      interval = 5000,
    }) {
      const wrapper = document.querySelector(wrapperSelector);
      const prevBtn = document.querySelector(prevBtnSelector);
      const nextBtn = document.querySelector(nextBtnSelector);
      const dotsContainer = document.querySelector(dotsContainerSelector);
  
      let moveDistance = boxWidth + gap;
      let currentIndex = 0;
      let autoScroll;
  
      // Clone items for infinite loop effect
      const items = wrapper.children;
      for (let i = 0; i < visibleBoxes; i++) {
        wrapper.appendChild(items[i].cloneNode(true));
      }
  
      wrapper.style.transition = "transform 0.8s ease-in-out";
  
      // Create dots
      const totalDots = Math.ceil(totalBoxes / visibleBoxes);
      const dots = [];
      for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
  
      function updateDots() {
        const dotIndex = currentIndex % totalDots;
        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === dotIndex);
        });
      }
  
      function goToSlide(index) {
        currentIndex = index * visibleBoxes;
        wrapper.style.transition = "transform 0.8s ease-in-out";
        wrapper.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
        updateDots();
      }
  
      function scrollNext() {
        currentIndex++;
        wrapper.style.transition = "transform 0.8s ease-in-out";
        wrapper.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
  
        // Infinite scroll loop: reset to 0 after reaching last item
        if (currentIndex === totalBoxes) {
          setTimeout(() => {
            wrapper.style.transition = "none";
            currentIndex = 0;
            wrapper.style.transform = `translateX(0px)`;
          }, 800);
        }
        updateDots();
      }
  
      function scrollPrev() {
        if (currentIndex === 0) {
          currentIndex = totalBoxes;
          wrapper.style.transition = "none";
          wrapper.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              currentIndex--;
              wrapper.style.transition = "transform 0.8s ease-in-out";
              wrapper.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
              updateDots();
            });
          });
        } else {
          currentIndex--;
          wrapper.style.transition = "transform 0.8s ease-in-out";
          wrapper.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
          updateDots();
        }
      }
  
      function startAutoScroll() {
        autoScroll = setInterval(scrollNext, interval);
      }
  
      function stopAutoScroll() {
        clearInterval(autoScroll);
      }
  
      nextBtn.addEventListener("click", () => {
        stopAutoScroll();
        scrollNext();
        startAutoScroll();
      });
  
      prevBtn.addEventListener("click", () => {
        stopAutoScroll();
        scrollPrev();
        startAutoScroll();
      });
  
      wrapper.parentElement.addEventListener("mouseenter", stopAutoScroll);
      wrapper.parentElement.addEventListener("mouseleave", startAutoScroll);
  
      startAutoScroll();
    }
  
    setupInfiniteSlider({
      wrapperSelector: ".slideshow-wrapper",
      prevBtnSelector: ".prev-btn",
      nextBtnSelector: ".next-btn",
      dotsContainerSelector: ".dots-container"
    });
  
    setupInfiniteSlider({
      wrapperSelector: ".slideshow-wrapperTwo",
      prevBtnSelector: ".prev-btnTwo",
      nextBtnSelector: ".next-btnTwo",
      dotsContainerSelector: ".dots-containerTwo"
    });
  });
  







// /* <!-- -------------------------       Read More / Read Less      -------------  --> */

const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log("hello");
    
    const text = btn.previousElementSibling;
    const isExpanded = text.classList.contains('expanded');

    text.classList.toggle('collapsed');
    text.classList.toggle('expanded');
    btn.textContent = isExpanded ? 'مشاهده بیشتر' : 'مشاهده کمتر';
  });
});




// get estatik box data 


  document.querySelectorAll('.dore').forEach(box => {
    const id = box.getAttribute('data-id');
    const course = courseData[id];

    if (course) {
      box.querySelector('.adminInfo').textContent = course.teacher2;
      box.querySelector('.addEmtyaz').textContent = course.satisfaction;
      box.querySelector('.studentsBuyCurss').textContent = course.studentAll;
      box.querySelector('.price').textContent = course.price
    }
  });
  document.querySelectorAll('.slide-box').forEach(box => {
    const id = box.getAttribute('data-id');
    const course = courseData[id];
    // console.log(box.querySelector('.Price').course.price);

    if (course) {
      box.querySelector('.adminInfo').textContent = course.teacher2;
      box.querySelector('.addEmtyazScroolbar').textContent = course.satisfaction;
      box.querySelector('.studentsBuyCurss').textContent = course.studentAll;
      box.querySelector('.price').textContent = course.price

    }
  });

  document.querySelectorAll('.free-course').forEach(box => {
    const id = box.getAttribute('data-id');
    const course = courseData[id];

    if (course) {
      box.querySelector('.adminInfo').textContent = course.teacher2;
      box.querySelector('.addEmtyazScroolbar').textContent = course.satisfaction;
      box.querySelector('.studentsBuyCurss').textContent = course.studentAll;
      box.querySelector('.price').textContent = course.price
      box.querySelector('.free-Coures--Price').textContent = course.pricOFF
    }
    
  });


 




  //  تغییر اعداد فارسی و رشته به انگلیسی برای محاسبه


  function persianToEnglish(str) {
    return str.replace(/[۰-۹]/g, (d) =>
      String.fromCharCode(d.charCodeAt(0) - 1728)
    );
  }


  //////// all course number of header


  const total = Object.keys(courseData).length;
  const span = document.getElementById('curse-number-all');

  let count = 0;
  const interval = setInterval(() => {
    span.textContent = count;
    span.textContent = count.toLocaleString("fa-IR"); // اعداد فارسی
    count++;
    if(count > total) {
      clearInterval(interval);
    
    }
  }, 100)


  //////// all student number of header

  let totalStudents = 0;

  for (let key in courseData) {
    const studentStr = courseData[key].studentAll;
    const studentCount = Number(persianToEnglish(studentStr));
    
    totalStudents += studentCount;
  }
  function animateCount(target, elementId, duration = 2000) {
    const element = document.getElementById(elementId);
    let start = 0;
    const increment = Math.ceil(target / (duration / 30));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      element.textContent = start.toLocaleString("fa-IR"); // اعداد فارسی
    }, 30);
  }

  
  

  //////// all learn time number of header

  let totalHours = 0;

for (let key in courseData) {
  const timeStr = courseData[key].duration; // "۲۳ ساعت"
  const match = timeStr.match(/[\u06F0-\u06F9]+/); // گرفتن ارقام فارسی

  if (match) {
    const numberOnly = persianToEnglish(match[0]); // تبدیل به انگلیسی
    totalHours += Number(numberOnly);
  }
}

function animateCount(target, elementId, duration = 2000) {
  const element = document.getElementById(elementId);
  let start = 0;
  const increment = Math.ceil(target / (duration / 30));
  const interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(interval);
    }
    element.textContent = start.toLocaleString("fa-IR");
  }, 30);
}

window.onload = function () {
  animateCount(totalHours, "total-time");
  animateCount(totalStudents, "student-count");

};

// ffffffffff
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollButton");
  const target = document.getElementById("targetSection");

  button.addEventListener("click", function () {
    target.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollArticleButton");
  const target = document.getElementById("targetArticleSection");

  button.addEventListener("click", function () {
    target.scrollIntoView({ behavior: "smooth" });
  });
});



