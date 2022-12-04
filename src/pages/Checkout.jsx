import React, { Component } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { database } from "../firebase-config";
import { FormGroup, FormInput, Input, Form, Select, FormField, Button, Checkbox, Label, Icon } from 'semantic-ui-react'
import { useUserAuth } from '../context/UserAuthContext';

const stateOptions = [
    { key: 'AL', text: 'Alabama', value: 'Alabama' },
    { key: 'AK', text: 'Alaska', value: 'Alaska' },
    { key: 'AZ', text: 'Arizona', value: 'Arizona' },
    { key: 'AR', text: 'Arkansas', value: 'Arkansas' },
    { key: 'CA', text: 'California', value: 'California' },
    { key: 'CO', text: 'Colorado', value: 'Colorado' },
    { key: 'CT', text: 'Connecticut', value: 'Connecticut' },
    { key: 'DE', text: 'Delaware', value: 'Delaware' },
    { key: 'FL', text: 'Florida', value: 'Florida' },
    { key: 'GA', text: 'Georgia', value: 'Georgia' },
    { key: 'HI', text: 'Hawaii', value: 'Hawaii' },
    { key: 'ID', text: 'Idaho', value: 'Idaho' },
    { key: 'IL', text: 'Illinois', value: 'Illinois' },
    { key: 'IN', text: 'Indiana', value: 'Indiana' },
    { key: 'IA', text: 'Iowa', value: 'Iowa' },
    { key: 'KS', text: 'Kansas', value: 'Kansas' },
    { key: 'KY', text: 'Kentucky', value: 'Kentucky' },
    { key: 'LA', text: 'Louisiana', value: 'Louisiana' },
    { key: 'ME', text: 'Maine', value: 'Maine' },
    { key: 'MD', text: 'Maryland', value: 'Maryland' },
    { key: 'MA', text: 'Massachusetts', value: 'Massachusetts' },
    { key: 'MI', text: 'Michigan', value: 'Michigan' },
    { key: 'MN', text: 'Minnesota', value: 'Minnesota' },
    { key: 'MS', text: 'Mississippi', value: 'Mississippi' },
    { key: 'MO', text: 'Missouri', value: 'Missouri' },
    { key: 'MT', text: 'Montana', value: 'Montana' },
    { key: 'NE', text: 'Nebraska', value: 'Nebraska' },
    { key: 'NV', text: 'Nevada', value: 'Nevada' },
    { key: 'NH', text: 'New Hampshire', value: 'New Hampshire' },
    { key: 'NJ', text: 'New Jersey', value: 'New Jersey' },
    { key: 'NM', text: 'New Mexico', value: 'New Mexico' },
    { key: 'NY', text: 'New York', value: 'New York' },
    { key: 'NC', text: 'North Carolina', value: 'North Carolina' },
    { key: 'ND', text: 'North Dakota', value: 'North Dakota' },
    { key: 'OH', text: 'Ohio', value: 'Ohio' },
    { key: 'OK', text: 'Oklahoma', value: 'Oklahoma' },
    { key: 'OR', text: 'Oregon', value: 'Oregon' },
    { key: 'PA', text: 'Pennsylvania', value: 'Pennsylvania' },
    { key: 'RI', text: 'Rhode Island', value: 'Rhode Island' },
    { key: 'SC', text: 'South Carolina', value: 'South Carolina' },
    { key: 'SD', text: 'South Dakota', value: 'South Dakota' },
    { key: 'TN', text: 'Tennessee', value: 'Tennessee' },
    { key: 'TX', text: 'Texas', value: 'Texas' },
    { key: 'UT', text: 'Utah', value: 'Utah' },
    { key: 'VT', text: 'Vermont', value: 'Vermont' },
    { key: 'VA', text: 'Virginia', value: 'Virginia' },
    { key: 'WA', text: 'Washington', value: 'Washington' },
    { key: 'WV', text: 'West Virginia', value: 'West Virginia' },
    { key: 'WI', text: 'Wisconsin', value: 'Wisconsin' },
    { key: 'WY', text: 'Wyoming', value: 'Wyoming' },
    { key: 'DC', text: 'District of Columbia', value: 'District of Columbia' },
]

const CheckoutPage = () => {

    const { user } = useUserAuth();

    // User info
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Shipping address & Card info
    const [address1, setAddress] = useState('');
    const [city, setCity] = useState();
    const [stateName, setStateName] = useState();
    const [zipcode, setZipcode] = useState('');
    const [cardnumber, setCardNumber] = useState('');

    const Push = () => {
        database.ref("user").set({
            city: city,
            stateName: stateName,
        }).catch(alert);
    }

    return (
        <div>
            <div className='d-flex flex-column bg-white py-4 mt-5 align-items-center justify-content-left'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <h3><u> Shipping address </u></h3>
                        <Form widths={'equal'} className='align-items-center'>
                            <FormGroup>
                                <FormInput required={'true'}
                                    control={Input}
                                    name='name'
                                    label='Name'
                                    placeholder='Name'
                                // value={name}
                                />
                                <FormInput required={'true'}
                                    control={Input}
                                    name='email'
                                    label='Email'
                                    placeholder='Email'
                                    type='email'
                                    value={user && user.email}
                                // onChange={setEmail}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormInput required={'true'}
                                    control={Input}
                                    name='address1'
                                    label='Address 1'
                                    placeholder='Address 1'
                                // value={address1}
                                // onChange={setAddress}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormInput required={'true'}
                                    label='City'
                                    placeholder='City'
                                    name='city'
                                    onChange={(e) => setCity(e.target.value)}
                                // value={city}
                                // onChange={setCity}
                                />
                                <FormInput required={'true'}
                                    control={Select}
                                    label='State'
                                    placeholder='State'
                                    name='state'
                                    options={stateOptions}
                                    onChange={(e) => setStateName(e.target.value)}
                                // value={stateName}
                                // onChange={setStateName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormInput required={'true'}
                                    label='Zipcode'
                                    placeholder='Zipcode'
                                    name='zipcode'
                                    type='number'
                                // value={zipcode}
                                // onChange={setZipcode}
                                />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div>
                        <h3><u>Credit Card Information</u></h3>
                        <p><b> Please fill out your card information.</b></p>
                        <Form widths={'equal'} className='align-items-left'>
                            <FormGroup>
                                <FormInput required={'true'}
                                    control={Input}
                                    label='Name on card'
                                    placeholder='John Doe'
                                    name='name'
                                // value={name}
                                />
                                <FormInput required={'true'}
                                    label='Card Number'
                                    placeholder='Card number'
                                    name='cardnumber'
                                    type='number'
                                // value={cardnumber}
                                />
                            </FormGroup>
                            <FormField control={Checkbox} label='I agree to the Terms and Conditions' />
                            <FormField>
                                <label style={{ color: 'red', fontSize: '25px' }}> * Required Field </label>
                            </FormField>
                            <FormGroup>
                                {/* <Link to='/cart'>
                                    <Button content='Checkout' />
                                </Link> */}
                                <Button onClick={Push}>Submit</Button>
                            </FormGroup>
                            <FormGroup>
                                <Button circular icon='google pay' color='twitter' size='huge' />
                                <Button circular icon='amazon pay' color='twitter' size='huge' />
                                <Button circular icon='apple pay' color='twitter' size='huge' />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CheckoutPage