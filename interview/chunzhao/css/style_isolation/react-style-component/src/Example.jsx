import React  from "react";
import styled from "styled-components";

const ExampleComponent = () => {
    // props.children 
    return (
        <StyledExample>
            <p>这是styled-components样式</p>
            <span>这是props.children操作子元素，使用</span>
        </StyledExample>
    )
}
// css in js 解决样式隔离
const StyledExample = styled.div`
    color: red;
    font-size: 20px;
    p {
        color: blue;
    }
`;
export default ExampleComponent;