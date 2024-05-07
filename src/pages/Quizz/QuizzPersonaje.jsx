import react, { useState } from "react";
import {Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { quizz } from "../../assets/quizz";
import "./QuizzPersonaje.css";
import { Alert } from "bootstrap";



const QuizzPersonaje = () => {

  const navigate = useNavigate();
  const [questions, setQuestions] = useState(quizz);

  const handleChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;

    const updatedQuestions = questions.map((question, idx) => {
      if (idx !== questionIndex) {
        return question;
      }

      const updatedOptions = question.options.map((opt, optIdx) => ({
        ...opt,
        selected: optIdx === optionIndex,
      }));

      return {
        ...question,
        options: updatedOptions,
        currentAnswer: value,
      };
    });

    setQuestions(updatedQuestions);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Recopilar respuestas seleccionadas
    const selectedAnswers = questions.map((question) => {
      const selectedOption = question.options.find((opt) => opt.selected);
      return {
        questionText: question.questionText,
        selectedOption: selectedOption ? selectedOption.choice : null,
        
      };
    });

    selectedAnswers.forEach((answer)=>{
      if(answer.selectedOption ==="a) La ciencia"){
           console.log("Hoal")    
           navigate("/AnswersQuizzUno" )

           }else if (answer.selectedOption ==="b) El deporte"){
            navigate("/AnswersQuizzDos" );

           }else if  (answer.selectedOption ==="c) Comer") {
            navigate("/AnswersQuizzTres" );

           }else if (answer.selectedOption ==="d) Estudiar"){

            navigate("/AnswersQuizzCuatro" );
           }
    })

    if (selectedAnswers.every((answer) => answer.selectedOption !== "a) La ciencia" && answer.selectedOption !== "b) El deporte" && answer.selectedOption !== "c) Comer" && answer.selectedOption !== "d) Estudiar")) {
      alert("Contesta el Quizz");
    }
    
    console.log(selectedAnswers);
    
  };
  

  return (
    <div className="container-Quizz">
      <h1>¿Qué Personaje de Dragon ball eres?</h1>
      <p>Contesta el siguiente test</p>
      <section>
        <form onSubmit={onSubmit}>
          {questions.map((question, questionIdx) => (
            <div key={`group-${questionIdx}`}>
              <p className="questions">{question.questionText}</p>
              {question.options.map((option, optionIdx) => (
                <div key={`option-${optionIdx}`}>
                  <input
                    type="radio"
                    name={question.name}
                    value={option.radioValue}
                    checked={option.selected}
                    onChange={(event) =>
                      handleChange(event, questionIdx, optionIdx)
                    }
                  />
                  {option.choice}
                </div>
              ))}
            </div>
          ))}
          <button className="sent-info btn btn-primary" type="submit">
            Personaje
          </button>
        </form>
      </section>

    </div>
  );
};

export default QuizzPersonaje;
