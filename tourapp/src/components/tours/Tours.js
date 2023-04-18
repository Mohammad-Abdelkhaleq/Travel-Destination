function Tours(props) {
    return (
        <main>
            {
                props.siteData.map((site,i)=>{
                    return (<div key={i}>
                        <h3>{site.name}</h3>
                        <img src={site.image} alt={site.info}/>
                        <hr style={{border: '1px solid blue'}}/>
                    </div>);
                    
                })
            }

        </main>
    );
}
export default Tours;