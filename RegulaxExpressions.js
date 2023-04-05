//Задание 1
const checkString = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString(/abc\w*/,"abc")) 



//Задание 1.2
const checkString2 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString2(/[\D*=';]*\d*[\D*=';]*/,"var g = 123;"))



//Задание 2
const checkString3 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString3(/[\w*?=+]{3}\./,"abc1"))

//Задание 3
const checkString4 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString4(/[cmf]an$/,"fan"))

//Задание 4
const checkString5 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString5(/[^b]og/,"dog"))

//Задание 5
const checkString6 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString6(/^[A-Z]\D*/,"Cpc"))


//Задание 6
const checkString7 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString7(/waz{2,5}up/,"wazzzup"))


//Задание 7
const checkString8 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString8(/a\w+/,"aacc"))


//Задание 8
const checkString9 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString9(/\d\d? files? found?\?/,"24 files found?"))


//Задание 9
const checkString10 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString10(/\s+abc/,"       abc"))



//Задание 10
const checkString11 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString11(/^([\D]+: successful)$/,"Mission: successful"))




//Задание 11
const checkString12 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString12(/^(\w+).pdf$/,"file_07241999.pdf"))



//Задание 12
const checkString13 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString13(/^(\w{3} (\d{4}))$/,"Aug 2011"))


//Задание 13
const checkString14 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;
}else{
    return false;
}
}
console.log(checkString14(/^(\d+)x(\d+)$/,"1024x768"))




//Задание 14
const checkString15 = function(pattern,myText){
    var itemsList = pattern.exec(myText)
    console.log(itemsList)
if(itemsList!==null){
    return true;  
}else{
    return false;
}
}
console.log(checkString15(/(I love (cats|dogs))/,"I love dogs"))