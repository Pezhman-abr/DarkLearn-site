
const searchInput = document.getElementById("searchInput");
const resultsBox = document.getElementById("results");

function openCourse(courseId) {
// می‌ریم به صفحه اطلاعات دوره + ارسال نام دوره در URL
window.location.href = `course.html?course=${courseId}`;
}

const coursesArray = Object.entries(courseData); // حالا هم key داریم هم value

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  resultsBox.innerHTML = "";

  if (query === "") {
    resultsBox.style.display = "none";
    return;
  }

  const filtered = coursesArray.filter(([key, course]) =>
    course.title.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsBox.innerHTML = "<p class='no-result'>نتیجه‌ای یافت نشد</p>";
  } else {
    filtered.forEach(([key, course]) => {
      const item = document.createElement("div");
      item.className = "result-item";
      item.textContent = course.title;
      item.addEventListener("click", () => {
        console.log('Navigating to course with key:', key);
        window.location.href = `course.html?course=${key}`;
      });
      resultsBox.appendChild(item);
    });
  }

  resultsBox.style.display = "block";
});
