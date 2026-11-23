---
import SiteLayout from '../../../layouts/SiteLayout.astro';
import { galleryFandoms } from '../../../data/galleries.js';

// Builds one page for every gallery listed in src/data/galleries.js,
// for example /fandom/silent-hill/art. You don't need to change anything in this file.
export function getStaticPaths() {
  const paths = [];
  for (const [slug, fandom] of Object.entries(galleryFandoms)) {
    for (const key of Object.keys(fandom.galleries)) {
      paths.push({ params: { slug, gallery: key }, props: { slug, fandom, galleryKey: key } });
    }
  }
  return paths;
}

const { slug, fandom, galleryKey } = Astro.props;
const gallery = fandom.galleries[galleryKey];
const items = gallery.items ?? [];
const siblings = Object.entries(fandom.galleries);

// Pictures and other websites open in a new tab, pages on this site open normally
const opensInNewTab = (href) => href.startsWith('http') || /\.(png|jpe?g|gif|webp)$/i.test(href);
---
<SiteLayout
  title={`${fandom.name}: ${gallery.title}`}
  description={`${gallery.title} inspired by ${fandom.name}.`}
  theme={fandom.theme}
  headerTitle={fandom.name}
  marqueeImages={fandom.gifs?.length ? fandom.gifs : undefined}
>
  <div class="win98-window">
    <div class="win98-title">📁 {fandom.name.toUpperCase()} / {gallery.title.toUpperCase()}</div>
    <div class="win98-content">
      <h3>{gallery.title}</h3>
      {gallery.intro && <p>{gallery.intro}</p>}
      <div class="gallery-nav">
        <a class="gallery-nav-button" href={`/fandom/${slug}`}>← {fandom.name}</a>
        {siblings.map(([key, sibling]) => (
          <a
            class={key === galleryKey ? 'gallery-nav-button current' : 'gallery-nav-button'}
            href={`/fandom/${slug}/${key}`}
            aria-current={key === galleryKey ? 'page' : undefined}
          >
            {sibling.title}
          </a>
        ))}
      </div>
    </div>
  </div>

  <div class="win98-window">
    <div class="win98-title">🖼️ {gallery.title.toUpperCase()}</div>
    <div class="win98-content">
      {items.length > 0 ? (
        <div class="gallery-grid">
          {items.map((item) => {
            const href = item.href ?? item.image;
            return (
              <a
                class="gallery-item"
                href={href}
                target={opensInNewTab(href) ? '_blank' : undefined}
                rel={opensInNewTab(href) ? 'noopener noreferrer' : undefined}
              >
                <div class="gallery-img">
                  <img src={item.image} alt={item.title} onerror="this.style.display='none'" />
                </div>
                <span class="gallery-title">{item.title}</span>
              </a>
            );
          })}
        </div>
      ) : (
        <p>Nothing here yet... check back soon.</p>
      )}
    </div>
  </div>
</SiteLayout>

<style is:global>
  /* The gallery pages have no right-side panels, so the middle column stretches across */
  #rightSidebar {
    display: none !important;
  }
  /* Keep the left menu at its normal width */
  @media (min-width: 851px) {
    #leftSidebar {
      flex: 0 0 196px !important;
    }
  }
</style>

<style>
  .win98-content h3 {
    margin-top: 0;
    color: var(--logo);
  }

  /* The buttons that jump between this fandom's galleries */
  .gallery-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 14px;
  }
  .gallery-nav-button {
    padding: 5px 14px;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--link);
    background: var(--panel);
    border: 1px solid var(--border);
    box-shadow: 2px 2px 0 #000000;
  }
  .gallery-nav-button:hover,
  .gallery-nav-button.current {
    background: var(--bar);
    color: var(--bar-text);
  }

  /* The picture grid */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 14px;
  }
  .gallery-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
    color: var(--link);
    text-decoration: none;
  }
  .gallery-item:hover {
    color: var(--hover-text);
  }
  .gallery-img {
    position: relative;
    aspect-ratio: 1 / 1;
    background: #000000;
    border: 1px solid var(--border);
  }
  .gallery-item:hover .gallery-img {
    border-color: var(--logo);
  }
  .gallery-img img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .gallery-title {
    font-size: 0.8rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
