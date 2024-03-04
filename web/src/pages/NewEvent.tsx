import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment, { Moment } from 'moment';
import axios from 'axios'; // Import Axios
import { API_ENDPOINT } from '../utils/constants.tsx';
import { apiRoutes } from '../utils/routes.tsx';
import { Location } from '../utils/location.interfaces.ts';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewEvent: React.FC = () => {


    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [eventTime, setEventTime] = useState<string|Moment>(moment().add(1, 'days'));
    const [tickets, setTickets] = useState<number>(0);
    const [images, setImages] = useState<FileList>({length: 0} as FileList);

    const [price, setPrice] = useState<number>(0); // Initial price
    const [location, setLocation] = useState<Location>({} as Location); 


    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const validationErrors: { [key: string]: string } = {};
  
      if (!title.trim()) {
        validationErrors.title = 'Title is required';
      }
      if (!description.trim()) {
        validationErrors.description = 'Description is required';
      }
      if (!eventTime) {
        validationErrors.eventTime = 'Event time is required';
      }
      if (tickets <= 0) {
        validationErrors.tickets = 'Tickets must be a positive number';
      }

      if (price <= 0) {
        validationErrors.price = 'Price must be a positive number';
      }
  
      if (location) {
        if (!location?.country?.trim()) {
          validationErrors.location = 'Please provide a country';
        }
        if (!location?.city?.trim()) {
          validationErrors.location = 'Please provide a city';
        }
        if (!location?.address?.trim()) {
          validationErrors.location = 'Please provide an address';
        }
      } else {
        validationErrors.location = 'Please provide a location';
      }

      console.log(images);
      
      if (images.length === 0) {
        validationErrors.images = 'Select at least one image';
      }
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        // Submit form data (replace with your actual submission logic)
        console.log('Form data:', { title, description, eventTime, tickets, images });

        try {
            const response = await axios.post(API_ENDPOINT + apiRoutes.eventPost, {
              title,
              description,
              datetime: eventTime , // Assuming eventTime holds a Moment object
              tickets,
              price,
              location,
              // Handle image upload logic here (e.g., using multipart/form-data)
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
              },
            });
    
            if (response.data) {
              console.log('Form data submitted successfully:', response.data);
              toast.success("Event created successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
              setIsSubmitted(true);
              ;

              toast.promise(
                uploadImages(response.data.id),
                {
                  pending: 'Uploading Images',
                  success: 'Images uploaded 👌',
                  error: 'Failed to upload images'
                }
            )


            } else {
              console.error('Error submitting form:', response.statusText);
              // Handle errors gracefully, e.g., display an error message to the user
              toast.error(response.statusText, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            }
          } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Failed to create event", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
              });
            // Handle errors gracefully, e.g., display an error message to the user
          } finally {
            setIsLoading(false);
          }


      }
    };

    const uploadImages = async (eventId: number | string) => {
      const formData = new FormData();

      // Add each selected image to the FormData object
      for (let i = 0; i < images.length; i++) {
        formData.append('files', images.item(i) as File); // Assuming images is a FileList
      }
    
      try {
        const response = await axios.post(
          API_ENDPOINT + apiRoutes.eventImgPost(eventId), // Assuming API route for image upload
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
          }
        );
    
        if (response.data) {
          console.log('Images uploaded successfully:', response.data);
          
          // Handle successful image upload, e.g., display a success message
        } else {
          console.error('Error uploading images:', response.statusText);
          // Handle image upload errors gracefully, e.g., display an error message
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error('Error uploading images:', error);
        throw new Error("Error uploading images");

        // Handle request errors gracefully
      } 
    }

    
    return (
        <div>
      <ToastContainer />
          
            <div className="container mt-5">
                <div className="row align-items-center ">
   
                    <div className="col-lg-8">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input className="form-control" type="text" name='title'  id='title' onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" aria-label="Title" />
                                {errors.title && <div className="text-danger">{errors.title}</div>}
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="mb-3">
                                        <label className="form-label">Event Time</label>

                                            <Datetime aria-label="Event Time" onChange={(e) => setEventTime(e)} value={eventTime} />
                                            {errors.eventTime && <div className="text-danger">{errors.eventTime}</div>}
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">No Of Tickets</label>
                                            <input className="form-control" type="number" name='tickets'  id='tickets' onChange={(e) => setTickets(e.target.value as unknown as number)}  placeholder="100" aria-label="Tickets" />
                                            {errors.tickets && <div className="text-danger">{errors.tickets}</div>}
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label htmlFor="formFileMultiple" className="form-label">Images</label>
                                            <input className="form-control" type="file" id="formFileMultiple" onChange={(e) => setImages(e.target.files as FileList)}  multiple />
                                            {errors.images && <div className="text-danger">{errors.images}</div>}

                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Price field */}
                                <div className="mb-3">
                                  <label htmlFor="price" className="form-label">Price (per ticket)</label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    name="price"
                                    id="price"
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    placeholder="0"
                                    aria-label="Price"
                                  />
                                  {errors.price && <div className="text-danger">{errors.price}</div>}
                                </div>


                                <div className="mb-3">
                <h5 className="mb-2">Location</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="locationAddress" className="form-label">
                        Address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="locationAddress"
                        id="locationAddress"
                        onChange={(e) =>
                          setLocation((prevLocation) => ({
                            ...prevLocation,
                            address: e.target.value,
                          }))
                        }
                        value={location?.address || ''}
                        placeholder="Enter address"
                        aria-label="Address"
                      />
                      {errors.location &&
                        errors.location === 'Please provide an address' && (
                          <div className="text-danger">
                            {errors.location}
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="locationCity" className="form-label">
                        City
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="locationCity"
                        id="locationCity"
                        onChange={(e) =>
                          setLocation((prevLocation) => ({
                            ...prevLocation,
                            city: e.target.value,
                          }))
                        }
                        value={location?.city || ''}
                        placeholder="Enter city"
                        aria-label="City"
                      />
                      {errors.location &&
                        errors.location === 'Please provide a city' && (
                          <div className="text-danger">
                            {errors.location}
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="locationCountry" className="form-label">
                        Country
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="locationCountry"
                        id="locationCountry"
                        onChange={(e) =>
                          setLocation((prevLocation) => ({
                            ...prevLocation,
                            country: e.target.value,
                          }))
                        }
                        value={location?.country || ''}
                        placeholder="Enter country"
                        aria-label="Country"
                      />
                      {errors.location &&
                        errors.location === 'Please provide a country' && (
                          <div className="text-danger">
                            {errors.location}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>


                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" name='description'  id='description' placeholder="Description" aria-label="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
                                {errors.description && <div className="text-danger">{errors.description}</div>}

                            </div>
                            <div className="mb-3">
                                <button className='btn btn-primary' type='submit'>Create Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewEvent;
