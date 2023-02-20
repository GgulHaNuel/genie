$(function () {
    gsap.registerPlugin(ScrollTrigger);
    const scrollani = gsap.utils.toArray('.scrollani');
    scrollani.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1.5,
            // stagger: 0.2,
            // delay: index * 0.1,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 100%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
                immediateRender: false,
            },
        });
    });
});
