import '../styles/gallery-modal.css'

export default function GalleryModal({ open, onClose, items }) {
  if (!open) return null

  return (
    <div className="gallery-modal" role="dialog" aria-modal="true" aria-label="Product gallery">
      <div className="gallery-modal__backdrop" onClick={onClose} />

      <div className="gallery-modal__panel">
        <div className="gallery-modal__header">
          <h3>Product Gallery</h3>
          <button type="button" onClick={onClose} aria-label="Close gallery">×</button>
        </div>

        <div className="gallery-modal__grid">
          {items.map((item, index) => (
            <article className="gallery-modal__card" key={`${item.name}-${index}`}>
              <div className="gallery-modal__image-wrap">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <p>{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
