const Obj_Types = () => {
  //TODO: interface и  type для описания свойств объекта 
  type Point = {
    x: number;
    y: number;
  };

  interface Window {
    x: number;
    y: number;
  }

  const obj: Point = {
    x: 1,
    y: 12
  }

  interface SumA  {
    (a: number, b: number): number
  }

  const testSum: SumA = (a, b) => {
    return a + b
  }

  //интерфейсы отвечают за логику приложения
  //Типы опсывают поведенческие моменты 
}

export default Obj_Types