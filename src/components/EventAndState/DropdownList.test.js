const listOfItems = () => [
  { name: "one", isChosen: false },
  { name: "two", isChosen: false },
  { name: "three", isChosen: false },
  { name: "four", isChosen: false },
  { name: "five", isChosen: false }
];

const chooser = (_object, _itemName) =>
  _object.map(e =>
    e.name === _itemName ? { ...e, isChosen: true } : { ...e, isChosen: false }
  );

describe("selector selects", () => {
  listOfItems().map((e, i) =>
    it(`realy selects ${e}  `, () => {
      expect(chooser(listOfItems(), e.name)[i].isChosen).toEqual(true);
    })
  );
});
