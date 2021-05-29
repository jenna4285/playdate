import React from "react";
import { InputText } from 'primereact/inputtext';


function Loginform() {
    return (
        <div className="login-wrapper">
        <form className="container-fluid">
            <div className="p-d-flex p-jc-center">
                <div className="p-grid p-fluid card">
                    <h1>Log in to PlayDate</h1>

                    <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="username">Username</label>
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText id="username" type="text" name="username" />
                        </div>
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="password">Password</label>
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-unlock"></i>
                            </span>
                            <InputText id="password" type="password" name="password" />
                        </div>
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                        <button id="login" type="button" class="btn btn-primary btn-lg px-4 gap-3">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
}

export default Loginform;
