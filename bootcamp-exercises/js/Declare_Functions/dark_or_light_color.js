const colorChoise = (color)=>{
    switch(color){
    case 'yellow':
        return 'light color';
    case 'pink':
        return 'light color';  
    case 'orange':
        return 'light color';
    case 'purple':
        return 'dark color';
    case 'blue':
        return 'dark color';
    case 'brown':
        return 'dark color';
    default: return "Unknown color"        
}
} 

console.log(colorChoise('brown'))