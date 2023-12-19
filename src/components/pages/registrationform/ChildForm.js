// ChildForm.js
import React, { useState } from 'react';

const ChildForm = ({ index, onRemove, onUpdate }) => {
  const [childData, setChildData] = useState({
    birthDate: '',
    name: '',
    id: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChildData({
      ...childData,
      [name]: value,
    });

    onUpdate(index, {
      ...childData,
      [name]: value,
    });
  };

  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <div className='childlistitem'>
      <h4 className='childheading'>Child {index + 1}</h4>
      <ul className='inputlisttop'>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Birth’s Date:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'>
                      <input
                      type="date"
                      name="birthDate"
                      value={childData.birthDate}
                      onChange={handleInputChange}
                    />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>Name:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'><input
                      type="text"
                      name="name"
                      placeholder='Enter name'
                      value={childData.name}
                      onChange={handleInputChange}
                    /></div>
                  </div>
                </div>
              </li>
              <li>
                <div className='listlablewrp'>
                  <div className='labelinput'>
                    <label>ID:</label>
                  </div>
                  <div className='inputwrptop'>
                    <div className='inputfield inputwrpsingle'> <input placeholder='Enter ID'
                      type="text"
                      name="id"
                      value={childData.id}
                      onChange={handleInputChange}
                    /></div>
                  </div>
                </div>
              </li>
            </ul>
        <div className='wrpremovebtn'><button className='removebtn' onClick={handleRemove}>Remove Child</button></div>
    </div>
  );
};

export default ChildForm;
