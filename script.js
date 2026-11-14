
/* ================= DATA ================= */
var FLOWERS = [
  {id:'red-rose',   name:'Red Rose',     desc:'Classic romance, deep red petals', price:49,  img:'assets/img-01.png',   pw:26},
  {id:'pink-rose',  name:'Pink Rose',    desc:'Soft blush, sweet & gentle',      price:49,  img:'assets/img-02.png',  pw:24},
  {id:'white-rose', name:'White Rose',   desc:'Pure ivory, calm & elegant',      price:45,  img:'assets/img-03.png', pw:30},
  {id:'sunflower',  name:'Sunflower',    desc:'Big, bright & impossible to miss',price:79,  img:'assets/img-04.png',  pw:31},
  {id:'lily',       name:'White Lily',   desc:'Fragrant, graceful long stems',   price:99,  img:'assets/img-05.png',       pw:31},
  {id:'orchid',     name:'Orchid',       desc:'Exotic purple, lasts for weeks',  price:129, img:'assets/img-06.png',     pw:29},
  {id:'tulip',      name:'Tulip',        desc:'Cheerful spring favourite',       price:89,  img:'assets/img-07.png',      pw:20},
  {id:'gerbera',    name:'Gerbera Daisy',desc:'Happy pops of coral orange',      price:39,  img:'assets/img-08.png',    pw:28},
  {id:'carnation',  name:'Carnation',    desc:'Ruffled, long-lasting & sweet',   price:35,  img:'assets/img-09.png',  pw:24},
  {id:'hydrangea',  name:'Hydrangea',    desc:'Cloud-soft blue clusters',        price:119, img:'assets/img-10.png',  pw:32},
  {id:'lavender',   name:'Lavender',     desc:'Fragrant purple sprigs',          price:59,  img:'assets/img-11.png',   pw:13},
  {id:'babysbreath',name:"Baby's Breath",desc:'Airy white filler, sold per bunch',price:29, img:'assets/img-12.png',pw:29}
];
var WRAPS = [
  {id:'kraft',   name:'Classic Kraft',    desc:'Rustic brown, eco-friendly', price:49,  c1:'#C8A87E', c2:'#A9855A', tex:'assets/img-13.jpg'},
  {id:'jute',    name:'Jute Burlap',      desc:'Natural woven hessian, wrapped all around', price:69, c1:'#D9BC8C', c2:'#B28D55', tex:'assets/img-14.jpg'},
  {id:'blush',   name:'Blush Pink Matte', desc:'Soft pink, most loved',      price:79,  c1:'#F2C4CE', c2:'#DE9AAB', tex:'assets/img-15.jpg'},
  {id:'ivory',   name:'Ivory Silk',       desc:'Wedding-white sheen',        price:99,  c1:'#F5EFE0', c2:'#E0D3B4', tex:'assets/img-16.jpg'},
  {id:'sage',    name:'Sage Green',       desc:'Earthy & modern',            price:79,  c1:'#A9BC9B', c2:'#7E9570', tex:'assets/img-17.jpg'},
  {id:'midnight',name:'Midnight Black',   desc:'Bold contrast for bright blooms', price:99, c1:'#3A3A3E', c2:'#232326', tex:'assets/img-18.jpg'},
  {id:'lilac',   name:'Lavender Lilac',   desc:'Dreamy pastel purple',       price:79,  c1:'#CDBCE8', c2:'#A68FD0', tex:'assets/img-19.jpg'},
  {id:'gold',    name:'Gold Foil Luxe',   desc:'Shimmering premium finish',  price:149, c1:'#E5C56B', c2:'#C39A35', tex:'assets/img-20.jpg'}
];
/* ky = where the bow's knot sits in its photo (fraction of photo height),
   ar = photo aspect (height / width). Together they let the stage anchor every
   bow's knot on exactly the same point of the wrap, whatever the photo shape. */
