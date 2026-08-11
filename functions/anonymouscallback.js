function add(callback)
 { 
    console.log(callback(10, 20)); 
} 
add(function(a, b)
{ 
    return a + b; 
});