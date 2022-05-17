import React from 'react';
import './New.scss';

//images
import noPhoto2 from '../../assets/no-photo2.svg'

//MUI icons
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

//components
import Nabvar from '../../components/navbar/Nabvar';
import Sidebar from '../../components/sidebar/Sidebar';


function New({inputs, title}) {
    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Nabvar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={noPhoto2} alt="profile" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>
                                Image: <FileUploadOutlinedIcon className='icon'/>
                                </label>
                                <input type='file' id='file' style={{display: 'none'}}/>
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                                <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;