var BOWS = [
  {id:'none',    name:'No Bow',        desc:'Clean, minimal twine tie',    price:0,   color:null,      img:null,                   sw:0,  ky:0,    ar:1},
  {id:'satin',   name:'Satin Ribbon',  desc:'Classic glossy bow',          price:39,  color:'#C0392B', img:'assets/img-21.png',   sw:24, ky:.47,  ar:.75},
  {id:'organza', name:'Sheer Organza', desc:'Light, floaty & soft',        price:49,  color:'#F2A9BC', img:'assets/img-22.png', sw:20, ky:.28,  ar:1},
  {id:'velvet',  name:'Velvet Bow',    desc:'Rich, plush & festive',       price:79,  color:'#5E2750', img:'assets/img-23.png',  sw:16, ky:.105, ar:1.51},
  {id:'gingham', name:'Gingham Bow',   desc:'Red-and-white picnic check',  price:59,  color:'#C23B3B', img:'assets/img-24.png', sw:21, ky:.38,  ar:.60},
  {id:'lace',    name:'Lace Bow',      desc:'Ivory lace, vintage romance', price:89,  color:'#E9DFC8', img:'assets/img-25.png',    sw:19, ky:.30,  ar:1.20},
  {id:'polka',   name:'Polka Dot Bow', desc:'Playful black grosgrain dots',price:49,  color:'#2B2B2E', img:'assets/img-26.png',   sw:21, ky:.20,  ar:.58}
];
var EXTRAS = [
  {id:'card',  name:'Handwritten greeting card', desc:'Your words, written by hand on a kraft card', price:49},
  {id:'choco', name:'Ferrero Rocher — box of 8', desc:'Because flowers + chocolate never miss',      price:299},
  {id:'teddy', name:'Mini teddy (6 inch)',       desc:'A small soft companion for the bouquet',      price:249},
  {id:'candle',name:'Scented soy candle',        desc:'Rose & sandalwood, 100g jar',                 price:199}
];
/* colour tints for the wrap — multiply-blended over the real paper texture */
var WRAP_COLORS = [
  {id:'natural', name:'As shown',      hex:null},
  {id:'blush',   name:'Blush Pink',    hex:'#E79FB4'},
  {id:'rose',    name:'Deep Rose',     hex:'#C65D74'},
  {id:'ivory',   name:'Ivory Cream',   hex:'#EFE3C8'},
  {id:'butter',  name:'Butter Yellow', hex:'#EBCB6B'},
  {id:'coral',   name:'Coral',         hex:'#EE7E63'},
  {id:'sage',    name:'Sage Green',    hex:'#9DB48C'},
  {id:'sky',     name:'Sky Blue',      hex:'#9CC3E5'},
  {id:'lilac',   name:'Lilac',         hex:'#B79FDB'},
  {id:'charcoal',name:'Charcoal',      hex:'#55555E'}
];
var WRAP_FINISHES = [
  {id:'matte',   name:'Matte',        sheen:0,   glitter:0,   pat:''},
  {id:'satin',   name:'Satin Sheen',  sheen:.34, glitter:0,   pat:''},
  {id:'glossy',  name:'Glossy',       sheen:.62, glitter:0,   pat:'brightness(1.04) contrast(1.03)'},
  {id:'metallic',name:'Metallic',     sheen:.5,  glitter:0,   pat:'saturate(1.28) contrast(1.07) brightness(1.03)'},
  {id:'glitter', name:'Glitter Dust', sheen:.22, glitter:.55, pat:'brightness(1.03)'}
];
/* ribbon colours — a sepia-based recolour filter that keeps the photo's real shading */
var BOW_COLORS = [
  {id:'natural',  name:'As shown',    hex:null,      f:''},
  {id:'red',      name:'Classic Red', hex:'#C0272D', f:'sepia(.55) saturate(2.6) hue-rotate(-45deg) brightness(1.0) contrast(.96)'},
  {id:'blush',    name:'Blush Pink',  hex:'#E79FB4', f:'sepia(.5) saturate(1.5) hue-rotate(-58deg) brightness(1.22) contrast(.94)'},
  {id:'champagne',name:'Champagne',   hex:'#E4C87F', f:'sepia(.6) saturate(1.3) hue-rotate(4deg) brightness(1.14) contrast(.95)'},
  {id:'gold',     name:'Gold',        hex:'#C9962E', f:'sepia(.7) saturate(2.3) hue-rotate(0deg) brightness(1.03) contrast(1.0)'},
  {id:'sage',     name:'Sage Green',  hex:'#93A983', f:'sepia(.5) saturate(1.4) hue-rotate(55deg) brightness(1.03) contrast(.95)'},
  {id:'sky',      name:'Sky Blue',    hex:'#8FB6DE', f:'sepia(.5) saturate(1.7) hue-rotate(168deg) brightness(1.1) contrast(.95)'},
  {id:'lilac',    name:'Lilac',       hex:'#B79FDB', f:'sepia(.5) saturate(1.6) hue-rotate(222deg) brightness(1.12) contrast(.95)'},
  {id:'plum',     name:'Deep Plum',   hex:'#6E2A52', f:'sepia(.55) saturate(1.9) hue-rotate(278deg) brightness(.85) contrast(1.0)'},
  {id:'navy',     name:'Navy',        hex:'#2E4470', f:'sepia(.6) saturate(2.0) hue-rotate(180deg) brightness(.68) contrast(1.02)'},
  {id:'ivory',    name:'Ivory',       hex:'#EFE6D2', f:'sepia(.28) saturate(.45) hue-rotate(4deg) brightness(1.34) contrast(.92)'}
];
var BOW_FINISHES = [
  {id:'classic', name:'Classic', f:'',                                        sheen:false, sparkles:false},
  {id:'glossy',  name:'Glossy',  f:' saturate(1.18) contrast(1.07) brightness(1.03)', sheen:true,  sparkles:false},
  {id:'glitter', name:'Glitter', f:' saturate(1.12) brightness(1.02)',         sheen:true,  sparkles:true}
];
/* arrangement roles: 0 = focal (centre), 1 = standard, 2 = filler (edges) */
var ROLE = {'sunflower':0,'hydrangea':0,'lily':0,'orchid':0,'babysbreath':2,'lavender':2};
function roleOf(fid){ return ROLE[fid]==null ? 1 : ROLE[fid]; }
function wrapColorById(id){ for(var i=0;i<WRAP_COLORS.length;i++) if(WRAP_COLORS[i].id===id) return WRAP_COLORS[i]; return WRAP_COLORS[0]; }
function wrapFinishById(id){ for(var i=0;i<WRAP_FINISHES.length;i++) if(WRAP_FINISHES[i].id===id) return WRAP_FINISHES[i]; return WRAP_FINISHES[0]; }
function bowColorById(id){ for(var i=0;i<BOW_COLORS.length;i++) if(BOW_COLORS[i].id===id) return BOW_COLORS[i]; return BOW_COLORS[0]; }
function bowFinishById(id){ for(var i=0;i<BOW_FINISHES.length;i++) if(BOW_FINISHES[i].id===id) return BOW_FINISHES[i]; return BOW_FINISHES[0]; }
function wrapLabel(){
  var w=wrapById(state.wrap), c=wrapColorById(state.wrapColor), f=wrapFinishById(state.wrapFinish);
  return w.name + (c.hex ? ' · ' + c.name : '') + ' · ' + f.name;
}
function bowLabel(){
  var b=bowById(state.bow), c=bowColorById(state.bowColor), f=bowFinishById(state.bowFinish);
  var s = b.name;
  if(b.img && c.hex) s += ' · ' + c.name;
  if(b.img && f.id!=='classic') s += ' · ' + f.name;
  return s;
}
var FREE_SHIP = 999, SHIP_FEE = 79, MIN_STEMS = 3, MAX_PIECES = 24;
/* the gathered neck of the wrap sits at 67.5% of the stage height; every bow's
   knot (and the plain twine tie) is anchored to that one point */
var BOW_NECK = 67.5, STAGE_AR = 1.2; /* stage aspect-ratio is 10 / 12 */
/* head crops: [x0, y0, x1, y1] — the part of each flower photo that is the
   bloom itself, measured against the real bloom in each photo so the whole
   flower head always shows, never sliced at a petal edge. The long bare
   stem in the photo is dropped — the stem stays tucked inside the wrap,
   so only the bloom ever shows. */
var HEAD = {
  'red-rose':[0,0,1,.28], 'pink-rose':[.01,.01,.79,.25], 'white-rose':[0,0,1,.70],
  'sunflower':[.10,0,.90,.38], 'lily':[0,.02,1,.98], 'orchid':[.10,.07,.92,.88],
  'tulip':[.02,.01,.67,.53], 'gerbera':[.19,.03,.81,.44], 'carnation':[.22,.07,.81,.50],
  'hydrangea':[.12,.07,.89,.94], 'lavender':[.40,.04,.58,.59], 'babysbreath':[.11,.05,.87,.54]
};
var IMG_SIZE = { 'red-rose':[232,609], 'pink-rose':[207,622], 'white-rose':[554,654],
  'sunflower':[409,583], 'lily':[800,800], 'orchid':[800,800], 'tulip':[439,700],
  'gerbera':[700,700], 'carnation':[700,700], 'hydrangea':[800,620], 'lavender':[800,457],
  'babysbreath':[579,700] };
/* the arrangement dome in 2D: head centres live on a dome seated IN
   the mouth of the wrap — the wrap's top edge sits at 37% of the stage
   height, so the dome is centred low (cy 27) and its lowest slots put
   head bottoms a few percent BELOW that edge, where the front cone
   (z-index above the pieces) covers them: the heads read as tucked
   into the wrap, never floating above it. Slots and drags are clamped
   to that ellipse, so a flower can only ever end up inside the
   bouquet area */
var DOME_CX = 50, DOME_CY = 27, DOME_RX = 31, DOME_RY = 12.5;
/* dome slots, fill order: [x% , y% , scale] — the heads alone form the
   bouquet (no leaf sprays). The FIRST slots are the seating row at the
   mouth of the wrap, so even one to three stems sit down inside the
   cone as one connected bouquet; later slots build the shoulders out
   and a soft crown up. Focal bloom takes the front-centre seat, the
   rest pack shoulder-to-shoulder around it, overlapping slightly,
   the lowest rows stepping down behind the wrap's front fold. */
