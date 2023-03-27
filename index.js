const questions = [{
   'que': 'Which of the following is a markup language?',
   'a': 'HTML',
   'b': 'css',
   'c': 'JavaScript',
   'd': 'PHP',
   'correct': 'a'
},
{
    'que': 'What year was JavaScript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
 },
 {
    'que': 'What does CSS stand for?',
    'a': 'Color Style Sheets',
    'b': 'Cascad Style Sheet',
    'c': 'Cascading Style Sheet',
    'd': 'None of the above',
    'correct': 'c'
 },
 {
   'que': 'Which of the following is not a framework?',
   'a': ' JavaScript .NET',
   'b': 'JavaScript',
   'c': 'Cocoa JS',
   'd': 'jQuery',
   'correct': 'b',
},
{
   'que': 'Which of the following is the property that is triggered in response to JS errors?',
   'a': 'onclick',
   'b': 'onmessage',
   'c': 'onerror',
   'd': 'onexception',
   'correct': 'c',
}
]
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
   if(index == total){
      return endQuiz()
   }
   reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}
const submitQuiz = () => {
   const data = questions[index];
   const ans = getAnswer()
   if(ans == data.correct){
      right++;
   }else{
      wrong++;
   }
   index++;
   loadQuestion();
   return;
}
const getAnswer = () => {
   let answer;
   optionInputs.forEach(
      (input) => {
         if(input.checked){
            console.log("yes")
            answer = input.value;
         }else{
            console.log("no")
         }
      }
   )
   return answer;
}
const reset = () =>{
   optionInputs.forEach(
      (input) => {
         input.checked = false;
      }
   )
}
const endQuiz = () => {
  
   if(`${right}`>3){
      let final= document.getElementById("box").innerHTML = `
      <div style ="text-align:center">
      <h3> Thank you for playing the quiz</h3>
      <h2> ${right} / ${total} are correct </h2>
      <h1 style ="color:green">Congradulations you are passed<h1>
     </div>
      `
   }
   else{
      let final= document.getElementById("box").innerHTML = `
      <div style ="text-align:center">
      <h3> Thank you for playing the quiz</h3>
      <h2> ${right} / ${total} are correct </h2>
      <h1 style ="color:red">You are failed<h1>
     </div>
      `
     
   }
   
   
}
// initial call
loadQuestion();