export const site = {
  name: "Vectorworks Spotlight Training",
  company: "STB Services",
  url: "https://vectorworks-spotlight-training.nl",
  description: "Cursussen, 2D & 3D Tekenwerk en Visualisaties in Vectorworks Spotlight",
  email: "info@vectorworks-spotlight-training.nl",
  phoneDisplay: "+31 (0)6 25522442",
  phoneHref: "tel:+31625522442",
  addressLines: ["Parallelweg 30", "5223 AL", "'s-Hertogenbosch"],
  kvk: "30226252",
  btw: "NL001685860B73",
  trainer: {
    name: "Sebastiaan ten Broek",
    role: "Trainer en Vectorworks specialist",
    bio: "Meer dan 20 jaar ervaring in de evenementenbranche en sinds 2010 intensief actief met Vectorworks voor ontwerp, voorbereiding en visualisatie."
  },
  trainingMenu: [
    { label: "Vectorworks Basis Cursus", href: "/cursus-vectorworks-basis/" },
    { label: "Vectorworks Spotlight cursus", href: "/cursus-spotlight/" },
    { label: "Cursus Vectorworks 3D", href: "/cursus-3d/" },
    { label: "Cursus Vectorworks Rendering", href: "/cursus-rendering/" },
    { label: "Cursus op maat", href: "/cursus-op-maat/" }
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/VectorworksSpotlightTraining"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sebastiaan-ten-broek-248b713b/"
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCCTuFRgTDr-w5HLEUv6jezg"
    }
  ],
  navigation: [
    { label: "Trainingen", href: "/trainingen/" },
    { label: "Tekenwerk", href: "/2d-3d-tekenwerk/" },
    { label: "Nieuws", href: "/nieuws/" },
    { label: "Over mij", href: "/over-mij/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Contact", href: "/contact/" }
  ],
  legal: [
    { label: "Privacyverklaring", href: "/privacyverklaring/" },
    { label: "Algemene voorwaarden", href: "/algemene-voorwaarden/" },
    { label: "Cookiebeleid", href: "/cookiebeleid-eu/" }
  ]
} as const;

export function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, site.url).toString();
}
