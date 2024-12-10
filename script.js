if (document.fragmentDirective) {
    // Function to lock scroll position
    const lockScrollPosition = () => {
        window.scrollTo(0, window.scrollY);  // Keeps the same scroll position
    };

    // Add scroll listener to maintain the scroll position
    window.addEventListener("scroll", lockScrollPosition, true);

    var isResizing = false;
    const overflowContainer = document.querySelector(".main-container");

    // Handle window resize events
    window.addEventListener("resize", () => {
        isResizing = true;

        // Prevent overflow after resize
        if (overflowContainer) {
            overflowContainer.style.overflow = "hidden";
        }

        // Reset scroll position after resize
        lockScrollPosition();
    });

    // Function to detect if the device is emulated
    const isDeviceEmulated = () => {
        const userAgent = navigator.userAgent.toLowerCase();

        // Check for mobile emulation in Chrome (excluding Edge)
        if (userAgent.includes("chrome") && !userAgent.includes("edg") &&
            (userAgent.includes("mobile") || userAgent.includes("android") || userAgent.includes("iphone"))) {
            if (overflowContainer) {
                overflowContainer.style.overflow = "clip";
            }
        } else {
            overflowContainer.style.overflow = "clip";
        }
    };

    // Initial device emulation check
    isDeviceEmulated();

    // Lock scroll position on initial load
    lockScrollPosition();
}