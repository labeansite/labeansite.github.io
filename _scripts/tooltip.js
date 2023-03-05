/* 
  shows a popup of text on hover/focus of any element with the data-tooltip
  attribute.
*/

{
  const onLoad = () => {
    
    // make sure Tippy library available and the user
    if (typeof tippy === "undefined") return;

    tippy('.email-button', {
      content: 'Click to copy', 
      trigger: 'mouseenter click',
      interactive: true,
      onShow(instance) {
        // Reset the tooltip content on each show
        instance.setContent(instance.reference.dataset.clipboardText + ' (Click to copy)');
      },
      onTrigger(instance, event) {
        if (event.type === 'click') {
          // Copy the text content to the clipboard
          navigator.clipboard.writeText(instance.reference.dataset.clipboardText)
            .then(() => {
              // Set the tooltip content to the copy feedback message
              instance.setContent(instance.reference.dataset.clipboardText + ' (Copied!)');
            })
            .catch(() => {
              instance.setContent(instance.reference.dataset.clipboardText + ' (Copy failed D:)');
            });
        }
      }
    });

    // Check if the user is on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if(isMobile) return;

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
