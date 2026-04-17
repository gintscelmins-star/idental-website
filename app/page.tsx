import { ArrowRight, BadgeCheck, MapPin, Phone, Star, ShieldCheck, Clock3, Sparkles, ChevronDown } from 'lucide-react'

const services = [
  { icon: '🦷', name: 'Zobu implanti', desc: 'Premium implanti (Straumann, Osstem) — dabīgs izskats un stabilitāte uz mūžu.' },
  { icon: '✨', name: 'Estētiskā zobārstniecība', desc: 'Balināšana, venīri, elaineri — ideāls smaids jūsu dzīvesstilam.' },
  { icon: '🧹', name: 'Zobu higiēna', desc: 'Saudzīga profesionāla higiēna un profilakse katrai ģimenei.' },
  { icon: '🚨', name: 'Ārkārtas palīdzība', desc: 'Steidzama palīdzība sāpju un akūtu problēmu gadījumos.' },
  { icon: '🔩', name: 'Protezēšana', desc: 'Kroņi, tilti un pilna mutes rehabilitācija augstā kvalitātē.' },
  { icon: '👶', name: 'Bērnu zobārstniecība', desc: 'Maiga, bērnam draudzīga pieeja no pirmā apmeklējuma.' },
]

const prices = [
  { title: 'Zobu implanti', items: ['Straumann implants — no 800 €', 'Osstem implants — no 750 €', 'Implanta vainags — individuāli', 'Konsultācija — pēc pieraksta'] },
  { title: 'Estētiskā zobārstniecība', items: ['Zobu balināšana — no 180 €', 'Venīri (1 zobs) — no 750 €', 'Elaineri/Invisalign — individuāli', 'Kompozītā restaurācija — no 80 €'] },
  { title: 'Higiēna un profilakse', items: ['Zobu higiēna — no 95 €', 'Starpzobu apstrāde — iekļauta', 'Rentgens — no 15 €', 'Konsultācija — no 30 €'] },
]

const steps = [
  { n: '01', title: 'Pierakstīšanās', desc: 'Online, WhatsApp vai pa tālruni — ātri un ērti.' },
  { n: '02', title: 'Konsultācija', desc: 'Ārsts iepazīstas ar situāciju un piedāvā risinājumu.' },
  { n: '03', title: 'Ārstēšana', desc: 'Profesionāla aprūpe modernā vidē bez stresa.' },
  { n: '04', title: 'Jūsu smaids', desc: 'Kontroles vizīte un ilgtermiņa atbalsts.' },
]