var DOME_SLOTS = [
  [50,32.5,1.04],[39,30.5,1],[61,30.5,1],[50,28,1.02],
  [29.5,31,1],[70.5,31,1],[41.5,34,1.03],[58.5,34,1.03],[50,35.5,1.03],
  [33,26.5,.96],[67,26.5,.96],[24.5,28.5,.98],[75.5,28.5,.98],
  [44,23,.93],[56,23,.93],[50,20,.9],[36.5,22,.92],[63.5,22,.92],
  [36,36.5,1.02],[64,36.5,1.02],[44,37.5,1.02],[56,37.5,1.02],[30,20.5,.9],[70,20.5,.9]
];
function clampDome(x, y){
  var dx = (x - DOME_CX) / DOME_RX, dy = (y - DOME_CY) / DOME_RY, l = Math.hypot(dx, dy);
  if(l > 1){ x = DOME_CX + dx / l * DOME_RX; y = DOME_CY + dy / l * DOME_RY; }
  return { x: clamp(x, 8, 92), y: clamp(y, 10, 46) };
}

var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================= STATE ================= */
var state = { qty:{}, wrap:'jute', bow:'satin', extras:{}, payMethod:'upi',
  wrapColor:'natural', wrapFinish:'matte', bowColor:'ivory', bowFinish:'classic' };
var pieces = []; /* {uid, fid, x, y, rot} — x/y in % of stage */
var uidSeq = 1, zTop = 40;
FLOWERS.forEach(function(f){ state.qty[f.id]=0; });

function $(id){ return document.getElementById(id); }
function inr(n){ return '₹' + Math.round(n).toLocaleString('en-IN'); }
function flowerById(id){ for(var i=0;i<FLOWERS.length;i++) if(FLOWERS[i].id===id) return FLOWERS[i]; }
function wrapById(id){ for(var i=0;i<WRAPS.length;i++) if(WRAPS[i].id===id) return WRAPS[i]; }
function bowById(id){ for(var i=0;i<BOWS.length;i++) if(BOWS[i].id===id) return BOWS[i]; }
function totalStems(){ var t=0; for(var k in state.qty) t+=state.qty[k]; return t; }
function totals(){
  var flowers=0;
  FLOWERS.forEach(function(f){ flowers += state.qty[f.id]*f.price; });
  var wrap = wrapById(state.wrap), bow = bowById(state.bow), extras=0;
  EXTRAS.forEach(function(e){ if(state.extras[e.id]) extras+=e.price; });
  var subtotal = flowers + wrap.price + bow.price + extras;
  var shipping = subtotal===0 ? 0 : (subtotal>=FREE_SHIP ? 0 : SHIP_FEE);
  return {flowers:flowers, wrap:wrap, bow:bow, extras:extras, subtotal:subtotal, shipping:shipping, total:subtotal+shipping};
}
function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

/* ================= BUILD CARDS ================= */
function buildFlowers(){
  $('flowerGrid').innerHTML = FLOWERS.map(function(f){
    return '<div class="flower" id="fc-'+f.id+'">'
      + '<div class="fphoto" data-drag="flower" data-fid="'+f.id+'" role="button" aria-label="Drag '+f.name+' into the bouquet, or tap to add one" title="Drag into the bouquet, or tap to add">'
      +   '<img src="'+f.img+'" alt="'+f.name+' — real flower photo" draggable="false"><span class="drag-hint">DRAG ME</span></div>'
      + '<h3>'+f.name+'</h3><p class="fdesc">'+f.desc+'</p>'
      + '<div class="fprice">'+inr(f.price)+' <small>/ stem</small></div>'
      + '<div class="stepper">'
      +   '<button type="button" data-dec="'+f.id+'" aria-label="Remove one '+f.name+'">−</button>'
      +   '<span class="qty zero" id="qty-'+f.id+'">0</span>'
      +   '<button type="button" data-inc="'+f.id+'" aria-label="Add one '+f.name+'">+</button>'
      + '</div></div>';
  }).join('');
}
function buildOpts(){
  $('wrapGrid').innerHTML = WRAPS.map(function(w){
    return '<button type="button" class="opt" data-drag="wrap" data-wrap="'+w.id+'">'
      + '<div class="swatch" style="background:linear-gradient(135deg,'+w.c1+' 0%,'+w.c2+' 100%)"><img class="tex-photo" src="'+w.tex+'" alt="'+w.name+' wrapping paper — real photo" loading="lazy"></div>'
      + '<h3>'+w.name+'</h3><p>'+w.desc+'</p>'
      + '<div class="oprice">+ '+inr(w.price)+'</div></button>';
  }).join('');
  $('bowGrid').innerHTML = BOWS.map(function(b){
    var sw = b.img
      ? '<div class="swatch bow-swatch" style="display:flex;align-items:center;justify-content:center"><img class="bow-photo" src="'+b.img+'" alt="'+b.name+' — real photo" loading="lazy"></div>'
      : '<div class="swatch" style="background:var(--surface2);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:13px;font-weight:600">Twine tie only</div>';
    return '<button type="button" class="opt" data-drag="bow" data-bow="'+b.id+'">'+sw
      + '<h3>'+b.name+'</h3><p>'+b.desc+'</p>'
      + '<div class="oprice">'+(b.price===0?'<span class="free">Free</span>':'+ '+inr(b.price))+'</div></button>';
  }).join('');
}
function buildExtras(){
  $('extrasList').innerHTML = EXTRAS.map(function(e){
    return '<div class="extra-row" id="ex-'+e.id+'"><div class="einfo"><h3>'+e.name+'</h3><p>'+e.desc+'</p></div>'
      + '<span class="eprice">'+inr(e.price)+'</span>'
      + '<button type="button" class="add-btn" data-extra="'+e.id+'">Add</button></div>';
  }).join('');
}
function buildFinishControls(){
  $('wrapColors').innerHTML = WRAP_COLORS.map(function(c){
    return '<button type="button" class="cdot'+(c.hex?'':' natural')+'" data-wcolor="'+c.id+'" title="'+c.name+'" aria-label="Wrap colour: '+c.name+'"'+(c.hex?' style="background:'+c.hex+'"':'')+'></button>';
  }).join('');
  $('wrapFinishes').innerHTML = WRAP_FINISHES.map(function(f){
    return '<button type="button" class="fpill" data-wfinish="'+f.id+'">'+f.name+'</button>';
  }).join('');
  $('bowColors').innerHTML = BOW_COLORS.map(function(c){
    return '<button type="button" class="cdot'+(c.hex?'':' natural')+'" data-bcolor="'+c.id+'" title="'+c.name+'" aria-label="Ribbon colour: '+c.name+'"'+(c.hex?' style="background:'+c.hex+'"':'')+'></button>';
  }).join('');
  $('bowFinishes').innerHTML = BOW_FINISHES.map(function(f){
    return '<button type="button" class="fpill" data-bfinish="'+f.id+'">'+f.name+'</button>';
  }).join('');
}
/* ================= PIECES + 2D STAGE =================
   The bouquet is layered 2D artwork, front view only: real flower-head
   photos (cropped from the full stem photos, so no bare stem ever shows —
   every stem stays tucked inside the wrap) clustered on a dome, under
   the front wrap cone, with the bow photo tied at the gathered neck. Auto-arrange, palette drops and stem drags
   are all clamped to the dome, so a flower can only ever end up inside
   the bouquet area. */
var selectedUid = null;

