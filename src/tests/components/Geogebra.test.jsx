import Geogebra from "../../components/Geogebra";
import { render, screen } from '@testing-library/react';

test('Fake test', () => {
  render(<Geogebra puzzle={{
    name: "MockPuzzle",
    geogebra: "gjytn3c7"
  }} />)

  expect(screen.getByText('baixar print', { exact: false })).toBeDefined()
})