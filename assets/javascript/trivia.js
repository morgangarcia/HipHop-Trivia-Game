function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        //code will go here
    }
}

function showResults(questions, quizContainer, resultsContainer) {
    //code will go here
}

//show the questions
showQuestions(questions, quizContainer);

//when user clicks submit, show results
submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
}
}


let myQuestions = [
    // question 1
    {
        "q": "What record label did Hopsin sign with before he created Funk Volume with Dame Ritter?",
        "c": ["Ruthless Records", "Sony Records", "Jive Records"],
        "answer": 0
    },
    // question 2
    {
        "q": "Who is this legendary Memphis rap group that won an academy award for best original song in 2006?",
        "c": ["Three Six Mafia", "Gettho Boys", "Lords Of The Underground"],
        "answer": 0
    },
    // question 3
    {
        "q": "What is the stage name of the American rapper with the birth name Marshall Bruce Mathers III?",
        "c": ["LLCool J", "50Cent", "Eminem"],
        "answer": 2
    },
    // question 4
    {
        "q": "Before Dizzee Rascal "
        went pop ", he was a major player in the U.K. Hip Hop scene. What was the name of his Mercury Music Prize winning debut album?",
        "c": ["Boy Downstairs", "Boys Town", "Boy In Da Corner"],
        "answer": 2
    },
    // question 5
    {
        "q": "Who gave us these lyrics? "
        In a street brawl,
        I strike men quicker than lightning.You seen what happened in my last fight friend ? aight then "",
        "c" : ["Big L", "Big Poppa", "Jay Z"],
        "answer": 0
    },
    // question 6
    {
        "q": "Which rapper is also known as "
        Slim Shady "?",
        "c": ["Duece Poppin", "Eminem", "2Shades 2 U"],
        "answer": 1
    },
    // question 7
    {
        "q": "What was the name of Jay-Z's first album?",
        "c": ["Black Album", "Reasonable Doubt", "The Second Bible"],
        "answer": 1
    },
    // question 8
    {
        "q": "Which groups comprise the Native Tongues collection of artists?",
        "c": ["Broke Wrist Gang", "Chub Rockers", "Tribe, De La, Junglebothers"],
        "answer": 2
    },
    // question 9
    {
        "q": "This rapper was born O'Shea Jackson and has moved on from his days in N.W.A. to star in movies such as "
        Barbershop " (2002) and "
        Are We There Yet ? " (2005). What is his stage name?",
        "c" : ["Ice-Cube", "Mc Ren", "Dre Dre"],
        "answer": 0
    },
    // question 10
    {
        "q": "Herb Mcgruff is known to have worked with Big L and his crew Children Of The Corn in the mid 90s. He then dropped an album in 1998. What's the name of that record?",
        "c": ["Murda Mace", "Destined to Be", "Cory Mo"],
        "answer": 1
    }
];

function showQuestions(question, quizContainer) {
    //Stores the output and the answer choices
    let output = [];
    let answers;

    //for each question...
    for (let i = 0; i < questions.length; i++) {

        //resets the list of answers
        answers = [];

        //for each available answer to this question...
        for (letter in questions[i].answer) {

            //..add an html radio button
            answer.push(
                '<label>' +
                '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                letter + ': ' +
                questions[i].answers[letter] +
                '<label>'


            );
        }
        // add this question and its answer to the output
        output.push(
            '<div class="question">' + questions[i].question + '<div>' +
            '<div class="answers">' + answers.join('') + '</div>'
        );

    }
    //combines output list into one string of html and put it on the page
    quizContainer.innerHtml = output.join('');
}

//questions and quizContainer values will come form generateQuiz function
showQuestions(questions, quizContainer);


function showResults(questions, quizContainer, resultsContainer) {

    //gather answer containers from our quiz
    let answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers

    let userAnswer = '';
    let numCorrect = 0;

    //for each question...
    for (let i = 0; i < questions.length; i++) {

        //find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        //if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
            //add to the number of correct answers
            numCorrect++;

            //color the answer green
            answerContainers[i].style.color = 'lightgreen';
            
            //if answer is wrong or blank
            else {

            //color the answer red
                answerContainers[i].style.color = 'red';
            }
        }

        //show number of correct answers out of total
        resultsContainer.inner = numCorrect + ' out of ' + questions.length;
    }

}

//on submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

//html elements for the quiz, the results, and the submit button

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
