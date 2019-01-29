$(document).foundation()

//toggles project list on sidebar
function showProjectList() {
    $('#projects').toggle();
}


$('.projects-title').on('click', showProjectList);



