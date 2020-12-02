/**
 * Adding preview of a given URL with portals
 * Activates by user clicking/taping the element
 * @param {String} url 
 */
const addPreviewPortal = url => {
    // Remove any exisiting portals
    const existingPortal = document.querySelector('portal');
    if (existingPortal) {
        existingPortal.remove();
    }
    const portal = document.createElement('portal');
    // Let's navigate into the WICG Portals spec page
    portal.src = url;`rq`
    // Add a class that defines the transition. Consider using
    // `prefers-reduced-motion` media query to control the animation.
    // https://developers.google.com/web/updates/2019/03/prefers-reduced-motion
    portal.classList.add('portal-transition');
    portal.addEventListener('click', evt => {
        // Animate the portal once user interacts
        portal.classList.add('portal-reveal');
    });
    portal.addEventListener('transitionend', evt => {
        if (evt.propertyName == 'transform') {
            // Activate the portal once the transition has completed
            portal.activate();
        }
    });
    document.body.append(style, portal);
}

// If portal is available init the app
if ('HTMLPortalElement' in window) {
    // If the browser supports Portals, hide message  
    // document.querySelector('#message').style.display = 'none';
    // document.querySelector('button').addEventListener('click', _ => {
    //     const url = document.querySelector('#preview-url').value;
    //     addPreviewPortal(url);
    // });
}