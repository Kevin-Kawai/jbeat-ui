export default {
  title: 'Structure',
  parameters: {
    layout: 'fullscreen'
  }
};

export const NavigationHeader = () => `
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
  </header>
`;

export const HeaderWithBrand = () => `
  <header>
    <div>
      <h1>Brand Name</h1>
    </div>
    <nav>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Docs</a>
      <a href="#">Sign In</a>
    </nav>
  </header>
`;

export const SimpleHeader = () => `
  <header>
    <h2>Site Title</h2>
    <nav>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </nav>
  </header>
`;

export const Article = () => `
  <article>
    <h1>Article Element</h1>
    <p>The article element provides a centered layout with maximum width for comfortable reading (65 characters wide). It includes padding for proper spacing.</p>
    <p>This is perfect for blog posts and long-form content where readability is important.</p>
  </article>
`;

export const FullPageLayout = () => `
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Posts</a>
    </nav>
  </header>

  <article>
    <h1>Blog Post Title</h1>
    <p>Published on December 23, 2025</p>

    <h2>Introduction</h2>
    <p>This example shows how the navigation header works together with an article element to create a complete page layout.</p>

    <p>The header stays at the top with the navigation, while the article content is centered below with comfortable reading width.</p>

    <h3>Key Features</h3>
    <ul>
      <li>Fixed-width navigation header across the top</li>
      <li>Centered article content for readability</li>
      <li>Clean visual hierarchy</li>
    </ul>
  </article>
`;

export const BlogPost = () => `
  <header>
    <h1>Tech Blog</h1>
    <nav>
      <a href="#">Articles</a>
      <a href="#">Tutorials</a>
      <a href="#">About</a>
    </nav>
  </header>

  <article>
    <h1>The Complete Guide to CSS Typography</h1>
    <p>Published on December 23, 2025 by Kevin</p>

    <h2>Introduction</h2>
    <p>Typography is one of the most important aspects of web design. Good typography can make your content more readable, accessible, and enjoyable to consume.</p>

    <h2>The Basics</h2>
    <p>When setting up typography for the web, there are several key considerations:</p>
    <ul>
      <li>Font family selection</li>
      <li>Font size and scale</li>
      <li>Line height and spacing</li>
      <li>Color and contrast</li>
    </ul>

    <h3>Font Families</h3>
    <p>Choosing the right font family is crucial. For body text, you want something highly readable. For headings, you might choose something with more personality.</p>

    <h3>Size and Scale</h3>
    <p>A well-defined typographic scale creates visual hierarchy and helps guide readers through your content.</p>

    <h2>Best Practices</h2>
    <ol>
      <li>Use a limited number of font families (2-3 maximum)</li>
      <li>Ensure sufficient contrast for accessibility</li>
      <li>Set comfortable line heights (1.5-1.6 for body text)</li>
      <li>Use appropriate line lengths (45-75 characters)</li>
    </ol>

    <h2>Conclusion</h2>
    <p>Typography is an art and a science. By following these guidelines and using a system like <a href="#">jbeat-ui</a>, you can create beautiful, readable content for your blog.</p>
  </article>
`;
