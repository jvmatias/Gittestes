
const App = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 m-2 justify-center">
        <div className="rounded-md col-span-1">
          <img className="w-20 m-2 rounded-md col-span-1 justify-self-center" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
        </div>
        <div className="col-span-1 rounded-md p-2 self-center">
          <p className="text-lg">Nome Aleatorio</p>
          <p className="">descricao aleatoria somente para testes</p>
        </div>

        <div className="min-h-12 col-span-1 rounded-md p-4 sm:justify-self-center">
          <p>Skills:</p>
          <ul className="list-disc list-inside pl-2 text-sm">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="min-h-12 col-span-1 rounded-md p-4">
          <p>Skills:</p>
          <ul className="list-disc list-inside pl-2 text-sm">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="min-h-12 bg-green-300 col-span-1 rounded-md"></div>
        <div className="min-h-12 bg-blue-300 col-span-1 rounded-md"></div>
        <div className="min-h-12 bg-red-300 col-span-1 rounded-md"></div>
        <div className="min-h-12 bg-green-300 col-span-1 rounded-md"></div>
        <div className="min-h-12 bg-blue-300 col-span-1 rounded-md"></div>
      </div>
    </div>
  )
}
export default App
