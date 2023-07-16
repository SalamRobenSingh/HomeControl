const Pagetitle = (e) => {
    return ( 
        <div className="pagetitle">
            <h1>Current Location</h1>
            <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">{window.document.location.pathname.replace("/", "")}</li>
            </ol>
            </nav>
        </div>
     );
}
 
export default Pagetitle;