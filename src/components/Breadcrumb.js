import { Link } from 'react-router-dom';
import '../App.css';

const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb">
            <Link className='backlink' to='/'>Home</Link> /
            <span className='active'> { props.title }</span>
        </div>
    );
}

export default Breadcrumb;
