const partners = [
    { name: 'Marquee Item 1' },
    { name: 'Marquee Item 2' },
    { name: 'Marquee Item 3' },
    { name: 'Marquee Item 4' },
    { name: 'Marquee Item 5' },
]

const Marquee = () => {
  return (
    <section>
        <p className="text-xs uppercase font-bold text-secondary text-center">
            supported by
        </p>
        <div className="relative flex overflow-x-hidden mt-6 mb-20">
            <div className="py-12 animate-marquee whitespace-nowrap">
                {partners.map((partner, index) => (
                    <span key={index} className="mx-4 md:text-4xl text-2xl md:my-9 my-7">{partner.name}</span>
                ))}
            </div>
            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                {partners.map((partner, index) => (
                    <span key={index} className="mx-4 text-4xl my-9">{partner.name}</span>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Marquee