import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <p>About Page</p>
      <Link to="/">Back to Home</Link>
    </Card>
  );
}

export default AboutPage;
