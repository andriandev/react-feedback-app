import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function StackPage() {
  return (
    <Card>
      <p>Stack Page</p>
      <Link to="/">Back to Home</Link>
    </Card>
  );
}

export default StackPage;
