
import HeaderOne from "./header/HeaderOne";
// import HeaderTopNews from "./header/HeaderTopNews";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Layout;
