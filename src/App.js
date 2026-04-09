import { ProfileCard } from './ProfileCard';
import image1 from "./assests/image1.png";
import image2 from "./assests/image2.png";
import image3 from "./assests/image3.png";
import './App.css';

function App() {
  return (
    <div className="container">
<h1>
Internship Challenge 
</h1>
<ProfileCard
name="chandana"
role="Frontend developer"
image={image1}
/>
<ProfileCard
name="sanjana"
role="backend developer"
image={image2}
/>
<ProfileCard
name="varshini"
role="Fullsatck developer"
image={image3}
/>


    </div>
  );
};

export default App;
