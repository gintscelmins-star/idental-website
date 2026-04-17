import {
  Phone, MapPin, Clock, Star, ChevronDown, ArrowRight,
  Sparkles, ShieldCheck, BadgeCheck, Smile, Stethoscope,
  Baby, Zap, Crown, Droplets
} from 'lucide-react'

const services = [
  { icon: Crown, name: 'Zobu implanti', desc: 'Straumann un Osstem implanti — ilgmūžīgs risinājums ar dabīgu izskatu.' },
  { icon: Sparkles, name: 'Estētiskā zobārstniecība', desc: 'Venīri, balināšana un elaineri — jūsu sapņu smaids.' },
  { icon: Droplets, name: 'Zobu higiēna', desc: 'Profesionāla higiēna un profilakse visai ģimenei.' },
  { icon: Zap, name: 'Ārkārtas palīdzība', desc: 'Palīdzam akūtu sāpju gadījumos arī bez iepriekšēja pieraksta.' },
  { icon: Stethoscope, name: 'Protezēšana', desc: 'Kroņi, tilti un pilna mutes rehabilitācija.' },
  { icon: Baby, name: 'Bērnu zobārstniecība', desc: 'Maiga, bērnam draudzīga pieeja no pirmā apmeklējuma.' },
]

const stats = [
  { n: '22+', label: 'Gadi tirgū' },
  { n: '20+', label: 'Speciālisti' },
  { n: '302', label: 'Google atsauksmes' },
  { n: '4.7★', label: 'Vērtējums' },
]

const steps = [
  { n: '01', title: 'Pierakstīšanās', desc: 'Online, WhatsApp vai pa tālruni — vienkārši un ērti.' },
  { n: '02', title: 'Konsultācija', desc: 'Ārsts iepazīstas ar situāciju un piedāvā risinājumu.' },
  { n: '03', title: 'Ārstēšana', desc: 'Profesionāla aprūpe modernā vidē bez stresa.' },
  { n: '04', title: 'Jūsu smaids', desc: 'Kontroles vizīte un ilgtermiņa atbalsts.' },
]

