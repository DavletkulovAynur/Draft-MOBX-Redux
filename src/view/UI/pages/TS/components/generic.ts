const Generic = () => {
  //TODO: Generic Types, — обобщенные типы (вычисляемое значение)

  type SuperTest<T> = {
    id: string;
    name: string;
    age: T;
  };

  const a: SuperTest<number> = {
    id: "",
    name: "",
    age: 1,
  };

  function identity<T>(arg: T): T {
    return arg;
}
};

export default Generic;
