export default function splashHome(){
    var sh = gsap.timeline();
    sh.to('.home__screenBlack',{delay:.5, duration: .6, y:100});
    sh.to('.home__screenBlack',{duration: .6, y:-100});
    sh.to('.home__screenBlack',{duration: .6, scale:33});
    sh.to('.section',{display:'block'});
    sh.to('.home__screenWhite',{duration: 1.5, opacity:0});
    sh.to('.home__screenWhite',{visibility:'hidden'});
    
}