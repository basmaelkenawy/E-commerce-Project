document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.list-ul li');
  const contents = document.querySelectorAll('.content');

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const target = this.dataset.target;
      contents.forEach(function(content) {
        if (content.id === target) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.list-ul li');
  const contents = document.querySelectorAll('.content2');

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const target = this.dataset.target;
      contents.forEach(function(content) {
        if (content.id === target) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
});


function showMoreContent(contentId) {
    var contentt = document.getElementById(contentId);
    var mainDiv=contentt.parentElement;
    if (contentt.style.display === "none") {
        contentt.style.display = "block";
        mainDiv.style.height = parent.scrollHeight + 'px'; // Expand the parent div to fit the content
    } else {
      contentt.style.display = 'none';
    }
}
function showMoreContent1(contentId) {
    var contentt = document.getElementById(contentId);
    var mainDiv=contentt.parentElement;
    if (contentt.style.display === "none") {
        contentt.style.display = "block";
        mainDiv.style.height = parent.scrollHeight + 'px'; // Expand the parent div to fit the content
    } else {
      contentt.style.display = 'none';
    }
}
