import React, { useState } from 'react';
import styled from 'styled-components';
import { CgPlayListAdd, CgRemove } from 'react-icons/cg';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';

const Item = styled.div`
  width: 400px;
  border: 2px solid purple;
`;

function ServiceListItem(): JSX.Element {
  const [input, setInput] = useState(inputDisplay);
  const [serviceList, setServiceList] = useState([{ service: '' }]);

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: '' }]);
  };
  return (
    <Item>
      {serviceList.map((singleService, index) => (
        <div key={index}>
          <Item>
            <InputWithLabel
              label="Service Name"
              type="text"
              name="serviceName"
              placeholder="Title for the service"
            />
          </Item>
          <Item>
            {serviceList.length - 1 === index && serviceList.length < 9 && (
              <div>
                <CgPlayListAdd size={50} onClick={handleServiceAdd} />
              </div>
            )}
          </Item>
          <Item>
            {serviceList.length > 1 && (
              <div>
                <CgRemove size={50} />
              </div>
            )}
          </Item>
        </div>
      ))}
    </Item>
  );
}

export default ServiceListItem;
