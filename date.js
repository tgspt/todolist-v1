exports.getDate = function(){
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("pt-PT", options)
    
};
exports.getDay=function(){
    const today = new Date();
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString("pt-PT", options)
   
}
