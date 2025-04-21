export function InputButton({value, setNotaAvaliacao}){
    function handleAlterarNotaAvaliacao(nota) {
        setNotaAvaliacao(nota)
    
        console.log(nota)
      }
    return ( <input type="button" value={value} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-600 font-bold" onClick={() => handleAlterarNotaAvaliacao(value)} />
)
}