const team = [
  { name: 'Dr. Ārsts', spec: 'Implantologs', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80' },
  { name: 'Dr. Speciāliste', spec: 'Estētiskā zobārstniecība', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'Dr. Kolēģis', spec: 'Endodontija', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
  { name: 'Dr. Higiēniste', spec: 'Zobu higiēna', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
]

const reviews = [
  { name: 'Anna K.', rating: 5, text: 'Lieliski speciālisti! Implants izveidots precīzi, bez sāpēm. Iesaku visiem!' },
  { name: 'Jānis M.', rating: 5, text: 'Ātrs pieraksts, draudzīga komanda. Bērni vairs nebaidās pie zobārsta.' },
  { name: 'Olga S.', rating: 5, text: 'Venīri izskatās fantastiski. Profesionālisms un estētika augstākajā līmenī.' },
]

const faqs = [
  ['Vai pieņemat jaunus pacientus?', 'Jā, iDental pieņem jaunus pacientus. Pierakstieties online vai zvaniet mums.'],
  ['Kāds ir darba laiks?', 'Strādājam katru dienu, arī nedēļas nogalēs, no 9:00 līdz 20:00.'],
  ['Vai ir pieejama ārkārtas palīdzība?', 'Jā — akūtu sāpju gadījumā palīdzam arī bez iepriekšēja pieraksta darba laikā.'],
  ['Kādās valodās strādājat?', 'Mūsu komanda apkalpo latviešu, krievu un angļu valodā.'],
  ['Kā notiek implanta uzstādīšana?', 'Implants tiek uzstādīts vietējā anestēzijā. Process ir bezsāpīgs, un lielākā daļa pacientu pēc procedūras dodas uz darbu.'],
  ['Vai piedāvājat maksājumu plānus?', 'Jā, piedāvājam iespēju sadalīt maksājumu — jautājiet mūsu administrācijai.'],
]

export default function Home() {
  return (
    <main className="bg-white text-slate-800 font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-cyan-800">iDental</div>
          <div className="hidden md:flex gap-8 text-sm text-slate-600 font-medium">
            <a href="#services" className="hover:text-cyan-700 transition-colors">Pakalpojumi</a>
            <a href="#prices" className="hover:text-cyan-700 transition-colors">Cenas</a>
            <a href="#team" className="hover:text-cyan-700 transition-colors">Komanda</a>
            <a href="#reviews" className="hover:text-cyan-700 transition-colors">Atsauksmes</a>
            <a href="#faq" className="hover:text-cyan-700 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-cyan-700 transition-colors">Kontakti</a>
          </div>
          <a href="#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow">
            Pierakstīties online
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 min-h-screen bg-gradient-to-br from-cyan-50 via-white to-slate-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Sparkles size={15} /> Rīgas centrs · Tērbatas iela 78
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Jūsu smaids —<br /><span className="text-cyan-700">mūsu ekspertīze</span>.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-lg">
              Premium zobārstniecības klīnika Rīgā ar 22+ gadu pieredzi. Specializācija: zobu implanti un estētiskā zobārstniecība.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-7 py-4 rounded-full transition-all shadow-lg hover:shadow-xl">
                Pierakstīties online <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/37127778858" className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 font-semibold px-7 py-4 rounded-full transition-all">
                💬 WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2"><Star className="text-amber-400" size={16} fill="currentColor" /> 4.7/5 · 302 atsauksmes</span>
              <span className="flex items-center gap-2"><Clock3 size={16} className="text-cyan-600" /> Katru dienu 9:00–20:00</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-cyan-600" /> 22+ gadi pieredzes</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-cyan-200/30 rounded-[3rem] blur-3xl" />
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-cyan-100">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="iDental klīnika Rīgā"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-cyan-700 to-cyan-600 text-white">
                <div className="font-serif text-xl font-bold">iDental — 20+ speciālisti komandā</div>
                <div className="text-cyan-100 text-sm mt-1">Implanti · Estētika · Higiēna · Ārkārtas palīdzība</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-cyan-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm font-semibold">
          <span>⭐ 4.7/5 · 302 Google atsauksmes</span>
          <span>👨‍⚕️ 20+ speciālisti</span>
          <span>🏆 22+ gadi tirgū</span>
          <span>📅 Katru dienu 9:00–20:00</span>
          <span>🌍 LV · RU · EN</span>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-slate-900">Pakalpojumi</h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">No implantiem līdz estētikai — viss vienā vietā.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all group">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-xl text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">{s.name}</h3>
              <p className="text-slate-500 leading-7">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-slate-900">Cenas</h2>
            <p className="mt-4 text-slate-500 text-lg">Orientējošās cenas — precīzu piedāvājumu saņemsiet konsultācijā.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((p) => (
              <div key={p.title} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-cyan-700 text-white p-5">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600">
                      <span className="text-cyan-600 mt-1">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-slate-500 text-sm">* Cenas ir indikatīvas. Precīzu piedāvājumu sagatavosim pēc konsultācijas.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-slate-900">Kā tas notiek?</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-700 font-bold text-xl flex items-center justify-center mx-auto mb-4">{s.n}</div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-slate-900">Mūsu komanda</h2>
            <p className="mt-4 text-slate-500 text-lg">20+ pieredzējuši speciālisti jūsu aprūpei.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all">
                <img src={t.img} alt={t.name} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-cyan-600 mt-1">{t.spec}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-slate-900">Ko saka mūsu pacienti</h2>
          <p className="mt-4 text-slate-500">⭐ 4.7/5 — 302 Google atsauksmes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm">
              <div className="flex gap-1 mb-3">{Array(r.rating).fill(0).map((_, i) => <Star key={i} size={16} className="text-amber-400" fill="currentColor" />)}</div>
              <p className="text-slate-600 leading-7 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-4 font-semibold text-slate-900">{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-slate-900">Biežāk uzdotie jautājumi</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="bg-white border border-slate-200 rounded-2xl p-5 group">
                <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between list-none">
                  {q} <ChevronDown size={18} className="text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600 leading-7">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold">Pierakstieties šodien</h2>
            <p className="mt-4 text-cyan-100 text-lg">Mūsu komanda atbildēs pēc iespējas ātrāk.</p>
            <div className="mt-8 space-y-4 text-white/90">
              <div className="flex items-center gap-3"><MapPin size={20} /> Tērbatas iela 78, Rīga, LV-1001</div>
              <div className="flex items-center gap-3"><Phone size={20} /> +371 63 030 347</div>
              <div className="flex items-center gap-3"><BadgeCheck size={20} /> Katru dienu 9:00–20:00</div>
            </div>
            <div className="mt-8 p-5 bg-white/10 rounded-2xl">
              <div className="text-sm font-semibold text-cyan-200 mb-2">Google Maps</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.0!2d24.1343265!3d56.9591135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece3529e15205%3A0xbc7eb07a0c37b6b5!2siDental!5e0!3m2!1slv!2slv!4v1"
                width="100%" height="200" style={{border: 0, borderRadius: '1rem'}} loading="lazy"
              />
            </div>
          </div>
          <form className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Pieraksta forma</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Vārds, uzvārds" />
              <input className="rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tālrunis" />
            </div>
            <input className="mt-4 rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="E-pasts" />
            <select className="mt-4 rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-600">
              <option>Pakalpojums — izvēlieties</option>
              <option>Zobu implanti</option>
              <option>Estētiskā zobārstniecība</option>
              <option>Zobu higiēna</option>
              <option>Ārkārtas palīdzība</option>
              <option>Protezēšana</option>
              <option>Bērnu zobārstniecība</option>
              <option>Cits jautājums</option>
            </select>
            <textarea className="mt-4 rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" rows={4} placeholder="Papildu informācija vai jautājums" />
            <button type="submit" className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg text-lg">
              Nosūtīt pieprasījumu →
            </button>
            <p className="text-xs text-slate-400 mt-3 text-center">Atbildēsim darba laikā. Dati tiek apstrādāti saskaņā ar GDPR.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif text-white text-xl font-bold">iDental</div>
          <div className="text-sm">© 2026 iDental. Tērbatas iela 78, Rīga.</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privātuma politika</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
            <a href="https://www.facebook.com/identalriga" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
