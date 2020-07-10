//calculation as seen in http://www.gvct.co.uk/2011/09/how-is-the-check-digit-of-a-container-calculated/
function calcIluCheckDigit(ilu_str) {
  //remove any whitespace
  ilu_str = ilu_str.replace(/\s/g, "");

  //check if length fits requirements
  if(ilu_str.length < 10 || ilu_str > 11 ) {
    return false;
  } else {
    //equivalent numerical values for each letter of the alphabet
    var alpha2num = {
      'A': 10, 'B': 12, 'C': 13, 'D': 14, 'E': 15, 'F': 16, 'G': 17, 'H': 18, 'I': 19, 'J': 20, 'K': 21, 'L': 23, 'M': 24,
      'N': 25, 'O': 26, 'P': 27, 'Q': 28, 'R': 29, 'S': 30, 'T': 31, 'U': 32, 'V': 34, 'W': 35, 'X': 36, 'Y': 37, 'Z': 38,
    };

    //split string into digits
    var digits = [...ilu_str];
    var sum = 0;

    //calc a value for each position in the string
    for(var i = 0; i < 10; i++) {
      if(i < 4){
        val = alpha2num[ digits[i] ] * Math.pow(2, i);
        //console.log(digits[i]+'=>'+alpha2num[ digits[i] ]+' * 2^'+i);
      } else{
        val = digits[i] * Math.pow(2, i);
        //console.log(digits[i]+' * 2^'+i);
      }
      //console.log(i+':'+val);
      sum += val;
    }
    //console.log('sum='+sum);

    var step_b = sum / 11;
    var step_c = Math.floor(step_b);
    var step_d = step_c * 11;
    //console.log('step_b='+step_b+' , step_c='+step_c+' , step_d='+step_d);

    var result = sum - step_d;
    //console.log('result='+result);
    //console.log('last digit='+digits[10]+', check digit should be='+result);
    return result;
  }
}
