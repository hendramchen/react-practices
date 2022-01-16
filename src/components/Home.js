import { Link } from 'react-router-dom';
import '../App.css';

const lectures = [
    { goTo: 'app-expense-1', title: '03) React Basics and Working with Component'},
    { goTo: 'app-expense-2', title: '04) React State and Working with Events'},
    { goTo: 'app-expense-3', title: '05) Rendering Lists and Conditional Content'},
    { goTo: 'app-styling', title: '06) Styling React Component'},
    { goTo: 'app-practice', title: '08) Practice Project'},
    { goTo: 'app-fragment-portal', title: '09) Diving Deeper: Working with Fragments, Portals and Refs'},
    { goTo: 'app-context', title: '10) Advanced: Handling Side Effects, Using Reducers and Using the Context API'},
    { goTo: 'app-optimize', title: '12) A Look Behind The Scenes Of React and Optimization Techniques'},
    { goTo: 'app-class-based', title: '13) An Alternative Way Of Building Components: Class-based Components'}
];

const Home = () => {
    return (
        <div className='home'>
            {
                lectures.map((lecture, index) => <Link key={index} className='link' to={`/${lecture.goTo}`}>{lecture.title}</Link>)
            }
        </div>
    );
}

export default Home;
