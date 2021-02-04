import React from 'react';
import './SelectBus.css';
import {Router, Route, BrowserRouter, Switch, Link} from 'react-router-dom';

function SelectBus() {
    return (
        <div className="selectBus">
            <div className="submitBus">
                <select name="line" id="bus">
                    <option value="1">1</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="17">17</option>
                    <option value="114">114</option>
                    <option value="107">107</option>
                </select>
                <input type="submit"/>
            </div>
        </div>
    )
}

export default SelectBus