function slotFor(i){ return DOME_SLOTS[i % DOME_SLOTS.length]; }
function addPiece(fid, pos){
  if(pieces.length >= MAX_PIECES) return null;
  var s = slotFor(pieces.length);
  var xy = pos ? clampDome(pos.x, pos.y) : { x: s[0], y: s[1] };
  var p = { uid: uidSeq++, fid: fid, x: xy.x, y: xy.y,
    rot: ((pieces.length * 47) % 36) - 18, s: pos ? 1 : s[2], born: Date.now() };
  pieces.push(p); return p;
}
/* florist's dome: focal blooms take the centre slots, fillers drift to
   the rim — every slot is on the dome, inside the bouquet area */
function arrangeAll(){
  var order = pieces.slice().sort(function(a, b){ return roleOf(a.fid) - roleOf(b.fid); });
  order.forEach(function(p, i){
    var s = slotFor(i); p.x = s[0]; p.y = s[1]; p.s = s[2];
  });
}
function removePieceByUid(uid){
  for(var i = 0; i < pieces.length; i++) if(pieces[i].uid === uid){ pieces.splice(i, 1); return; }
}
function removeLastPieceOf(fid){
  for(var i = pieces.length - 1; i >= 0; i--) if(pieces[i].fid === fid){ pieces.splice(i, 1); return; }
}

/* ---------- flower heads (2D crops of the real photos) ---------- */
function headAspect(f){
  var c = HEAD[f.id], img = IMG_SIZE[f.id];
  return (img[0] * (c[2] - c[0])) / (img[1] * (c[3] - c[1]));
}
function headBox(f, s){
  var c = HEAD[f.id], cw = c[2] - c[0], ch = c[3] - c[1];
  return {
    w: f.pw * 1.02 * (s || 1),
    ar: headAspect(f),
    bs: (100 / cw) + '% ' + (100 / ch) + '%',
    bp: (cw >= 1 ? 50 : c[0] / (1 - cw) * 100) + '% ' + (ch >= 1 ? 50 : c[1] / (1 - ch) * 100) + '%'
  };
}
function pieceEl(p){ return document.querySelector('.piece[data-uid="' + p.uid + '"]'); }
function layoutPiece(p){
  var el = pieceEl(p); if(!el) return;
  el.style.left = p.x + '%'; el.style.top = p.y + '%';
}
function renderPieces(popUid){
  $('piecesLayer').innerHTML = pieces.map(function(p){
    var f = flowerById(p.fid), hb = headBox(f, p.s);
    return '<div class="piece' + (p.uid === popUid ? ' pop' : '') + (p.uid === selectedUid ? ' sel' : '') + '" data-uid="' + p.uid + '" data-fid="' + p.fid + '" role="button" aria-label="' + f.name + ' stem — drag to move it, tap its × to remove" style="left:' + p.x + '%;top:' + p.y + '%;width:' + hb.w + '%;aspect-ratio:' + hb.ar + ';background-image:url(' + f.img + ');background-size:' + hb.bs + ';background-position:' + hb.bp + ';transform:translate(-50%,-50%) rotate(' + p.rot + 'deg);z-index:' + Math.round(p.y) + '"></div>';
  }).join('');
  $('stageEmpty').style.display = pieces.length ? 'none' : 'flex';
  positionChip();
}
function selectPiece(uid){
  selectedUid = uid;
  pieces.forEach(function(p){
    var el = pieceEl(p);
    if(el) el.classList.toggle('sel', p.uid === uid);
  });
  positionChip();
}
function positionChip(){
  var chip = $('pieceX'), sel = null;
  if(selectedUid != null) pieces.forEach(function(p){ if(p.uid === selectedUid) sel = p; });
  if(!sel){ chip.style.display = 'none'; return; }
  chip.style.display = 'flex';
  chip.style.left = sel.x + '%'; chip.style.top = sel.y + '%';
}
function rippleAt(xPct, yPct){
  if(REDUCED) return;
  var r = document.createElement('div'); r.className = 'ripple';
  r.style.left = xPct + '%'; r.style.top = yPct + '%';
  $('stage').appendChild(r);
  setTimeout(function(){ r.remove(); }, 600);
}
function rippleAtPiece(p){ rippleAt(p.x, Math.max(4, p.y - 6)); }
function addStem(fid, domePos, sourceEl){
  if(state.qty[fid] >= 30) return;
  state.qty[fid]++;
  var p = domePos ? addPiece(fid, domePos) : addPiece(fid);
  renderPieces(p ? p.uid : null);
  renderAll();
  popQty(fid);
  if(p){
    if(sourceEl) flyToPiece(sourceEl, p);
    else if(domePos) rippleAtPiece(p);
  }
}
function removeStem(fid){
  if(state.qty[fid] <= 0) return;
  state.qty[fid]--;
  removeLastPieceOf(fid);
  renderPieces(null); renderAll(); popQty(fid);
}
function removePieceStem(uid, fid){
  if(state.qty[fid] > 0) state.qty[fid]--;
  removePieceByUid(uid);
  renderPieces(null); renderAll(); popQty(fid);
}
function popQty(fid){
  var q = $('qty-' + fid); if(!q) return;
  q.classList.remove('pop'); void q.offsetWidth; q.classList.add('pop');
}
function flyToPiece(sourceEl, piece){
  if(REDUCED || !sourceEl) return;
  var sRect = sourceEl.getBoundingClientRect(), stRect = stageRect();
  if(stRect.bottom < 0 || stRect.top > window.innerHeight) return;
  var f = flowerById(piece.fid), hb = headBox(f, piece.s);
  var tw = stRect.width * hb.w / 100, th = tw / hb.ar;
  var clone = sourceEl.cloneNode();
  clone.className = 'fly-clone';
  clone.style.cssText = 'left:' + sRect.left + 'px;top:' + sRect.top + 'px;width:' + sRect.width + 'px;height:' + sRect.height + 'px;margin:0;object-fit:contain;filter:drop-shadow(0 10px 12px rgba(30,40,25,.3))';
  document.body.appendChild(clone);
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    clone.style.left = (stRect.left + piece.x / 100 * stRect.width - tw / 2) + 'px';
    clone.style.top = (stRect.top + piece.y / 100 * stRect.height - th / 2) + 'px';
    clone.style.width = tw + 'px'; clone.style.height = th + 'px'; clone.style.opacity = '.96';
  });});
  setTimeout(function(){ clone.remove(); rippleAtPiece(piece); }, 580);
}

