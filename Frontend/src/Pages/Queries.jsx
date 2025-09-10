import React, { useState } from 'react'
import Header from '../Components/Header'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router'


const Queries = () => {
    const [Name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [priority, setPriority] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [statas,setStatus] = useState("");
    const Navigate = useNavigate();
    async function handlesubmit(e){
        e.preventDefault();
        if (!Name.trim() || !email.trim() || !subject.trim() || !priority.trim() || !category.trim() || !description.trim()) {
            toast.error('Please fill in all required details!');
            return;
        }

        try {
            await axios.post('https://ticketsupportsystem-rmo0.onrender.com/get_Tickets', {
                Name, email, subject, priority, category, statas, description
            });

            toast.success('Created successfully!');
            Navigate('/Home');
        } catch (e) {
            toast.error('Submission failed.');
            console.error(e);
            if (e.response?.status === 429) {
                toast.error('Slow down! Too many requests.', {
                    duration: 3000,
                    icon: <Angry />
                });
            }
        }

    }
    return (
        <div data-theme="forest" className="min-h-screen bg-base-200">
            <Header />

            <div className="flex items-center justify-center py-10 px-4">
                <form 
                onSubmit={handlesubmit}
                className=" shadow-xl rounded-2xl p-8 w-full max-w-2xl space-y-5 bg-base-content"
                >
                <h2 className="text-2xl font-bold text-center text-primary mb-6">
                    Submit Your Query
                </h2>

                {/* Passenger Name */}
                <div>
                    <label className="label font-medium text-gray-700">Passenger Name *</label>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="label font-medium text-gray-700">Email *</label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="label font-medium text-gray-700">Subject *</label>
                    <input
                    type="text"
                    placeholder="Enter the subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Priority */}
                <div>
                    <label className="label font-medium text-gray-700">Priority *</label>
                    <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                    className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                    <option value="">Select option</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    </select>
                </div>

                {/* Category */}
                <div>
                    <label className="label font-medium text-gray-700">Category *</label>
                    <select name="category" required
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="" disabled selected>Select issue category</option>

                        <optgroup label="Service Related">
                            <option value="Delayed Bus">Delayed Bus</option>
                            <option value="Overcrowding">Overcrowding</option>
                            <option value="Bus Condition">Bus Condition</option>
                            <option value="Cleanliness">Cleanliness</option>
                        </optgroup>

                        <optgroup label="Staff Related">
                            <option value="Rude Staff">Rude Staff</option>
                            <option value="Driver Behavior">Driver Behavior</option>
                        </optgroup>

                        <optgroup label="Passenger Related">
                            <option value="Lost Belongings">Lost Belongings</option>
                            <option value="Overcharging">Overcharging</option>
                            <option value="Safety Concern">Safety Concern</option>
                        </optgroup>

                        <optgroup label="Technical / Other">
                            <option value="Ticketing Issue">Ticketing Issue</option>
                            <option value="App or Website Issue">App or Website Issue</option>
                            <option value="Accessibility Issue">Accessibility Issue</option>
                            <option value="Other">Other</option>
                        </optgroup>
                        </select>

                </div>

                {/* Status */}
                <div>
                    <label className="label font-medium text-gray-700">Status *</label>
                    <select
                    value={statas}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                    <option value="" disabled>Select status</option>
                    <option value="Opened">Opened</option>
                    </select>
                </div>

                {/* Description */}
                <div>
                    <label className="label font-medium text-gray-700">Description *</label>
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your issue...Mention Route and time"
                    rows="4"
                    required
                    className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button 
                    type="submit" 
                    className="btn btn-primary px-6 w-full sm:w-auto"
                    >
                    Submit Query
                    </button>
                    <button 
                    type="button"
                    className="btn btn-outline btn-accent px-6 w-full sm:w-auto"
                    onClick={() => {
                        setName("");
                        setEmail("");
                        setSubject("");
                        setPriority("");
                        setCategory("");
                        setDescription("");
                    }}
                    >
                    Clear
                    </button>
                </div>
                </form>
            </div>
            </div>

    )
}

export default Queries
