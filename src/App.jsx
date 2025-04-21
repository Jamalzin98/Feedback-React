import { useState } from "react"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { CardInicial } from "./components/CardInicial"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)



  return (
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited}/>
    ) : (
      <div className="bg-gradient-dark max-w-103 mx-6 p-6 rounded-2xl text-white font-overpass text-center">
        <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration Thank You" />

        <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl">You selected {notaAvaliacao} out of 5!</p>

        <h1 className="text-2xl font-bold mb-2.5">Thank You!</h1>

        <p className="text-light-grey text-sm leading-1">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  )
}