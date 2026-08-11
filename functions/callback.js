function msg()
{
    console.log("example for callback function");
}
function displaymsg(callback)
{
    callback();
}
displaymsg(msg);