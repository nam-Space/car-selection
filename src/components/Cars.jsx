import React, { useState } from "react";

const Cars = () => {
    const [car, setCar] = useState("");
    const [color, setColor] = useState("");

    const handleChangeCar = (e) => {
        setCar(e.target.value);
    };

    const handleChangeColor = (e) => {
        setColor(e.target.value);
    };

    return (
        <div className="container">
            <h1>Select Your Car</h1>
            <p>Select a car</p>
            <select
                className="form-select w-50"
                aria-label="Default select example"
                onChange={handleChangeCar}
            >
                <option selected disabled>
                    Open this select menu
                </option>
                <option value="Ferrary">Ferrary</option>
                <option value="Ferrary F1">Ferrary F1</option>
                <option value="Bugatti">Bugatti</option>
            </select>
            <br />
            <p>Select a color</p>
            <select
                className="form-select w-50"
                aria-label="Default select example"
                onChange={handleChangeColor}
            >
                <option selected disabled>
                    Open this select menu
                </option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
            </select>
            <br />
            {car && color && (
                <p>
                    You selected a {color} - {car}
                </p>
            )}
        </div>
    );
};

export default Cars;
