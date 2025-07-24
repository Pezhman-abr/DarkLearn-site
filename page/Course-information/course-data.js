






const $ = document;
  const queryParams = new URLSearchParams(window.location.search);
  const selectedCourseId = queryParams.get("course");
  const selectedCourseData = courseData[selectedCourseId];
  const infoBox = $.getElementById("course-info-box");
  const infoTit = $.getElementById("Info-Title");
  const banner = $.getElementById("banner");
  const BreadcrumbDaste = $.getElementById('Breadcrumb-daste');
  const BreadcrumbName = $.getElementById('Breadcrumb-Name');
  const courseName = $.getElementById('course-name')
  const priceOff = $.querySelector('.price-off')
  const Price = $.querySelector('.cours-price')
  const CourseStatus = $.getElementById('Course-Status')
  const CourseDuration = $.getElementById('Course-duration')
  const apdateData = $.getElementById('apdate-Data')
  const howSupport = $.getElementById('how-support')
  const coursePrerequisite = $.getElementById('course-prerequisite')
  const courseViweType = $.getElementById('course-viwe-type');
  const TeacherName = $.getElementById('teacherName');
  const AboutTeacher = $.getElementById('About-Teacher');
  const Student = $.getElementById('student');
  const satisfaction = $.getElementById('satisfaction');
  const Progress = $.getElementById('Progress');
  const progComplate = $.getElementById('progComplate');
  const decripImage = $.getElementById('description-image')
  const dec_paragraf1 = $.getElementById('paragraph1');
  const dec_paragraf2 = $.getElementById('paragraph2');
  const dec_title1 = $.getElementById('dec-title1');
  const dec_paragraf3 = $.getElementById('paragraph3');
  const dec_paragraf4 = $.getElementById('paragraph4');
  const dec_title = $.getElementById('dec-title');




  if (!selectedCourseData) {
    infoBox.innerHTML = "<p style='text-align:center;'>دوره مورد نظر یافت نشد.</p>";
  } else {
    infoBox.innerHTML = `
    <h1 class="info-title">${selectedCourseData.title}</h1>
    <p class="info-Description">${selectedCourseData.desc}</p>
  `;
    banner.style.backgroundImage = `url(${selectedCourseData.image})`;
    BreadcrumbDaste.innerHTML = courseData[selectedCourseId].daste ;
    BreadcrumbName.innerHTML = courseData[selectedCourseId].grup ;
    courseName.innerHTML = courseData[selectedCourseId].title ;
    priceOff.innerHTML = courseData[selectedCourseId].pricOFF ;
    Price.innerHTML = courseData[selectedCourseId].price ;
    CourseStatus.innerHTML = courseData[selectedCourseId].status ;
    CourseDuration.innerHTML = courseData[selectedCourseId].duration ;
    apdateData.innerHTML = courseData[selectedCourseId].apdateData ;
    howSupport.innerHTML = courseData[selectedCourseId].support ;
    coursePrerequisite.innerHTML = courseData[selectedCourseId].prerequisite ;
    courseViweType.innerHTML = courseData[selectedCourseId].ViewType ;
    TeacherName.innerHTML = courseData[selectedCourseId].teacher ;
    AboutTeacher.innerHTML = courseData[selectedCourseId].aboutTeacher ;
    Student.innerHTML = courseData[selectedCourseId].studentAll ;
    satisfaction.innerHTML = courseData[selectedCourseId].satisfaction ;
    Progress.innerHTML = courseData[selectedCourseId].Progress ;
    let x =  progComplate.value = courseData[selectedCourseId].progCompate;
    decripImage.style.backgroundImage = `url(${selectedCourseData.decImage})`;
    dec_title.innerHTML = courseData[selectedCourseId].dec_title;
    dec_paragraf1.innerHTML = courseData[selectedCourseId].paragraph1;
    dec_paragraf2.innerHTML = courseData[selectedCourseId].paragraph2;
    dec_title1.innerHTML = courseData[selectedCourseId].dec_title1;
    dec_paragraf3.innerHTML = courseData[selectedCourseId].paragraph3;
    dec_paragraf4.innerHTML = courseData[selectedCourseId].paragraph4;

    
  }

  
    // show more / show lass
  function toggleDesc(btn) {
  const descContainer = btn.previousElementSibling;
  descContainer.classList.toggle("expanded");
console.log("hello");
  btn.textContent = descContainer.classList.contains("expanded") ? "کمتر" : "بیشتر";
}












    