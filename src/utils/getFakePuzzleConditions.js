export default function(puzzles) {
  const fakePuzzleConditions = [];
  if (puzzles.length <= 2) return fakePuzzleConditions;
  if (puzzles.length % 2 === 1) fakePuzzleConditions.push(2);
  if (puzzles.length <= 4) return fakePuzzleConditions;
  if (puzzles.length % 3 === 2) fakePuzzleConditions.push(3);
  if (puzzles.length % 4 === 3 || puzzles.length % 4 === 1) fakePuzzleConditions.push(4);
  if (puzzles.length % 5 === 2 || puzzles.length % 5 === 4) fakePuzzleConditions.push(5);
  return fakePuzzleConditions;
}