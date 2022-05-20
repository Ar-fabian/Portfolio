export default function skills(){

    var sc = gsap.timeline({
        scrollTrigger:{
        trigger:'#skills',
        start:'10% center',
        end:'115% top',
        toggleActions:"play pause play pause"
    },repeat:Infinity, defaults:{duration:15, ease:'none'}})
    
    sc.to('.cube__content',{
        rotateX:360,
        ease: 'none',
    })
};