/* ================= STAGE FINISH (wrap + bow, in 2D) ================= */
function renderStageFinish(popBow){
  var w = wrapById(state.wrap), b = bowById(state.bow);
  var wc = wrapColorById(state.wrapColor), wf = wrapFinishById(state.wrapFinish);
  var bc = bowColorById(state.bowColor), bf = bowFinishById(state.bowFinish);
  /* the picker cards keep their photo thumbnails, recoloured by the same filter */
  document.documentElement.style.setProperty('--bowf', ((bc.f || '') + (bf.f || '')).trim() || 'none');
  /* wrap: the real paper texture on every sheet and the front cone, the
     chosen colour tint multiplied over it, and the finish driving the
     sheen / glitter overlays like real paper */
  document.querySelectorAll('.wtex').forEach(function(el){
    el.style.backgroundImage = 'url(' + w.tex + ')';
    el.style.filter = wf.pat || '';
  });
  document.querySelectorAll('.wtint').forEach(function(el){
    if(wc.hex){ el.style.background = wc.hex; el.style.opacity = '.42'; }
    else { el.style.background = 'transparent'; el.style.opacity = '0'; }
  });
  document.querySelectorAll('.wsheen').forEach(function(el){ el.style.opacity = wf.sheen; });
  document.querySelectorAll('.wglitter').forEach(function(el){
    el.style.opacity = wf.glitter;
    el.style.display = wf.glitter > 0 ? 'block' : 'none';
  });
  /* bow: the real bow photo tied at the gathered neck, its knot anchored
     to the neck point whatever the photo's shape. "No Bow" shows the
     plain wound twine tie instead. */
  var bowEl = $('stageBow'), twine = $('twineTie');
  if(b.img){
    bowEl.style.display = 'block'; twine.style.display = 'none';
    if(bowEl.getAttribute('src') !== b.img) bowEl.src = b.img;
    bowEl.alt = b.name + ' tied at the neck of the bouquet';
    bowEl.style.width = b.sw + '%';
    bowEl.style.transform = 'translate(-50%,-' + Math.round(b.ky * 100) + '%)';
    bowEl.classList.remove('pop');
    if(popBow && !REDUCED){ void bowEl.offsetWidth; bowEl.classList.add('pop'); }
  } else {
    bowEl.style.display = 'none'; twine.style.display = 'block';
  }
  var stems = totalStems();
  $('stage').classList.toggle('has-stems', stems > 0);
  var sizeName = stems === 0 ? '—' : stems < 6 ? 'Petite' : stems < 12 ? 'Classic' : stems < 20 ? 'Grand' : 'Luxe';
  $('sizeLine').innerHTML = '<strong>' + stems + ' stem' + (stems === 1 ? '' : 's') + '</strong> · ' + sizeName + ' bouquet · ' + wrapLabel() + ' wrap · ' + bowLabel();
  $('previewName').textContent = $('bouquetName').value.trim() || 'Untitled';
}
/* ================= BILL + COUNT-UP ================= */
var displayedTotal = 0, totalRaf = null;
function setTotalsText(v){
  document.querySelectorAll('.count-total').forEach(function(el){ el.textContent = inr(v); });
}
function animateTotals(to){
  if(REDUCED){ displayedTotal = to; setTotalsText(to); return; }
  if(totalRaf) cancelAnimationFrame(totalRaf);
  var from = displayedTotal, start = null, dur = 480;
  var bt = $('billTotal'); bt.classList.remove('bump'); void bt.offsetWidth; bt.classList.add('bump');
  function step(ts){
    if(!start) start = ts;
    var k = Math.min(1, (ts-start)/dur), e = 1-Math.pow(1-k,3);
    var v = from + (to-from)*e;
    setTotalsText(v);
    if(k<1) totalRaf = requestAnimationFrame(step); else { displayedTotal = to; setTotalsText(to); }
  }
  totalRaf = requestAnimationFrame(step);
}
function renderBill(){
  var t = totals(), stems = totalStems(), rows='';
  FLOWERS.forEach(function(f){
    if(state.qty[f.id]>0) rows+='<div class="bill-row sub"><span>'+f.name+' × '+state.qty[f.id]+'</span><span>'+inr(state.qty[f.id]*f.price)+'</span></div>';
  });
  var head = rows ? '<div class="bill-row"><span>Flowers ('+stems+' stems)</span><span>'+inr(t.flowers)+'</span></div>'+rows : '<div class="bill-row"><span>Flowers</span><span>₹0</span></div>';
  var extrasRows='';
  EXTRAS.forEach(function(e){ if(state.extras[e.id]) extrasRows+='<div class="bill-row"><span>'+e.name+'</span><span>'+inr(e.price)+'</span></div>'; });
  $('billLines').innerHTML = head
    + '<div class="bill-row"><span>Wrapping — '+wrapLabel()+'</span><span>'+inr(t.wrap.price)+'</span></div>'
    + '<div class="bill-row"><span>Bow — '+bowLabel()+'</span><span>'+(t.bow.price?inr(t.bow.price):'Free')+'</span></div>'
    + extrasRows
    + '<hr><div class="bill-row"><span>Subtotal</span><span>'+inr(t.subtotal)+'</span></div>'
    + '<div class="bill-row"><span>Delivery</span><span>'+(t.subtotal===0?'—':(t.shipping===0?'<span class="free-del">FREE</span>':inr(t.shipping)))+'</span></div>';
  animateTotals(t.total);

  var pct = Math.min(100, Math.round(t.subtotal/FREE_SHIP*100));
  $('shipFill').style.width = pct+'%';
  $('shipNote').innerHTML = t.subtotal>=FREE_SHIP
    ? 'You unlocked <strong>FREE delivery</strong>.'
    : (t.subtotal>0 ? 'Add '+inr(FREE_SHIP - t.subtotal)+' more for FREE delivery (otherwise '+inr(SHIP_FEE)+').' : 'Free delivery on orders over '+inr(FREE_SHIP)+'.');

  var canPay = stems>=MIN_STEMS;
  $('checkoutBtn').disabled = !canPay;
  $('mobileCheckout').disabled = !canPay;
  $('checkoutHint').textContent = canPay ? 'Taxes included. Pay by UPI, card, or cash on delivery.' : 'Add at least '+MIN_STEMS+' stems to check out — you have '+stems+'.';
  $('mobileStems').textContent = stems+' stem'+(stems===1?'':'s');
  $('payBtn').innerHTML = state.payMethod==='cod' ? 'Place order · Pay '+inr(t.total)+' on delivery' : 'Pay '+inr(t.total);
  renderOrderMini();
}
function renderOrderMini(){
  var t = totals(), items=[];
  FLOWERS.forEach(function(f){ if(state.qty[f.id]>0) items.push(f.name+' × '+state.qty[f.id]); });
  $('orderMini').innerHTML =
      '<div class="bill-row"><span>Bouquet</span><span>'+(items.join(', ')||'—')+'</span></div>'
    + '<div class="bill-row"><span>Wrap / Bow</span><span>'+wrapLabel()+' / '+bowLabel()+'</span></div>'
    + '<div class="bill-row"><span>Delivery</span><span>'+(t.shipping===0?'FREE':inr(t.shipping))+'</span></div>'
    + '<div class="bill-row"><span><strong>Total</strong></span><span><strong>'+inr(t.total)+'</strong></span></div>';
}
function renderAll(){
  FLOWERS.forEach(function(f){
    var q=$('qty-'+f.id); q.textContent=state.qty[f.id]; q.classList.toggle('zero', state.qty[f.id]===0);
    $('fc-'+f.id).classList.toggle('has-qty', state.qty[f.id]>0);
  });
  document.querySelectorAll('[data-wrap]').forEach(function(el){ el.classList.toggle('sel', el.getAttribute('data-wrap')===state.wrap); });
  document.querySelectorAll('[data-bow]').forEach(function(el){ el.classList.toggle('sel', el.getAttribute('data-bow')===state.bow); });
  document.querySelectorAll('[data-wcolor]').forEach(function(el){ el.classList.toggle('sel', el.getAttribute('data-wcolor')===state.wrapColor); });
  document.querySelectorAll('[data-wfinish]').forEach(function(el){ el.classList.toggle('sel', el.getAttribute('data-wfinish')===state.wrapFinish); });
  document.querySelectorAll('[data-bcolor]').forEach(function(el){ el.classList.toggle('sel', el.getAttribute('data-bcolor')===state.bowColor); });
  document.querySelectorAll('[data-bfinish]').forEach(function(el){ el.classList.toggle('sel', el.getAttribute('data-bfinish')===state.bowFinish); });
  $('wrapColorName').textContent = wrapColorById(state.wrapColor).name;
  $('wrapFinishName').textContent = wrapFinishById(state.wrapFinish).name;
  $('bowColorName').textContent = bowColorById(state.bowColor).name;
  $('bowFinishName').textContent = bowFinishById(state.bowFinish).name;
  EXTRAS.forEach(function(e){
    var on=!!state.extras[e.id];
    $('ex-'+e.id).classList.toggle('sel', on);
    var btn=document.querySelector('[data-extra="'+e.id+'"]');
    btn.textContent = on?'Added ✓':'Add'; btn.classList.toggle('on', on);
  });
  $('cardMsgField').style.display = state.extras['card'] ? 'block':'none';
  renderStageFinish(false); renderBill();
}

