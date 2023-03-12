function Radio () {
    return <form className="radio-form" action="#">
                <p>
                <label>
                    <input name="all" type="radio" defaultChecked />
                    <span>All</span>
                </label>
                </p>
                <p>
                <label>
                    <input 
                        name="movie" 
                        type="radio"
                        // onClick={}    
                    />
                    <span>Movies</span>
                </label>
                </p>
                <p>
                <label>
                    <input 
                        name="group1" 
                        type="radio" 
                    />
                    <span>Series</span>
                </label>
                </p>
            </form>
}

export {Radio};