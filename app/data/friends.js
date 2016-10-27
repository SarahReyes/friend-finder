

var totalDifference = 0;

// hard code some 'friends' to compare with the user
var friends = [
    {
        name: 'Pam',
        photo: 'images/pam-pic.jpg',
        scores: {
            qone: 5,
            qtwo: 4,
            qthree: 5,
            qfour: 5,
            qfive: 5,
            qsix: 1,
            qseven: 5,
            qeight: 5,
            qnine: 1,
            qten: 5,
        }
    },
    {
        name: 'Dwight',
        photo: 'images/dwight-pic.jpg',
        scores: {
            qone: 1,
            qtwo: 5,
            qthree: 4,
            qfour: 1,
            qfive: 5,
            qsix: 2,
            qseven: 1,
            qeight: 2,
            qnine: 5,
            qten: 1,
        }
    },
    {
        name: 'Stanley',
        photo: 'images/stanley-pic.jpg',
        scores: {
            qone: 3,
            qtwo: 5,
            qthree: 1,
            qfour: 2,
            qfive: 2,
            qsix: 5,
            qseven: 3,
            qeight: 1,
            qnine: 2,
            qten: 1,
        }
    }
];


$('#surveySubmitBtn').on('click', function(){
    // grab the values of the user inputs
    var newFriend = {
        name: $('#friend-name').val().trim(),
        photo: $('#friend-image').val().trim(),
        // put 'scores into an object and name each one qone, qtwo, etc' exactly like above

        scores: {
                    qone: $('#questionOne').val(),
                    qtwo: $('#questionTwo').val(),
                    qthree: $('#questionThree').val(),
                    qfour: $('#questionFour').val(),
                    qfive: $('#questionFive').val(),
                    qsix: $('#questionSix').val(),
                    qseven: $('#questionSeven').val(),
                    qeight: $('#questionEight').val(),
                    qnine: $('#questionNine').val(),
                    qten: $('#questionTen').val()
                }
    };
    // testing inputs with button click
    console.log(JSON.stringify(newFriend));


    friends.forEach(function(friend){
        for (var prop in friend.scores) {
            console.log("This is the key: " + prop + " This is the value: " + friend.scores[prop]);
            console.log(newFriend.scores[prop]);
        }
    });


});

// to compare
// loop through their scores for all the friends in var 'friends'
// compare the score var friends, against the one you got back
// var totalDiff = 0;
// friends.each do |friend|
//   friend.scores.each do |key, value|
//     totalDiff = totalDiff + Math.abs(newFriend.scores[key] - value)
//   end
//end
