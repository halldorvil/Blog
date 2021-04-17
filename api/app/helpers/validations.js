import env from "../../env";

const isEmpty = (input) => {
  if (input === undefined || input === "") {
    return true;
  }

  return !input.replace(/\s/g, "".length);
};

const empty = (input) => {
  if (input === undefined || input === "") {
    return true;
  }
};

export { isEmpty, empty };
