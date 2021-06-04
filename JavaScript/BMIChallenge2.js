
//Create your function below this line.

function bmiCalculator (weight, height) {
    BMI = Math.round(weight / Math.pow(height, 2));
    var str = "Your BMI is " + BMI + ", ";
    
    if (BMI < 18.5) {
        str += "so you are underweight.";
    }
    else if (BMI < 24.9) {
        str += "so have a normal weight.";
    }
    else if (BMI > 24.9) {
        str += "so you are overweight.";
    }
    
    return str;
}

/******* HINT *******/

//If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);  //and I should get a message that interprets my BMI.
// The message should read: "Your BMI is <bmi>, so you are underweight." if bmi <18.5
//or "Your BMI is <bmi>, so you have a normal weight." if bmi 18.5 - 24.9
//or "Your BMI is <bmi>, so you are overweight." if bmi >24.9

















































//DO NOT CHANGE THE CODE BELOW THIS LINE
//INTENDED FOR TESTING YOUR SOLUTION


// specs code
describe('bmiCalculator()', function() {
    it('should return underweight for 6, 2', function() {
        expect(bmiCalculator(60, 2)).toEqual("Your BMI is 15, so you are underweight.");
    });
    
    it('should return normal weight for 80, 2', function() {
        expect(bmiCalculator(80, 2)).toEqual("Your BMI is 20, so have a normal weight.");
    });
    
     it('should return underweight for 100, 2', function() {
        expect(bmiCalculator(100, 2)).toEqual("Your BMI is 25, so you are overweight.");
    });
});

// load jasmine htmlReporter
(function() {
  var env = jasmine.getEnv();
  env.addReporter(new jasmine.HtmlReporter());
  env.execute();
}());
