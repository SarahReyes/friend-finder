// this will hold the arrays?
// I think we put the arrays of people who enter their info here

// user fills in the form

// grab the value of the user inputs

// push the user input to an array of objects

// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//      5,
//      1,
//      4,
//      4,
//      5,
//      1,
//      2,
//      5,
//      4,
//      1
//    ]
// }

$('#surveySubmitBtn').on('click', function(){
    var newFriend = {
        name: $('#friend-name').val().trim(),
        photo: $('#friend-image').val().trim(),
        scores: [$('#questionOne').val(), $('#questionTwo').val(), $('#questionThree').val(), $('#questionFour').val(), $('#questionFive').val(),
                 $('#questionSix').val(), $('#questionSeven').val(), $('#questionEight').val(), $('#questionNine').val(), $('#questionTen').val()]
    };
    // testing inputs with button click
    console.log(newFriend.scores);
});