const team = [
  { name: 'Dr. Anna Bērziņa', spec: 'Implantologs', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'Dr. Māris Kalniņš', spec: 'Estētiskā zobārstniecība', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80' },
  { name: 'Dr. Olga Petrova', spec: 'Endodontija', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
  { name: 'Dr. Jānis Ozols', spec: 'Bērnu zobārstniecība', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
]

const reviews = [
  { name: 'Anna K.', text: 'Lieliski speciālisti! Implants izveidots precīzi, bez sāpēm. Noteikti iesaku!' },
  { name: 'Jānis M.', text: 'Ātrs pieraksts, draudzīga komanda. Bērni vairs nebaidās pie zobārsta.' },
  { name: 'Olga S.', text: 'Venīri izskatās fantastiski. Profesionālisms augstākajā līmenī.' },
]

const faqs = [
  ['Vai pieņemat jaunus pacientus?', 'Jā, iDental pieņem jaunus pacientus. Pierakstieties online vai zvaniet.'],
  ['Kāds ir darba laiks?', 'Strādājam katru dienu, arī nedēļas nogalēs, no 9:00 līdz 20:00.'],
  ['Vai ir pieejama ārkārtas palīdzība?', 'Jā — akūtu sāpju gadījumā palīdzam arī bez iepriekšēja pieraksta darba laikā.'],
  ['Kādās valodās strādājat?', 'Mūsu komanda apkalpo latviešu, krievu un angļu valodā.'],
  ['Kā notiek implanta uzstādīšana?', 'Implants tiek uzstādīts vietējā anestēzijā. Process ir bezbolīgs — lielākā daļa pacientu pēc procedūras dodas uz darbu.'],
  ['Vai piedāvājat maksājumu plānus?', 'Jā, piedāvājam iespēju sadalīt maksājumu — jautājiet mūsu administrācijai.'],
]

export default function Home() {
  return (
    <main className="bg-white text-slate-800" style={{fontFamily: 'DM Sans, sans-serif'}}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div style={{fontFamily: 'Playfair Display, serif'}} className="text-2xl font-bold text-cyan-700">iDental</div>
          <div className="hidden md:flex gap-8 text-sm text-slate-600 font-medium">
            {['Pakalpojumi','Cenas','Komanda','Atsauksmes','FAQ','Kontakti'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-cyan-600 transition-colors">{l}</a>
            ))}
          </div>
          <a href="#kontakti" className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md">
            Pierakstīties →
          </a>
        </div>
      </nav>

      {/* HERO — full screen smile photo + overlay */}
      <section className="relative min-h-screen flex flex-col justify-end">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=90"
            alt="Smaids"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay — bottom heavy for text readability */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(8,35,50,0.25) 0%, rgba(8,35,50,0.55) 50%, rgba(6,100,130,0.92) 100%)'}} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-0 w-full">
          <div className="max-w-2xl pt-32 pb-16">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/25">
              <MapPin size={14} /> Tērbatas iela 78, Rīga
            </div>
            <h1 style={{fontFamily: 'Playfair Display, serif', lineHeight: '1.12'}} className="text-5xl md:text-7xl font-bold text-white mb-6">
              Jūsu smaids —<br /><span className="text-cyan-300">mūsu ekspertīze.</span>
            </h1>
            <p className="text-xl text-cyan-100 leading-8 mb-10 max-w-lg">
              Premium zobārstniecība Rīgas centrā. 22 gadu pieredze, 20+ speciālisti, sirsnīga attieksme.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#kontakti" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-xl text-lg">
                Pierakstīties online <ArrowRight size={20} />
              </a>
              <a href="https://wa.me/37127778858" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all text-lg">
                <Phone size={18} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/20 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.n} className="text-white">
                <div style={{fontFamily: 'Playfair Display, serif'}} className="text-3xl font-bold">{s.n}</div>
                <div className="text-cyan-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAKALPOJUMI */}
      <section id="pakalpojumi" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">Ko mēs darām</div>
            <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl md:text-5xl font-bold text-slate-900">Mūsu pakalpojumi</h2>
            <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">No implantiem līdz estētikai — viss vienā vietā.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.name} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                    <Icon size={26} className="text-cyan-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 style={{fontFamily: 'Playfair Display, serif'}} className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                  <p className="text-slate-500 leading-7">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CENAS */}
      <section id="cenas" className="py-24" style={{background: '#f0fdfc'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">Caurspīdīgums</div>
            <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl md:text-5xl font-bold text-slate-900">Orientējošās cenas</h2>
            <p className="mt-4 text-slate-500 text-lg">Precīzu piedāvājumu sagatavosim pēc bezmaksas konsultācijas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Zobu implanti', icon: Crown, items: ['Straumann — no 800 €','Osstem — no 750 €','Implanta vainags — individuāli','Konsultācija — pēc pieraksta'] },
              { title: 'Estētika', icon: Sparkles, featured: true, items: ['Balināšana — no 180 €','Venīri (1 zobs) — no 750 €','Elaineri — individuāli','Kompozīts — no 80 €'] },
              { title: 'Higiēna', icon: Droplets, items: ['Higiēna — no 95 €','Starpzobu apstrāde — iekļauta','Rentgens — no 15 €','Konsultācija — no 30 €'] },
            ].map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className={`rounded-3xl overflow-hidden shadow-sm border transition-all hover:shadow-xl ${ p.featured ? 'border-cyan-400 ring-2 ring-cyan-400' : 'border-slate-200'}`}>
                  <div className={`p-6 flex items-center gap-4 ${ p.featured ? 'bg-cyan-600' : 'bg-white'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.featured ? 'bg-white/20' : 'bg-cyan-100'}`}>
                      <Icon size={22} className={p.featured ? 'text-white' : 'text-cyan-600'} />
                    </div>
                    <h3 style={{fontFamily: 'Playfair Display, serif'}} className={`text-xl font-bold ${p.featured ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
                    {p.featured && <span className="ml-auto text-xs bg-white/20 text-white px-3 py-1 rounded-full">Populārs</span>}
                  </div>
                  <div className="bg-white p-6">
                    <ul className="space-y-3">
                      {p.items.map(i => <li key={i} className="flex items-start gap-3 text-slate-600"><BadgeCheck size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />{i}</li>)}
                    </ul>
                    <a href="#kontakti" className="mt-6 block text-center bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 font-semibold py-3 rounded-2xl transition-all text-sm">
                      Pierakstīties →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-center mt-8 text-slate-400 text-sm">* Cenas ir indikatīvas. Precīzu piedāvājumu sagatavosim pēc konsultācijas.</p>
        </div>
      </section>

      {/* KĀ TAS NOTIEK */}
      <section className="py-24" style={{background: 'linear-gradient(135deg, #0891b2, #0e7490)'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-200 font-semibold text-sm uppercase tracking-widest mb-3">Vienkārši soļi</div>
            <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl md:text-5xl font-bold text-white">Kā tas notiek?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 border-2 border-white/30" style={{fontFamily: 'Playfair Display, serif'}}>{s.n}</div>
                <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-cyan-100 text-sm leading-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMANDA */}
      <section id="komanda" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">Mūsu cilvēki</div>
            <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl md:text-5xl font-bold text-slate-900">Komanda</h2>
            <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">20+ pieredzējuši speciālisti jūsu aprūpei.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="group rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden h-72">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-white">
                  <div style={{fontFamily: 'Playfair Display, serif'}} className="font-bold text-slate-900 text-lg">{t.name}</div>
                  <div className="text-sm text-cyan-600 font-medium mt-1">{t.spec}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATSAUKSMES */}
      <section id="atsauksmes" className="py-24" style={{background: '#f0fdfc'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">Pacientu viedoklis</div>
            <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl md:text-5xl font-bold text-slate-900">Ko saka mūsu pacienti</h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              {[...Array(5)].map((_,i) => <Star key={i} size={20} className="text-amber-400" fill="currentColor" />)}
              <span className="text-slate-500 ml-2">4.7 · 302 Google atsauksmes</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_,i) => <Star key={i} size={16} className="text-amber-400" fill="currentColor" />)}
                </div>
                <p className="text-slate-600 leading-8 text-lg">&ldquo;{r.text}&rdquo;</p>
                <div style={{fontFamily: 'Playfair Display, serif'}} className="mt-6 font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-cyan-500" /> {r.name} · Google
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">Jautājumi</div>
            <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl md:text-5xl font-bold text-slate-900">Biežāk uzdotie jautājumi</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(([q,a]) => (
              <details key={q} className="group bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-200 rounded-2xl p-6 transition-all cursor-pointer">
                <summary className="font-semibold text-slate-900 flex justify-between items-center list-none text-lg">
                  {q} <ChevronDown size={20} className="text-cyan-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <p className="mt-4 text-slate-600 leading-7">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKTI */}
      <section id="kontakti" className="py-24" style={{background: 'linear-gradient(135deg, #0891b2, #0e7490)'}}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div className="text-white">
            <div className="text-cyan-200 font-semibold text-sm uppercase tracking-widest mb-4">Sazināties</div>
            <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl md:text-5xl font-bold mb-6">Pierakstieties šodien</h2>
            <p className="text-cyan-100 text-lg mb-10">Mēs atbildēsim pēc iespējas ātrāk. Konsultācija — bez maksas.</p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0"><MapPin size={20} className="text-white" /></div>
                <div><div className="font-semibold text-white">Adrese</div><div className="text-cyan-100">Tērbatas iela 78, Rīga, LV-1001</div></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0"><Phone size={20} className="text-white" /></div>
                <div><div className="font-semibold text-white">Tālrunis</div><div className="text-cyan-100">+371 63 030 347</div></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0"><Clock size={20} className="text-white" /></div>
                <div><div className="font-semibold text-white">Darba laiks</div><div className="text-cyan-100">Katru dienu 9:00–20:00</div></div>
              </div>
            </div>
            <div className="mt-10 rounded-2xl overflow-hidden border-2 border-white/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.0!2d24.1343265!3d56.9591135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece3529e15205%3A0xbc7eb07a0c37b6b5!2siDental!5e0!3m2!1slv!2slv!4v1" width="100%" height="220" style={{border:0}} loading="lazy" />
            </div>
          </div>
          <form className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 style={{fontFamily: 'Playfair Display, serif'}} className="text-2xl font-bold text-slate-900 mb-6">Pieraksta forma</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" placeholder="Vārds, uzvārds" />
              <input className="rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" placeholder="Tālrunis" />
            </div>
            <input className="mt-4 rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" placeholder="E-pasts" />
            <select className="mt-4 rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-500 transition">
              <option value="">Izvēlieties pakalpojumu</option>
              <option>Zobu implanti</option>
              <option>Estētiskā zobārstniecība</option>
              <option>Zobu higiēna</option>
              <option>Ārkārtas palīdzība</option>
              <option>Protezēšana</option>
              <option>Bērnu zobārstniecība</option>
              <option>Cits jautājums</option>
            </select>
            <textarea className="mt-4 rounded-xl border border-slate-200 p-4 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" rows={4} placeholder="Papildu informācija vai jautājums" />
            <button type="submit" className="mt-5 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg">
              Nosūtīt pieprasījumu →
            </button>
            <p className="text-xs text-slate-400 mt-4 text-center">Atbildēsim darba laikā. Dati apstrādāti saskaņā ar GDPR.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div style={{fontFamily: 'Playfair Display, serif'}} className="text-white text-2xl font-bold">iDental</div>
          <div className="text-sm text-center">© 2026 iDental · Tērbatas iela 78, Rīga · Katru dienu 9:00–20:00</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privātuma politika</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
