import './header.css'

const Header = (props) => {
    const { viewedShortDesc } = props;
    console.log(viewedShortDesc)
    return (
        <div className="header-container">{viewedShortDesc.shortDesc}</div>
    )
}

export default Header;