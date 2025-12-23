export default {
  title: 'Typography',
  parameters: {
    layout: 'padded'
  }
};

export const Headings = () => `
  <article>
    <h1>Heading 1</h1>
    <p>This is the largest heading style, typically used for page titles.</p>

    <h2>Heading 2</h2>
    <p>This is the second-level heading, used for major sections.</p>

    <h3>Heading 3</h3>
    <p>This is the third-level heading, used for subsections.</p>
  </article>
`;

export const Paragraphs = () => `
  <article>
    <p>This is a paragraph with some text. The line height and spacing should be comfortable to read. Typography is designed for maximum readability with a clean, modern aesthetic.</p>
    <p>Here's another paragraph to demonstrate spacing between paragraphs. Notice how the spacing creates a clear visual hierarchy without being too cluttered.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
  </article>
`;

export const Links = () => `
  <article>
    <p>This is a paragraph with a <a href="#">link in the middle</a> of the text. Links are styled with a blue color by default.</p>
    <p>Here's <a href="#">another link</a> to show hover states. Try hovering over the links to see the interaction.</p>
    <p>You can also have <a href="#">multiple</a> <a href="#">links</a> in the <a href="#">same paragraph</a>.</p>
  </article>
`;

export const Mixed = () => `
  <article>
    <h1>Article Title</h1>
    <p>This example shows how headings, paragraphs, and links work together in a typical blog post layout.</p>

    <h2>Introduction</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This paragraph contains a <a href="#">link to another page</a> for reference.</p>

    <h3>Subsection</h3>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The typography maintains consistent spacing and rhythm throughout the document.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </article>
`;
