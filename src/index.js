module.exports = function toReadable (number) {
  let result = "";

  function oneDidgit(num){
    switch (num) {
      case 0:
        return '';
        break;
      case 1:
        return 'one'
      break;
      case 2:
        return 'two'
      break;
      case 3:
        return 'three'
      break;
      case 4:
        return 'four'
      break;
      case 5:
        return 'five'
      break;
      case 6:
        return 'six'
      break;
      case 7:
        return 'seven'
      break;
      case 8:
        return 'eight'
      break;
      case 9:
        return 'nine'
      break;
    }
  }
  function someDidgit(num) {
    if(num < 10){
      return oneDidgit(num);
    }
    else if(num >= 10 && num < 20){
      switch (num) {
        case 10:
          return 'ten'
          break;
        case 11:
          return 'eleven'
          break;
        case 12:
          return 'twelve'
          break;
        case 13:
          return 'thirteen'
          break;
        case 14:
          return 'fourteen'
          break;
        case 15:
          return 'fifteen'
          break;
        case 16:
          return 'sixteen'
          break;
        case 17:
          return 'seventeen'
          break;
        case 18:
          return 'eighteen'
          break;
        case 19:
          return 'nineteen'
          break;
      }
    }else if(num >= 20){
      if(num < 30){
        if(num%10 != 0)
        return 'twenty '+ oneDidgit(num%10);
        else
        return 'twenty'
      }else if (num < 40) {
        if(num%10 != 0)
        return 'thirty '+ oneDidgit(num%10);
        else
        return 'thirty';
      }else if (num < 50) {
        if(num%10 != 0)
        return 'forty '+ oneDidgit(num%10);
        else
        return 'forty';
      }else if (num < 60) {
        if(num%10 != 0)
        return 'fifty '+ oneDidgit(num%10);
        else
        return 'fifty';
      }else if (num < 70) {
        if(num%10 != 0)
        return 'sixty '+ oneDidgit(num%10);
        else
        return 'sixty';
      }else if (num < 80) {
        if(num%10 != 0)
        return 'seventy '+ oneDidgit(num%10);
        else
        return 'seventy';
      }else if (num < 90) {
        if(num%10 != 0)
        return 'eighty '+ oneDidgit(num%10);
        else
        return 'eighty';
      }else if (num < 100) {
        if(num%10 != 0)
        return 'ninety '+ oneDidgit(num%10);
        else
        return 'ninety';
      }
    }
  }
    hundreds = Math.floor(number/100);
    if (number == 0) {
      result = 'zero'
    }else if(hundreds > 0 && number < 1000){
      result += oneDidgit(hundreds) + " hundred"
      if(someDidgit(number-hundreds*100) != 0){
        result += " " + someDidgit(number-hundreds*100)
      }
    }else{
      result += someDidgit(number)
    }
    return result;
}
