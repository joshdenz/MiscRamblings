/**
 *
 * @param {string} el
 * @returns {(attrs: Object) => element} element
 * @description Takes an element type as a string and returns a function that accepts an object with key value pairs of element attributes
 */
const createElement = el => (attrs = {}) => {
  let element = document.createElement(el);

  if (Object.keys(attrs).length === 0 && attrs.constructor === Object) {
    return element;
  }

  Object.entries(attrs).forEach(attributeArray => {
    element.setAttribute(attributeArray[0], attributeArray[1]);
  });

  return element;
};

/**
 *
 * @param {...element} elms
 * @returns {(element) => void}
 * @description Returns a function that accepts a root node and appends any number of elements to the root node.
 */
const appendElements = elms => root => {
  let arrayOfElements;

  if (!Array.isArray(elms)) {
    arrayOfElements = Array.of(elms);
  } else {
    arrayOfElements = elms;
  }

  arrayOfElements.forEach(el => {
    root.appendChild(el);
  });
};

/**
 * Usage
 */

let arrayOfImageUrls = ['url1', 'url2', 'url3'];

appendElements(
  arrayOfImageUrls.map(url => {
    return createElement('img')({ src: url });
  })
)(document.getElementsByTagName('body')[0]);

// or

const imageElements = createElement('img');
const attributes = { src: 'imageurlhere', style: 'padding: 5px' };
appendElements(imageElements(attributes))(document.getElementsByTagName('body')[0]);

// or

const imageElements = createElement('img');
const attributes = { src: 'imageurlhere', style: 'padding: 5px' };
const appendElementsToNode = appendElements(imageElements(attributes));
appendElementsToNode(document.getElementsByTagName('body')[0]);
