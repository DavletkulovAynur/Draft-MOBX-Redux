const Any_Unknoun = () => {
  const a: unknown = 'string'
  const b: any = 1

  function testUnknown(a: string) {
    console.log(a)
  }

  //TODO: as = Type Assertion

  testUnknown(a as string)
  testUnknown(b)
  return (
    <div>
      <h1>Подобно типу any, типу unknown присваивается любое значение, однако, в отличие от any, тип unknown не может быть присвоен почти никакому другому без утверждения типа.</h1>
    </div>
  )
}

export default Any_Unknoun