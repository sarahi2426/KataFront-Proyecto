import {Routes , Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import SobreMi from '../pages/SobreMi/SobreMi'
import Quizz from '../pages/Quizz/QuizzPersonaje'
import QuizzPersonaje from '../pages/Quizz/QuizzPersonaje'
import AnswersQuizzUno from '../pages/AnswersQuizz/AnswersQuizzUno'
import AnswersQuizzDos from '../pages/AnswersQuizz/AnswersQuizzDos'
import AnswersQuizzTres from '../pages/AnswersQuizz/AnswersQuizzTres'
import AnswersQuizzCuatro from '../pages/AnswersQuizz/AnswersQuizzCuatro'
const RoutesIndex = () => {
  return (
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/SobreMi" element={<SobreMi/>} />
         <Route path="//Quizz" element={<Quizz/>} />
         <Route path="/QuizzPersonaje" element={<QuizzPersonaje/>} />
         <Route path="/AnswersQuizzUno" element={<AnswersQuizzUno/>} />
         <Route path="/AnswersQuizzDos" element={<AnswersQuizzDos/>} />
         <Route path="/AnswersQuizzTres" element={<AnswersQuizzTres/>} />
         <Route path="/AnswersQuizzCuatro" element={<AnswersQuizzCuatro/>} />
         
    </Routes>
  )
}

export default RoutesIndex