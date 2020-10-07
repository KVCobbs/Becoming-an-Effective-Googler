const people = [
  { id: 1, interests: ['Archery', 'Bowling', 'Hats'] },
  { id: 2, interests: ['Music', 'Bowling', 'Hats'] },
  { id: 3, interests: ['Music', 'Bowling', 'Large Machinery'] },
];

const findMatch = myInterests => {
  console.log(myInterests)
  people.forEach(person => {
    if (theirInterests === myInterests) {
      return person.id
    }
  })
  return false
};

console.log(findMatch(['Music', 'Hats', 'Bowling']))