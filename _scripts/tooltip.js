/* 
  shows a popup of text on hover/focus of any element with the data-tooltip
  attribute.
*/

function clipboardTippy(e) { // define here because it`s used in anchors.js
  tippy(e, {
    content: (element) => element.dataset.clipboardText.trim(),
    trigger: 'mouseenter click',
    delay: [100, 0],
    offset: [0, 20],
    allowHTML: true,
    interactive: true,
    appendTo: () => document.body,
    onShow(instance) {
      // Reset the tooltip content on each show
      instance.setContent(instance.reference.dataset.clipboardText.trim() + ' (Click to copy)');
    },
    onTrigger(instance, event) {
      if (event.type === 'click') {
        // Copy the text content to the clipboard
        navigator.clipboard.writeText(instance.reference.dataset.clipboardText.trim())
          .then(() => {
            // Set the tooltip content to the copy feedback message
            instance.setContent(instance.reference.dataset.clipboardText.trim() + ' (Copied!)');
            setTimeout(() => {
              instance.hide();
            }, 1000);
          })
          .catch(() => {
            instance.setContent(instance.reference.dataset.clipboardText.trim() + ' (Copy failed D:)');
          });
      }
    }
  });
}

{
  const onLoad = () => {
    
    // make sure Tippy library available and the user
    if (typeof tippy === "undefined") return;

    const elementsToClipboard = [...document.querySelectorAll("[data-clipboard-text]")].filter(
      (element) => element.dataset.clipboardText.trim() && !element._tippy
    );

    clipboardTippy(elementsToClipboard)

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
      delay: [100, 0],
      offset: [0, 20],
      allowHTML: true,
      interactive: true,
      appendTo: () => document.body,
      // onHide: () => false, // debug
    });

    document.querySelectorAll("nav [data-tooltip]").forEach((element) => {
      element._tippy.setProps({ interactive: false })
    });
  };

  // after page loads
  window.addEventListener("load", onLoad);
  // after tags load
  window.addEventListener("tagsfetched", onLoad);
}
