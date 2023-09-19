import Greeting from "../../domain/models/greeting.model";

const usecase = (name: string) => {
  return new Greeting().greet(name);
};

export default usecase;
