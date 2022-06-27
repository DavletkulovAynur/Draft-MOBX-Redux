// import tsbaseTypes from "../../../../assets/images/typeScript/ts-base-types";

const TS = () => {
  //TODO: Basic Types
  const a: number = 1;
  const b: string = "TypeScript";
  const c: boolean = false;
  const d: Array<number> = [1, 2];
  const e: null = null;
  const f: undefined = undefined;
  const g: string[] = ["JS", "TS"];
  // Тип объединения (Union)
  const varUnion: string | boolean = false;
  // Tuple
  let x: [number, string] = [1, "qwerty"];
  //ENUMS
  enum ResourseType {
    FILM = 1,
    BOOK = 2,
  }
  console.log(ResourseType.BOOK);

  //TODO: объекты

  //TODO: что значит <...>
  return (
    <div>
      <h1>TS</h1>
    </div>
  );
};

export default TS;
