import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min'

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === "" || tech === "") {
            M.toast({ html: 'Please enter a message an tech' });
        } else {
            console.log(message, attention, tech);
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}>

                            <option value="" disabled>
                                Select technician
                            </option>
                            <option value="John Doe">John Doe</option>
                            <option value="raji sri">raji sri</option>
                            <option value="sachi bisi">sachi bisi</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn" >Enter</a>
            </div>
        </div>
    );
};

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default EditLogModal;
