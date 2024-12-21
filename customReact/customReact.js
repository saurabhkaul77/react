function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.textContent = reactElement.children;

    // if (reactElement.props) {
    //     if (reactElement.props.href) {
    //         domElement.setAttribute('href', reactElement.props.href);
    //     }
    //     if (reactElement.props.target) {
    //         domElement.setAttribute('target', reactElement.props.target);
    //     }
    // }

    // // Append to the container
    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type)
    domElement.textContent = reactElement.children;

    // document.innerHTML = reactElement.children

     for (const pros in reactElement.props) {
        if(pros === 'children') continue;
            domElement.setAttribute(pros, reactElement.props[pros])
        }
        container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
    },
    children: 'Click me to visit Google',
};

const mainContainer = document.querySelector('#root');

// Render the custom element
customRender(reactElement, mainContainer);
