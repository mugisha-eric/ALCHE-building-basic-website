const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// menu
const mb=$('.menu-btn'),nav=$('#nav');mb&&mb.addEventListener('click',()=>mb.setAttribute('aria-expanded',nav.classList.toggle('open')));

// island map
const regions={north:['The North','Grand Bay, Pereybère and Trou aux Biches: lively resorts, shops, restaurants and calm lagoons. Boats leave from here for the small northern islands.'],
east:['The East','Belle Mare, Trou d’Eau Douce and Île aux Cerfs: long white beaches and a sheltered lagoon. Quieter, with more luxury resorts.'],
south:['The South','Wild coastline, sugar-cane fields, Mahébourg and Blue Bay Marine Park. Good for scenery, snorkelling and slower days.'],
west:['The West','Flic en Flac, Tamarin and Le Morne: the sunniest coast, with sunsets, surf, kitesurfing and dolphin trips.'],
central:['The Central Plateau','Curepipe, Moka and the Black River Gorges: cooler, greener and wetter, with crater lakes, tea and rainforest trails.']};
const rb=$('#regionbox');
$$('.isle path').forEach(p=>{const pick=()=>{$$('.isle path').forEach(x=>x.classList.remove('on'));p.classList.add('on');const r=regions[p.dataset.r];rb.innerHTML='<h3>'+r[0]+'</h3><p>'+r[1]+'</p>'};
p.addEventListener('click',pick);p.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick()}})});

// attraction filter + dialog
const dlg=$('#detail');
$$('.filters button').forEach(b=>b.addEventListener('click',()=>{$$('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));
$$('.card[data-cat]').forEach(c=>c.hidden=!(b.dataset.f==='all'||c.dataset.cat.includes(b.dataset.f)))}));
$$('.linkbtn[data-more]').forEach(b=>b.addEventListener('click',()=>{const c=b.closest('.card');
$('#d-img').src=$('img',c).src;$('#d-img').alt=$('img',c).alt;$('#d-title').textContent=$('h3',c).textContent;$('#d-text').textContent=c.dataset.more;dlg.showModal()}));
dlg&&dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});

// tabs
$$('.tabs').forEach(t=>$$('[role=tab]',t).forEach(b=>b.addEventListener('click',()=>{$$('[role=tab]',t).forEach(x=>x.setAttribute('aria-selected',x===b));
$$('.panel',t.parentElement).forEach(p=>p.hidden=p.id!==b.dataset.t)})));

// itinerary builder
const pool={beach:[['Île aux Cerfs','Boat trip to the lagoon island on the east coast, with swimming and a beach lunch.'],['Flic en Flac and Tamarin','Swim at the west coast beaches and watch the sunset.'],['Catamaran cruise','Sail the north lagoon to the small islands, with snorkelling stops.'],['Belle Mare beach','Walk the long east-coast beach, then eat fresh fish nearby.']],
nature:[['Black River Gorges National Park','Hike rainforest trails with waterfall and valley viewpoints.'],['Chamarel','See the Seven Coloured Earths and the Chamarel waterfall.'],['Pamplemousses Botanical Garden','Giant water lilies and old palms in a historic garden.'],['Île aux Aigrettes','Visit a conservation island on a guided tour from Mahébourg.']],
culture:[['Port Louis','Central Market, Caudan Waterfront and the Aapravasi Ghat.'],['Grand Bassin','A sacred crater lake and Hindu temples in the highlands.'],['Eureka House, Moka','A 19th-century Creole house and gardens.'],['Street food tour','Try dholl puri, gateau piment and alouda.']],
adventure:[['Le Morne Brabant','Guided hike up the mountain, or kitesurf in the lagoon below.'],['Blue Bay Marine Park','Snorkel over coral in a protected marine area.'],['Dolphin-watching trip','Early boat trip off the west coast with a licensed operator.'],['Gorges canyon walk','Combine a trek with a swim at a natural pool.']]};
const ib=$('#itin-form');ib&&ib.addEventListener('submit',e=>{e.preventDefault();const n=+ib.days.value,k=ib.interest.value;
const keys=Object.keys(pool),main=pool[k];let h='';
for(let i=0;i<n;i++){const a=main[i%main.length],o=pool[keys[(keys.indexOf(k)+1+i)%4]][i%4];
h+='<div class="day"><b>Day '+(i+1)+'</b><div><strong>'+a[0]+'</strong><br>'+a[1]+(i%2?'<br><em>Evening: '+o[0]+'. '+o[1]+'</em>':'')+'</div></div>'}
$('#itin-out').innerHTML='<h3>Your '+n+'-day plan</h3>'+h+'<p style="margin-top:1rem"><a href="contact.html">Send this plan with an enquiry</a> and we will adjust it.</p>'});

// contact form
const cf=$('#contact-form');cf&&cf.addEventListener('submit',e=>{e.preventDefault();if(!cf.checkValidity()){cf.reportValidity();return}
const f=cf.elements,box=$('#confirm');
box.innerHTML='<h3>Thank you, '+esc(f.name.value.trim())+'!</h3><p>Your enquiry has been received. A confirmation will be sent to <strong>'+esc(f.email.value.trim())+'</strong> and one of our Mauritius travel advisers will reply within 2 working days.</p><p>Next, you may want to read the <a href="plan.html">trip planner</a>.</p>';
box.classList.add('show');cf.reset();box.tabIndex=-1;box.focus();box.scrollIntoView({behavior:'smooth',block:'center'})});
