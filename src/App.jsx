import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "./assets/hero.jpg";
import luxCakeImg from "./assets/lux-cake.jpg";
import luxCoatImg from "./assets/lux-coat.jpg";
import luxGiftImg from "./assets/lux-gift.jpg";
import deviceImg from "./assets/device.jpg";
import essentialsImg from "./assets/essentials.jpg";
import tradingImg from "./assets/trading.jpg";
import financeBooksImg from "./assets/finance-books.jpg";
import spiritualImg from "./assets/spiritual.jpg";
import cyberEssentialsImg from "./assets/cyber-essentials.jpg";
import cyberImg from "./assets/cyber.jpg";
import workspaceImg from "./assets/workspace.jpg";

const images = {
  hero: heroImg,
  luxCake: luxCakeImg,
  luxCoat: luxCoatImg,
  luxGift: luxGiftImg,
  device: deviceImg,
  essentials: essentialsImg,
  trading: tradingImg,
  financeBooks: financeBooksImg,
  spiritual: spiritualImg,
  cyberEssentials: cyberEssentialsImg,
  cyber: cyberImg,
  workspace: workspaceImg
};

const whatsappMessage = encodeURIComponent(
  "Hi! I saw your birthday wishlist and I’d love to support. Please share any details I need."
);

const sections = [
  {
    title: "💻 Main Device",
    image: images.device,
    items: [
      {
        label: "🍎 Apple MacBook Pro 14 inch M3 Pro • 18GB RAM • 1TB SSD",
        links: [{ label: "Jumia", url: "https://www.jumia.com.ng/mlp-macbook-pro-18/" }]
      },
      {
        label: "🎮 ASUS ROG Strix G16 • Core i7 • 32GB RAM • RTX 4070",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/catalog/?q=ASUS%20ROG%20Strix%20G16%20Core%20i7"
          }
        ]
      }
    ]
  },
  {
    title: "💾 Tech Essentials",
    image: images.essentials,
    items: [
      {
        label: "⚡ External SSD 1TB or 2TB",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/catalog/?q=external%20ssd%201tb"
          },
          {
            label: "Amazon",
            url: "https://www.amazon.com/s?k=external+ssd+1tb"
          }
        ]
      },
      {
        label: "🔌 USB C Hub (HDMI • SD Card • Ethernet)",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/catalog/?q=usb%20c%20hub%20hdmi%20sd%20ethernet"
          },
          {
            label: "Amazon",
            url: "https://www.amazon.com/s?k=usb+c+hub+hdmi+sd+ethernet"
          }
        ]
      },
      {
        label: "🎧 Noise Cancelling Headphones",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/catalog/?q=noise%20cancelling%20headphones"
          },
          {
            label: "Amazon",
            url: "https://www.amazon.com/s?k=noise+cancelling+headphones"
          }
        ]
      },
      {
        label: "🧑🏽‍💻 Adjustable Laptop Stand",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/catalog/?q=adjustable%20laptop%20stand"
          },
          {
            label: "Amazon",
            url: "https://www.amazon.com/s?k=adjustable+laptop+stand"
          }
        ]
      },
      {
        label: "👓 Blue Light Glasses",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/catalog/?q=blue%20light%20glasses"
          },
          {
            label: "Amazon",
            url: "https://www.amazon.com/s?k=blue+light+glasses"
          }
        ]
      }
    ]
  },
  {
    title: "📈 Trading and Finance Growth",
    image: images.trading,
    items: [
      {
        label: "💼 FundedNext Prop Firm",
        links: [{ label: "FundedNext", url: "https://fundednext.com/" }]
      }
    ]
  },
  {
    title: "📚 Trading and Finance Books",
    image: images.financeBooks,
    items: [
      {
        label: "Trading in the Zone — Mark Douglas",
        links: [
          {
            label: "Amazon",
            url: "https://www.amazon.com/Trading-Zone-Confidence-Discipline-Attitude/dp/0735201447"
          }
        ]
      },
      {
        label: "The Psychology of Money — Morgan Housel",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/the-psychology-of-money-by-morgan-housel-jumia-books-mpg11507039.html"
          }
        ]
      },
      {
        label: "Market Wizards — Jack D Schwager",
        links: [
          {
            label: "Amazon",
            url: "https://www.amazon.com/Market-Wizards-Interviews-Top-Traders/dp/1118273052"
          }
        ]
      },
      {
        label: "Atomic Habits — James Clear",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/atomic-habits-by-james-clear-jumia-books-mpg11366224.html"
          }
        ]
      }
    ]
  },
  {
    title: "📖 Spiritual and Personal Growth",
    image: images.spiritual,
    items: [
      {
        label: "📘 Bible Concordance",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/jumia-books-strongs-exhaustive-concordance-of-the-bible-151783847.html"
          }
        ]
      },
      {
        label: "📝 Customized Journal",
        links: [{ label: "Jumia", url: "https://www.jumia.com.ng/mlp-journal-diary/" }]
      }
    ]
  },
  {
    title: "🛡️ Cybersecurity Essentials",
    image: images.cyberEssentials,
    items: [
      {
        label: "TryHackMe Premium Subscription",
        links: [{ label: "TryHackMe", url: "https://tryhackme.com/pricing" }]
      },
      {
        label: "Hack The Box VIP+ Subscription",
        links: [{ label: "Hack The Box", url: "https://www.hackthebox.com/hacker/pricing" }]
      }
    ]
  },
  {
    title: "🧠 Cybersecurity Learning & Books",
    image: images.cyber,
    items: [
      {
        label: "The Web Application Hacker’s Handbook",
        links: [
          {
            label: "Amazon",
            url: "https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470"
          }
        ]
      },
      {
        label: "Blue Team Handbook Incident Response",
        links: [
          {
            label: "Amazon",
            url: "https://www.amazon.com/Blue-Team-Handbook-Incident-Response/dp/1500734756"
          }
        ]
      },
      {
        label: "Hacking: The Art of Exploitation",
        links: [
          {
            label: "Amazon",
            url: "https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441"
          }
        ]
      },
      {
        label: "Practical Malware Analysis",
        links: [
          {
            label: "Amazon",
            url: "https://www.amazon.com/Practical-Malware-Analysis-Hands-Dissecting/dp/1593272901"
          }
        ]
      }
    ]
  },
  {
    title: "🛋️ Workspace Essentials",
    image: images.workspace,
    items: [
      {
        label: "💡 Desk Lamp",
        links: [
          {
            label: "Jumia",
            url: "https://www.jumia.com.ng/slp/productive-desk-lamp"
          }
        ]
      }
    ]
  }
];

