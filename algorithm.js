function isThereEnoughSpace(cap, on, wait) { 
    return cap >= on + wait ? 0 : wait - (cap - on); 
}






function isThereEnoughSpaceLong(cap, on, wait) {
    if(cap >= on + wait) {
        return 0; 
    }
    return (wait-(cap-on));
}

console.log(isThereEnoughSpaceLong(10, 5, 5));
console.log(isThereEnoughSpaceLong(100, 60, 50));

console.log(isThereEnoughSpace(10, 5, 5));
console.log(isThereEnoughSpace(100, 60, 50));