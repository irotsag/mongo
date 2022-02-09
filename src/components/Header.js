import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

    return (
        <header className= 'header'>
            <h1 style={headingStyle}>{title}</h1>
            {location.pathname === '/' && (
            <Button 
            color={showAdd ? 'crimson' : 'purple'} 
            text={showAdd ? 'Close' : 'Add a Task'} 
            onClick={onAdd} />
           )}
        </header>
    )
}

Header.defaultProps= {
    title: 'TASK TRACKER'
}

Header.propTypes= {
    title: PropTypes.string,
}

//CSS in JS
const headingStyle=
    {
    color: 'purple', 
    backgroundColor: 'magenta'
}


export default Header
