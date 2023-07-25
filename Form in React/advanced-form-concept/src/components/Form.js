import classes from "./Form.module.css";
function From() {
    const [data, setData] = useState({
        name: "",
        email: "",
        address: "",
        gender: "",
        language: "",
        isChecked: false,
    });

    return (
        <form>
            <div className={classes.container}>
                <div className={classes.row1}>
                    <div className={classes.input_field}>
                        <label>Name*</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={classes.input_field}>
                        <label>Email*</label>
                        <input type="email" name="email" />

                    </div>
                </div>

                <div className={classes.row2}>
                    <div className={classes.textarea_field}>
                        <label>Address*</label>
                        <textarea rows={5} name='address' />
                    </div>
                </div>

                <div className={classes.row3}>
                    <div className={classes.input_field}>
                        <label>Gender*</label>
                        <div>
                            <label>Male</label>
                            <input type="radio" name='gender' />
                        </div>
                        <div>
                            <label>Female</label>
                            <input type="radio" name='gender' />
                        </div>
                    </div>
                </div>

                <div className={classes.row4}>
                    <div className={classes.select_field}>
                        <label>Language*</label>
                        <select name='language'>
                            <option value="java">Java</option>
                            <option value="javaScript">Javascript</option>
                            <option value="python">Python</option>
                            <option value="php">PHP</option>
                            <option value="c++">C++</option>
                        </select>
                    </div>
                    <div className={classes.select_field}>
                        <label>Is Checked*</label>
                        <input type='checkbox' name='isChecked'/>
                    </div>
                </div>
                <br />
                <input type="submit" value="submit"/>

            </div>
        </form>
    )
}