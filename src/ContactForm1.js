import React, { useState } from 'react';

const AccountForm = () => {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Albert',
        lastName: 'Chikarova',
        dob: '17/12/1987',
        phoneNumber: '+1-907-972-0104',
        email: 'albert.chikarova@gmail.com',
        country: '',
        address: '',
        governorate: '',
        zipCode: '',
        gender: 'male',
    });

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
        // Reset form data or fetch original data
    };

    const handleConfirm = () => {
        setEditMode(false);
        // Save form data or update the user's information
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <div style={{ position: 'relative' }}>
                <div style={{ left: 222, top: 128, position: 'absolute', color: '#111111', fontSize: 32, fontFamily: 'Open Sans', fontWeight: '800', wordWrap: 'break-word' }}>Accounts Area</div>
                <div style={{ left: 222, top: 247, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word' }}>Personal informations</div>

                {/* First Name */}
                <div style={{ width: 497, height: 96, left: 222, top: 296, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>First name</div>
                    {editMode ? (
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{ width: 497, height: 51, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', borderRadius: 10 }}
                        />
                    ) : (
                        <div style={{ left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.80)', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>{formData.firstName}</div>
                    )}
                </div>

                {/* Last Name */}
                <div style={{ width: 497, height: 96, left: 743, top: 296, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Last name</div>
                    {editMode ? (
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            style={{ width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                        />
                    ) : (
                        <div style={{ left: 16, top: 41, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>{formData.lastName}</div>
                    )}
                </div>

                {/* Date of Birth */}
                <div style={{ width: 497, height: 96, left: 222, top: 392, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Date of Birth</div>
                    {editMode ? (
                        <input
                            type="text"
                            name="Date of Birth"
                            value={formData.dob}
                            onChange={handleChange}
                            style={{ width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                        />
                    ) : (
                        <div style={{ left: 16, top: 41, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>{formData.dob}</div>
                    )}
                </div>

                {/* Phone Number */}
                <div style={{ width: 497, height: 96, left: 743, top: 488, position: 'absolute' }}>
                    {/* Add Phone Number similar to First Name and Last Name */}
                </div>

                {/* Email Address */}
                <div style={{ width: 497, height: 96, left: 222, top: 488, position: 'absolute' }}>
                    {/* Add Email Address similar to First Name and Last Name */}
                </div>

                {/* Country */}
                <div style={{ width: 497, height: 96, left: 222, top: 610, position: 'absolute' }}>
                    {/* Add Country similar to First Name and Last Name */}
                </div>

                {/* Address */}
                <div style={{ width: 497, height: 96, left: 222, top: 705, position: 'absolute' }}>
                    {/* Add Address similar to First Name and Last Name */}
                </div>

                {/* Governorate */}
                <div style={{ width: 497, height: 96, left: 743, top: 610, position: 'absolute' }}>
                    {/* Add Governorate similar to First Name and Last Name */}
                </div>

                {/* ZIP Code */}
                <div style={{ width: 497, height: 96, left: 743, top: 705, position: 'absolute' }}>
                    {/* Add ZIP Code similar to First Name and Last Name */}
                </div>

                {/* Gender */}
                <div style={{ left: 743, top: 390, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Gender</div>
                <div style={{ left: 786, top: 433, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>Male</div>
                <div style={{ left: 882, top: 433, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>Female</div>
                <div style={{ width: 32, height: 32, left: 746, top: 425, position: 'absolute' }}>
                    {/* Add Male icon similar to First Name and Last Name */}
                </div>
                <div style={{ width: 32, height: 32, left: 842, top: 425, position: 'absolute' }}>
                    {/* Add Female icon similar to First Name and Last Name */}
                </div>

                {/* Edit, Confirm, Cancel buttons */}
                {editMode ? (
                    <>
                        <div onClick={handleConfirm} style={{ left: 1185, top: 294, position: 'absolute', textAlign: 'right', color: '#2FB300', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Confirm</div>
                        <div onClick={handleCancel} style={{ left: 1116, top: 294, position: 'absolute', textAlign: 'right', color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Cancel</div>
                        <div style={{ left: 1169, top: 294, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>|</div>
                    </>
                ) : (
                    <div onClick={handleEdit} style={{ left: 693, top: 294, position: 'absolute', color: '#004EE4', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Edit</div>
                )}
            </div>
        </form>
    );
};

export default AccountForm;
