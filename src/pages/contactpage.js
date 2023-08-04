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

            <h1 className="contact-title">CONTACT BP GLOBAL</h1>

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
                    <p className='content-item-text'><a href='mailto:example@example.com' className="content-item-link">youremail@example.com</a></p>
                    <p className='content-item-text'><a href='mailto:example@example.com' className="content-item-link">anotheremail@example.com</a></p>
                    <p className='content-item-text'><a href='mailto:example@example.com' className="content-item-link">thirdemail@example.com</a></p>
                </div>
            </div>

            <div className='contact-image-wrapper'>
                <img src={image} alt='our location' width='100%' height='450px' />
            </div>

            <div className='contact-form-wrapper'>
                <h2 className='contact-form-title'>Have a Question or Comment?</h2>
                <form onSubmit={handleSubmit(submitHandler)} className='contact-form'>
                    <div className='row mb-5'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='firstName' className='contact-form-label'>First Name</label>
                                <input type='text' className='form-control' {...register('firstName', {required: true})} />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='lastName' className='contact-form-label'>Last Name</label>
                                <input type="text" className='form-control' {...register('lastName', {required: true})} />
                            </div>
                        </div>
                    </div>

                    <div className='row mb-5'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='phone' className='contact-form-label'>Phone</label>
                                <input type='phone' className='form-control' {...register('phone', {required: true})} />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='email' className='contact-form-label'>Email</label>
                                <input type='email' className='form-control' {...register('email', {required: true})} />
                            </div>
                        </div>
                    </div>

                    <div className='form-group mb-4'>
                        <label htmlFor='comment' className='contact-form-label'>Comment</label>
                        <textarea className='form-control' rows={3} {...register('comment', {required: true})} />
                    </div>

                    <div className='contact-form-actions'>
                        <button type='submit' className='contact-form-btn'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;