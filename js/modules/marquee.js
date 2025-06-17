import InfiniteMarquee from "https://cdn.jsdelivr.net/npm/vanilla-infinite-marquee@1.0.13/infinite-marquee.bundle.js"

export function marqueeInit() {
    new InfiniteMarquee({
        element: '.marquee-container',
        speed: 25000,
        direction: 'left',
        spaceBetween: '23px',
        duplicateCount: 2,
        mobileSettings: {
            direction: 'top',
            speed: 20000
        },
        on: {
            beforeInit: () => {
                console.log('Not Yet Initialized');
            },

            afterInit: () => {
                console.log('Initialized');
            }
        }
    });
}