/* ================= CLICK EVENTS ================= */
var suppressClickUntil = 0;
document.addEventListener('click', function(ev){
  if(Date.now() < suppressClickUntil) return;
  var inc=ev.target.closest('[data-inc]'), dec=ev.target.closest('[data-dec]');
  var w=ev.target.closest('[data-wrap]'), b=ev.target.closest('[data-bow]'), ex=ev.target.closest('[data-extra]');
  var wcEl=ev.target.closest('[data-wcolor]'), wfEl=ev.target.closest('[data-wfinish]');
  var bcEl=ev.target.closest('[data-bcolor]'), bfEl=ev.target.closest('[data-bfinish]');
  if(inc){ var f1=flowerById(inc.getAttribute('data-inc')); addStem(f1.id, null, document.querySelector('#fc-'+f1.id+' .fphoto img')); }
  if(dec){ removeStem(dec.getAttribute('data-dec')); }
  if(w){ state.wrap=w.getAttribute('data-wrap'); renderAll(); renderStageFinish(true); }
  if(b){ state.bow=b.getAttribute('data-bow'); renderAll(); renderStageFinish(true); }
  if(wcEl){ state.wrapColor=wcEl.getAttribute('data-wcolor'); renderAll(); }
  if(wfEl){ state.wrapFinish=wfEl.getAttribute('data-wfinish'); renderAll(); }
  if(bcEl){ state.bowColor=bcEl.getAttribute('data-bcolor'); renderAll(); renderStageFinish(true); }
  if(bfEl){ state.bowFinish=bfEl.getAttribute('data-bfinish'); renderAll(); renderStageFinish(true); }
  if(ex){ var id3=ex.getAttribute('data-extra'); state.extras[id3]=!state.extras[id3]; renderAll(); }
});
function applyPreset(p){
  FLOWERS.forEach(function(f){ state.qty[f.id]=0; });
  pieces = [];
  function load(map, wrap, bow){
    for(var fid in map){ state.qty[fid]=map[fid]; for(var i=0;i<map[fid];i++) addPiece(fid); }
    state.wrap=wrap; state.bow=bow;
  }
  if(p==='romantic') load({'red-rose':8,'pink-rose':3,'babysbreath':1}, 'blush', 'satin');
  if(p==='sunny') load({'sunflower':5,'gerbera':4,'white-rose':3}, 'jute', 'satin');
  if(p==='pastel') load({'pink-rose':4,'lily':3,'hydrangea':2,'babysbreath':2}, 'lilac', 'organza');
  arrangeAll();
  renderPieces(null); renderAll(); renderStageFinish(true);
}
document.querySelectorAll('[data-preset]').forEach(function(btn){
  btn.addEventListener('click', function(){
    applyPreset(btn.getAttribute('data-preset'));
    $('studioCard').scrollIntoView({behavior: REDUCED?'auto':'smooth', block:'nearest'});
  });
});
$('autoArrange').addEventListener('click', function(){
  arrangeAll();
  renderPieces(null);
  if(pieces.length) rippleAt(50, 22);
});
$('clearBtn').addEventListener('click', function(){
  FLOWERS.forEach(function(f){ state.qty[f.id]=0; });
  pieces=[]; renderPieces(null); renderAll();
});
$('hdrGo').addEventListener('click', function(){
  $('studioCard').scrollIntoView({behavior: REDUCED?'auto':'smooth', block:'center'});
});
$('bouquetName').addEventListener('input', function(){ $('previewName').textContent = $('bouquetName').value.trim() || 'Untitled'; });
$('cardMsg').addEventListener('input', function(){ $('cardCount').textContent = $('cardMsg').value.length; });

/* ================= DRAG & DROP (pointer-based, mouse + touch) ================= */
var drag = null;
function stageRect(){ return $('stage').getBoundingClientRect(); }
function inRect(x, y, r){ return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom; }
function makeGhost(d, x, y){
  var g = document.createElement('div'); g.className = 'drag-ghost';
  if(d.kind === 'flower'){
    g.style.width = '78px';
    g.innerHTML = '<img src="' + flowerById(d.id).img + '" alt="">';
  } else if(d.kind === 'wrap'){
    var w = wrapById(d.id);
    g.innerHTML = '<div class="ghost-chip" style="border-color:' + w.c2 + '"><span style="display:inline-block;width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,' + w.c1 + ',' + w.c2 + ');vertical-align:-2px;margin-right:7px"></span>' + w.name + '</div>';
  } else {
    var b = bowById(d.id);
    g.innerHTML = '<div class="ghost-chip"><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:' + (b.color || '#A9855A') + ';vertical-align:-2px;margin-right:7px"></span>' + b.name + '</div>';
  }
  g.style.left = x + 'px'; g.style.top = y + 'px';
  document.body.appendChild(g);
  return g;
}
function moveGhost(x, y){ if(drag && drag.ghost){ drag.ghost.style.left = x + 'px'; drag.ghost.style.top = y + 'px'; } }
/* wherever the pointer is, the drop lands ON the dome — clamped to the
   dome ellipse, so a stem can never be placed outside the bouquet area */
function domePointFromPointer(e){
  var r = stageRect();
  return clampDome((e.clientX - r.left) / r.width * 100, (e.clientY - r.top) / r.height * 100);
}

