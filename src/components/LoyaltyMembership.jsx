import '../styles/loyalty-membership.css'

const tiers = [
  {
    name: 'Saver',
    points: '1 point per MWK 1,000 spent',
    highlight: 'Weekend specials and pantry bundle discounts.',
  },
  {
    name: 'Family Plus',
    points: '2 points per MWK 1,000 spent',
    highlight: 'Extra points on produce, bakery, and dairy every Friday.',
  },
  {
    name: 'Gold Circle',
    points: '3 points per MWK 1,000 spent',
    highlight: 'Priority checkout and exclusive monthly member coupons.',
  },
]

const memberPerks = [
  'Member-only weekly offers',
  'Best customer of the month shopping rewards',
  'Points redemption on selected essentials',
]

export default function LoyaltyMembership() {
  return (
    <section className="loyalty-membership" id="membership">
      <div className="loyalty-membership__container">
        <div className="loyalty-membership__intro">
          <p className="loyalty-membership__eyebrow">Loyalty Club</p>
          <h2>Reward every family shopping trip with points.</h2>
          <p>
            The Family Fair Membership helps customers save more on groceries, unlock member deals,
            and keep coming back with practical rewards.
          </p>
        </div>

        <div className="loyalty-membership__grid">
          {tiers.map((tier) => (
            <article key={tier.name} className="loyalty-membership__card">
              <h3>{tier.name}</h3>
              <p className="loyalty-membership__points">{tier.points}</p>
              <p>{tier.highlight}</p>
            </article>
          ))}
        </div>

        <div className="loyalty-membership__benefits">
          {memberPerks.map((perk) => (
            <span key={perk}>{perk}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
