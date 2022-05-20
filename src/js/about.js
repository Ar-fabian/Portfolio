function aboutAnimations(){    
    var tl = gsap.timeline({scrollTrigger:{
        trigger: '#about',
        start:'20% center',
        end:'120% top',
        // markers: true,
        toggleActions:"play pause play pause",
    },repeat:Infinity, repeatDelay:.6});

    tl.to('.about__containerSvg',{
        duration: 1,
        boxShadow:'inset 0rem 1rem 3rem #000',
    })
    tl.to('.about__contentSvg',{
        duration: 1.5,
        translateX: '0',
        ease: "slow(0.7,0.7,false)",
    })
    tl.to('.about__containerSvg',{
        duration: 1,
        boxShadow:'inset 0rem 0rem 0rem #000',
    })
    tl.to('.about__responsive',{
        duration: 1.2,
        scale: 1.2, 
    },'<.1')
    tl.to('.about__containerSvg',{
        delay: .5,
        duration: 1,
        boxShadow:'inset 0rem 1rem 3rem #000',
    })
    tl.to('.about__responsive',{
        duration: 1,
        scale: 1, 
    },'<.1')
    tl.to('.about__contentSvg',{
        duration: 1.5,
        translateX: '-135%',
        ease: "slow(0.7,0.7,false)",
    })
    tl.to('.about__containerSvg',{
        duration: 1,
        boxShadow:'inset 0rem 0rem 0rem #000',
    })
    tl.to('.about__fast',{
        duration: 1.2,
        scale: 1.2, 
    },'<.1')
    tl.to('.about__containerSvg',{
        delay: .5,
        duration: 1,
        boxShadow:'inset 0rem 1rem 3rem #000',
    })
    tl.to('.about__fast',{
        duration: 1,
        scale: 1, 
    },'<.1')
    tl.to('.about__contentSvg',{
        duration: 1.5,
        translateX: '-270%',
        ease: "slow(0.7,0.7,false)",
    })
    tl.to('.about__containerSvg',{
        duration: 1,
        boxShadow:'inset 0rem 0rem 0rem #000',
    })
    tl.to('.about__dinamyc',{
        duration: 1.2,
        scale: 1.2, 
    },'<.1')
    tl.to('.about__containerSvg',{
        delay: .5,
        duration: 1,
        boxShadow:'inset 0rem 1rem 3rem #000',
    })
    tl.to('.about__dinamyc',{
        duration: 1,
        scale: 1, 
    },'<.1')
    tl.to('.about__contentSvg',{
        duration: 1.5,
        translateX: '-405%',
        ease: "slow(0.7,0.7,false)",
    })
    tl.to('.about__containerSvg',{
        duration: 1,
        boxShadow:'inset 0rem 0rem 0rem #000',
    })
}
export default function about(){
    aboutAnimations();
}