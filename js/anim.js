$(function () {
    gsap.registerPlugin(ScrollTrigger);
    const scrollAni = document.querySelectorAll('.scrollani');
    const scrollScrub = document.querySelectorAll('.scroll-scrub');
    const scrollAni3 = document.querySelectorAll('.scrollani3');
    const scrollRight = document.querySelectorAll('.scrollgt');
    const scrollDelay = document.querySelectorAll('.scroll-dlay');
    const scrollDelay2 = document.querySelectorAll('.scroll-dlay2');
    const scrollDelay3 = document.querySelectorAll('.scroll-dlay3');

    scrollAni.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1,
            stagger: 0.2,
            // delay: index * 0.03,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    scrollScrub.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power3.out',
            duration: 1,
            delay: index * 0.03,
            scrollTrigger: {
                trigger: content,
                start: 'top 90%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play play none none',
                scrub: true,
            },
        });
    });

    scrollAni3.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: -100,
            ease: 'power3.out',
            duration: 1,
            scrollTrigger: {
                trigger: content,
                start: 'top 90%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: true,
            },
        });
    });

    scrollDelay.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1,
            stagger: 0.2,
            delay: index * 0.5,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    scrollDelay2.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    scrollDelay3.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 150,
            ease: 'power2.out',
            duration: 1,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    scrollRight.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: 300,
            ease: 'power2.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: content,
                start: 'top 110%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });
});
