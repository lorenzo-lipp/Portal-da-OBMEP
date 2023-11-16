export default function(puzzles) {
  const fakePuzzleConditions = [];
  if (puzzles.length <= 2) return fakePuzzleConditions;
  if (puzzles.length % 2 === 1) fakePuzzleConditions.push(2);
  if (puzzles.length <= 4) return fakePuzzleConditions;
  if (puzzles.length % 3 === 2) fakePuzzleConditions.push(3);
  if (puzzles.length % 4 === 3) fakePuzzleConditions.push(4);
  if (puzzles.length % 4 === 1) fakePuzzleConditions.push(4);
  return fakePuzzleConditions;
}