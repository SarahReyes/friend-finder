
// var $ = jQuery = require('jquery')(window); 

var lowestDiffFriend = "";

// hard code some 'friends' to compare with the user
var friends = [
    {
        name: 'Pam',
        photo: '../data/images/pam-pic.jpg',
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
        photo: '../data/images/dwight-pic.jpg',
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
        photo: '../data/images/stanley-pic.png',
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


    var bestFriend = {
        name: "",
        photo: "",
        diffScore: 50
    };

    friends.forEach(function(friend){

        var totalDifference = 0;

        for (var prop in friend.scores) {
            console.log("This is the key: " + prop + " This is the value: " + friend.scores[prop]);
            console.log(newFriend.scores[prop]);

            totalDifference += Math.abs(newFriend.scores[prop] - friend.scores[prop]);

            if (totalDifference < bestFriend.diffScore) {
                bestFriend.name = friend.name;
                bestFriend.photo = friend.photo;
                bestFriend.diffScore = totalDifference;
            }

        }
    });
    console.log(bestFriend);
    $('.modal').modal('show');
    $('.modal').on('shown.bs.modal', function () {
        $('#friendName').html(bestFriend.name);
        $('#friendPic').attr('src', bestFriend.photo);
    });
});