document.addEventListener('pointerdown', function(e){
  if(e.button !== undefined && e.button > 0) return;
  if(e.target.closest('#pieceX')) return;
  var src = e.target.closest('[data-drag]');
  if(src){
    drag = { mode: 'palette', kind: src.getAttribute('data-drag'), active: false,
      id: src.getAttribute('data-fid') || src.getAttribute('data-wrap') || src.getAttribute('data-bow'),
      srcEl: src, startX: e.clientX, startY: e.clientY, ghost: null };
    return;
  }
  if(e.target.closest('#stage')){
    var pel = e.target.closest('.piece');
    if(pel){
      var uid = +pel.getAttribute('data-uid'), found = null;
      pieces.forEach(function(p){ if(p.uid === uid) found = p; });
      if(found){
        drag = { mode: 'piece', active: false, piece: found, el: pel, startX: e.clientX, startY: e.clientY };
        selectPiece(found.uid);
      }
    } else {
      selectPiece(null);
    }
  }
});
document.addEventListener('pointermove', function(e){
  if(!drag) return;
  var dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
  if(drag.mode === 'piece'){
    if(!drag.active && Math.hypot(dx, dy) > 8){
      drag.active = true;
      suppressClickUntil = Date.now() + 400;
      drag.el.classList.add('dragging');
      drag.el.style.zIndex = 90;
      $('trashZone').classList.add('show');
    }
    if(drag.active){
      var dp = domePointFromPointer(e);
      drag.piece.x = dp.x; drag.piece.y = dp.y;
      layoutPiece(drag.piece);
      positionChip();
      $('trashZone').classList.toggle('hot', inRect(e.clientX, e.clientY, $('trashZone').getBoundingClientRect()));
    }
    return;
  }
  /* palette drag */
  if(!drag.active && Math.hypot(dx, dy) > 9){
    drag.active = true;
    suppressClickUntil = Date.now() + 400;
    drag.ghost = makeGhost(drag, e.clientX, e.clientY);
  }
  if(!drag.active) return;
  moveGhost(e.clientX, e.clientY);
  $('stage').classList.toggle('drop-ok', inRect(e.clientX, e.clientY, stageRect()));
}, { passive: true });
function endDrag(e, cancelled){
  if(!drag) return;
  var d = drag; drag = null;
  $('stage').classList.remove('drop-ok');
  $('trashZone').classList.remove('show', 'hot');
  if(d.mode === 'piece'){
    if(d.el) d.el.classList.remove('dragging');
    if(d.active && !cancelled && inRect(e.clientX, e.clientY, $('trashZone').getBoundingClientRect())){
      removePieceStem(d.piece.uid, d.piece.fid);
    } else if(d.active && !cancelled){
      renderPieces(null);
      rippleAtPiece(d.piece);
    }
    return;
  }
  /* palette */
  if(d.ghost) d.ghost.remove();
  if(!d.active){
    /* tap on a flower photo = add one stem, with a little flight */
    if(d.kind === 'flower' && !cancelled){
      var img = d.srcEl.querySelector('img');
      addStem(d.id, null, img);
    }
    return;
  }
  if(cancelled) return;
  var r = stageRect();
  if(inRect(e.clientX, e.clientY, r)){
    var px = clamp((e.clientX - r.left) / r.width * 100, 6, 94);
    suppressClickUntil = Date.now() + 400;
    if(d.kind === 'flower'){ addStem(d.id, domePointFromPointer(e)); }
    else if(d.kind === 'wrap'){ state.wrap = d.id; renderAll(); renderStageFinish(true); rippleAt(px, 55); }
    else if(d.kind === 'bow'){ state.bow = d.id; renderAll(); renderStageFinish(true); rippleAt(50, 58); }
  }
}
document.addEventListener('pointerup', function(e){ endDrag(e, false); });
document.addEventListener('pointercancel', function(e){ endDrag(e, true); });
$('pieceX').addEventListener('click', function(){
  if(selectedUid == null) return;
  var fid = null;
  pieces.forEach(function(p){ if(p.uid === selectedUid) fid = p.fid; });
  if(fid) removePieceStem(selectedUid, fid);
  selectPiece(null);
});/* ================= INIT (before entrance animations observe the cards) ================= */
buildFlowers(); buildOpts(); buildExtras(); buildFinishControls(); renderPieces(null); renderAll();

/* ================= HERO PETALS + TITLE + REVEALS ================= */
(function(){
  var h1 = $('heroTitle'), delay = 0, nodes = Array.prototype.slice.call(h1.childNodes);
  h1.innerHTML='';
  nodes.forEach(function(node){
    if(node.nodeType===3){
      node.textContent.split(/\s+/).filter(Boolean).forEach(function(word){
        var s=document.createElement('span'); s.className='w'; s.textContent=word;
        s.style.animationDelay=(delay+=0.07)+'s'; h1.appendChild(s); h1.appendChild(document.createTextNode(' '));
      });
    } else {
      var s2=document.createElement('span'); s2.className='w'; s2.style.animationDelay=(delay+=0.07)+'s';
      s2.appendChild(node); h1.appendChild(s2); h1.appendChild(document.createTextNode(' '));
    }
  });
  if(!REDUCED){
    var colors=['#E8A2B4','#C96F5A','#E5C56B','#D98E7E','#B7C9A8'];
    var box=$('petals');
    for(var i=0;i<8;i++){
      var p=document.createElement('span'); p.className='petal';
      var sz=8+Math.random()*8;
      p.style.left=(Math.random()*92)+'%';
      p.style.width=sz+'px'; p.style.height=sz*0.82+'px';
      p.style.background=colors[i%colors.length];
      p.style.animationDuration=(7.5+Math.random()*6)+'s';
      p.style.animationDelay=(Math.random()*9)+'s';
      box.appendChild(p);
    }
  }
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {threshold:.05, rootMargin:'1600px 0px 1600px 0px'}) : null;
  var revealEls = document.querySelectorAll('.reveal, .flower, .opt, .extra-row');
  revealEls.forEach(function(el, i){
    if(!io){ el.classList.add('in'); return; }
    el.classList.add('reveal');
    el.style.transitionDelay = ((i%4)*55)+'ms';
    io.observe(el);
  });
  /* failsafe: nothing stays hidden if the observer never fires */
  setTimeout(function(){ revealEls.forEach(function(el){ el.classList.add('in'); }); }, 1400);
})();

/* ================= CHECKOUT ================= */
function openCheckout(){
  var today=new Date(); var iso=today.toISOString().slice(0,10);
  var d=$('inDate'); d.min=iso; if(!d.value) d.value=iso;
  renderOrderMini();
  $('checkoutView').style.display='block'; $('successView').classList.remove('on');
  $('overlay').classList.add('open'); document.body.style.overflow='hidden';
}
function closeCheckout(){ $('overlay').classList.remove('open'); document.body.style.overflow=''; }
$('checkoutBtn').addEventListener('click', openCheckout);
$('mobileCheckout').addEventListener('click', openCheckout);
$('closeCheckout').addEventListener('click', closeCheckout);
$('overlay').addEventListener('click', function(e){ if(e.target===$('overlay')) closeCheckout(); });
document.addEventListener('keydown', function(e){ if(e.key==='Escape' && $('overlay').classList.contains('open')) closeCheckout(); });

document.querySelectorAll('.pay-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    state.payMethod = tab.getAttribute('data-pay');
    document.querySelectorAll('.pay-tab').forEach(function(t){ t.classList.toggle('sel', t===tab); });
    document.querySelectorAll('.pay-panel').forEach(function(p){ p.classList.remove('on'); });
    $('pay-'+state.payMethod).classList.add('on');
    renderBill();
  });
});
$('inCardNum').addEventListener('input', function(){
  var v=$('inCardNum').value.replace(/\D/g,'').slice(0,16);
  $('inCardNum').value = v.replace(/(.{4})/g,'$1 ').trim();
});
$('inExp').addEventListener('input', function(){
  var v=$('inExp').value.replace(/\D/g,'').slice(0,4);
  $('inExp').value = v.length>2 ? v.slice(0,2)+'/'+v.slice(2) : v;
});
$('inCvv').addEventListener('input', function(){ $('inCvv').value=$('inCvv').value.replace(/\D/g,'').slice(0,3); });
$('inPhone').addEventListener('input', function(){ $('inPhone').value=$('inPhone').value.replace(/\D/g,'').slice(0,10); });

