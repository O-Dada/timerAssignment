var frontendQuestions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "None of the above"
      ],
      answer: 0
    },
    {
      id: 2,
      question: "What is the correct way to include an external JavaScript file?",
      options: [
        "<script src='script.js'></script>",
        "<script href='script.js'></script>",
        "<script link='script.js'></script>",
        "<script file='script.js'></script>"
      ],
      answer: 0
    },
    {
      id: 3,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Creative Style Sheet"
      ],
      answer: 0
    }
  ];
  
  
  
  
  
  // Example of accessing a question
  console.log(frontendQuestions[0].id); // Output: 1
  console.log(frontendQuestions[0].question); // Output: "What does HTML stand for?"
  console.log(frontendQuestions[0].options); // Output: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"]
  console.log(frontendQuestions[0].answer); // Output: 0
  