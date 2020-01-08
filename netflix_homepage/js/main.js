const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Function for selecting a tab
function selectItem(e) {
  // Calling other functions
  removeBorder();
  removeShow();
  // Add border to current tab.
  this.classList.add("tab-border");
  // Grab content ID from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

// Function for removing all tab borders
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}
// Function for removing all show class
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Event listener for clicking tab
tabItems.forEach(item => item.addEventListener("click", selectItem));