function mark(fieldId, ok){ $(fieldId).classList.toggle('invalid', !ok); return ok; }
function validate(){
  var ok=true;
  ok = mark('f-name', $('inName').value.trim().length>=2) && ok;
  ok = mark('f-phone', /^[6-9]\d{9}$/.test($('inPhone').value.trim())) && ok;
  ok = mark('f-address', $('inAddress').value.trim().length>=10) && ok;
  var dv=$('inDate').value, today=new Date().toISOString().slice(0,10);
  ok = mark('f-date', !!dv && dv>=today) && ok;
  if(state.payMethod==='upi'){
    ok = mark('f-upi', /^[\w.\-]{2,}@[a-zA-Z]{2,}/.test($('inUpi').value.trim())) && ok;
  }
  if(state.payMethod==='card'){
    ok = mark('f-cardnum', $('inCardNum').value.replace(/\s/g,'').length===16) && ok;
    var ex=$('inExp').value, expOk=false;
    var m=ex.match(/^(\d{2})\/(\d{2})$/);
    if(m){ var mm=+m[1], yy=2000+(+m[2]); var now=new Date(); expOk = mm>=1&&mm<=12 && (yy>now.getFullYear() || (yy===now.getFullYear() && mm>=now.getMonth()+1)); }
    ok = mark('f-exp', expOk) && ok;
    ok = mark('f-cvv', $('inCvv').value.length===3) && ok;
  }
  return ok;
}

var lastOrder=null;
function petalBurst(){
  if(REDUCED) return;
  var view=$('successView'), colors=['#E8A2B4','#C96F5A','#E5C56B','#D98E7E','#B7C9A8','#C0392B'];
  for(var i=0;i<16;i++){
    var p=document.createElement('span'); p.className='burst-petal';
    var sz=7+Math.random()*8;
    p.style.width=sz+'px'; p.style.height=sz*0.82+'px';
    p.style.background=colors[i%colors.length];
    p.style.left=(38+Math.random()*24)+'%'; p.style.top='30px';
    p.style.setProperty('--dx', Math.round((Math.random()*260)-130)+'px');
    p.style.setProperty('--rr', Math.round(Math.random()*420-210)+'deg');
    p.style.animationDuration=(1.1+Math.random()*0.9)+'s';
    view.appendChild(p);
    (function(el){ setTimeout(function(){ el.remove(); }, 2300); })(p);
  }
}
$('payBtn').addEventListener('click', function(){
  if(!validate()){
    var bad=document.querySelector('.field.invalid');
    if(bad) bad.scrollIntoView({behavior:'smooth', block:'center'});
    return;
  }
  var btn=$('payBtn'), t=totals();
  btn.disabled=true;
  btn.innerHTML='<span class="spinner"></span>'+(state.payMethod==='cod'?'Placing your order…':'Processing payment…');
  setTimeout(function(){
    btn.disabled=false; renderBill();
    var oid='VEL-'+Math.random().toString(36).slice(2,8).toUpperCase();
    var dateStr=new Date($('inDate').value+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short', day:'numeric', month:'short', year:'numeric'});
    lastOrder={ id:oid, total:t.total, stems:totalStems(), date:dateStr, slot:$('inSlot').value,
      name:$('inName').value.trim(), method: state.payMethod==='upi'?'UPI':state.payMethod==='card'?'Card':'Cash on delivery',
      wrap: wrapLabel(), bow: bowLabel() };
    $('successOrderId').textContent='Order ID: '+oid;
    $('successLine').textContent = state.payMethod==='cod'
      ? 'Pay '+inr(t.total)+' when it arrives. We\'ll WhatsApp you on '+$('inPhone').value.trim()+' once your bouquet leaves the studio.'
      : 'Payment of '+inr(t.total)+' confirmed. We\'ll WhatsApp you on '+$('inPhone').value.trim()+' once your bouquet leaves the studio.';
    var items=[];
    FLOWERS.forEach(function(f){ if(state.qty[f.id]>0) items.push(f.name+' × '+state.qty[f.id]); });
    EXTRAS.forEach(function(e){ if(state.extras[e.id]) items.push(e.name); });
    $('successBox').innerHTML =
        '<div class="bill-row"><span>Bouquet for</span><span>'+lastOrder.name+'</span></div>'
      + '<div class="bill-row"><span>Contents</span><span style="text-align:right;max-width:60%">'+items.join(', ')+'</span></div>'
      + '<div class="bill-row"><span>Wrap / Bow</span><span>'+lastOrder.wrap+' / '+lastOrder.bow+'</span></div>'
      + '<div class="bill-row"><span>Delivery</span><span>'+dateStr+', '+lastOrder.slot+'</span></div>'
      + '<div class="bill-row"><span>Payment</span><span>'+lastOrder.method+' · '+inr(t.total)+'</span></div>';
    $('checkoutView').style.display='none'; $('successView').classList.add('on');
    document.querySelector('.sheet').scrollTop=0;
    petalBurst();
  }, 1600);
});
$('receiptBtn').addEventListener('click', function(){
  if(!lastOrder) return;
  var items=[];
  FLOWERS.forEach(function(f){ if(state.qty[f.id]>0) items.push('  - '+f.name+' x '+state.qty[f.id]+'  —  '+inr(state.qty[f.id]*f.price)); });
  EXTRAS.forEach(function(e){ if(state.extras[e.id]) items.push('  - '+e.name+'  —  '+inr(e.price)); });
  var t=totals();
  var txt='VELORA FLOWERS — ORDER RECEIPT\n================================\nOrder ID: '+lastOrder.id
    +'\nCustomer: '+lastOrder.name+'\nDelivery: '+lastOrder.date+', '+lastOrder.slot
    +'\nPayment: '+lastOrder.method+'\n\nBouquet ('+lastOrder.stems+' stems)\n'+items.join('\n')
    +'\n  - Wrapping: '+lastOrder.wrap+'\n  - Bow: '+lastOrder.bow
    +'\n\nSubtotal: '+inr(t.subtotal)+'\nDelivery: '+(t.shipping===0?'FREE':inr(t.shipping))
    +'\nTOTAL PAID/PAYABLE: '+inr(t.total)+'\n\nThank you for choosing Velora!';
  var blob=new Blob([txt],{type:'text/plain'});
  var a=document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download='Velora-Receipt-'+lastOrder.id+'.txt'; a.click();
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 2000);
});
$('againBtn').addEventListener('click', function(){
  FLOWERS.forEach(function(f){ state.qty[f.id]=0; });
  pieces=[]; state.extras={}; $('cardMsg').value=''; $('cardCount').textContent='0'; $('bouquetName').value='';
  closeCheckout(); renderPieces(null); renderAll(); window.scrollTo({top:0, behavior:'smooth'});
});
