import { useForm } from 'react-hook-form';

import image from '../assets/thumbnails/overtime_image2.jpeg';

function ContactPage() {
    const { handleSubmit, register, reset } = useForm();

    function submitHandler(data) {
        console.log('contact submit data', data);
        reset();
    }

    return (
        <div className="contactpage">
            {/* map will replace temporary div */}
            <div className="map-div">
                <p>map here</p>
            </div>

            <h1 className="contact-title">Contact BP Global</h1>

            <div className="contact-content-wrapper">
                <div className="contact-content-item">
                    <p className="content-item-title">Office Location</p>
                    <p className="content-item-text">3266 W 1075 N</p>
                    <p className="content-item-text">Layton, UT 84041</p>
                </div>

                <div className="contact-content-item">
                    <p className="content-item-title">Mailing Address</p>
                    <p className="content-item-text">3266 W 1075 N</p>
                    <p className="content-item-text">Layton, UT 84041</p>
                </div>

                <div className="contact-content-item">
                    <p className="content-item-title">Phone</p>
                    <p className="content-item-text">800-555-5555</p>
                    <p className="content-item-text">800-444-4444</p>
                </div>

                <div className="contact-content-item">
                    <p className="content-item-title">Fax</p>
                    <p className="content-item-text">800-333-3333</p>
                </div>

                <div className="contact-content-item">
                    <p className="content-item-title">Email</p>
                    <a href='mailto:example@example.com' className="content-item-link">youremail@example.com</a>
                    <a href='mailto:example@example.com' className="content-item-link">anotheremail@example.com</a>
                    <a href='mailto:example@example.com' className="content-item-link">thirdemail@example.com</a>
                </div>
            </div>

            <img src={image} alt='our location' width='70%' />

            <div className='contact-form-wrapper'>
                <h2 className='contact-form-title'>Have a Question or Comment?</h2>
                <form onSubmit={handleSubmit(submitHandler)} className='contact-form'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='firstName'>First Name</label>
                                <input type='text' className='form-control' {...register('firstName', {required: true})} />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input type="text" className='form-control' {...register('lastName', {required: true})} />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='phone'>Phone</label>
                                <input type='phone' className='form-control' {...register('phone', {required: true})} />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' className='form-control' {...register('email', {required: true})} />
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='comment'>Comment</label>
                        <textarea className='form-control' rows={3} {...register('comment', {required: true})} />
                    </div>

                    <div className='contact-form-actions'>
                        <button type='submit' className='contact-form-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;