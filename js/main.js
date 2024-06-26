// sidebar
document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName("siderbar-item");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var isActive = this.classList.contains("active");

            // Close all panels
            var allPanels = document.getElementsByClassName("sidebar-dropdown");
            for (var j = 0; j < allPanels.length; j++) {
                allPanels[j].style.maxHeight = null;
                allPanels[j].previousElementSibling.classList.remove("active");
            }

            // If the clicked panel was not active, open it
            if (!isActive) {
                this.classList.add("active");
                var panel = this.nextElementSibling;
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

// header height
function setDynamicHeight() {
    const headerHeight = document.getElementById('header');
    const height = headerHeight.offsetHeight;
    const newHeight = height + 50;
    // Set the CSS variable for dynamic height
    document.documentElement.style.setProperty('--dynamic-height', newHeight + 'px');
}

setDynamicHeight();


// page header height
function pageHeaderHeight(){
    const pgHeaderHeight = document.getElementById("pageHeader")
    const height = pgHeaderHeight.offsetHeight;
    // Set the CSS variable for pg header height
    document.documentElement.style.setProperty('--pgHeaderHeight', height + 'px')
}
pageHeaderHeight()


// dropdown
var dropdownButtons = document.querySelectorAll('.dropbtn');
    dropdownButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the event from bubbling up to the document
            
            // Close all open dropdowns
            closeAllDropdowns();
            
            // Toggle the visibility of the current dropdown menu
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            closeAllDropdowns();
        }
    };
    
    function closeAllDropdowns() {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.display = 'none';
        });
    }

    
// sidebar toggle
 let toggleBtn = document.querySelectorAll(".sidebartoggleBtn")

 toggleBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        document.getElementById("sidebar").classList.toggle('active')
    })
 })


//  userdropdown

document.addEventListener('DOMContentLoaded', (event) => {
    const profileButton = document.getElementById('profileButton');
    const userDropdown = document.getElementById('user-dropdown');

    profileButton.onclick = function(event) {
        event.stopPropagation();
        userDropdown.classList.toggle('show');
    };

    window.onclick = function(event) {
        if (!event.target.matches('.profile-button') && !event.target.closest('.profile-button')) {
            var dropdowns = document.getElementsByClassName("user_dropdown");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});