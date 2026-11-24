// Fechas relativas a hoy para que el prototipo siempre tenga eventos próximos (el primero es esta noche).
(function () {
  const D = ['DOM','LUN','MAR','MIÉ','JUE','VIE','SÁB'];
  const M = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  const t = new Date(); t.setHours(0, 0, 0, 0);
  const at = n => { const d = new Date(t); d.setDate(d.getDate() + n); return { day: D[d.getDay()], date: String(d.getDate()), month: M[d.getMonth()] }; };
  const base = [
    [0, { id:'nights', title:'Magenta Nights', artists:'Residents · All night long', price:'desde 20 €', base:20, genre:'House', doors:'23:00 → 03:30' }],
    [1, { id:'disco', title:'Disco Fever', artists:'Disco · Funk · Edits', status:'few', price:'desde 18 €', base:18, genre:'Pop', doors:'23:00 → 03:30' }],
    [4, { id:'noir', title:'Noir', artists:'Line-up por anunciar', status:'new', price:'desde 20 €', base:20, genre:'Techno', doors:'23:00 → 03:30' }],
    [7, { id:'fuego', title:'Fuego Latino', artists:'Reggaeton · Dembow · Salsa', price:'desde 15 €', base:15, genre:'Latin', doors:'23:00 → 03:30' }],
    [8, { id:'rosa', title:'Rosa Club', artists:'Invitado especial + Residents', price:'desde 25 €', base:25, genre:'House', doors:'23:00 → 03:30' }],
    [14, { id:'aniv', title:'Aniversario', artists:'Line-up por anunciar', status:'soldout', price:'—', base:0, genre:'House', doors:'23:00 → 03:30' }],
  ];
  window.MAGENTA_EVENTS = base.map(([n, e]) => ({ ...at(n), ...e }));
})();
