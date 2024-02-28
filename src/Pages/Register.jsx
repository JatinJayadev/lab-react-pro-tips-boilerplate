import { useState } from "react";

function Register() {
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [validSuccess, setValidSuccess] = useState(false);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleSetState = (e) => {

        const { name, value } = e.target;

        setData((prevData) => ({ ...prevData, [name]: value }));

    };
    console.log(data)

    const handleSubmit = (event) => {
        event.preventDefault();

        const { firstName, lastName, email, phone } = data;
        // Reset error states
        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
        setPhoneError(false);

        // Check for empty values
        if (!firstName.trim()) {
            setFirstNameError(true);
            return;
        }

        if (!lastName.trim()) {
            setLastNameError(true);
            return;
        }

        if (!email.trim()) {
            alert("Please enter your email !")
        }

        // Check for valid email format
        if (!email.includes("@kalvium.community")) {
            setEmailError(true);
            return;
        }


        if (!phone.trim()) {
            alert("Please enter phone number !")
        }

        // Check for phone number validity
        if (phone.length !== 10 || !/^\d+$/.test(phone)) {
            setPhoneError(true);
            return;
        }


        // If all validations pass, set success state to true
        setValidSuccess(true);
    };

    console.log(firstNameError, lastNameError, emailError)

    return (
        <div>
            <center>
                <div className="main-box">

                    <form onSubmit={handleSubmit}>

                        <div className="content">

                            {validSuccess && (

                                <div className="banner">

                                    <p>Registration Successful</p>

                                </div>
                            )}

                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={data.firstName}
                                onChange={handleSetState}
                                placeholder="First Name"
                            />

                            {firstNameError && <p className="error">Check your First Name</p>}

                            <br />
                            <br />

                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={data.lastName}
                                onChange={handleSetState}
                                placeholder="Last Name"
                            />

                            {lastNameError && <p className="error">Check your Last Name</p>}

                            <br />
                            <br />

                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={handleSetState}
                                placeholder="Email"
                            />

                            {emailError && <p className="error">Invalid Email</p>}

                            <br />
                            <br />

                            <input
                                type="number"
                                value={data.phone}
                                onChange={handleSetState}
                                placeholder="Phone Number"
                                id="phone"
                                name="phone"
                            />

                            {phoneError && <p className="error">Invalid phone number</p>}

                            <br />
                            <br />


                            <div>

                                <input type="submit" value="Sign up" className="submitBtn" />

                            </div>

                        </div>
                    </form>
                </div>
            </center>
        </div>
    );
}

export default Register