const solution = (angle) => {
    
    switch(angle) {
        case 90: return 2;
        case 180: return 4;
    }
    return angle < 90 ? 1 : 3
}