class Course {
  constructor(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
  }
}

class UI {
  addCourseToList(course) {
    const list = document.getElementById("course-list");

    let html = (
      <tr>
        <td>
          <img sec="img/${course.image}" />
        </td>
        <td> ${course.title}</td>
        <td>${course.instructor}</td>
        <td>
          <a href="#" class="btn btn-danger btn-sm delete">
            Delete
          </a>
        </td>
      </tr>
    );
  }
  clearControls() {
    const title = (document.getElementById("title").value = "");
    const instructor = (document.getElementById("instructor").value = "");
    const image = (document.getElementById("image").value = "");
  }

  deleteCourse(element) {
    if (element.classlist.contains("delete")) {
      element.parentElement.parentElement.remove();
    }
  }
  showAlert(message, className) {
    let alert = <div class="alert alert-${className}">${message}</div>;

    const row = document.querySelector("row");
    // beforeBegin, afterBegin ibeforeEnd , afterEnd
    row.insertAdjacentHTML("beforeBegin", alert);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

document.getElementById("new-course").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const instructor = document.getElementById("insructor").value;
  const image = document.getElementById("image").value;

  //create course object
  const course = new Course(title, instructor, image);

  //create UI
  const ui = new UI();
  if (title === "" || instructor === "" || image === "") {
    ui.showAlert("please complete the from", "warning");
  } else {
    //add course to list
    ui.addCourseToList(course);

    //clear controls
    ui.clearControls();

    ui.showAlert("the course has been added", "success");
  }
  e.parentElement();
});

document.getElementById("course-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteCourse(e.target);
  ui.showAlert("the couerse has been deleted", "danger");
});