const floatingOrbs = [
  { className: "orb orb-gold", x: "-8%", y: "-18%", size: 520 },
  { className: "orb orb-slate", x: "70%", y: "-18%", size: 420 },
  { className: "orb orb-ember", x: "55%", y: "70%", size: 520 }
];

const OptimizedImage = ({ src, alt, className, imgClassName, loading = "lazy" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-frame ${className ?? ""} ${loaded ? "is-loaded" : ""}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={imgClassName}
        onLoad={() => setLoaded(true)}
      />
      <span className="image-skeleton" aria-hidden="true" />
    </div>
  );
};

export default function App() {
  const cursorRef = useRef(null);
  const [wishOpen, setWishOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const supportsHover = useMemo(() => window.matchMedia("(hover: hover)").matches, []);

  useEffect(() => {
    if (!supportsHover) {
      document.body.classList.add("no-custom-cursor");
      return;
    }

    let rafId = null;
    let cursorX = -999;
    let cursorY = -999;
    let targetX = -999;
    let targetY = -999;

    const animate = () => {
      cursorX += (targetX - cursorX) * 0.4;
      cursorY += (targetY - cursorY) * 0.4;
      document.documentElement.style.setProperty("--cursor-x", `${cursorX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${cursorY}px`);
      rafId = requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      document.body.classList.remove("cursor-hidden");
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    const handleLeave = () => document.body.classList.add("cursor-hidden");

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    document.body.classList.add("cursor-hidden");

    const tiltTargets = document.querySelectorAll(".tilt-card");
    tiltTargets.forEach((card) => {
      const handleTilt = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
      };
      const handleLeaveTilt = () => {
        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "50%");
      };
      card.addEventListener("mousemove", handleTilt);
      card.addEventListener("mouseleave", handleLeaveTilt);
    });

    const interactives = document.querySelectorAll("button, a, .wishlist-card");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-interact"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-interact"));
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      if (rafId) cancelAnimationFrame(rafId);
      tiltTargets.forEach((card) => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, [supportsHover]);

  useEffect(() => {
    if (!wishOpen) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setWishOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [wishOpen]);

  const handleCopyAccount = async () => {
    const text = "Account Number: 1855512887\nAccount Name: Adeniyi Victor Ayomide\nBank Name: Access Bank";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-body text-slate-100" id="top">
      <div className="noise-layer" aria-hidden="true" />
      <div className="grid-layer" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="data-stream" aria-hidden="true" />

      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={orb.className}
          className={orb.className}
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{ y: [0, 20, -10, 0], x: [0, -12, 12, 0] }}
          transition={{ duration: 18 + index * 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      <header className="relative z-10 px-6 pb-14 pt-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="brand" aria-label="A.V.A logo">
            <span className="logo-frame" aria-hidden="true" />
            <span className="logo-sigil" aria-hidden="true" />
            <span className="logo-text">A.V.A</span>
          </div>
          <div className="nav-links">
            <a href="#cash-support">Cash Support</a>
            <a href="#wishlist">Wishlist</a>
            <a href="#features">Highlights</a>
            <a href="https://wa.me/qr/SZAC4NZAHCV4O1" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </nav>

        <div className="hero-grid mx-auto mt-10 max-w-6xl">
          <div className="hero-copy">
            <div className="hud">
              <span className="hud-dot" />
              <span className="hud-text">Birthday Wishlist</span>
              <span className="hud-divider" />
              <span className="hud-text">Private Access</span>
            </div>
            <motion.h1
              className="mt-6 text-4xl font-display tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A curated list for a refined celebration.
            </motion.h1>
            <motion.p
              className="mt-4 text-base text-slate-300 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              First time doing a wishlist. No pressure at all. Even prayers are appreciated 🤍
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="wish-button"
                onClick={() => setWishOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={wishOpen}
              >
                <span className="wish-icon">◇</span>
                Open Wish Vault
              </button>
              <a
                className="share-button"
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            aria-hidden="true"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero-image tilt-card"
              animate={{ rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <OptimizedImage
                src={images.hero}
                alt="Luxury gift box"
                className="hero-media"
                imgClassName="hero-img"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="relative z-10 px-6 pb-10" id="cash-support">
        <div className="account-panel account-spotlight mx-auto max-w-6xl">
          <div>
            <h3 className="font-display text-2xl text-white">Cash Support</h3>
            <p className="mt-2 text-sm text-slate-300">
              If you prefer to send a cash gift, these details are right here at the top for you.
            </p>
          </div>
          <div className="account-grid">
            <div>
              <span className="account-label">Account Number</span>
              <span className="account-value">1855512887</span>
            </div>
            <div>
              <span className="account-label">Account Name</span>
              <span className="account-value">Adeniyi Victor Ayomide</span>
            </div>
            <div>
              <span className="account-label">Bank Name</span>
              <span className="account-value">Access Bank</span>
            </div>
          </div>
          <div className="account-actions">
            <button className="wish-button" type="button" onClick={handleCopyAccount}>
              {copied ? "Copied!" : "Copy Account Details"}
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-12" id="features">
        <div className="mx-auto flex max-w-6xl items-center justify-center">
          <span className="pill">Indulge in Luxury</span>
        </div>
        <div className="lux-grid mx-auto mt-10 max-w-6xl">
          <div className="lux-card tilt-card">
            <OptimizedImage src={images.luxCake} alt="Luxury cake" />
            <p className="lux-title">Treat your loved one to a timeless celebration.</p>
          </div>
          <div className="lux-card tilt-card">
            <OptimizedImage src={images.luxCoat} alt="Luxury coat" />
            <p className="lux-title">Refined choices for a bold, elevated birthday.</p>
          </div>
          <div className="lux-card tilt-card">
            <OptimizedImage src={images.luxGift} alt="Luxury gift" />
            <p className="lux-title">Celebrate in style with curated essentials.</p>
          </div>
        </div>
      </section>

      <main
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 xl:grid-cols-3"
        id="wishlist"
      >
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            className="wishlist-card tilt-card group rounded-[22px] border border-white/10 bg-slate-900/70 p-6 text-white shadow-2xl transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
          >
            <div className="card-media">
              <OptimizedImage src={section.image} alt={section.title} />
            </div>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg tracking-tight text-white">
                {section.title}
              </h2>
              <span className="badge">Wish</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm sm:text-base">
              {section.items.map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-slate-200">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-300/80 shadow-glow" />
                  <div className="item-row">
                    <span>{item.label}</span>
                    {item.links?.length ? (
                      <div className="item-links">
                        {item.links.map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </main>

      <footer className="relative z-10 px-6 pb-16 text-center text-sm text-slate-400">
        🙏🏽 Truly grateful for every form of support. Thank you for being part of my journey.
      </footer>

      <div ref={cursorRef} className="cake-cursor" aria-hidden="true">
        <div className="cake-frost" />
        <div className="cake-strawberry" />
        <div className="cake-sparkle" />
      </div>

      {wishOpen && (
        <div className="wish-overlay" role="dialog" aria-modal="true" onClick={() => setWishOpen(false)}>
          <motion.div
            className="wish-modal"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="wish-modal-header">
              <h3 className="font-display text-2xl">Wish Vault</h3>
              <button className="wish-close" onClick={() => setWishOpen(false)} aria-label="Close">
                ✕
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Select how you’d like to support. Everything is appreciated.
            </p>
            <div className="wish-actions">
              <a className="wish-action" href="#wishlist">
                💝 I’ll pick from the list
              </a>
              <a className="wish-action" href="#cash-support">
                🪪 I’ll make a transfer
              </a>
              <a
                className="wish-action"
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                💬 Send a message
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

