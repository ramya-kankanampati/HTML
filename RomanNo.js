var yes = function(n){
    var a = [1 ,4, 5, 9, 10, 40, 50, 90,100]
    var b =["I","IV","V","IX","X","XL","L","XC","C"]
   var rom = ``;
for(var i=a.length-1; i>=0; i--)
{
   while(a[i]<= n)
    {
        rom += b[i];
        n =n - a[i]; 
    }
       
}
return rom;
}
console.log(yes(55));

  //------//


var romanMatrix = [
    
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  function convertToRoman(num) {
    if (num === 0) {
      return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
      if (num >= romanMatrix[i][0]) {
        return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
      }
    }
}
