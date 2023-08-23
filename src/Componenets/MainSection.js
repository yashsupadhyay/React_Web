import './MainSection.css';
import Cover from './Images/Cover.jpg';

function MainSection() {
    return(
        <>
        <div className="main-section">
            <a href="/"><img src={Cover} alt="Company Logo"/></a>
        </div>
        </>
    );
}

export default MainSection;