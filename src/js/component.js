
export const saludar = (nombre)=>{
    const h2 = document.createElement('h2');
    h2.innerHTML=`${nombre}`;
    document.body.append(h2);
}