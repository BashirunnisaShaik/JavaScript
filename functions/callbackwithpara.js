function msg(name)
{
    return name;
}
function displaymsg(callback)
{
    console.log(callback("example for callback function"));
}
displaymsg(msg);