class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Your answer.")




    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question= createElement("h3")
    this.option1= createElement("h4")
    this.option2= createElement("h4")
    this.option3= createElement("h4")
    this.option4= createElement("h4")


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.Question.position(200,130)
    this.option1.position(200,150)
    this.option2.position(200,170)
    this.option3.position(200,190)
    this.option4.position(200,210)
    this.input2.position(150,300)


    //Create html() and position() for each question, input and answers.
    this.Question.html("what starts with E and ends with E but only has one letter. ")
    this.option1.html("everyone")
    this.option2.html("envolpe")
    this.option3.html("Estimate")
    this.option4.html("Example")



    this.input1.position(150, 260);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("your answer has been subbmitted")
    this.message.position(120,30)
    })


  }
}
