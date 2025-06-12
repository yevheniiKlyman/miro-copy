import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '@/shared/model/routes';

function BoardsListPage() {
  return (
    <div>
      <h1>Boards list</h1>
      <Link to={generatePath(ROUTES.BOARD, { boardId: '1' })}>Board 1</Link>
    </div>
  );
}

export const Component = BoardsListPage;
