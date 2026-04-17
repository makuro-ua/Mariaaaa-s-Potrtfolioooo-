const S = {
    1:{ hBg:'#3aaa35', hBd:'#2a7a26', hC:'#fff', hP:'#d4f5d2', nBg:'#fff', nBd:'#ccc', nC:'#222', nABg:'#3aaa35', nAC:'#fff', mBg:'#fff', mBd:'1px solid #ccc', h2:'#111', h3:'#111', mC:'#222', lC:'#0044cc', aBg:'#4a90d9', aC:'#fff', aH:'#fff', aP:'#e0f0ff', fBg:'#e8e8e8', fC:'#555', oBg:'#f0f0f0', sName:'Stylesheet 1' },
    2:{ hBg:'#1a1a2e', hBd:'#e94560', hC:'#e0e0ff', hP:'#a0a0cc', nBg:'#16213e', nBd:'#0f3460', nC:'#c0c0e0', nABg:'#e94560', nAC:'#fff', mBg:'#0f3460', mBd:'1px solid #1a1a2e', h2:'#e0e0ff', h3:'#a0c4ff', mC:'#c0c0e0', lC:'#e94560', aBg:'#e94560', aC:'#fff', aH:'#fff', aP:'#ffd6de', fBg:'#1a1a2e', fC:'#7070a0', oBg:'#0d0d1a', sName:'Stylesheet 2' },
    3:{ hBg:'#ff6b35', hBd:'#cc4a1a', hC:'#fff', hP:'#ffe0d0', nBg:'#fff8f5', nBd:'#f0c0a0', nC:'#7a3010', nABg:'#ff6b35', nAC:'#fff', mBg:'#fff', mBd:'1px solid #f0c0a0', h2:'#7a3010', h3:'#cc4a1a', mC:'#4a2010', lC:'#ff6b35', aBg:'#ffd166', aC:'#4a2010', aH:'#7a3010', aP:'#5a2a10', fBg:'#fff8f5', fC:'#a06040', oBg:'#fff0e8', sName:'Stylesheet 3' },
    4:{ hBg:'#2d6a4f', hBd:'#1b4332', hC:'#d8f3dc', hP:'#95d5b2', nBg:'#f0fdf4', nBd:'#b7e4c7', nC:'#1b4332', nABg:'#2d6a4f', nAC:'#d8f3dc', mBg:'#fff', mBd:'1px solid #b7e4c7', h2:'#1b4332', h3:'#2d6a4f', mC:'#374a3a', lC:'#40916c', aBg:'#52b788', aC:'#fff', aH:'#fff', aP:'#e8f8f0', fBg:'#f0fdf4', fC:'#555', oBg:'#e8f5ed', sName:'Stylesheet 4' },
    0:{ hBg:'transparent', hBd:'transparent', hC:'#000', hP:'#333', nBg:'transparent', nBd:'#ccc', nC:'#0044cc', nABg:'transparent', nAC:'#000', mBg:'transparent', mBd:'none', h2:'#000', h3:'#000', mC:'#000', lC:'#0044cc', aBg:'transparent', aC:'#000', aH:'#000', aP:'#000', fBg:'transparent', fC:'#000', oBg:'#fff', sName:'No Stylesheet' }
  };
	
  let cur = 1, view = 'desktop';

  function applySheet(n) {
    cur = n;
    const s = S[n];
    const hdr = document.getElementById('site-header');
    hdr.style.background = s.hBg;
    hdr.style.borderBottomColor = s.hBd;
    hdr.style.color = s.hC;
    const h1 = document.getElementById('hdr-h1');
    h1.style.color = s.hC;
    document.getElementById('hdr-sub').style.color = s.hP;
    const nav = document.getElementById('site-nav');
    nav.style.background = s.nBg;
    nav.style.borderRightColor = s.nBd;
    document.querySelectorAll('#nav-list li').forEach(li => {
      li.classList.remove('snav-active');
      li.style.borderBottomColor = s.nBd;
      const a = li.querySelector('a');
      a.style.background = '';
      a.style.color = s.nC;
      a.style.fontWeight = '';
    });

    const activeLi = document.querySelector('#nav-list li[data-sheet="'+n+'"]');

    if(activeLi){
      activeLi.classList.add('snav-active');
      const aa = activeLi.querySelector('a');
      aa.style.background = s.nABg;
      aa.style.color = s.nAC;
      aa.style.fontWeight = 'bold';
    }

    const main = document.getElementById('site-main');
    main.style.background = s.mBg;
    main.style.borderRight = s.mBd;
    main.querySelector('h2').style.color = s.h2;
    main.querySelectorAll('h3').forEach(h => h.style.color = s.h3);
    main.querySelectorAll('p').forEach(p => p.style.color = s.mC);
    main.querySelectorAll('a').forEach(a => a.style.color = s.lC);

    const aside = document.getElementById('site-aside');
    aside.style.background = s.aBg;
    aside.style.color = s.aC;
    aside.querySelector('h4').style.color = s.aH;
    aside.querySelector('p').style.color = s.aP;

    const footer = document.getElementById('site-footer');
    footer.style.background = s.fBg;
    footer.style.color = s.fC;
    document.getElementById('frame').style.background = s.oBg;
    updateLabel();
  }

  function setView(v, btn) {
    view = v;
    document.querySelectorAll('.dev-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const frame = document.getElementById('frame');
    const content = document.getElementById('site-content');
    const nav = document.getElementById('site-nav');
    const main = document.getElementById('site-main');
    const aside = document.getElementById('site-aside');

    if(v === 'desktop'){
      frame.style.maxWidth = '820px';
      content.style.flexDirection = 'row';
      content.style.flexWrap = '';
      nav.style.flex = '0 0 140px'; nav.style.width = ''; nav.style.borderRight = '1px solid #ccc'; nav.style.borderBottom = 'none';
      main.style.flex = '1'; main.style.width = ''; main.style.borderRight = '1px solid #ccc'; main.style.borderBottom = 'none';
      aside.style.flex = '0 0 120px'; aside.style.width = '';
      document.getElementById('hdr-h1').style.fontSize = '20px';
    } 
    
    else if(v === 'tablet'){
      frame.style.maxWidth = '560px';
      content.style.flexDirection = 'row';
      content.style.flexWrap = 'wrap';
      nav.style.flex = '0 0 140px'; nav.style.width = '140px'; nav.style.borderRight = '1px solid #ccc'; nav.style.borderBottom = 'none';
      main.style.flex = '1 1 calc(100% - 140px)'; main.style.width = ''; main.style.borderRight = 'none'; main.style.borderBottom = '1px solid #ccc';
      aside.style.flex = '0 0 100%'; aside.style.width = '100%';
      document.getElementById('hdr-h1').style.fontSize = '18px';
    } 
    
    else {
      frame.style.maxWidth = '340px';
      content.style.flexDirection = 'column';
      content.style.flexWrap = '';
      nav.style.flex = '0 0 auto'; nav.style.width = '100%'; nav.style.borderRight = 'none'; nav.style.borderBottom = '1px solid #ccc';
      main.style.flex = '0 0 auto'; main.style.width = '100%'; main.style.borderRight = 'none'; main.style.borderBottom = '1px solid #ccc';
      aside.style.flex = '0 0 auto'; aside.style.width = '100%';
      document.getElementById('hdr-h1').style.fontSize = '16px';
    }

    applySheet(cur);
  }

  function updateLabel(){
    const vm = {desktop:'Fig. 1 — Desktop', tablet:'Fig. 2 — Tablet', mobile:'Fig. 3 — Mobile'};
    document.getElementById('fig-label').textContent = vm[view] + ' · ' + S[cur].sName;
  }