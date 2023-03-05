/*
  manages light/dark mode.
*/

{
  // save/load user's dark mode preference from local storage
  const loadDark = () => window.localStorage.getItem("dark-mode") === "true";
  const saveDark = (value) => window.localStorage.setItem("dark-mode", value);

  // immediately load saved mode before page renders
  document.documentElement.dataset.dark = loadDark();

  const onLoad = () => {
    // Get references to all checkboxes with class "dark-toggle"
    const checkboxes = document.querySelectorAll('.dark-toggle');

    // Add event listeners to each checkbox
    checkboxes.forEach(checkbox => {
      // update toggle button to match loaded mode
      checkbox.checked = document.documentElement.dataset.dark === "true";
      checkbox.addEventListener('change', () => {
          // Update the state of all checkboxes to match the first checkbox
          checkboxes.forEach(otherCheckbox => {
            otherCheckbox.checked = checkbox.checked;
        });
      });
    });

    const darkSideToggle = document.querySelector('.dark-side-toggle');

    if(window.location.pathname === '/') {
      function hideUpdate() {
        if (window.scrollY === 0) {
          darkSideToggle.classList.remove('dark-side-toggle-show');
        } else {
          darkSideToggle.classList.add('dark-side-toggle-show');
        }
      }
      
      hideUpdate()
  
      window.addEventListener('scroll', hideUpdate);
    }
    else {
      darkSideToggle.classList.add('dark-side-toggle-show');
    }

  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    saveDark(value);
  };
}
