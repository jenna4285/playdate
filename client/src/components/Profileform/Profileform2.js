import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeflex/primeflex.css';
import './Profileform.css';
import Geocode from 'react-geocode';
import AutoAddress from './AutoAddress';

Geocode.setApiKey('AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg');

function Profileform2(props) {
	const toast = useRef(null);

	return (
		<div className="row">
			<Toast ref={toast} />
			<div className="col">
				<form>
					<br />
					<div>
						<div className="card">
							<h1>Complete Profile</h1>
							<br />
							<div className="card-body">
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">
											{' '}
											<label for="profilename">Full Name</label>
										</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input
											id="profilename"
											name="fullname"
											pattern=""
											placeholder="Enter Name Here"
                                            value={props.profileInfo.fullname} 
											onChange={props.handleInputChange}
										/>

										{/* <InputText 
                                            name="fullname" 
                                            type="text" 
                                            className="form-control" 
                                            value={props.profileInfo.fullname} 
                                            id="profilename" 
                                            onChange={props.handleInputChange} placeholder="Enter Name Here"/> */}
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">
											<label for="address">Address</label>
										</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<AutoAddress address={props.profileInfo.address}/>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">
                                        <label for="bio">Bio</label>
                                        </h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<div className="p-inputgroup">
											<span className="p-inputgroup-addon">
												<i className="pi pi-users" />
											</span>
											<InputTextarea
												name="description"
												id="bio"
												rows={3}
												cols={35}
												value={props.profileInfo.description}
												onChange={props.handleInputChange}
												placeholder="Tell us a little about your family!"
											/>
										</div>
										<div className="row">
											<div className="col-sm-3" />
											<div className="col-sm-9 text-secondary" />
										</div>
									</div>
								</div>
								<div className="row justify-content-center">
									<button
										id="save-profile"
										type="button"
										className="btn btn-success px-4 gap-3"
										disabled={!(props.profileInfo.fullname && props.profileInfo.description)}
										onClick={props.handleBtnClick}
									>
										Save Profile
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Profileform2;
