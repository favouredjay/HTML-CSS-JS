let str = ["1,2,3,7,8,9", "2,4,5,6,7,9"]
var common = "";
var str1 = str[0].split(",")
var str2 = str[1].split(",")

for(var i = 0; i < str1.length; i++){
    for(var j = 0; j < str2.length;j++){
        if(str1[i]==str2[j]){
            common = str1[i] + " "
        }
    }
    document.write(common)
}
