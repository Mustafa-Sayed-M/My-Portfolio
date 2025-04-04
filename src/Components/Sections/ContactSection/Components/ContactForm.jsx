import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import InputGroup from '../../../Atoms/InputGroup';

const inputsData = [
    {
        id: 'name',
        name: 'name',
        type: 'text',
        label: 'Name',
        autoComplete: 'on',
        placeholder: 'Your Name'
    },
    {
        id: 'email',
        name: 'email',
        type: 'text',
        label: 'Email',
        autoComplete: 'on',
        placeholder: 'Your Email Address'
    },
    {
        id: 'phone',
        name: 'phone',
        type: 'text',
        label: 'Phone',
        autoComplete: 'on',
        placeholder: 'Your Phone Number'
    }
];

const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

const validationSchema = {
    name: Yup.string().min(2).max(24).required(),
    email: Yup.string().email().required(),
    phone: Yup.number(),
    message: Yup.string().min(5).max(100).required(),
};

function ContactForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object(validationSchema)}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    {/* Inputs Container */}
                    <div className='inputs-container space-y-5 mb-5'>
                        {/* Another Fields */}
                        {
                            inputsData.map((input, index) => (<div key={index} data-aos='fade' data-aos-delay={50 * index}>
                                <InputGroup
                                    {...{
                                        ...input,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                    }}
                                />
                                <ErrorMessage name={input.name} component={'p'} className='text-red-500 mt-2 capitalize' />
                            </div>))
                        }
                        {/* Message */}
                        <div data-aos='fade' data-aos-delay={inputsData.length * 50 + 50}>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder='Your Message'
                                className='p-3 mt-2 rounded-md w-full bg-transparent border border-purple-color placeholder:transition-opacity focus:placeholder:opacity-0 resize-none min-h-48'
                            ></textarea>
                            <ErrorMessage name='message' component={'p'} className='text-red-500 mt-2 capitalize' />
                        </div>
                    </div>
                    <div
                        data-aos='fade'
                        className='submit-btn-container'
                        data-aos-delay={inputsData.length * 50 + 100}
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='py-2 px-8 rounded-full border border-purple-color sm:hover:bg-purple-color mx-auto block transition'
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default ContactForm;