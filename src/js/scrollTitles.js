export default function scrollTitles(){
    var ta = gsap.timeline({scrollTrigger:{trigger: '.about', start:'top center'}});
    ta.to('.about__mask',{duration: .5, scaleX: 1})
    ta.to('.about__title',{duration: .1, visibility: 'visible'})
    ta.to('.about__mask',{duration: .5, scaleX:0});
    ta.to('.section__about',{duration: .6,opacity:.6, translateY:0},'<.1')

    var ts = gsap.timeline({scrollTrigger:{trigger: '.skills', start:'top center'}});
    ts.to('.skills__mask',{duration: .5, scaleX: 1})
    ts.to('.skills__title',{duration: .1, visibility: 'visible'})
    ts.to('.skills__mask',{duration: .5, scaleX:0});
    ts.to('.section__skills',{duration: .6,opacity:.6, translateY:0},'<.1')

    var tst = gsap.timeline({scrollTrigger:{trigger: '.studies', start:'top center'}});
    tst.to('.studies__mask',{duration: .5, scaleX: 1})
    tst.to('.studies__title',{duration: .1, visibility: 'visible'})
    tst.to('.studies__mask',{duration: .5, scaleX:0});
    tst.to('.section__studies',{duration: .6,opacity:.6, translateY:0},'<.1')

    var tp = gsap.timeline({scrollTrigger:{trigger: '.projects', start:'top center'}});
    tp.to('.projects__mask',{duration: .5, scaleX: 1})
    tp.to('.projects__title',{duration: .1, visibility: 'visible'})
    tp.to('.projects__mask',{duration: .5, scaleX:0});
    tp.to('.section__projects',{duration: .6,opacity:.6, translateY:0},'<.1')

    var tc = gsap.timeline({scrollTrigger:{trigger: '.contact', start:'top center'}});
    tc.to('.contact__mask',{duration: .5, scaleX: 1})
    tc.to('.contact__title',{duration: .1, visibility: 'visible'})
    tc.to('.contact__mask',{duration: .5, scaleX:0});
    tc.to('.section__contact',{duration: .6,opacity:.6, translateY:0},'<.1')
}