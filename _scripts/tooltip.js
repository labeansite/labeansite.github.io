/* 
  shows a popup of text on hover/focus of any element with the data-tooltip
  attribute.
*/

{
  const onLoad = () => {
    // Check if the user is on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // make sure Tippy library available and the user is not on a mobile device
    if (typeof tippy === "undefined" || isMobile) return;

    // get elements with non-empty tooltips
    const elements = [...document.querySelectorAll("[data-tooltip]")].filter(
      (element) => element.dataset.tooltip.trim() && !element._tippy
    );

    // add tooltip to elements
    tippy(elements, {
      content: (element) => element.dataset.tooltip.trim(),
      delay: [200, 0],
      offset: [0, 20],
      allowHTML: true,
      interactive: true,
      appendTo: () => document.body,
      // onHide: () => false, // debug
    });
  };

  // after page loads
  window.addEventListener("load", onLoad);
  // after tags load
  window.addEventListener("tagsfetched", onLoad);
}
