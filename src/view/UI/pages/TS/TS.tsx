
const TS = () => {
  //TODO: Basic Types
  const numb: number = 1000
  const str: string = 'hello'
  const bool: boolean = false
  const arr: Array<number> = [1, 2]
  const nullTest: null = null
  // Тип объединения (Union)
  const varUnion: string | boolean = false
  // Tuple
  let x: [number, string] = [1, 'qwerty']
  //ENUMS
  enum ResourseType  {
    FILM = 1,
    BOOK = 2,
  }
  console.log(ResourseType.BOOK)

  //TODO: объекты

  //TODO: что значит <...>
  return (
    <div>
      <h1>TS</h1>
    </div>
  )
}

export default TS