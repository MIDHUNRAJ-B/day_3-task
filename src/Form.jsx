import './App.css'
function Form(){
    let name="MR"
    return(
        <div>
            
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Nickname:
                    <input type="text" name="nickname" />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" />
                </label>
                <br />
                <label>
                    Memories:
                    <textarea name="memories"></textarea>
                </label>
                <br />
                <label>
                    Gender:
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female" /> Female
                </label>
                <br />
                <label>
                    Favorite Cricketer:
                    <input type="checkbox" name="cricketer" value="Sachin" /> Sachin
                    <input type="checkbox" name="cricketer" value="Dhoni" /> Dhoni
                    <input type="checkbox" name="cricketer" value="Kohli" /> Kohli
                    </label>
                <br />
                <label>
                    School:
                    <input type="text" name="school" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <h1> Form belongs to MR</h1>
        </div>
    )
}
export default Form