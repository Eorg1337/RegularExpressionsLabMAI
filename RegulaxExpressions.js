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
console.log(checkString(/abc/,"abccc")) 



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
console.log(checkString2(/[\D*=';]*\d*[\D*=';]*/,"define '123'"))



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
console.log(checkString3(/\w*\./,"abc1"))

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
console.log(checkString4(/[cmf]an$/,"can"))

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
console.log(checkString5(/[^b]og/,"hog"))

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
console.log(checkString6(/^[A-Z]\D*/,"Ana"))


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
console.log(checkString7(/waz{2,5}up/,"wazzzzup"))


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
console.log(checkString8(/a\w+/,"abbbbcccc"))


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
console.log(checkString9(/\d\d? files? found?\?/,"1 file found?"))


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
console.log(checkString10(/\s+abc/,"  abc"))



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
console.log(checkString11(/^([\D]+: successful)$/,"Last Mission: successful"))




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
console.log(checkString12(/^(\w+).pdf$/,"file_record_transcript.pdf"))



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
console.log(checkString13(/^(\w{3} (\d{4}))$/,"Jan 1987"))


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
console.log(checkString14(/^(\d+)x(\d+)$/,"1280x720"))




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
console.log(checkString15(/(I love (cats|dogs))/,"I love cats"))