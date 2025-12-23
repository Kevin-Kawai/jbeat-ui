export default {
  title: 'Lists',
  parameters: {
    layout: 'padded'
  }
};

export const UnorderedList = () => `
  <article>
    <h2>Unordered List</h2>
    <p>Here's an example of an unordered (bulleted) list:</p>
    <ul>
      <li>First item in the list</li>
      <li>Second item in the list</li>
      <li>Third item in the list</li>
      <li>Fourth item with more text to show how longer items wrap and maintain proper spacing</li>
    </ul>
  </article>
`;

export const OrderedList = () => `
  <article>
    <h2>Ordered List</h2>
    <p>Here's an example of an ordered (numbered) list:</p>
    <ol>
      <li>First step in the process</li>
      <li>Second step in the process</li>
      <li>Third step in the process</li>
      <li>Fourth step with additional details and longer text to demonstrate wrapping</li>
    </ol>
  </article>
`;

export const NestedLists = () => `
  <article>
    <h2>Nested Lists</h2>
    <p>Lists can be nested within each other:</p>
    <ul>
      <li>Parent item one
        <ul>
          <li>Child item one</li>
          <li>Child item two</li>
        </ul>
      </li>
      <li>Parent item two
        <ul>
          <li>Child item one</li>
          <li>Child item two
            <ul>
              <li>Grandchild item</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Parent item three</li>
    </ul>
  </article>
`;

export const MixedLists = () => `
  <article>
    <h2>Mixed List Types</h2>
    <p>You can mix ordered and unordered lists:</p>
    <ol>
      <li>Numbered item one
        <ul>
          <li>Bulleted sub-item</li>
          <li>Another bulleted sub-item</li>
        </ul>
      </li>
      <li>Numbered item two</li>
      <li>Numbered item three
        <ul>
          <li>Bulleted sub-item</li>
        </ul>
      </li>
    </ol>
  </article>
`;

export const ListWithContent = () => `
  <article>
    <h2>Recipe Instructions</h2>
    <p>Here's a practical example of a list in a blog post:</p>
    <h3>Ingredients</h3>
    <ul>
      <li>2 cups all-purpose flour</li>
      <li>1 teaspoon baking powder</li>
      <li>1/2 teaspoon salt</li>
      <li>1 cup butter, softened</li>
    </ul>
    <h3>Instructions</h3>
    <ol>
      <li>Preheat oven to 350°F (175°C)</li>
      <li>Mix dry ingredients in a large bowl</li>
      <li>Cream butter and sugar until fluffy</li>
      <li>Combine wet and dry ingredients</li>
      <li>Bake for 25-30 minutes</li>
    </ol>
  </article>
`;
