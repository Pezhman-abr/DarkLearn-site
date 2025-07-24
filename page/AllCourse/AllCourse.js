const courseContainer = document.getElementById("course-list");
// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get('category');


 





// تابع برای نمایش دوره‌ها
// گرفتن پارامتر category از URL
const urlParams = new URLSearchParams(window.location.search);
const categoryFromUrl = urlParams.get('category') || 'all'; // اگر پارامتر نباشه، همه رو نمایش می‌ده

// نمایش دوره‌ها بر اساس دسته‌بندی
function showCoursesByCategory(category) {
  courseContainer.innerHTML = ""; // پاک‌کردن دوره‌های قبلی

  for (let key in courseData) {
    const course = courseData[key];
    if (category === "all" || course.category === category) {
      const courseCard = document.createElement("div");
      courseCard.classList.add("dore");
      courseCard.style.marginTop = '20px';
      courseCard.innerHTML = `
        <img class="cursphoto" src="${course.image}" alt="${course.title}" />
        <div class="boxCursName">
        <a href="/page/course.html?course=${key}" class="cours_name">${course.title}</a>
        <p class="abut_curs">${course.title2}</p>
        </div>
         <div class="adminName">
            <h4 class="adminInfo">${course.teacher2}</h4><i class="fa-regular fa-user admin-icon phoneModal"></i>
            <div class="emtyaz">
                <h5 class="addEmtyaz">${course.satisfaction}</h5>
                <i class="fa-solid fa-star phoneStars"></i>
            </div>
        </div>
        <div class="boxCursPrise">
            <i class="fa-solid fa-user-group phoneModalgrup"></i>
            <span class="studentsBuyCurss">${course.studentAll}</span>
            <span class="price">${course.price}</span>
        </div>
      `;
      courseContainer.appendChild(courseCard);
    }
  }
}

// نمایش دوره‌ها بر اساس پارامتر URL یا پیش‌فرض (همه دوره‌ها)
showCoursesByCategory(categoryFromUrl);
const filterButtons = document.querySelectorAll("#category-filter input");

// اضافه کردن رویداد به دکمه‌ها برای فیلتر کردن

filterButtons.forEach(input => {
  input.addEventListener("click", (event) => {
    const selectedCategory = input.getAttribute("data-category");

    // برو به URL جدید با دسته‌بندی انتخابی بدون رفرش صفحه
    history.pushState(null, '', `?category=${selectedCategory}`); // تغییر URL بدون رفرش
    showCoursesByCategory(selectedCategory); // به‌روزرسانی دوره‌ها
  });
});

// زمانی که صفحه رفرش می‌شود، پارامتر دسته‌بندی باید اعمال شود
window.addEventListener('load', () => {
  // اضافه کردن تیک به دکمه‌ی مربوط به دسته‌بندی انتخاب‌شده
  filterButtons.forEach(button => {
    if (button.getAttribute('data-category') === categoryFromUrl) {
      button.classList.add('active'); // فرض بر این است که یک کلاس "active" برای نمایش تیک یا انتخاب‌شدگی تعریف کرده‌ای
    } else {
      button.classList.remove('active');
    }
  });
});


// /* <!-- -------------------------       Read More / Read Less      -------------  --> */

const buttons = document.querySelectorAll('.load-more');

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


