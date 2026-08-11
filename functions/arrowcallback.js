function add(callback)
{ 
    console.log(callback(10,50)); 
} 
add((a, b) => a + b); 