(function(){
var l=document.createElement('link');
l.rel='stylesheet';
l.href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap';
document.head.appendChild(l);
var s=document.createElement('style');
s.textContent="\n  :root {\n    --bg: #f4f5f7;\n    --surface: #ffffff;\n    --surface-2: #f9fafb;\n    --border: #e2e5ea;\n    --border-strong: #c9cdd6;\n    --text-primary: #1a1f2e;\n    --text-secondary: #5a6278;\n    --text-muted: #8c93a8;\n    --accent: #1a56db;\n    --accent-light: #eef2ff;\n    --accent-hover: #1546b8;\n    --green: #057a55;\n    --green-bg: #def7ec;\n    --amber: #92400e;\n    --amber-bg: #fef3c7;\n    --red: #9b1c1c;\n    --red-bg: #fde8e8;\n    --blue: #1e429f;\n    --blue-bg: #e1effe;\n    --gray: #374151;\n    --gray-bg: #f3f4f6;\n    --orange: #92400e;\n    --orange-bg: #fff7ed;\n    --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);\n    --shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);\n    --shadow-lg: 0 16px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);\n    --radius: 8px;\n    --radius-lg: 12px;\n    --mono: 'IBM Plex Mono', monospace;\n    --sans: 'IBM Plex Sans', sans-serif;\n  }\n\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n\n  body {\n    font-family: var(--sans);\n    background: var(--bg);\n    color: var(--text-primary);\n    font-size: 14px;\n    line-height: 1.5;\n    min-height: 100vh;\n  }\n\n  /* ── HEADER ── */\n  .header {\n    background: var(--text-primary);\n    color: white;\n    padding: 0 32px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 60px;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    border-bottom: 1px solid rgba(255,255,255,0.08);\n  }\n  .header-left { display: flex; align-items: center; gap: 20px; }\n  .header-logo {\n    display: flex; align-items: center; gap: 10px;\n    font-weight: 600; font-size: 15px; letter-spacing: -0.01em;\n  }\n  .header-logo-icon {\n    width: 28px; height: 28px; background: var(--accent);\n    border-radius: 6px; display: flex; align-items: center; justify-content: center;\n  }\n  .header-logo-icon svg { width: 15px; height: 15px; }\n  .header-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.15); }\n  .header-subtitle { color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 400; }\n  .header-right { display: flex; align-items: center; gap: 16px; }\n  .header-badge {\n    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);\n    color: rgba(255,255,255,0.7); font-size: 11px; padding: 3px 10px;\n    border-radius: 20px; font-family: var(--mono);\n  }\n  .header-user {\n    width: 32px; height: 32px; border-radius: 50%;\n    background: var(--accent); display: flex; align-items: center;\n    justify-content: center; font-size: 12px; font-weight: 600; color: white;\n    cursor: pointer;\n  }\n\n  /* ── LAYOUT ── */\n  .layout { display: flex; height: calc(100vh - 60px); overflow: hidden; }\n\n  /* ── SIDEBAR ── */\n  .sidebar {\n    width: 220px; flex-shrink: 0; background: var(--surface);\n    border-right: 1px solid var(--border); padding: 20px 0;\n    overflow-y: auto; display: flex; flex-direction: column; gap: 4px;\n  }\n  .sidebar-section { padding: 0 12px 12px; }\n  .sidebar-label {\n    font-size: 10px; font-weight: 600; letter-spacing: 0.08em;\n    color: var(--text-muted); text-transform: uppercase;\n    padding: 0 8px 8px;\n  }\n  .sidebar-item {\n    display: flex; align-items: center; gap: 10px;\n    padding: 8px 12px; border-radius: var(--radius);\n    color: var(--text-secondary); cursor: pointer; font-size: 13px;\n    transition: all 0.15s; text-decoration: none;\n  }\n  .sidebar-item:hover { background: var(--bg); color: var(--text-primary); }\n  .sidebar-item.active {\n    background: var(--accent-light); color: var(--accent); font-weight: 500;\n  }\n  .sidebar-item svg { width: 16px; height: 16px; flex-shrink: 0; opacity: 0.7; }\n  .sidebar-item.active svg { opacity: 1; }\n  .sidebar-count {\n    margin-left: auto; background: var(--border); color: var(--text-secondary);\n    font-size: 11px; padding: 1px 7px; border-radius: 10px; font-family: var(--mono);\n  }\n  .sidebar-item.active .sidebar-count { background: rgba(26,86,219,0.15); color: var(--accent); }\n\n  .sidebar-divider { height: 1px; background: var(--border); margin: 8px 12px; }\n\n  /* ── MAIN ── */\n  .main { flex: 1; overflow-y: auto; padding: 28px 32px; display: flex; flex-direction: column; gap: 24px; }\n\n  /* ── PAGE HEADER ── */\n  .page-header { display: flex; justify-content: space-between; align-items: flex-start; }\n  .page-title { font-size: 22px; font-weight: 600; letter-spacing: -0.02em; color: var(--text-primary); }\n  .page-title-sub { font-size: 13px; color: var(--text-muted); margin-top: 3px; font-weight: 400; }\n  .page-actions { display: flex; gap: 10px; align-items: center; }\n\n  /* ── BUTTONS ── */\n  .btn {\n    display: inline-flex; align-items: center; gap: 7px;\n    padding: 8px 16px; border-radius: var(--radius); font-size: 13px;\n    font-weight: 500; cursor: pointer; border: none; transition: all 0.15s;\n    font-family: var(--sans); white-space: nowrap;\n  }\n  .btn svg { width: 14px; height: 14px; }\n  .btn-primary { background: var(--accent); color: white; }\n  .btn-primary:hover { background: var(--accent-hover); }\n  .btn-secondary { background: var(--surface); color: var(--text-primary); border: 1px solid var(--border-strong); }\n  .btn-secondary:hover { background: var(--bg); }\n  .btn-ghost { background: transparent; color: var(--text-secondary); border: 1px solid transparent; }\n  .btn-ghost:hover { background: var(--bg); color: var(--text-primary); border-color: var(--border); }\n  .btn-sm { padding: 5px 12px; font-size: 12px; }\n\n  /* ── SUMMARY CARDS ── */\n  .summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }\n  .summary-card {\n    background: var(--surface); border: 1px solid var(--border);\n    border-radius: var(--radius-lg); padding: 20px;\n    box-shadow: var(--shadow-sm); position: relative; overflow: hidden;\n  }\n  .summary-card::before {\n    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;\n  }\n  .summary-card.approved::before { background: #057a55; }\n  .summary-card.restricted::before { background: #d97706; }\n  .summary-card.prohibited::before { background: #dc2626; }\n  .summary-card.pending::before { background: #6366f1; }\n  .card-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); }\n  .card-value { font-size: 32px; font-weight: 600; font-family: var(--mono); margin: 8px 0 4px; letter-spacing: -0.03em; }\n  .summary-card.approved .card-value { color: #057a55; }\n  .summary-card.restricted .card-value { color: #d97706; }\n  .summary-card.prohibited .card-value { color: #dc2626; }\n  .summary-card.pending .card-value { color: #6366f1; }\n  .card-delta { font-size: 12px; color: var(--text-muted); }\n  .card-icon {\n    position: absolute; right: 16px; top: 20px;\n    width: 36px; height: 36px; border-radius: 8px;\n    display: flex; align-items: center; justify-content: center;\n  }\n  .summary-card.approved .card-icon { background: var(--green-bg); }\n  .summary-card.restricted .card-icon { background: var(--amber-bg); }\n  .summary-card.prohibited .card-icon { background: var(--red-bg); }\n  .summary-card.pending .card-icon { background: #ede9fe; }\n  .card-icon svg { width: 18px; height: 18px; }\n  .summary-card.approved .card-icon svg { color: #057a55; }\n  .summary-card.restricted .card-icon svg { color: #d97706; }\n  .summary-card.prohibited .card-icon svg { color: #dc2626; }\n  .summary-card.pending .card-icon svg { color: #6366f1; }\n\n  /* ── CHARTS ROW ── */\n  .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\n  .chart-card {\n    background: var(--surface); border: 1px solid var(--border);\n    border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm);\n  }\n  .chart-title { font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 16px; }\n  .chart-subtitle { font-size: 11px; color: var(--text-muted); font-weight: 400; margin-left: 6px; }\n\n  /* Bar chart */\n  .bar-chart { display: flex; flex-direction: column; gap: 10px; }\n  .bar-row { display: flex; align-items: center; gap: 10px; }\n  .bar-label { width: 90px; font-size: 12px; color: var(--text-secondary); flex-shrink: 0; }\n  .bar-track { flex: 1; height: 10px; background: var(--bg); border-radius: 99px; overflow: hidden; }\n  .bar-fill { height: 100%; border-radius: 99px; transition: width 0.6s ease; }\n  .bar-val { width: 28px; font-size: 12px; font-family: var(--mono); color: var(--text-muted); text-align: right; }\n\n  /* Donut chart */\n  .donut-wrap { display: flex; align-items: center; gap: 24px; }\n  .donut-svg { flex-shrink: 0; }\n  .donut-legend { display: flex; flex-direction: column; gap: 8px; }\n  .legend-item { display: flex; align-items: center; gap: 8px; font-size: 12px; }\n  .legend-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }\n  .legend-label { color: var(--text-secondary); }\n  .legend-val { font-family: var(--mono); font-weight: 500; margin-left: auto; padding-left: 12px; }\n\n  /* ── TABS ── */\n  .tabs-bar {\n    display: flex; gap: 2px; background: var(--surface);\n    border: 1px solid var(--border); border-radius: var(--radius);\n    padding: 4px; width: fit-content;\n  }\n  .tab-btn {\n    padding: 6px 16px; border-radius: 6px; font-size: 13px;\n    font-weight: 500; cursor: pointer; border: none; background: transparent;\n    color: var(--text-secondary); transition: all 0.15s; font-family: var(--sans);\n  }\n  .tab-btn:hover { color: var(--text-primary); }\n  .tab-btn.active { background: var(--text-primary); color: white; }\n  .tab-count {\n    display: inline-block; background: rgba(255,255,255,0.2);\n    font-size: 10px; padding: 0px 6px; border-radius: 10px;\n    margin-left: 5px; font-family: var(--mono);\n  }\n  .tab-btn:not(.active) .tab-count { background: var(--border); color: var(--text-muted); }\n\n  /* ── TABLE SECTION ── */\n  .table-section {\n    background: var(--surface); border: 1px solid var(--border);\n    border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); overflow: hidden;\n  }\n  .table-toolbar {\n    padding: 16px 20px; border-bottom: 1px solid var(--border);\n    display: flex; gap: 12px; align-items: center; flex-wrap: wrap;\n  }\n  .search-box {\n    display: flex; align-items: center; gap: 8px;\n    background: var(--bg); border: 1px solid var(--border);\n    border-radius: var(--radius); padding: 7px 12px; flex: 1; min-width: 200px;\n    transition: border-color 0.15s;\n  }\n  .search-box:focus-within { border-color: var(--accent); }\n  .search-box svg { width: 14px; height: 14px; color: var(--text-muted); flex-shrink: 0; }\n  .search-box input {\n    border: none; background: transparent; font-size: 13px;\n    color: var(--text-primary); width: 100%; font-family: var(--sans);\n    outline: none;\n  }\n  .search-box input::placeholder { color: var(--text-muted); }\n  .filter-select {\n    background: var(--bg); border: 1px solid var(--border);\n    border-radius: var(--radius); padding: 7px 12px;\n    font-size: 12px; color: var(--text-secondary); cursor: pointer;\n    font-family: var(--sans); outline: none; transition: border-color 0.15s;\n  }\n  .filter-select:focus { border-color: var(--accent); }\n\n  /* Table */\n  .table-wrap { overflow-x: auto; }\n  table { width: 100%; border-collapse: collapse; font-size: 12.5px; }\n  thead { background: var(--surface-2); }\n  th {\n    padding: 10px 14px; text-align: left; font-size: 11px; font-weight: 600;\n    text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted);\n    border-bottom: 1px solid var(--border); white-space: nowrap;\n  }\n  tbody tr {\n    border-bottom: 1px solid var(--border); cursor: pointer;\n    transition: background 0.1s;\n  }\n  tbody tr:last-child { border-bottom: none; }\n  tbody tr:hover { background: #fafbff; }\n  td { padding: 12px 14px; color: var(--text-primary); vertical-align: middle; }\n  .td-mono { font-family: var(--mono); font-size: 12px; color: var(--text-secondary); }\n  .td-name { font-weight: 500; color: var(--text-primary); }\n  .td-muted { color: var(--text-muted); }\n\n  /* ── BADGES ── */\n  .badge {\n    display: inline-flex; align-items: center; gap: 4px;\n    padding: 2px 9px; border-radius: 20px; font-size: 11px; font-weight: 500;\n    white-space: nowrap;\n  }\n  .badge-dot { width: 6px; height: 6px; border-radius: 50%; }\n  .badge-approved { background: var(--green-bg); color: var(--green); }\n  .badge-approved .badge-dot { background: var(--green); }\n  .badge-restricted { background: var(--amber-bg); color: var(--amber); }\n  .badge-restricted .badge-dot { background: #d97706; }\n  .badge-prohibited { background: var(--red-bg); color: var(--red); }\n  .badge-prohibited .badge-dot { background: #dc2626; }\n  .badge-pending { background: #ede9fe; color: #5b21b6; }\n  .badge-pending .badge-dot { background: #7c3aed; }\n  .badge-low { background: var(--green-bg); color: var(--green); }\n  .badge-medium { background: var(--amber-bg); color: var(--amber); }\n  .badge-high { background: var(--red-bg); color: var(--red); }\n  .badge-completed { background: var(--blue-bg); color: var(--blue); }\n  .badge-overdue { background: var(--red-bg); color: var(--red); }\n  .badge-scheduled { background: var(--gray-bg); color: var(--gray); }\n\n  .warn-icon {\n    display: inline-flex; align-items: center; justify-content: center;\n    width: 18px; height: 18px; background: var(--amber-bg);\n    border-radius: 50%; margin-left: 4px; vertical-align: middle;\n  }\n  .warn-icon svg { width: 10px; height: 10px; color: #d97706; }\n\n  /* ── TABLE FOOTER ── */\n  .table-footer {\n    padding: 12px 20px; border-top: 1px solid var(--border);\n    display: flex; justify-content: space-between; align-items: center;\n    background: var(--surface-2);\n  }\n  .table-info { font-size: 12px; color: var(--text-muted); }\n  .pagination { display: flex; gap: 4px; }\n  .page-btn {\n    width: 30px; height: 30px; border-radius: 6px; border: 1px solid var(--border);\n    background: var(--surface); display: flex; align-items: center; justify-content: center;\n    font-size: 12px; cursor: pointer; color: var(--text-secondary); transition: all 0.1s;\n  }\n  .page-btn.active { background: var(--accent); color: white; border-color: var(--accent); }\n  .page-btn:hover:not(.active) { background: var(--bg); }\n\n  /* ── MODAL ── */\n  .modal-overlay {\n    position: fixed; inset: 0; background: rgba(10,15,30,0.5);\n    z-index: 200; display: none; align-items: center; justify-content: center;\n    padding: 32px; backdrop-filter: blur(4px);\n  }\n  .modal-overlay.open { display: flex; }\n  .modal {\n    background: var(--surface); border-radius: var(--radius-lg);\n    width: 100%; max-width: 760px; max-height: 90vh; overflow-y: auto;\n    box-shadow: var(--shadow-lg); border: 1px solid var(--border);\n  }\n  .modal-header {\n    padding: 20px 24px; border-bottom: 1px solid var(--border);\n    display: flex; justify-content: space-between; align-items: flex-start;\n    position: sticky; top: 0; background: var(--surface); z-index: 1;\n  }\n  .modal-title { font-size: 17px; font-weight: 600; letter-spacing: -0.01em; }\n  .modal-sub { font-size: 12px; color: var(--text-muted); margin-top: 3px; }\n  .modal-close {\n    width: 30px; height: 30px; border-radius: 6px; border: 1px solid var(--border);\n    background: transparent; cursor: pointer; display: flex; align-items: center;\n    justify-content: center; color: var(--text-muted); font-size: 18px; transition: all 0.15s;\n    flex-shrink: 0;\n  }\n  .modal-close:hover { background: var(--bg); color: var(--text-primary); }\n  .modal-body { padding: 24px; }\n  .modal-section { margin-bottom: 24px; }\n  .modal-section-title {\n    font-size: 11px; font-weight: 600; text-transform: uppercase;\n    letter-spacing: 0.07em; color: var(--text-muted); margin-bottom: 14px;\n    padding-bottom: 8px; border-bottom: 1px solid var(--border);\n  }\n  .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }\n  .modal-field-label { font-size: 11px; color: var(--text-muted); font-weight: 500; margin-bottom: 3px; }\n  .modal-field-value { font-size: 13px; color: var(--text-primary); font-weight: 400; }\n  .modal-field-value.mono { font-family: var(--mono); font-size: 12px; }\n  .modal-field-value.notes { color: var(--text-secondary); line-height: 1.6; }\n  .modal-footer {\n    padding: 16px 24px; border-top: 1px solid var(--border);\n    display: flex; gap: 10px; justify-content: flex-end;\n    background: var(--surface-2);\n  }\n\n  /* ── REVIEW LOG ── */\n  .log-entry {\n    display: flex; gap: 14px; padding: 14px 20px;\n    border-bottom: 1px solid var(--border);\n    transition: background 0.1s;\n  }\n  .log-entry:last-child { border-bottom: none; }\n  .log-entry:hover { background: var(--surface-2); }\n  .log-dot-wrap { display: flex; flex-direction: column; align-items: center; padding-top: 2px; }\n  .log-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }\n  .log-line { width: 1px; flex: 1; background: var(--border); margin-top: 4px; }\n  .log-entry:last-child .log-line { display: none; }\n  .log-content { flex: 1; }\n  .log-action { font-size: 13px; font-weight: 500; color: var(--text-primary); }\n  .log-meta { font-size: 11px; color: var(--text-muted); margin-top: 3px; }\n  .log-note { font-size: 12px; color: var(--text-secondary); margin-top: 6px; background: var(--bg); padding: 8px 10px; border-radius: 6px; border-left: 2px solid var(--border-strong); }\n  .log-date { font-size: 11px; color: var(--text-muted); font-family: var(--mono); white-space: nowrap; padding-top: 2px; }\n\n  /* content sections */\n  .tab-content { display: none; }\n  .tab-content.active { display: block; }\n\n  /* requests table placeholder */\n  .empty-state {\n    display: flex; flex-direction: column; align-items: center;\n    justify-content: center; padding: 60px 20px; gap: 12px;\n    color: var(--text-muted);\n  }\n  .empty-icon { width: 48px; height: 48px; background: var(--bg); border-radius: 12px; display: flex; align-items: center; justify-content: center; }\n  .empty-icon svg { width: 24px; height: 24px; }\n  .empty-label { font-size: 14px; font-weight: 500; color: var(--text-secondary); }\n  .empty-sub { font-size: 12px; }\n\n  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }\n  .main > * { animation: fadeIn 0.2s ease; }\n  @keyframes spin { to { transform: rotate(360deg); } }\n";
document.head.appendChild(s);
var root=document.getElementById('grc-root');
if(root){root.innerHTML="\n\n<!-- HEADER -->\n<header class=\"header\">\n  <div class=\"header-left\">\n    <div class=\"header-logo\">\n      <div class=\"header-logo-icon\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"10\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/>\n          <rect x=\"3\" y=\"10\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"10\" y=\"10\" width=\"7\" height=\"7\" rx=\"1\"/>\n        </svg>\n      </div>\n      IDEMIA Approved Software List\n    </div>\n    <div class=\"header-divider\"></div>\n    <div class=\"header-subtitle\">IDEMIA · GRC / Information Security Portal</div>\n  </div>\n  <div class=\"header-right\">\n    <span class=\"header-badge\">v2.4.1</span>\n    <span class=\"header-badge\" id=\"syncStatus\" style=\"transition:color 0.3s\">● Local only</span>\n    <div class=\"header-user\" title=\"J. Rivera — Security Analyst\">JR</div>\n  </div>\n</header>\n\n<div class=\"layout\">\n\n<!-- SIDEBAR -->\n<aside class=\"sidebar\">\n  <div class=\"sidebar-section\">\n    <div class=\"sidebar-label\">Navigation</div>\n    <a class=\"sidebar-item active\" onclick=\"showTab('approved')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M9 12l2 2 4-4M5 10a5 5 0 1010 0A5 5 0 005 10z\"/></svg>\n      Approved Software\n      <span class=\"sidebar-count\" id=\"nav-count-approved\">0</span>\n    </a>\n    <a class=\"sidebar-item\" onclick=\"showTab('restricted')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M7 10h6\"/></svg>\n      Restricted Software\n      <span class=\"sidebar-count\" id=\"nav-count-restricted\">0</span>\n    </a>\n    <a class=\"sidebar-item\" onclick=\"showTab('prohibited')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M7 7l6 6M13 7l-6 6\"/></svg>\n      Prohibited Software\n      <span class=\"sidebar-count\" id=\"nav-count-prohibited\">0</span>\n    </a>\n    <a class=\"sidebar-item\" onclick=\"showTab('requests')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M10 4v12M4 10h12\"/></svg>\n      Software Requests\n      <span class=\"sidebar-count\" id=\"nav-count-requests\">0</span>\n    </a>\n    <a class=\"sidebar-item\" onclick=\"showTab('log')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M4 6h12M4 10h12M4 14h8\"/></svg>\n      Security Review Log\n      <span class=\"sidebar-count\" id=\"nav-count-log\">0</span>\n    </a>\n  </div>\n  <div class=\"sidebar-divider\"></div>\n  <div class=\"sidebar-section\">\n    <div class=\"sidebar-label\">Filters</div>\n    <a class=\"sidebar-item\" id=\"filter-needs-review\" onclick=\"applySidebarFilter('needs-review')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2M13 3h4v4M17 3l-7 7\"/></svg>\n      Needs Review\n      <span class=\"sidebar-count\" id=\"nav-count-needs-review\">0</span>\n    </a>\n    <a class=\"sidebar-item\" id=\"filter-high-risk\" onclick=\"applySidebarFilter('high-risk')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 9v4m0 0v4m0-4h4m-4 0H8\"/></svg>\n      High Risk Items\n      <span class=\"sidebar-count\" id=\"nav-count-high-risk\">0</span>\n    </a>\n    <a class=\"sidebar-item\" id=\"filter-overdue\" onclick=\"applySidebarFilter('overdue')\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M10 7v4l2 2\"/></svg>\n      Expired Reviews\n      <span class=\"sidebar-count\" id=\"nav-count-overdue\">0</span>\n    </a>\n  </div>\n  <div class=\"sidebar-divider\"></div>\n  <div class=\"sidebar-section\">\n    <div class=\"sidebar-label\">Reports</div>\n    <a class=\"sidebar-item\" onclick=\"generateAuditReport()\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"4\" y=\"4\" width=\"12\" height=\"12\" rx=\"1\"/><path d=\"M8 4v12M4 8h4\"/></svg>\n      Audit Report\n    </a>\n    <a class=\"sidebar-item\" onclick=\"openRiskSummary()\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M4 16l4-4 3 3 5-8\"/></svg>\n      Risk Summary\n    </a>\n  </div>\n  <div class=\"sidebar-divider\"></div>\n  <div class=\"sidebar-section\">\n    <a class=\"sidebar-item\" onclick=\"clearAllData()\" style=\"color:var(--red);margin-top:auto;\">\n      <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><polyline points=\"3 6 5 6 17 6\"/><path d=\"M8 6V4h4v2M19 6l-1 12a2 2 0 01-2 2H6a2 2 0 01-2-2L3 6\"/></svg>\n      Clear All Data\n    </a>\n  </div>\n</aside>\n\n<!-- MAIN CONTENT -->\n<main class=\"main\">\n\n  <!-- PAGE HEADER -->\n  <div class=\"page-header\">\n    <div>\n      <div class=\"page-title\">Software Inventory</div>\n      <div class=\"page-title-sub\">Track approved, restricted, and prohibited software across the organization</div>\n    </div>\n    <div class=\"page-actions\">\n      <button class=\"btn btn-secondary\" onclick=\"exportCSV()\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M10 3v10M5 13l5 5 5-5\"/><path d=\"M3 17h14\"/></svg>\n        Export List\n      </button>\n      <button class=\"btn btn-primary\" onclick=\"openModal('add')\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M10 4v12M4 10h12\"/></svg>\n        Add Software\n      </button>\n    </div>\n  </div>\n\n  <!-- SUMMARY CARDS -->\n  <div class=\"summary-grid\">\n    <div class=\"summary-card approved\">\n      <div class=\"card-icon\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M9 12l2 2 4-4M5 10a5 5 0 1010 0A5 5 0 005 10z\"/></svg>\n      </div>\n      <div class=\"card-label\">Approved Software</div>\n      <div class=\"card-value\" id=\"count-approved\">—</div>\n      <div class=\"card-delta\">Live from SharePoint</div>\n    </div>\n    <div class=\"summary-card restricted\">\n      <div class=\"card-icon\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M7 10h6\"/></svg>\n      </div>\n      <div class=\"card-label\">Restricted Software</div>\n      <div class=\"card-value\" id=\"count-restricted\">—</div>\n      <div class=\"card-delta\">Requires approval to use</div>\n    </div>\n    <div class=\"summary-card prohibited\">\n      <div class=\"card-icon\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M7 7l6 6M13 7l-6 6\"/></svg>\n      </div>\n      <div class=\"card-label\">Prohibited Software</div>\n      <div class=\"card-value\" id=\"count-prohibited\">—</div>\n      <div class=\"card-delta\">Strictly prohibited in org</div>\n    </div>\n    <div class=\"summary-card pending\">\n      <div class=\"card-icon\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M10 7v4l2 2\"/></svg>\n      </div>\n      <div class=\"card-label\">Pending Review</div>\n      <div class=\"card-value\" id=\"count-pending\">—</div>\n      <div class=\"card-delta\">Awaiting security review</div>\n    </div>\n  </div>\n\n  <!-- CHARTS -->\n  <div class=\"charts-row\">\n    <div class=\"chart-card\">\n      <div class=\"chart-title\">Software by Risk Level <span class=\"chart-subtitle\">All entries</span></div>\n      <div class=\"bar-chart\" id=\"riskChart\"></div>\n    </div>\n    <div class=\"chart-card\">\n      <div class=\"chart-title\">Software by Category <span class=\"chart-subtitle\">Distribution</span></div>\n      <div class=\"donut-wrap\">\n        <svg class=\"donut-svg\" width=\"110\" height=\"110\" viewBox=\"0 0 110 110\" id=\"donutSvg\">\n          <circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"none\" stroke=\"#e2e5ea\" stroke-width=\"18\"/>\n          <text x=\"55\" y=\"52\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"600\" fill=\"#1a1f2e\" font-family=\"IBM Plex Mono\" id=\"donutTotal\">0</text>\n          <text x=\"55\" y=\"66\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8c93a8\" font-family=\"IBM Plex Sans\">entries</text>\n        </svg>\n        <div class=\"donut-legend\" id=\"donutLegend\"></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- TABS -->\n  <div class=\"tabs-bar\">\n    <button class=\"tab-btn active\" onclick=\"switchTab(this,'tab-approved')\">Approved <span class=\"tab-count\" id=\"tab-count-approved\">—</span></button>\n    <button class=\"tab-btn\" onclick=\"switchTab(this,'tab-restricted')\">Restricted <span class=\"tab-count\" id=\"tab-count-restricted\">—</span></button>\n    <button class=\"tab-btn\" onclick=\"switchTab(this,'tab-prohibited')\">Prohibited <span class=\"tab-count\" id=\"tab-count-prohibited\">—</span></button>\n    <button class=\"tab-btn\" onclick=\"switchTab(this,'tab-requests')\">Software Requests <span class=\"tab-count\" id=\"tab-count-requests\">0</span></button>\n    <button class=\"tab-btn\" onclick=\"switchTab(this,'tab-log')\">Security Review Log <span class=\"tab-count\" id=\"tab-count-log\">0</span></button>\n  </div>\n\n  <!-- ====== TAB: APPROVED ====== -->\n  <div id=\"tab-approved\" class=\"tab-content active\">\n    <div class=\"table-section\">\n      <div class=\"table-toolbar\">\n        <div class=\"search-box\">\n          <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"9\" cy=\"9\" r=\"6\"/><path d=\"M13 13l4 4\"/></svg>\n          <input type=\"text\" id=\"searchInput\" placeholder=\"Search by name or vendor…\" oninput=\"filterTable()\">\n        </div>\n        <select class=\"filter-select\" id=\"filterStatus\" onchange=\"filterTable()\">\n          <option value=\"\">All Statuses</option>\n          <option>Approved</option><option>Restricted</option><option>Prohibited</option><option>Pending Review</option>\n        </select>\n        <select class=\"filter-select\" id=\"filterRisk\" onchange=\"filterTable()\">\n          <option value=\"\">All Risk Levels</option>\n          <option>Low</option><option>Medium</option><option>High</option>\n        </select>\n        <select class=\"filter-select\" id=\"filterType\" onchange=\"filterTable()\">\n          <option value=\"\">All Types</option>\n          <option>SaaS</option><option>On-Premise</option><option>Open Source</option><option>Commercial</option>\n        </select>\n        <select class=\"filter-select\" id=\"filterReview\" onchange=\"filterTable()\">\n          <option value=\"\">All Review Statuses</option>\n          <option>Completed</option><option>Scheduled</option><option>Overdue</option>\n        </select>\n        <button class=\"btn btn-ghost btn-sm\" onclick=\"document.getElementById('searchInput').value='';filterTable()\">\n          <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:13px;height:13px\"><path d=\"M6 6l8 8M14 6l-8 8\"/></svg>\n          Clear\n        </button>\n      </div>\n\n      <div class=\"table-wrap\">\n        <table id=\"softwareTable\">\n          <thead>\n            <tr>\n              <th>SW-ID</th>\n              <th>Software Name</th>\n              <th>Version</th>\n              <th>Vendor</th>\n              <th>Type</th>\n              <th>Category</th>\n              <th>Business Owner</th>\n              <th>Technical Owner</th>\n              <th>Review Status</th>\n              <th>Risk Level</th>\n              <th>Approval Date</th>\n              <th>Last Review</th>\n              <th>Status</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody id=\"tableBody\">\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"table-footer\">\n        <span class=\"table-info\" id=\"tableInfo\">Showing 8 of 8 entries</span>\n        <div class=\"pagination\">\n          <div class=\"page-btn\">‹</div>\n          <div class=\"page-btn active\">1</div>\n          <div class=\"page-btn\">2</div>\n          <div class=\"page-btn\">3</div>\n          <div class=\"page-btn\">›</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- ====== TAB: RESTRICTED ====== -->\n  <div id=\"tab-restricted\" class=\"tab-content\">\n    <div class=\"table-section\">\n      <div style=\"padding:16px 20px;border-bottom:1px solid var(--border);background:#fff8ed;display:flex;align-items:center;gap:10px;\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M10 7v4M10 13v.5\"/></svg>\n        <span style=\"font-size:12px;color:#92400e;font-weight:500;\">Restricted software requires explicit manager approval and security acknowledgment before use. Usage must be logged in the risk register.</span>\n      </div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>SW-ID</th><th>Software Name</th><th>Vendor</th><th>Restriction Reason</th><th>Exception Required</th><th>Risk Level</th><th>Last Review</th><th>Status</th></tr></thead>\n          <tbody id=\"restrictedTableBody\">\n            <tr><td colspan=\"8\" style=\"text-align:center;padding:40px;\">\n              <div style=\"display:flex;flex-direction:column;align-items:center;gap:8px\">\n                <div style=\"font-size:13px;font-weight:500;color:var(--text-secondary)\">No restricted software entries</div>\n                <div style=\"font-size:12px;color:var(--text-muted)\">Add software with Status set to <strong>Restricted</strong> to see it here</div>\n              </div>\n            </td></tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <!-- ====== TAB: PROHIBITED ====== -->\n  <div id=\"tab-prohibited\" class=\"tab-content\">\n    <div class=\"table-section\">\n      <div style=\"padding:16px 20px;border-bottom:1px solid var(--border);background:#fff1f1;display:flex;align-items:center;gap:10px;\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"><circle cx=\"10\" cy=\"10\" r=\"7\"/><path d=\"M7 7l6 6M13 7l-6 6\"/></svg>\n        <span style=\"font-size:12px;color:#9b1c1c;font-weight:500;\">Prohibited software must not be installed or used on any company device or network. Violations are subject to disciplinary action.</span>\n      </div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>SW-ID</th><th>Software Name</th><th>Vendor</th><th>Prohibition Reason</th><th>Risk Level</th><th>Date Added</th><th>Status</th></tr></thead>\n          <tbody id=\"prohibitedTableBody\">\n            <tr><td colspan=\"7\" style=\"text-align:center;padding:40px;\">\n              <div style=\"display:flex;flex-direction:column;align-items:center;gap:8px\">\n                <div style=\"font-size:13px;font-weight:500;color:var(--text-secondary)\">No prohibited software entries</div>\n                <div style=\"font-size:12px;color:var(--text-muted)\">Add software with Status set to <strong>Prohibited</strong> to see it here</div>\n              </div>\n            </td></tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <!-- ====== TAB: REQUESTS ====== -->\n  <div id=\"tab-requests\" class=\"tab-content\">\n    <div class=\"table-section\">\n      <div class=\"table-toolbar\" style=\"justify-content:flex-end;\">\n        <button class=\"btn btn-primary\" onclick=\"openModal('add')\">\n          <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M10 4v12M4 10h12\"/></svg>\n          Submit Request\n        </button>\n      </div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>Req-ID</th><th>Software Name</th><th>Requester</th><th>Department</th><th>Business Justification</th><th>Submitted</th><th>Review Status</th></tr></thead>\n          <tbody>\n            <tr><td colspan=\"7\" style=\"text-align:center;padding:40px;\">\n              <div style=\"display:flex;flex-direction:column;align-items:center;gap:8px\">\n                <div style=\"font-size:13px;font-weight:500;color:var(--text-secondary)\">No pending software requests</div>\n                <div style=\"font-size:12px;color:var(--text-muted)\">Click <strong>Submit Request</strong> to raise a new software request</div>\n              </div>\n            </td></tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <!-- ====== TAB: REVIEW LOG ====== -->\n  <div id=\"tab-log\" class=\"tab-content\">\n    <div class=\"table-section\">\n      <div class=\"table-toolbar\">\n        <span style=\"font-size:13px;color:var(--text-secondary);font-weight:500;\">Security Review Log</span>\n        <div style=\"display:flex;gap:8px;margin-left:auto\">\n          <select class=\"filter-select\" id=\"logFilterType\" onchange=\"renderLog()\" style=\"font-size:12px\">\n            <option value=\"\">All Activity</option>\n            <option value=\"added\">Added</option>\n            <option value=\"edited\">Edited</option>\n            <option value=\"deleted\">Deleted</option>\n            <option value=\"status\">Status Changed</option>\n          </select>\n          <button class=\"btn btn-secondary btn-sm\" onclick=\"exportLog()\">\n            <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:13px;height:13px\"><path d=\"M10 3v10M5 13l5 5 5-5\"/></svg>\n            Export Log\n          </button>\n        </div>\n      </div>\n      <div id=\"logContainer\" style=\"max-height:600px;overflow-y:auto\">\n        <div style=\"padding:40px;text-align:center;\">\n          <div style=\"display:flex;flex-direction:column;align-items:center;gap:8px\">\n            <div style=\"font-size:13px;font-weight:500;color:var(--text-secondary)\">No activity logged yet</div>\n            <div style=\"font-size:12px;color:var(--text-muted)\">All changes — adds, edits, deletes — will appear here automatically</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</main>\n</div>\n\n<!-- ====== MODAL ====== -->\n<div class=\"modal-overlay\" id=\"modalOverlay\" onclick=\"closeModal(event)\">\n  <div class=\"modal\" onclick=\"event.stopPropagation()\">\n    <div class=\"modal-header\">\n      <div>\n        <div class=\"modal-title\" id=\"modalTitle\">Software Details</div>\n        <div class=\"modal-sub\" id=\"modalSub\">SW-001 — Full record view</div>\n      </div>\n      <button class=\"modal-close\" onclick=\"closeModal()\">&times;</button>\n    </div>\n    <div class=\"modal-body\" id=\"modalBody\">\n    </div>\n    <div class=\"modal-footer\" id=\"modalFooter\">\n      <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Close</button>\n      <button class=\"btn btn-secondary\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:13px;height:13px\"><path d=\"M11 5H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M18 2l-8 8M15 2h3v3\"/></svg>\n        Edit Entry\n      </button>\n      <button class=\"btn btn-primary\">\n        <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:13px;height:13px\"><path d=\"M10 3v10M5 13l5 5 5-5\"/></svg>\n        Export Record\n      </button>\n    </div>\n  </div>\n</div>\n\n<script>\n// ── ACTIVITY LOG ENGINE ──\nconst LOG_KEY = 'grc_activity_log_v1';\nlet activityLog = [];\n\nfunction loadLog() {\n  try {\n    const stored = localStorage.getItem(LOG_KEY);\n    if (stored) activityLog = JSON.parse(stored);\n  } catch(e) { activityLog = []; }\n}\n\nfunction saveLog() {\n  try { localStorage.setItem(LOG_KEY, JSON.stringify(activityLog)); } catch(e) {}\n}\n\nfunction addLogEntry(type, softwareName, swId, details, oldValues) {\n  const now = new Date();\n  const entry = {\n    id: Date.now(),\n    type,\n    softwareName,\n    swId,\n    details,\n    oldValues: oldValues || null,\n    timestamp: now.toISOString(),\n    displayDate: now.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' }),\n    displayTime: now.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' })\n  };\n  activityLog.unshift(entry);\n  // Keep max 500 entries\n  if (activityLog.length > 500) activityLog = activityLog.slice(0, 500);\n  saveLog();\n  updateSummaryCards(softwareData);\n  renderLog();\n}\n\nfunction getLogColor(type) {\n  const map = { added:'#057a55', edited:'#1a56db', deleted:'#dc2626', status:'#d97706' };\n  return map[type] || '#6b7280';\n}\n\nfunction getLogIcon(type) {\n  const icons = {\n    added: `<svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:12px;height:12px\"><path d=\"M10 4v12M4 10h12\"/></svg>`,\n    edited: `<svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:12px;height:12px\"><path d=\"M11 5H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M18 2l-8 8\"/></svg>`,\n    deleted: `<svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:12px;height:12px\"><polyline points=\"3 6 5 6 17 6\"/><path d=\"M8 6V4h4v2M16 6l-1 10H7L6 6\"/></svg>`,\n    status: `<svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:12px;height:12px\"><path d=\"M4 4l12 12M4 16L16 4\"/></svg>`\n  };\n  return icons[type] || icons.edited;\n}\n\nfunction renderLog() {\n  const container = document.getElementById('logContainer');\n  const filter = document.getElementById('logFilterType')?.value || '';\n  const filtered = filter ? activityLog.filter(e => e.type === filter) : activityLog;\n\n  if (filtered.length === 0) {\n    container.innerHTML = `<div style=\"padding:40px;text-align:center\">\n      <div style=\"display:flex;flex-direction:column;align-items:center;gap:8px\">\n        <div style=\"font-size:13px;font-weight:500;color:var(--text-secondary)\">${filter ? 'No entries matching this filter' : 'No activity logged yet'}</div>\n        <div style=\"font-size:12px;color:var(--text-muted)\">${filter ? 'Try a different filter' : 'All changes — adds, edits, deletes — will appear here automatically'}</div>\n      </div>\n    </div>`;\n    return;\n  }\n\n  container.innerHTML = filtered.map((entry, idx) => {\n    const color = getLogColor(entry.type);\n    const icon = getLogIcon(entry.type);\n    const isLast = idx === filtered.length - 1;\n    const changesHtml = entry.oldValues\n      ? Object.entries(entry.oldValues).map(([field, vals]) =>\n          `<div style=\"display:flex;gap:6px;align-items:center;margin-top:4px;font-size:11px\">\n            <span style=\"color:var(--text-muted);min-width:100px\">${field}</span>\n            <span style=\"background:#fde8e8;color:#9b1c1c;padding:1px 7px;border-radius:10px;text-decoration:line-through\">${vals.from||'—'}</span>\n            <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"2\" style=\"width:10px;height:10px;flex-shrink:0\"><path d=\"M4 10h12M12 6l4 4-4 4\"/></svg>\n            <span style=\"background:#def7ec;color:#057a55;padding:1px 7px;border-radius:10px\">${vals.to||'—'}</span>\n          </div>`\n        ).join('')\n      : '';\n\n    return `<div style=\"display:flex;gap:14px;padding:14px 20px;border-bottom:${isLast?'none':'1px solid var(--border)'};transition:background 0.1s\" onmouseover=\"this.style.background='var(--surface-2)'\" onmouseout=\"this.style.background=''\">\n      <div style=\"display:flex;flex-direction:column;align-items:center;padding-top:2px\">\n        <div style=\"width:24px;height:24px;border-radius:50%;background:${color}20;border:1.5px solid ${color}40;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${color}\">${icon}</div>\n        ${!isLast ? `<div style=\"width:1px;flex:1;background:var(--border);margin-top:4px\"></div>` : ''}\n      </div>\n      <div style=\"flex:1;min-width:0\">\n        <div style=\"display:flex;align-items:center;gap:8px;flex-wrap:wrap\">\n          <span style=\"font-size:13px;font-weight:500;color:var(--text-primary)\">${entry.softwareName}</span>\n          <span style=\"background:${color}15;color:${color};padding:1px 8px;border-radius:10px;font-size:11px;font-weight:600;text-transform:capitalize\">${entry.type}</span>\n          <span style=\"font-size:11px;color:var(--text-muted);font-family:var(--mono)\">${entry.swId||''}</span>\n        </div>\n        <div style=\"font-size:12px;color:var(--text-secondary);margin-top:3px\">${entry.details}</div>\n        ${changesHtml ? `<div style=\"margin-top:6px;background:var(--bg);padding:8px 10px;border-radius:6px;border-left:2px solid var(--border-strong)\">${changesHtml}</div>` : ''}\n      </div>\n      <div style=\"font-size:11px;color:var(--text-muted);font-family:var(--mono);white-space:nowrap;padding-top:2px;text-align:right\">\n        <div>${entry.displayDate}</div>\n        <div style=\"margin-top:2px\">${entry.displayTime}</div>\n      </div>\n    </div>`;\n  }).join('');\n}\n\nfunction exportLog() {\n  if (activityLog.length === 0) { alert('No log entries to export.'); return; }\n  const headers = 'Timestamp,Type,Software Name,SW-ID,Details';\n  const rows = activityLog.map(e =>\n    [`\"${e.timestamp}\"`, `\"${e.type}\"`, `\"${e.softwareName}\"`, `\"${e.swId||''}\"`, `\"${e.details.replace(/\"/g,'\"\"')}\"`].join(',')\n  );\n  const csv = [headers, ...rows].join('\\n');\n  const a = document.createElement('a');\n  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);\n  a.download = `IDEMIA-Security-Review-Log-${new Date().toISOString().slice(0,10)}.csv`;\n  a.click();\n}\n\n// ── Helper to detect what changed between old and new entry ──\nfunction detectChanges(oldEntry, newEntry) {\n  const watchFields = {\n    name: 'Name', vendor: 'Vendor', version: 'Version', status: 'Status',\n    risk: 'Risk Level', reviewStatus: 'Review Status', type: 'Type',\n    category: 'Category', bizOwner: 'Business Owner', techOwner: 'Technical Owner',\n    approvalDate: 'Approval Date', lastReview: 'Last Review'\n  };\n  const changes = {};\n  Object.entries(watchFields).forEach(([key, label]) => {\n    const oldVal = (oldEntry[key]||'').toString().toLowerCase();\n    const newVal = (newEntry[key]||'').toString().toLowerCase();\n    if (oldVal !== newVal) {\n      changes[label] = { from: oldEntry[key]||'—', to: newEntry[key]||'—' };\n    }\n  });\n  return Object.keys(changes).length > 0 ? changes : null;\n}\n// ── SHAREPOINT JSON BACKEND ──\n// Reads and writes to a JSON file in Site Assets.\n// Falls back to localStorage if running locally or SharePoint isn't available.\n\nconst SP_SITE        = 'https://idemiapublicsecurity.sharepoint.com/sites/CybersecurityTeam';\nconst SP_ASSETS      = `${SP_SITE}/SiteAssets`;\nconst DATA_FILE      = 'grc-software-data.json';\nconst LOG_FILE_SP    = 'grc-software-log.json';\nconst DATA_URL       = `${SP_ASSETS}/${DATA_FILE}`;\nconst LOG_URL_SP     = `${SP_ASSETS}/${LOG_FILE_SP}`;\nconst STORAGE_KEY    = 'grc_software_list_v1';\n\nlet softwareData = [];\nlet editingId    = null;\nlet useSharePoint = false;\n\n// Detect if we are running from SharePoint\nfunction detectSharePoint() {\n  return window.location.href.includes('sharepoint.com') ||\n         window.location.href.includes('idemiapublicsecurity');\n}\n\nfunction generateId() {\n  const existing = softwareData.map(s => s.id).filter(id => id.startsWith('SW-'));\n  const nums = existing.map(id => parseInt(id.replace('SW-',''))).filter(n => !isNaN(n));\n  const next = nums.length ? Math.max(...nums) + 1 : 1;\n  return `SW-${String(next).padStart(3,'0')}`;\n}\n\n// ── GET SHAREPOINT REQUEST DIGEST (needed for write operations) ──\nasync function getRequestDigest() {\n  const res = await fetch(`${SP_SITE}/_api/contextinfo`, {\n    method: 'POST',\n    headers: { 'Accept': 'application/json;odata=nometadata' },\n    credentials: 'include'\n  });\n  const json = await res.json();\n  return json.FormDigestValue;\n}\n\n// ── WRITE FILE TO SHAREPOINT ──\nasync function writeFileToSharePoint(filename, content) {\n  const digest = await getRequestDigest();\n  const url = `${SP_SITE}/_api/web/GetFolderByServerRelativeUrl('sites/CybersecurityTeam/SiteAssets')/Files/Add(url='${filename}',overwrite=true)`;\n  const res = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json;odata=nometadata',\n      'X-RequestDigest': digest,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(content),\n    credentials: 'include'\n  });\n  if (!res.ok) throw new Error(`Write failed: ${res.status}`);\n}\n\n// ── READ FILE FROM SHAREPOINT ──\nasync function readFileFromSharePoint(url) {\n  const res = await fetch(url + '?t=' + Date.now(), {\n    headers: { 'Accept': 'application/json' },\n    credentials: 'include'\n  });\n  if (!res.ok) throw new Error(`Read failed: ${res.status}`);\n  return await res.json();\n}\n\n// ── SAVE DATA ──\nasync function saveData() {\n  // Always save to localStorage as backup\n  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(softwareData)); } catch(e) {}\n  // If on SharePoint, also write to JSON file\n  if (useSharePoint) {\n    try {\n      await writeFileToSharePoint(DATA_FILE, softwareData);\n    } catch(e) {\n      console.warn('SharePoint write failed, data saved locally only:', e.message);\n      showSyncStatus('warning');\n    }\n  }\n}\n\n// ── SAVE LOG ──\nasync function saveLog() {\n  try { localStorage.setItem(LOG_KEY, JSON.stringify(activityLog)); } catch(e) {}\n  if (useSharePoint) {\n    try {\n      await writeFileToSharePoint(LOG_FILE_SP, activityLog);\n    } catch(e) {\n      console.warn('SharePoint log write failed:', e.message);\n    }\n  }\n}\n\n// ── LOAD DATA ──\nasync function loadData() {\n  useSharePoint = detectSharePoint();\n  if (useSharePoint) {\n    try {\n      softwareData = await readFileFromSharePoint(DATA_URL);\n      showSyncStatus('synced');\n      return;\n    } catch(e) {\n      // File doesn't exist yet or network error — fall back to localStorage\n      console.warn('SharePoint read failed, using localStorage:', e.message);\n      useSharePoint = false;\n    }\n  }\n  // localStorage fallback\n  try {\n    const stored = localStorage.getItem(STORAGE_KEY);\n    if (stored) { softwareData = JSON.parse(stored); return; }\n  } catch(e) {}\n  softwareData = [];\n}\n\n// ── LOAD LOG ──\nasync function loadLog() {\n  if (useSharePoint) {\n    try {\n      activityLog = await readFileFromSharePoint(LOG_URL_SP);\n      return;\n    } catch(e) {\n      console.warn('SharePoint log read failed:', e.message);\n    }\n  }\n  try {\n    const stored = localStorage.getItem(LOG_KEY);\n    if (stored) activityLog = JSON.parse(stored);\n  } catch(e) { activityLog = []; }\n}\n\n// ── SYNC STATUS INDICATOR ──\nfunction showSyncStatus(state) {\n  const el = document.getElementById('syncStatus');\n  if (!el) return;\n  if (state === 'synced') {\n    el.textContent = '● Synced';\n    el.style.color = '#057a55';\n  } else if (state === 'saving') {\n    el.textContent = '↻ Saving…';\n    el.style.color = '#d97706';\n  } else if (state === 'warning') {\n    el.textContent = '⚠ Saved locally only';\n    el.style.color = '#d97706';\n  } else if (state === 'local') {\n    el.textContent = '● Local only';\n    el.style.color = '#8c93a8';\n  }\n}\n\nfunction updateCharts(data) {\n  // ── Risk bar chart ──\n  const riskCounts = { low:0, medium:0, high:0, other:0 };\n  data.forEach(sw => {\n    const r = (sw.risk||'').toLowerCase();\n    if (r === 'low') riskCounts.low++;\n    else if (r === 'medium') riskCounts.medium++;\n    else if (r === 'high') riskCounts.high++;\n    else riskCounts.other++;\n  });\n  const maxRisk = Math.max(...Object.values(riskCounts), 1);\n  document.getElementById('riskChart').innerHTML = `\n    <div class=\"bar-row\"><span class=\"bar-label\">Low Risk</span><div class=\"bar-track\"><div class=\"bar-fill\" style=\"width:${Math.round(riskCounts.low/maxRisk*100)}%;background:#057a55\"></div></div><span class=\"bar-val\">${riskCounts.low}</span></div>\n    <div class=\"bar-row\"><span class=\"bar-label\">Medium Risk</span><div class=\"bar-track\"><div class=\"bar-fill\" style=\"width:${Math.round(riskCounts.medium/maxRisk*100)}%;background:#d97706\"></div></div><span class=\"bar-val\">${riskCounts.medium}</span></div>\n    <div class=\"bar-row\"><span class=\"bar-label\">High Risk</span><div class=\"bar-track\"><div class=\"bar-fill\" style=\"width:${Math.round(riskCounts.high/maxRisk*100)}%;background:#dc2626\"></div></div><span class=\"bar-val\">${riskCounts.high}</span></div>\n    <div class=\"bar-row\"><span class=\"bar-label\">Unclassified</span><div class=\"bar-track\"><div class=\"bar-fill\" style=\"width:${Math.round(riskCounts.other/maxRisk*100)}%;background:#9ca3af\"></div></div><span class=\"bar-val\">${riskCounts.other}</span></div>`;\n\n  // ── Category donut — derived dynamically from actual data ──\n  const colorPalette = ['#1a56db','#057a55','#7c3aed','#d97706','#dc2626','#0891b2','#9ca3af','#db2777','#16a34a','#ea580c'];\n  // Build category map from actual data\n  const catMap = {};\n  data.forEach(sw => {\n    const c = (sw.category || 'Unclassified').trim();\n    catMap[c] = (catMap[c] || 0) + 1;\n  });\n  // Sort by count descending so most common categories get the prominent colors\n  const activeCats = Object.entries(catMap)\n    .filter(([,count]) => count > 0)\n    .sort((a,b) => b[1] - a[1]);\n\n  const total = data.length;\n  const circumference = 2 * Math.PI * 40;\n  let offset = 0;\n  const svg = document.getElementById('donutSvg');\n  svg.querySelectorAll('.donut-seg').forEach(el => el.remove());\n  const insertBefore = svg.querySelector('text');\n\n  if (total > 0) {\n    activeCats.forEach(([cat, count], i) => {\n      const color = colorPalette[i % colorPalette.length];\n      const dash = (count / total) * circumference;\n      const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');\n      circle.setAttribute('cx','55'); circle.setAttribute('cy','55'); circle.setAttribute('r','40');\n      circle.setAttribute('fill','none'); circle.setAttribute('stroke', color);\n      circle.setAttribute('stroke-width','18');\n      circle.setAttribute('stroke-dasharray', `${dash} ${circumference - dash}`);\n      circle.setAttribute('stroke-dashoffset', -offset);\n      circle.setAttribute('transform','rotate(-90 55 55)');\n      circle.classList.add('donut-seg');\n      svg.insertBefore(circle, insertBefore);\n      offset += dash;\n    });\n  }\n\n  document.getElementById('donutTotal').textContent = total;\n  document.getElementById('donutLegend').innerHTML = activeCats.length > 0\n    ? activeCats.map(([cat, count], i) => {\n        const color = colorPalette[i % colorPalette.length];\n        return `<div class=\"legend-item\"><span class=\"legend-dot\" style=\"background:${color}\"></span><span class=\"legend-label\">${cat}</span><span class=\"legend-val\">${count}</span></div>`;\n      }).join('')\n    : `<div style=\"font-size:12px;color:var(--text-muted)\">No entries yet</div>`;\n}\n\nfunction updateSummaryCards(data) {\n  const counts = { approved:0, restricted:0, prohibited:0, pending:0 };\n  data.forEach(sw => {\n    if (sw.status === 'approved') counts.approved++;\n    else if (sw.status === 'restricted') counts.restricted++;\n    else if (sw.status === 'prohibited') counts.prohibited++;\n    else counts.pending++;\n  });\n  // Summary cards\n  document.getElementById('count-approved').textContent    = counts.approved;\n  document.getElementById('count-restricted').textContent  = counts.restricted;\n  document.getElementById('count-prohibited').textContent  = counts.prohibited;\n  document.getElementById('count-pending').textContent     = counts.pending;\n  // Tab counts\n  document.getElementById('tab-count-approved').textContent   = counts.approved;\n  document.getElementById('tab-count-restricted').textContent = counts.restricted;\n  document.getElementById('tab-count-prohibited').textContent = counts.prohibited;\n  document.getElementById('tab-count-requests').textContent   = 0;\n  document.getElementById('tab-count-log').textContent        = data.length;\n  // Sidebar nav counts\n  document.getElementById('nav-count-approved').textContent   = counts.approved;\n  document.getElementById('nav-count-restricted').textContent = counts.restricted;\n  document.getElementById('nav-count-prohibited').textContent = counts.prohibited;\n  document.getElementById('nav-count-requests').textContent   = 0;\n  document.getElementById('nav-count-log').textContent        = data.length;\n  // Sidebar filter counts\n  const needsReview = data.filter(s => (s.reviewStatus||'').toLowerCase() === 'scheduled' || (s.reviewStatus||'').toLowerCase() === 'overdue').length;\n  const highRisk    = data.filter(s => (s.risk||'').toLowerCase() === 'high').length;\n  const overdue     = data.filter(s => (s.reviewStatus||'').toLowerCase() === 'overdue').length;\n  document.getElementById('nav-count-needs-review').textContent = needsReview;\n  document.getElementById('nav-count-high-risk').textContent    = highRisk;\n  document.getElementById('nav-count-overdue').textContent      = overdue;\n}\n\nasync function deleteSoftware(id) {\n  if (!confirm('Are you sure you want to delete this entry?')) return;\n  const sw = softwareData.find(s => s.id === id);\n  softwareData = softwareData.filter(s => s.id !== id);\n  if (sw) addLogEntry('deleted', sw.name, sw.id, `Entry permanently deleted from the software list`);\n  showSyncStatus('saving');\n  await saveData();\n  showSyncStatus(useSharePoint ? 'synced' : 'local');\n  updateSummaryCards(softwareData);\n  updateCharts(softwareData);\n  filterTable();\n  closeModal();\n}\n\nasync function saveSoftwareEntry(e) {\n  e.preventDefault();\n  const f = document.getElementById('softwareForm');\n  const get = id => f.querySelector(`[name=\"${id}\"]`)?.value?.trim() || '—';\n  const entry = {\n    id:           editingId || generateId(),\n    name:         get('name'),\n    version:      get('version'),\n    vendor:       get('vendor'),\n    type:         get('type'),\n    category:     get('category'),\n    bizOwner:     get('bizOwner'),\n    techOwner:    get('techOwner'),\n    reviewStatus: get('reviewStatus'),\n    risk:         get('risk').toLowerCase(),\n    approvalDate: get('approvalDate'),\n    lastReview:   get('lastReview'),\n    status:       get('status').toLowerCase(),\n    notes:        get('notes'),\n    dataClass:    get('dataClass'),\n    privilege:    get('privilege'),\n    internet:     get('internet'),\n    network:      get('network'),\n    patching:     get('patching'),\n    vulnStatus:   get('vulnStatus'),\n    vendorRisk:   get('vendorRisk'),\n    vendorSecurity: get('vendorSecurity'),\n    approvalAuth: get('approvalAuth'),\n    reviewFreq:   get('reviewFreq'),\n    exception:    get('exception'),\n    exceptionId:  get('exceptionId'),\n  };\n  if (editingId) {\n    const idx = softwareData.findIndex(s => s.id === editingId);\n    if (idx > -1) {\n      const oldEntry = {...softwareData[idx]};\n      softwareData[idx] = entry;\n      const changes = detectChanges(oldEntry, entry);\n      if (changes && changes['Status']) {\n        addLogEntry('status', entry.name, entry.id,\n          `Status changed from ${changes['Status'].from} to ${changes['Status'].to}`, changes);\n      } else {\n        const changeCount = changes ? Object.keys(changes).length : 0;\n        addLogEntry('edited', entry.name, entry.id,\n          `${changeCount} field${changeCount !== 1 ? 's' : ''} updated`, changes);\n      }\n    }\n  } else {\n    softwareData.unshift(entry);\n    addLogEntry('added', entry.name, entry.id,\n      `Added as ${entry.status||'pending'} · Risk: ${entry.risk||'unclassified'} · Category: ${entry.category||'—'}`);\n  }\n  showSyncStatus('saving');\n  await saveData();\n  showSyncStatus(useSharePoint ? 'synced' : 'local');\n  updateSummaryCards(softwareData);\n  updateCharts(softwareData);\n  filterTable();\n  closeModal();\n}\n\nasync function clearAllData() {\n  const pwd = prompt('This action will permanently delete all software entries.\\n\\nEnter the admin password to continue:');\n  if (pwd === null) return;\n  if (pwd !== 'ITS3C') {\n    alert('Incorrect password. Action cancelled.');\n    return;\n  }\n  const confirm1 = confirm('Are you absolutely sure?\\n\\nThis will delete ALL software entries and cannot be undone.');\n  if (!confirm1) return;\n  softwareData = [];\n  activityLog = [];\n  showSyncStatus('saving');\n  await saveData();\n  await saveLog();\n  showSyncStatus(useSharePoint ? 'synced' : 'local');\n  updateSummaryCards(softwareData);\n  updateCharts(softwareData);\n  renderTable(softwareData);\n  renderLog();\n  alert('All data has been cleared successfully.');\n}\n\n\nfunction exportCSV() {\n  if (softwareData.length === 0) {\n    alert('No software entries to export. Add some entries first.');\n    return;\n  }\n  const now     = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });\n  const total   = softwareData.length;\n  const approved   = softwareData.filter(s => (s.status||'').toLowerCase() === 'approved').length;\n  const restricted = softwareData.filter(s => (s.status||'').toLowerCase() === 'restricted').length;\n  const prohibited = softwareData.filter(s => (s.status||'').toLowerCase() === 'prohibited').length;\n  const pending    = softwareData.filter(s => (s.status||'').toLowerCase() === 'pending review').length;\n\n  const statusBadgeHtml = (s) => {\n    const map = { approved:'#057a55:#def7ec', restricted:'#92400e:#fef3c7', prohibited:'#9b1c1c:#fde8e8', 'pending review':'#5b21b6:#ede9fe' };\n    const [color, bg] = (map[(s||'').toLowerCase()] || '#374151:#f3f4f6').split(':');\n    return `<span style=\"background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap\">${s||'—'}</span>`;\n  };\n  const riskBadgeHtml = (r) => {\n    const map = { high:'#9b1c1c:#fde8e8', medium:'#92400e:#fef3c7', low:'#057a55:#def7ec' };\n    const [color, bg] = (map[(r||'').toLowerCase()] || '#374151:#f3f4f6').split(':');\n    return `<span style=\"background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap\">${r||'—'}</span>`;\n  };\n  const reviewBadgeHtml = (r) => {\n    const map = { completed:'#1e429f:#e1effe', overdue:'#9b1c1c:#fde8e8', scheduled:'#374151:#f3f4f6' };\n    const [color, bg] = (map[(r||'').toLowerCase()] || '#374151:#f3f4f6').split(':');\n    return `<span style=\"background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap\">${r||'—'}</span>`;\n  };\n\n  const rows = softwareData.map((s, i) => `\n    <tr style=\"background:${i%2===0?'#ffffff':'#f9fafb'}\">\n      <td style=\"padding:10px 12px;font-family:monospace;font-size:11px;color:#5a6278;border-bottom:1px solid #e2e5ea\">${s.id||'—'}</td>\n      <td style=\"padding:10px 12px;border-bottom:1px solid #e2e5ea\">\n        <div style=\"font-weight:500;font-size:13px\">${s.name||'—'}</div>\n        <div style=\"font-size:11px;color:#8c93a8;margin-top:2px\">${s.version||''}</div>\n      </td>\n      <td style=\"padding:10px 12px;font-size:12px;color:#5a6278;border-bottom:1px solid #e2e5ea\">${s.vendor||'—'}</td>\n      <td style=\"padding:10px 12px;font-size:12px;color:#5a6278;border-bottom:1px solid #e2e5ea\">${s.type||'—'}</td>\n      <td style=\"padding:10px 12px;font-size:12px;color:#5a6278;border-bottom:1px solid #e2e5ea\">${s.category||'—'}</td>\n      <td style=\"padding:10px 12px;border-bottom:1px solid #e2e5ea\">${statusBadgeHtml(s.status)}</td>\n      <td style=\"padding:10px 12px;border-bottom:1px solid #e2e5ea\">${riskBadgeHtml(s.risk)}</td>\n      <td style=\"padding:10px 12px;border-bottom:1px solid #e2e5ea\">${reviewBadgeHtml(s.reviewStatus)}</td>\n      <td style=\"padding:10px 12px;font-size:11px;color:#5a6278;border-bottom:1px solid #e2e5ea\">${s.bizOwner||'—'}</td>\n      <td style=\"padding:10px 12px;font-size:11px;color:#5a6278;border-bottom:1px solid #e2e5ea\">${s.techOwner||'—'}</td>\n      <td style=\"padding:10px 12px;font-size:11px;font-family:monospace;color:#5a6278;border-bottom:1px solid #e2e5ea\">${s.approvalDate||'—'}</td>\n      <td style=\"padding:10px 12px;font-size:11px;font-family:monospace;color:${(s.reviewStatus||'').toLowerCase()==='overdue'?'#dc2626':'#5a6278'};font-weight:${(s.reviewStatus||'').toLowerCase()==='overdue'?'600':'400'};border-bottom:1px solid #e2e5ea\">${s.lastReview||'—'}</td>\n    </tr>`).join('');\n\n  const html = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>IDEMIA Approved Software List — ${now}</title>\n<style>\n  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n  body { font-family: 'IBM Plex Sans', sans-serif; background: #f4f5f7; color: #1a1f2e; font-size: 14px; }\n  .page { max-width: 1100px; margin: 0 auto; padding: 40px 32px; }\n  @media print {\n    body { background: white; }\n    .page { padding: 20px; max-width: 100%; }\n    .no-print { display: none !important; }\n    table { font-size: 10px; }\n    td, th { padding: 6px 8px !important; }\n  }\n  .header { background: #1a1f2e; color: white; border-radius: 12px; padding: 32px 40px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; }\n  .header-title { font-size: 22px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 6px; }\n  .header-sub { font-size: 13px; color: rgba(255,255,255,0.5); }\n  .header-meta { text-align: right; font-size: 12px; color: rgba(255,255,255,0.55); }\n  .header-badge { display: inline-block; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); font-size: 11px; padding: 3px 10px; border-radius: 20px; font-family: 'IBM Plex Mono', monospace; margin-top: 6px; }\n  .confidential { display: inline-block; background: rgba(220,38,38,0.2); color: #fca5a5; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.06em; text-transform: uppercase; margin-top: 8px; }\n  .summary-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 20px; }\n  .summary-card { background: white; border: 1px solid #e2e5ea; border-radius: 10px; padding: 16px 20px; display: flex; align-items: center; gap: 14px; }\n  .summary-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; font-weight: 700; font-family: 'IBM Plex Mono', monospace; }\n  .summary-label { font-size: 11px; color: #8c93a8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }\n  .summary-val { font-size: 22px; font-weight: 600; font-family: 'IBM Plex Mono', monospace; letter-spacing: -0.02em; margin-top: 2px; }\n  .table-section { background: white; border: 1px solid #e2e5ea; border-radius: 12px; overflow: hidden; margin-bottom: 20px; }\n  .table-header { padding: 16px 20px; border-bottom: 1px solid #e2e5ea; display: flex; justify-content: space-between; align-items: center; }\n  .table-header-title { font-size: 13px; font-weight: 600; color: #1a1f2e; }\n  .table-header-count { font-size: 12px; color: #8c93a8; font-family: 'IBM Plex Mono', monospace; }\n  table { width: 100%; border-collapse: collapse; }\n  thead { background: #f9fafb; }\n  th { padding: 10px 12px; text-align: left; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #8c93a8; border-bottom: 1px solid #e2e5ea; white-space: nowrap; }\n  .footer { text-align: center; padding: 20px; font-size: 11px; color: #8c93a8; }\n  .print-btn { display: inline-flex; align-items: center; gap: 8px; background: #1a56db; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: 'IBM Plex Sans', sans-serif; }\n  .print-btn:hover { background: #1546b8; }\n</style>\n</head>\n<body>\n<div class=\"page\">\n\n  <div class=\"no-print\" style=\"margin-bottom:20px;display:flex;align-items:center;gap:12px\">\n    <button class=\"print-btn\" onclick=\"window.print()\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 9V3h8v6M6 17H4a2 2 0 01-2-2v-4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2h-2M6 13h8v6H6v-6z\"/></svg>\n      Print / Save as PDF\n    </button>\n    <span style=\"font-size:12px;color:#8c93a8\">Use your browser's Print function → Save as PDF to export this list</span>\n  </div>\n\n  <div class=\"header\">\n    <div>\n      <div class=\"header-title\">IDEMIA Approved Software List</div>\n      <div class=\"header-sub\">IDEMIA · GRC / Information Security · Cybersecurity Team</div>\n      <div style=\"margin-top:10px\"><span class=\"confidential\">Confidential — Internal Use Only</span></div>\n    </div>\n    <div class=\"header-meta\">\n      <div>Generated: ${now}</div>\n      <div style=\"margin-top:4px\">Total Entries: ${total}</div>\n      <div><span class=\"header-badge\">ASL-${new Date().toISOString().slice(0,10)}</span></div>\n    </div>\n  </div>\n\n  <div class=\"summary-row\">\n    <div class=\"summary-card\">\n      <div class=\"summary-icon\" style=\"background:#def7ec;color:#057a55\">${approved}</div>\n      <div><div class=\"summary-label\">Approved</div><div class=\"summary-val\" style=\"color:#057a55\">${approved}</div></div>\n    </div>\n    <div class=\"summary-card\">\n      <div class=\"summary-icon\" style=\"background:#fef3c7;color:#d97706\">${restricted}</div>\n      <div><div class=\"summary-label\">Restricted</div><div class=\"summary-val\" style=\"color:#d97706\">${restricted}</div></div>\n    </div>\n    <div class=\"summary-card\">\n      <div class=\"summary-icon\" style=\"background:#fde8e8;color:#dc2626\">${prohibited}</div>\n      <div><div class=\"summary-label\">Prohibited</div><div class=\"summary-val\" style=\"color:#dc2626\">${prohibited}</div></div>\n    </div>\n    <div class=\"summary-card\">\n      <div class=\"summary-icon\" style=\"background:#ede9fe;color:#7c3aed\">${pending}</div>\n      <div><div class=\"summary-label\">Pending Review</div><div class=\"summary-val\" style=\"color:#7c3aed\">${pending}</div></div>\n    </div>\n  </div>\n\n  <div class=\"table-section\">\n    <div class=\"table-header\">\n      <div class=\"table-header-title\">Complete Software Inventory</div>\n      <div class=\"table-header-count\">${total} entries · ${now}</div>\n    </div>\n    <div style=\"overflow-x:auto\">\n      <table>\n        <thead>\n          <tr>\n            <th>SW-ID</th>\n            <th>Software Name</th>\n            <th>Vendor</th>\n            <th>Type</th>\n            <th>Category</th>\n            <th>Status</th>\n            <th>Risk</th>\n            <th>Review Status</th>\n            <th>Business Owner</th>\n            <th>Technical Owner</th>\n            <th>Approval Date</th>\n            <th>Last Review</th>\n          </tr>\n        </thead>\n        <tbody>${rows}</tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"footer\">\n    IDEMIA Approved Software List · Cybersecurity Team · Generated ${now} · For internal use only\n  </div>\n\n</div>\n";}

// ── ACTIVITY LOG ENGINE ──
const LOG_KEY = 'grc_activity_log_v1';
let activityLog = [];

function loadLog() {
  try {
    const stored = localStorage.getItem(LOG_KEY);
    if (stored) activityLog = JSON.parse(stored);
  } catch(e) { activityLog = []; }
}

function saveLog() {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(activityLog)); } catch(e) {}
}

function addLogEntry(type, softwareName, swId, details, oldValues) {
  const now = new Date();
  const entry = {
    id: Date.now(),
    type,
    softwareName,
    swId,
    details,
    oldValues: oldValues || null,
    timestamp: now.toISOString(),
    displayDate: now.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' }),
    displayTime: now.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' })
  };
  activityLog.unshift(entry);
  // Keep max 500 entries
  if (activityLog.length > 500) activityLog = activityLog.slice(0, 500);
  saveLog();
  updateSummaryCards(softwareData);
  renderLog();
}

function getLogColor(type) {
  const map = { added:'#057a55', edited:'#1a56db', deleted:'#dc2626', status:'#d97706' };
  return map[type] || '#6b7280';
}

function getLogIcon(type) {
  const icons = {
    added: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="M10 4v12M4 10h12"/></svg>`,
    edited: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="M11 5H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M18 2l-8 8"/></svg>`,
    deleted: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><polyline points="3 6 5 6 17 6"/><path d="M8 6V4h4v2M16 6l-1 10H7L6 6"/></svg>`,
    status: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="M4 4l12 12M4 16L16 4"/></svg>`
  };
  return icons[type] || icons.edited;
}

function renderLog() {
  const container = document.getElementById('logContainer');
  const filter = document.getElementById('logFilterType')?.value || '';
  const filtered = filter ? activityLog.filter(e => e.type === filter) : activityLog;

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding:40px;text-align:center">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
        <div style="font-size:13px;font-weight:500;color:var(--text-secondary)">${filter ? 'No entries matching this filter' : 'No activity logged yet'}</div>
        <div style="font-size:12px;color:var(--text-muted)">${filter ? 'Try a different filter' : 'All changes — adds, edits, deletes — will appear here automatically'}</div>
      </div>
    </div>`;
    return;
  }

  container.innerHTML = filtered.map((entry, idx) => {
    const color = getLogColor(entry.type);
    const icon = getLogIcon(entry.type);
    const isLast = idx === filtered.length - 1;
    const changesHtml = entry.oldValues
      ? Object.entries(entry.oldValues).map(([field, vals]) =>
          `<div style="display:flex;gap:6px;align-items:center;margin-top:4px;font-size:11px">
            <span style="color:var(--text-muted);min-width:100px">${field}</span>
            <span style="background:#fde8e8;color:#9b1c1c;padding:1px 7px;border-radius:10px;text-decoration:line-through">${vals.from||'—'}</span>
            <svg viewBox="0 0 20 20" fill="none" stroke="var(--text-muted)" stroke-width="2" style="width:10px;height:10px;flex-shrink:0"><path d="M4 10h12M12 6l4 4-4 4"/></svg>
            <span style="background:#def7ec;color:#057a55;padding:1px 7px;border-radius:10px">${vals.to||'—'}</span>
          </div>`
        ).join('')
      : '';

    return `<div style="display:flex;gap:14px;padding:14px 20px;border-bottom:${isLast?'none':'1px solid var(--border)'};transition:background 0.1s" onmouseover="this.style.background='var(--surface-2)'" onmouseout="this.style.background=''">
      <div style="display:flex;flex-direction:column;align-items:center;padding-top:2px">
        <div style="width:24px;height:24px;border-radius:50%;background:${color}20;border:1.5px solid ${color}40;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${color}">${icon}</div>
        ${!isLast ? `<div style="width:1px;flex:1;background:var(--border);margin-top:4px"></div>` : ''}
      </div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span style="font-size:13px;font-weight:500;color:var(--text-primary)">${entry.softwareName}</span>
          <span style="background:${color}15;color:${color};padding:1px 8px;border-radius:10px;font-size:11px;font-weight:600;text-transform:capitalize">${entry.type}</span>
          <span style="font-size:11px;color:var(--text-muted);font-family:var(--mono)">${entry.swId||''}</span>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-top:3px">${entry.details}</div>
        ${changesHtml ? `<div style="margin-top:6px;background:var(--bg);padding:8px 10px;border-radius:6px;border-left:2px solid var(--border-strong)">${changesHtml}</div>` : ''}
      </div>
      <div style="font-size:11px;color:var(--text-muted);font-family:var(--mono);white-space:nowrap;padding-top:2px;text-align:right">
        <div>${entry.displayDate}</div>
        <div style="margin-top:2px">${entry.displayTime}</div>
      </div>
    </div>`;
  }).join('');
}

function exportLog() {
  if (activityLog.length === 0) { alert('No log entries to export.'); return; }
  const headers = 'Timestamp,Type,Software Name,SW-ID,Details';
  const rows = activityLog.map(e =>
    [`"${e.timestamp}"`, `"${e.type}"`, `"${e.softwareName}"`, `"${e.swId||''}"`, `"${e.details.replace(/"/g,'""')}"`].join(',')
  );
  const csv = [headers, ...rows].join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = `IDEMIA-Security-Review-Log-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}

// ── Helper to detect what changed between old and new entry ──
function detectChanges(oldEntry, newEntry) {
  const watchFields = {
    name: 'Name', vendor: 'Vendor', version: 'Version', status: 'Status',
    risk: 'Risk Level', reviewStatus: 'Review Status', type: 'Type',
    category: 'Category', bizOwner: 'Business Owner', techOwner: 'Technical Owner',
    approvalDate: 'Approval Date', lastReview: 'Last Review'
  };
  const changes = {};
  Object.entries(watchFields).forEach(([key, label]) => {
    const oldVal = (oldEntry[key]||'').toString().toLowerCase();
    const newVal = (newEntry[key]||'').toString().toLowerCase();
    if (oldVal !== newVal) {
      changes[label] = { from: oldEntry[key]||'—', to: newEntry[key]||'—' };
    }
  });
  return Object.keys(changes).length > 0 ? changes : null;
}
// ── SHAREPOINT JSON BACKEND ──
// Reads and writes to a JSON file in Site Assets.
// Falls back to localStorage if running locally or SharePoint isn't available.

const SP_SITE        = 'https://idemiapublicsecurity.sharepoint.com/sites/CybersecurityTeam';
const SP_ASSETS      = `${SP_SITE}/SiteAssets`;
const DATA_FILE      = 'grc-software-data.json';
const LOG_FILE_SP    = 'grc-software-log.json';
const DATA_URL       = `${SP_ASSETS}/${DATA_FILE}`;
const LOG_URL_SP     = `${SP_ASSETS}/${LOG_FILE_SP}`;
const STORAGE_KEY    = 'grc_software_list_v1';

let softwareData = [];
let editingId    = null;
let useSharePoint = false;

// Detect if we are running from SharePoint
function detectSharePoint() {
  return window.location.href.includes('sharepoint.com') ||
         window.location.href.includes('idemiapublicsecurity');
}

function generateId() {
  const existing = softwareData.map(s => s.id).filter(id => id.startsWith('SW-'));
  const nums = existing.map(id => parseInt(id.replace('SW-',''))).filter(n => !isNaN(n));
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return `SW-${String(next).padStart(3,'0')}`;
}

// ── GET SHAREPOINT REQUEST DIGEST (needed for write operations) ──
async function getRequestDigest() {
  const res = await fetch(`${SP_SITE}/_api/contextinfo`, {
    method: 'POST',
    headers: { 'Accept': 'application/json;odata=nometadata' },
    credentials: 'include'
  });
  const json = await res.json();
  return json.FormDigestValue;
}

// ── WRITE FILE TO SHAREPOINT ──
async function writeFileToSharePoint(filename, content) {
  const digest = await getRequestDigest();
  const url = `${SP_SITE}/_api/web/GetFolderByServerRelativeUrl('sites/CybersecurityTeam/SiteAssets')/Files/Add(url='${filename}',overwrite=true)`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json;odata=nometadata',
      'X-RequestDigest': digest,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content),
    credentials: 'include'
  });
  if (!res.ok) throw new Error(`Write failed: ${res.status}`);
}

// ── READ FILE FROM SHAREPOINT ──
async function readFileFromSharePoint(url) {
  const res = await fetch(url + '?t=' + Date.now(), {
    headers: { 'Accept': 'application/json' },
    credentials: 'include'
  });
  if (!res.ok) throw new Error(`Read failed: ${res.status}`);
  return await res.json();
}

// ── SAVE DATA ──
async function saveData() {
  // Always save to localStorage as backup
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(softwareData)); } catch(e) {}
  // If on SharePoint, also write to JSON file
  if (useSharePoint) {
    try {
      await writeFileToSharePoint(DATA_FILE, softwareData);
    } catch(e) {
      console.warn('SharePoint write failed, data saved locally only:', e.message);
      showSyncStatus('warning');
    }
  }
}

// ── SAVE LOG ──
async function saveLog() {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(activityLog)); } catch(e) {}
  if (useSharePoint) {
    try {
      await writeFileToSharePoint(LOG_FILE_SP, activityLog);
    } catch(e) {
      console.warn('SharePoint log write failed:', e.message);
    }
  }
}

// ── LOAD DATA ──
async function loadData() {
  useSharePoint = detectSharePoint();
  if (useSharePoint) {
    try {
      softwareData = await readFileFromSharePoint(DATA_URL);
      showSyncStatus('synced');
      return;
    } catch(e) {
      // File doesn't exist yet or network error — fall back to localStorage
      console.warn('SharePoint read failed, using localStorage:', e.message);
      useSharePoint = false;
    }
  }
  // localStorage fallback
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) { softwareData = JSON.parse(stored); return; }
  } catch(e) {}
  softwareData = [];
}

// ── LOAD LOG ──
async function loadLog() {
  if (useSharePoint) {
    try {
      activityLog = await readFileFromSharePoint(LOG_URL_SP);
      return;
    } catch(e) {
      console.warn('SharePoint log read failed:', e.message);
    }
  }
  try {
    const stored = localStorage.getItem(LOG_KEY);
    if (stored) activityLog = JSON.parse(stored);
  } catch(e) { activityLog = []; }
}

// ── SYNC STATUS INDICATOR ──
function showSyncStatus(state) {
  const el = document.getElementById('syncStatus');
  if (!el) return;
  if (state === 'synced') {
    el.textContent = '● Synced';
    el.style.color = '#057a55';
  } else if (state === 'saving') {
    el.textContent = '↻ Saving…';
    el.style.color = '#d97706';
  } else if (state === 'warning') {
    el.textContent = '⚠ Saved locally only';
    el.style.color = '#d97706';
  } else if (state === 'local') {
    el.textContent = '● Local only';
    el.style.color = '#8c93a8';
  }
}

function updateCharts(data) {
  // ── Risk bar chart ──
  const riskCounts = { low:0, medium:0, high:0, other:0 };
  data.forEach(sw => {
    const r = (sw.risk||'').toLowerCase();
    if (r === 'low') riskCounts.low++;
    else if (r === 'medium') riskCounts.medium++;
    else if (r === 'high') riskCounts.high++;
    else riskCounts.other++;
  });
  const maxRisk = Math.max(...Object.values(riskCounts), 1);
  document.getElementById('riskChart').innerHTML = `
    <div class="bar-row"><span class="bar-label">Low Risk</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(riskCounts.low/maxRisk*100)}%;background:#057a55"></div></div><span class="bar-val">${riskCounts.low}</span></div>
    <div class="bar-row"><span class="bar-label">Medium Risk</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(riskCounts.medium/maxRisk*100)}%;background:#d97706"></div></div><span class="bar-val">${riskCounts.medium}</span></div>
    <div class="bar-row"><span class="bar-label">High Risk</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(riskCounts.high/maxRisk*100)}%;background:#dc2626"></div></div><span class="bar-val">${riskCounts.high}</span></div>
    <div class="bar-row"><span class="bar-label">Unclassified</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(riskCounts.other/maxRisk*100)}%;background:#9ca3af"></div></div><span class="bar-val">${riskCounts.other}</span></div>`;

  // ── Category donut — derived dynamically from actual data ──
  const colorPalette = ['#1a56db','#057a55','#7c3aed','#d97706','#dc2626','#0891b2','#9ca3af','#db2777','#16a34a','#ea580c'];
  // Build category map from actual data
  const catMap = {};
  data.forEach(sw => {
    const c = (sw.category || 'Unclassified').trim();
    catMap[c] = (catMap[c] || 0) + 1;
  });
  // Sort by count descending so most common categories get the prominent colors
  const activeCats = Object.entries(catMap)
    .filter(([,count]) => count > 0)
    .sort((a,b) => b[1] - a[1]);

  const total = data.length;
  const circumference = 2 * Math.PI * 40;
  let offset = 0;
  const svg = document.getElementById('donutSvg');
  svg.querySelectorAll('.donut-seg').forEach(el => el.remove());
  const insertBefore = svg.querySelector('text');

  if (total > 0) {
    activeCats.forEach(([cat, count], i) => {
      const color = colorPalette[i % colorPalette.length];
      const dash = (count / total) * circumference;
      const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
      circle.setAttribute('cx','55'); circle.setAttribute('cy','55'); circle.setAttribute('r','40');
      circle.setAttribute('fill','none'); circle.setAttribute('stroke', color);
      circle.setAttribute('stroke-width','18');
      circle.setAttribute('stroke-dasharray', `${dash} ${circumference - dash}`);
      circle.setAttribute('stroke-dashoffset', -offset);
      circle.setAttribute('transform','rotate(-90 55 55)');
      circle.classList.add('donut-seg');
      svg.insertBefore(circle, insertBefore);
      offset += dash;
    });
  }

  document.getElementById('donutTotal').textContent = total;
  document.getElementById('donutLegend').innerHTML = activeCats.length > 0
    ? activeCats.map(([cat, count], i) => {
        const color = colorPalette[i % colorPalette.length];
        return `<div class="legend-item"><span class="legend-dot" style="background:${color}"></span><span class="legend-label">${cat}</span><span class="legend-val">${count}</span></div>`;
      }).join('')
    : `<div style="font-size:12px;color:var(--text-muted)">No entries yet</div>`;
}

function updateSummaryCards(data) {
  const counts = { approved:0, restricted:0, prohibited:0, pending:0 };
  data.forEach(sw => {
    if (sw.status === 'approved') counts.approved++;
    else if (sw.status === 'restricted') counts.restricted++;
    else if (sw.status === 'prohibited') counts.prohibited++;
    else counts.pending++;
  });
  // Summary cards
  document.getElementById('count-approved').textContent    = counts.approved;
  document.getElementById('count-restricted').textContent  = counts.restricted;
  document.getElementById('count-prohibited').textContent  = counts.prohibited;
  document.getElementById('count-pending').textContent     = counts.pending;
  // Tab counts
  document.getElementById('tab-count-approved').textContent   = counts.approved;
  document.getElementById('tab-count-restricted').textContent = counts.restricted;
  document.getElementById('tab-count-prohibited').textContent = counts.prohibited;
  document.getElementById('tab-count-requests').textContent   = 0;
  document.getElementById('tab-count-log').textContent        = data.length;
  // Sidebar nav counts
  document.getElementById('nav-count-approved').textContent   = counts.approved;
  document.getElementById('nav-count-restricted').textContent = counts.restricted;
  document.getElementById('nav-count-prohibited').textContent = counts.prohibited;
  document.getElementById('nav-count-requests').textContent   = 0;
  document.getElementById('nav-count-log').textContent        = data.length;
  // Sidebar filter counts
  const needsReview = data.filter(s => (s.reviewStatus||'').toLowerCase() === 'scheduled' || (s.reviewStatus||'').toLowerCase() === 'overdue').length;
  const highRisk    = data.filter(s => (s.risk||'').toLowerCase() === 'high').length;
  const overdue     = data.filter(s => (s.reviewStatus||'').toLowerCase() === 'overdue').length;
  document.getElementById('nav-count-needs-review').textContent = needsReview;
  document.getElementById('nav-count-high-risk').textContent    = highRisk;
  document.getElementById('nav-count-overdue').textContent      = overdue;
}

async function deleteSoftware(id) {
  if (!confirm('Are you sure you want to delete this entry?')) return;
  const sw = softwareData.find(s => s.id === id);
  softwareData = softwareData.filter(s => s.id !== id);
  if (sw) addLogEntry('deleted', sw.name, sw.id, `Entry permanently deleted from the software list`);
  showSyncStatus('saving');
  await saveData();
  showSyncStatus(useSharePoint ? 'synced' : 'local');
  updateSummaryCards(softwareData);
  updateCharts(softwareData);
  filterTable();
  closeModal();
}

async function saveSoftwareEntry(e) {
  e.preventDefault();
  const f = document.getElementById('softwareForm');
  const get = id => f.querySelector(`[name="${id}"]`)?.value?.trim() || '—';
  const entry = {
    id:           editingId || generateId(),
    name:         get('name'),
    version:      get('version'),
    vendor:       get('vendor'),
    type:         get('type'),
    category:     get('category'),
    bizOwner:     get('bizOwner'),
    techOwner:    get('techOwner'),
    reviewStatus: get('reviewStatus'),
    risk:         get('risk').toLowerCase(),
    approvalDate: get('approvalDate'),
    lastReview:   get('lastReview'),
    status:       get('status').toLowerCase(),
    notes:        get('notes'),
    dataClass:    get('dataClass'),
    privilege:    get('privilege'),
    internet:     get('internet'),
    network:      get('network'),
    patching:     get('patching'),
    vulnStatus:   get('vulnStatus'),
    vendorRisk:   get('vendorRisk'),
    vendorSecurity: get('vendorSecurity'),
    approvalAuth: get('approvalAuth'),
    reviewFreq:   get('reviewFreq'),
    exception:    get('exception'),
    exceptionId:  get('exceptionId'),
  };
  if (editingId) {
    const idx = softwareData.findIndex(s => s.id === editingId);
    if (idx > -1) {
      const oldEntry = {...softwareData[idx]};
      softwareData[idx] = entry;
      const changes = detectChanges(oldEntry, entry);
      if (changes && changes['Status']) {
        addLogEntry('status', entry.name, entry.id,
          `Status changed from ${changes['Status'].from} to ${changes['Status'].to}`, changes);
      } else {
        const changeCount = changes ? Object.keys(changes).length : 0;
        addLogEntry('edited', entry.name, entry.id,
          `${changeCount} field${changeCount !== 1 ? 's' : ''} updated`, changes);
      }
    }
  } else {
    softwareData.unshift(entry);
    addLogEntry('added', entry.name, entry.id,
      `Added as ${entry.status||'pending'} · Risk: ${entry.risk||'unclassified'} · Category: ${entry.category||'—'}`);
  }
  showSyncStatus('saving');
  await saveData();
  showSyncStatus(useSharePoint ? 'synced' : 'local');
  updateSummaryCards(softwareData);
  updateCharts(softwareData);
  filterTable();
  closeModal();
}

async function clearAllData() {
  const pwd = prompt('This action will permanently delete all software entries.\n\nEnter the admin password to continue:');
  if (pwd === null) return;
  if (pwd !== 'ITS3C') {
    alert('Incorrect password. Action cancelled.');
    return;
  }
  const confirm1 = confirm('Are you absolutely sure?\n\nThis will delete ALL software entries and cannot be undone.');
  if (!confirm1) return;
  softwareData = [];
  activityLog = [];
  showSyncStatus('saving');
  await saveData();
  await saveLog();
  showSyncStatus(useSharePoint ? 'synced' : 'local');
  updateSummaryCards(softwareData);
  updateCharts(softwareData);
  renderTable(softwareData);
  renderLog();
  alert('All data has been cleared successfully.');
}


function exportCSV() {
  if (softwareData.length === 0) {
    alert('No software entries to export. Add some entries first.');
    return;
  }
  const now     = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  const total   = softwareData.length;
  const approved   = softwareData.filter(s => (s.status||'').toLowerCase() === 'approved').length;
  const restricted = softwareData.filter(s => (s.status||'').toLowerCase() === 'restricted').length;
  const prohibited = softwareData.filter(s => (s.status||'').toLowerCase() === 'prohibited').length;
  const pending    = softwareData.filter(s => (s.status||'').toLowerCase() === 'pending review').length;

  const statusBadgeHtml = (s) => {
    const map = { approved:'#057a55:#def7ec', restricted:'#92400e:#fef3c7', prohibited:'#9b1c1c:#fde8e8', 'pending review':'#5b21b6:#ede9fe' };
    const [color, bg] = (map[(s||'').toLowerCase()] || '#374151:#f3f4f6').split(':');
    return `<span style="background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap">${s||'—'}</span>`;
  };
  const riskBadgeHtml = (r) => {
    const map = { high:'#9b1c1c:#fde8e8', medium:'#92400e:#fef3c7', low:'#057a55:#def7ec' };
    const [color, bg] = (map[(r||'').toLowerCase()] || '#374151:#f3f4f6').split(':');
    return `<span style="background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap">${r||'—'}</span>`;
  };
  const reviewBadgeHtml = (r) => {
    const map = { completed:'#1e429f:#e1effe', overdue:'#9b1c1c:#fde8e8', scheduled:'#374151:#f3f4f6' };
    const [color, bg] = (map[(r||'').toLowerCase()] || '#374151:#f3f4f6').split(':');
    return `<span style="background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap">${r||'—'}</span>`;
  };

  const rows = softwareData.map((s, i) => `
    <tr style="background:${i%2===0?'#ffffff':'#f9fafb'}">
      <td style="padding:10px 12px;font-family:monospace;font-size:11px;color:#5a6278;border-bottom:1px solid #e2e5ea">${s.id||'—'}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e5ea">
        <div style="font-weight:500;font-size:13px">${s.name||'—'}</div>
        <div style="font-size:11px;color:#8c93a8;margin-top:2px">${s.version||''}</div>
      </td>
      <td style="padding:10px 12px;font-size:12px;color:#5a6278;border-bottom:1px solid #e2e5ea">${s.vendor||'—'}</td>
      <td style="padding:10px 12px;font-size:12px;color:#5a6278;border-bottom:1px solid #e2e5ea">${s.type||'—'}</td>
      <td style="padding:10px 12px;font-size:12px;color:#5a6278;border-bottom:1px solid #e2e5ea">${s.category||'—'}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e5ea">${statusBadgeHtml(s.status)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e5ea">${riskBadgeHtml(s.risk)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e5ea">${reviewBadgeHtml(s.reviewStatus)}</td>
      <td style="padding:10px 12px;font-size:11px;color:#5a6278;border-bottom:1px solid #e2e5ea">${s.bizOwner||'—'}</td>
      <td style="padding:10px 12px;font-size:11px;color:#5a6278;border-bottom:1px solid #e2e5ea">${s.techOwner||'—'}</td>
      <td style="padding:10px 12px;font-size:11px;font-family:monospace;color:#5a6278;border-bottom:1px solid #e2e5ea">${s.approvalDate||'—'}</td>
      <td style="padding:10px 12px;font-size:11px;font-family:monospace;color:${(s.reviewStatus||'').toLowerCase()==='overdue'?'#dc2626':'#5a6278'};font-weight:${(s.reviewStatus||'').toLowerCase()==='overdue'?'600':'400'};border-bottom:1px solid #e2e5ea">${s.lastReview||'—'}</td>
    </tr>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IDEMIA Approved Software List — ${now}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'IBM Plex Sans', sans-serif; background: #f4f5f7; color: #1a1f2e; font-size: 14px; }
  .page { max-width: 1100px; margin: 0 auto; padding: 40px 32px; }
  @media print {
    body { background: white; }
    .page { padding: 20px; max-width: 100%; }
    .no-print { display: none !important; }
    table { font-size: 10px; }
    td, th { padding: 6px 8px !important; }
  }
  .header { background: #1a1f2e; color: white; border-radius: 12px; padding: 32px 40px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; }
  .header-title { font-size: 22px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 6px; }
  .header-sub { font-size: 13px; color: rgba(255,255,255,0.5); }
  .header-meta { text-align: right; font-size: 12px; color: rgba(255,255,255,0.55); }
  .header-badge { display: inline-block; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); font-size: 11px; padding: 3px 10px; border-radius: 20px; font-family: 'IBM Plex Mono', monospace; margin-top: 6px; }
  .confidential { display: inline-block; background: rgba(220,38,38,0.2); color: #fca5a5; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.06em; text-transform: uppercase; margin-top: 8px; }
  .summary-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 20px; }
  .summary-card { background: white; border: 1px solid #e2e5ea; border-radius: 10px; padding: 16px 20px; display: flex; align-items: center; gap: 14px; }
  .summary-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; font-weight: 700; font-family: 'IBM Plex Mono', monospace; }
  .summary-label { font-size: 11px; color: #8c93a8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
  .summary-val { font-size: 22px; font-weight: 600; font-family: 'IBM Plex Mono', monospace; letter-spacing: -0.02em; margin-top: 2px; }
  .table-section { background: white; border: 1px solid #e2e5ea; border-radius: 12px; overflow: hidden; margin-bottom: 20px; }
  .table-header { padding: 16px 20px; border-bottom: 1px solid #e2e5ea; display: flex; justify-content: space-between; align-items: center; }
  .table-header-title { font-size: 13px; font-weight: 600; color: #1a1f2e; }
  .table-header-count { font-size: 12px; color: #8c93a8; font-family: 'IBM Plex Mono', monospace; }
  table { width: 100%; border-collapse: collapse; }
  thead { background: #f9fafb; }
  th { padding: 10px 12px; text-align: left; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #8c93a8; border-bottom: 1px solid #e2e5ea; white-space: nowrap; }
  .footer { text-align: center; padding: 20px; font-size: 11px; color: #8c93a8; }
  .print-btn { display: inline-flex; align-items: center; gap: 8px; background: #1a56db; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: 'IBM Plex Sans', sans-serif; }
  .print-btn:hover { background: #1546b8; }
</style>
</head>
<body>
<div class="page">

  <div class="no-print" style="margin-bottom:20px;display:flex;align-items:center;gap:12px">
    <button class="print-btn" onclick="window.print()">
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V3h8v6M6 17H4a2 2 0 01-2-2v-4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2h-2M6 13h8v6H6v-6z"/></svg>
      Print / Save as PDF
    </button>
    <span style="font-size:12px;color:#8c93a8">Use your browser's Print function → Save as PDF to export this list</span>
  </div>

  <div class="header">
    <div>
      <div class="header-title">IDEMIA Approved Software List</div>
      <div class="header-sub">IDEMIA · GRC / Information Security · Cybersecurity Team</div>
      <div style="margin-top:10px"><span class="confidential">Confidential — Internal Use Only</span></div>
    </div>
    <div class="header-meta">
      <div>Generated: ${now}</div>
      <div style="margin-top:4px">Total Entries: ${total}</div>
      <div><span class="header-badge">ASL-${new Date().toISOString().slice(0,10)}</span></div>
    </div>
  </div>

  <div class="summary-row">
    <div class="summary-card">
      <div class="summary-icon" style="background:#def7ec;color:#057a55">${approved}</div>
      <div><div class="summary-label">Approved</div><div class="summary-val" style="color:#057a55">${approved}</div></div>
    </div>
    <div class="summary-card">
      <div class="summary-icon" style="background:#fef3c7;color:#d97706">${restricted}</div>
      <div><div class="summary-label">Restricted</div><div class="summary-val" style="color:#d97706">${restricted}</div></div>
    </div>
    <div class="summary-card">
      <div class="summary-icon" style="background:#fde8e8;color:#dc2626">${prohibited}</div>
      <div><div class="summary-label">Prohibited</div><div class="summary-val" style="color:#dc2626">${prohibited}</div></div>
    </div>
    <div class="summary-card">
      <div class="summary-icon" style="background:#ede9fe;color:#7c3aed">${pending}</div>
      <div><div class="summary-label">Pending Review</div><div class="summary-val" style="color:#7c3aed">${pending}</div></div>
    </div>
  </div>

  <div class="table-section">
    <div class="table-header">
      <div class="table-header-title">Complete Software Inventory</div>
      <div class="table-header-count">${total} entries · ${now}</div>
    </div>
    <div style="overflow-x:auto">
      <table>
        <thead>
          <tr>
            <th>SW-ID</th>
            <th>Software Name</th>
            <th>Vendor</th>
            <th>Type</th>
            <th>Category</th>
            <th>Status</th>
            <th>Risk</th>
            <th>Review Status</th>
            <th>Business Owner</th>
            <th>Technical Owner</th>
            <th>Approval Date</th>
            <th>Last Review</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>

  <div class="footer">
    IDEMIA Approved Software List · Cybersecurity Team · Generated ${now} · For internal use only
  </div>

</div>
</body>
</html>`;

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
}

// ── RENDER TABLE ──
function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="14" style="text-align:center;padding:48px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:10px">
        <div style="width:36px;height:36px;background:var(--bg);border-radius:8px;display:flex;align-items:center;justify-content:center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="var(--text-muted)" stroke-width="1.5"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M3 8h14"/></svg>
        </div>
        <div style="font-size:13px;font-weight:500;color:var(--text-secondary)">No software entries yet</div>
        <div style="font-size:12px;color:var(--text-muted)">Click <strong>Add Software</strong> to add your first entry</div>
      </div>
    </td></tr>`;
    document.getElementById('tableInfo').textContent = 'Showing 0 entries';
    return;
  }
  data.forEach(sw => {
    const isOverdue = sw.reviewStatus === 'Overdue';
    const row = document.createElement('tr');
    row.onclick = () => openModal('detail', sw);
    row.innerHTML = `
      <td class="td-mono">${sw.id}</td>
      <td class="td-name">${sw.name}${isOverdue ? `<span class="warn-icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6v4M10 13v.5"/><circle cx="10" cy="10" r="7"/></svg></span>` : ''}</td>
      <td class="td-muted">${sw.version}</td>
      <td>${sw.vendor}</td>
      <td><span style="font-size:11px;color:var(--text-secondary)">${sw.type}</span></td>
      <td><span style="font-size:11px;color:var(--text-secondary)">${sw.category}</span></td>
      <td class="td-muted" style="font-size:12px">${sw.bizOwner}</td>
      <td class="td-muted" style="font-size:12px">${sw.techOwner}</td>
      <td>${reviewBadge(sw.reviewStatus)}</td>
      <td>${riskBadge(sw.risk)}</td>
      <td class="td-mono">${sw.approvalDate}</td>
      <td class="td-mono" style="${isOverdue?'color:#dc2626;font-weight:500':''}">${sw.lastReview}</td>
      <td>${statusBadge(sw.status)}</td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openModal('detail',softwareData.find(s=>s.id==='${sw.id}'))">View</button>
          <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openModal('edit',softwareData.find(s=>s.id==='${sw.id}'))">Edit</button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
  document.getElementById('tableInfo').textContent = `Showing ${data.length} of ${softwareData.length} entries`;
}

function statusBadge(s){
  const map={approved:'badge-approved',restricted:'badge-restricted',prohibited:'badge-prohibited','pending review':'badge-pending'};
  const cls=map[s]||'badge-pending';
  return `<span class="badge ${cls}"><span class="badge-dot"></span>${s.charAt(0).toUpperCase()+s.slice(1)}</span>`;
}
function riskBadge(r){
  const map={low:'badge-low',medium:'badge-medium',high:'badge-high'};
  return `<span class="badge ${map[r]||'badge-low'}"><span class="badge-dot"></span>${r.charAt(0).toUpperCase()+r.slice(1)}</span>`;
}
function reviewBadge(r){
  const map={Completed:'badge-completed',Overdue:'badge-overdue',Scheduled:'badge-scheduled'};
  return `<span class="badge ${map[r]||'badge-scheduled'}">${r}</span>`;
}

// ── FILTER ──
function filterTable(){
  const search = document.getElementById('searchInput').value.toLowerCase();
  const status = document.getElementById('filterStatus').value.toLowerCase();
  const risk   = document.getElementById('filterRisk').value.toLowerCase();
  const type   = document.getElementById('filterType').value;
  const review = document.getElementById('filterReview').value.toLowerCase();
  const filtered = softwareData.filter(sw => {
    const matchSearch = !search || sw.name.toLowerCase().includes(search) || sw.vendor.toLowerCase().includes(search);
    const matchStatus = !status || sw.status.toLowerCase() === status;
    const matchRisk   = !risk   || sw.risk.toLowerCase() === risk;
    const matchType   = !type   || sw.type === type;
    const matchReview = !review || (sw.reviewStatus || '').toLowerCase() === review;
    return matchSearch && matchStatus && matchRisk && matchType && matchReview;
  });
  renderTable(filtered);
}

// ── TABS ──
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
  // update sidebar active state
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(i => i.classList.remove('active'));
}

function showTab(t) {
  const map = {approved:'tab-approved',restricted:'tab-restricted',prohibited:'tab-prohibited',requests:'tab-requests',log:'tab-log'};
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabIdx = {approved:0,restricted:1,prohibited:2,requests:3,log:4};
  tabBtns.forEach(b => b.classList.remove('active'));
  tabBtns[tabIdx[t]]?.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(map[t]).classList.add('active');
}

// ── MODAL ──
function openModal(type, sw) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  const title = document.getElementById('modalTitle');
  const sub = document.getElementById('modalSub');
  const footer = document.getElementById('modalFooter');

  if (type === 'add' || type === 'edit') {
    editingId = type === 'edit' ? sw.id : null;
    title.textContent = type === 'edit' ? `Edit — ${sw.name}` : 'Add New Software';
    sub.textContent = type === 'edit' ? sw.id : 'Enter details for the new software entry';
    const v = sw || {};
    body.innerHTML = `
      <form id="softwareForm" onsubmit="saveSoftwareEntry(event)">
        <div class="modal-section">
          <div class="modal-section-title">Software Overview</div>
          <div class="modal-grid">
            ${fi('Software Name','name',v.name,'text',true)}
            ${fi('Version','version',v.version,'text')}
            ${fi('Vendor','vendor',v.vendor,'text',true)}
            ${fs('Software Type','type',['SaaS','On-Premise','Open Source','Commercial'],v.type)}
            ${fs('Category','category',['Productivity','Security','Dev Tools','Infrastructure','Other'],v.category)}
            ${fs('Status','status',['Approved','Restricted','Prohibited','Pending Review'],v.status)}
            ${fi('Business Owner','bizOwner',v.bizOwner,'text')}
            ${fi('Technical Owner','techOwner',v.techOwner,'text')}
          </div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Security Details</div>
          <div class="modal-grid">
            ${fi('Data Classification','dataClass',v.dataClass,'text')}
            ${fi('Privilege Requirement','privilege',v.privilege,'text')}
            ${fs('Internet Access','internet',['Yes','No','Partial'],v.internet)}
            ${fi('Network Behavior','network',v.network,'text')}
            ${fi('Patching Method','patching',v.patching,'text')}
            ${fi('Vulnerability Status','vulnStatus',v.vulnStatus,'text')}
          </div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Vendor & Review</div>
          <div class="modal-grid">
            ${fs('Vendor Risk Assessment','vendorRisk',['Completed','In Progress','Not Started'],v.vendorRisk)}
            ${fi('Vendor Security Status','vendorSecurity',v.vendorSecurity,'text')}
            ${fi('Approval Authority','approvalAuth',v.approvalAuth,'text')}
            ${fs('Risk Level','risk',['Low','Medium','High'],v.risk)}
            ${fi('Approval Date','approvalDate',v.approvalDate,'date')}
            ${fi('Last Review Date','lastReview',v.lastReview,'date')}
            ${fs('Review Status','reviewStatus',['Completed','Scheduled','Overdue'],v.reviewStatus)}
            ${fs('Review Frequency','reviewFreq',['Annual','Semi-Annual','Quarterly'],v.reviewFreq)}
            ${fs('Exception Required','exception',['No','Yes'],v.exception)}
            ${fi('Exception ID','exceptionId',v.exceptionId,'text')}
          </div>
        </div>
        <div class="modal-section" style="margin-bottom:0">
          <div class="modal-section-title">Notes</div>
          <textarea name="notes" style="width:100%;height:80px;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius);font-family:var(--sans);font-size:13px;resize:vertical;color:var(--text-primary);background:var(--bg);outline:none">${v.notes||''}</textarea>
        </div>
      </form>`;
    footer.innerHTML = `
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      ${type==='edit' ? `<button class="btn btn-ghost" style="color:var(--red)" onclick="deleteSoftware('${sw.id}')">Delete</button>` : ''}
      <button class="btn btn-primary" onclick="document.getElementById('softwareForm').requestSubmit()">
        ${type==='edit' ? 'Save Changes' : 'Add Software'}
      </button>`;
  } else if (sw) {
    editingId = null;
    title.textContent = sw.name;
    sub.textContent = `${sw.id} — ${sw.vendor}`;
    body.innerHTML = `
      <div class="modal-section">
        <div class="modal-section-title">Software Overview</div>
        <div class="modal-grid">
          <div><div class="modal-field-label">Software Name</div><div class="modal-field-value">${sw.name}</div></div>
          <div><div class="modal-field-label">Version</div><div class="modal-field-value mono">${sw.version}</div></div>
          <div><div class="modal-field-label">Vendor</div><div class="modal-field-value">${sw.vendor}</div></div>
          <div><div class="modal-field-label">Software Type</div><div class="modal-field-value">${sw.type}</div></div>
          <div><div class="modal-field-label">Category</div><div class="modal-field-value">${sw.category}</div></div>
          <div><div class="modal-field-label">Status</div><div class="modal-field-value">${statusBadge(sw.status)}</div></div>
          <div><div class="modal-field-label">Business Owner</div><div class="modal-field-value">${sw.bizOwner}</div></div>
          <div><div class="modal-field-label">Technical Owner</div><div class="modal-field-value">${sw.techOwner}</div></div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Security & Access Details</div>
        <div class="modal-grid">
          <div><div class="modal-field-label">Data Classification</div><div class="modal-field-value">${sw.dataClass}</div></div>
          <div><div class="modal-field-label">Privilege Requirement</div><div class="modal-field-value">${sw.privilege}</div></div>
          <div><div class="modal-field-label">Internet Access</div><div class="modal-field-value">${sw.internet}</div></div>
          <div><div class="modal-field-label">Network Behavior</div><div class="modal-field-value mono" style="font-size:11px">${sw.network}</div></div>
          <div><div class="modal-field-label">Patching Method</div><div class="modal-field-value">${sw.patching}</div></div>
          <div><div class="modal-field-label">Vulnerability Status</div><div class="modal-field-value">${sw.vulnStatus}</div></div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Vendor Risk</div>
        <div class="modal-grid">
          <div><div class="modal-field-label">Vendor Risk Assessment</div><div class="modal-field-value">${sw.vendorRisk}</div></div>
          <div><div class="modal-field-label">Vendor Security Status</div><div class="modal-field-value">${sw.vendorSecurity}</div></div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Approval & Review</div>
        <div class="modal-grid">
          <div><div class="modal-field-label">Approval Authority</div><div class="modal-field-value">${sw.approvalAuth}</div></div>
          <div><div class="modal-field-label">Approval Date</div><div class="modal-field-value mono">${sw.approvalDate}</div></div>
          <div><div class="modal-field-label">Last Review Date</div><div class="modal-field-value mono" style="${sw.reviewStatus==='Overdue'?'color:#dc2626;font-weight:500':''}">${sw.lastReview}${sw.reviewStatus==='Overdue'?' ⚠ Overdue':''}</div></div>
          <div><div class="modal-field-label">Review Frequency</div><div class="modal-field-value">${sw.reviewFreq}</div></div>
          <div><div class="modal-field-label">Review Status</div><div class="modal-field-value">${reviewBadge(sw.reviewStatus)}</div></div>
          <div><div class="modal-field-label">Risk Level</div><div class="modal-field-value">${riskBadge(sw.risk)}</div></div>
          <div><div class="modal-field-label">Exception Required</div><div class="modal-field-value">${sw.exception}</div></div>
          <div><div class="modal-field-label">Exception ID</div><div class="modal-field-value mono">${sw.exceptionId}</div></div>
        </div>
      </div>
      <div class="modal-section" style="margin-bottom:0">
        <div class="modal-section-title">Notes</div>
        <div class="modal-field-value notes">${sw.notes}</div>
      </div>`;
    footer.innerHTML = `
      <button class="btn btn-ghost" onclick="closeModal()">Close</button>
      <button class="btn btn-secondary" onclick="openModal('edit',softwareData.find(s=>s.id==='${sw.id}'))">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px"><path d="M11 5H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M18 2l-8 8M15 2h3v3"/></svg>
        Edit Entry
      </button>
      <button class="btn btn-primary" onclick="exportCSV()">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px"><path d="M10 3v10M5 13l5 5 5-5"/></svg>
        Export CSV
      </button>`;
  }
  overlay.classList.add('open');
}

// Form field helpers
function fi(label, name, val, type='text', required=false) {
  const v = (val && val !== '—') ? val : '';
  return `<div>
    <label class="modal-field-label">${label}${required?' *':''}</label>
    <input type="${type}" name="${name}" value="${v}" ${required?'required':''} style="width:100%;padding:7px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:13px;font-family:var(--sans);color:var(--text-primary);background:var(--bg);outline:none" placeholder="${label}…">
  </div>`;
}
function fs(label, name, opts, val) {
  const current = (val||'').toLowerCase();
  return `<div>
    <label class="modal-field-label">${label}</label>
    <select name="${name}" style="width:100%;padding:7px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:13px;font-family:var(--sans);color:var(--text-primary);background:var(--bg);outline:none">
      <option value="">Select…</option>${opts.map(o=>`<option value="${o.toLowerCase()}" ${current===o.toLowerCase()?'selected':''}>${o}</option>`).join('')}
    </select>
  </div>`;
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modalOverlay')) {
    document.getElementById('modalOverlay').classList.remove('open');
    editingId = null;
  }
}

function exportList() { exportCSV(); }

// ── SIDEBAR FILTERS ──
let activeSidebarFilter = null;

function applySidebarFilter(filter) {
  // Toggle off if already active
  if (activeSidebarFilter === filter) {
    activeSidebarFilter = null;
    document.querySelectorAll('.sidebar-item[id^="filter-"]').forEach(el => el.classList.remove('active'));
    // Make sure Approved tab is shown and reset filters
    showTab('approved');
    document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
    document.querySelector('.sidebar-item[onclick="showTab(\'approved\')"]').classList.add('active');
    renderTable(softwareData);
    return;
  }
  activeSidebarFilter = filter;
  // Clear all active states then set this one
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  document.getElementById('filter-' + filter).classList.add('active');
  // Make sure approved tab is visible
  showTab('approved');
  // Apply the filter
  let filtered;
  if (filter === 'needs-review') {
    filtered = softwareData.filter(s => (s.reviewStatus||'').toLowerCase() === 'scheduled' || (s.reviewStatus||'').toLowerCase() === 'overdue');
  } else if (filter === 'high-risk') {
    filtered = softwareData.filter(s => (s.risk||'').toLowerCase() === 'high');
  } else if (filter === 'overdue') {
    filtered = softwareData.filter(s => (s.reviewStatus||'').toLowerCase() === 'overdue');
  }
  renderTable(filtered);
  // Update table info label
  const labels = { 'needs-review': 'Needs Review', 'high-risk': 'High Risk Items', 'overdue': 'Expired Reviews' };
  document.getElementById('tableInfo').textContent = `Showing ${filtered.length} entries — Filter: ${labels[filter]}`;
}

// ── AUDIT REPORT ──
function generateAuditReport() {
  if (softwareData.length === 0) {
    alert('No software entries to report on. Add some entries first.');
    return;
  }
  const now        = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  const total      = softwareData.length;
  const approved   = softwareData.filter(s => (s.status||'').toLowerCase() === 'approved').length;
  const restricted = softwareData.filter(s => (s.status||'').toLowerCase() === 'restricted').length;
  const prohibited = softwareData.filter(s => (s.status||'').toLowerCase() === 'prohibited').length;
  const pending    = softwareData.filter(s => (s.status||'').toLowerCase() === 'pending review').length;
  const high       = softwareData.filter(s => (s.risk||'').toLowerCase() === 'high');
  const medium     = softwareData.filter(s => (s.risk||'').toLowerCase() === 'medium');
  const low        = softwareData.filter(s => (s.risk||'').toLowerCase() === 'low');
  const overdue    = softwareData.filter(s => (s.reviewStatus||'').toLowerCase() === 'overdue');
  const completed  = softwareData.filter(s => (s.reviewStatus||'').toLowerCase() === 'completed').length;

  // Category breakdown — derived from actual data
  const colorPalette = ['#1a56db','#057a55','#7c3aed','#d97706','#dc2626','#0891b2','#9ca3af','#db2777','#16a34a','#ea580c'];
  const catMap = {};
  softwareData.forEach(s => {
    const c = (s.category || 'Unclassified').trim();
    catMap[c] = (catMap[c] || 0) + 1;
  });
  const activeCats = Object.entries(catMap).sort((a,b) => b[1]-a[1]);

  const catBars = activeCats.map(([cat, count], i) => {
    const pct = total > 0 ? Math.round((count/total)*100) : 0;
    const color = colorPalette[i % colorPalette.length];
    return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
      <span style="width:110px;font-size:12px;color:#5a6278;flex-shrink:0">${cat}</span>
      <div style="flex:1;height:8px;background:#f4f5f7;border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:${color};border-radius:99px"></div>
      </div>
      <span style="font-size:12px;font-family:monospace;color:#5a6278;width:24px;text-align:right">${count}</span>
    </div>`;
  }).join('') || `<div style="font-size:12px;color:#8c93a8;padding:8px 0">No entries yet</div>`;

  const statusBadgeHtml = (s) => {
    const map = { approved:'#057a55:#def7ec', restricted:'#92400e:#fef3c7', prohibited:'#9b1c1c:#fde8e8', 'pending review':'#5b21b6:#ede9fe' };
    const [color, bg] = (map[(s||'').toLowerCase()] || '#374151:#f3f4f6').split(':');
    return `<span style="background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600">${s||'—'}</span>`;
  };
  const riskBadgeHtml = (r) => {
    const map = { high:'#9b1c1c:#fde8e8', medium:'#92400e:#fef3c7', low:'#057a55:#def7ec' };
    const [color, bg] = (map[(r||'').toLowerCase()] || '#374151:#f3f4f6').split(':');
    return `<span style="background:${bg};color:${color};padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600">${r||'—'}</span>`;
  };

  const highRows = high.map(s => `
    <tr>
      <td style="padding:10px 12px;font-family:monospace;font-size:12px;color:#5a6278">${s.id}</td>
      <td style="padding:10px 12px;font-weight:500">${s.name}</td>
      <td style="padding:10px 12px;color:#5a6278">${s.vendor}</td>
      <td style="padding:10px 12px">${statusBadgeHtml(s.status)}</td>
      <td style="padding:10px 12px;color:#5a6278;font-size:12px">${s.bizOwner||'—'}</td>
      <td style="padding:10px 12px;color:#5a6278;font-size:12px">${s.lastReview||'—'}</td>
    </tr>`).join('') || `<tr><td colspan="6" style="padding:20px;text-align:center;color:#8c93a8;font-size:13px">No high risk entries</td></tr>`;

  const overdueRows = overdue.map(s => `
    <tr>
      <td style="padding:10px 12px;font-family:monospace;font-size:12px;color:#5a6278">${s.id}</td>
      <td style="padding:10px 12px;font-weight:500">${s.name}</td>
      <td style="padding:10px 12px;color:#5a6278">${s.vendor}</td>
      <td style="padding:10px 12px;color:#dc2626;font-weight:500;font-size:12px">${s.lastReview||'—'}</td>
      <td style="padding:10px 12px">${statusBadgeHtml(s.status)}</td>
      <td style="padding:10px 12px;color:#5a6278;font-size:12px">${s.techOwner||'—'}</td>
    </tr>`).join('') || `<tr><td colspan="6" style="padding:20px;text-align:center;color:#8c93a8;font-size:13px">No overdue reviews</td></tr>`;

  const allRows = softwareData.map(s => `
    <tr>
      <td style="padding:8px 10px;font-family:monospace;font-size:11px;color:#5a6278">${s.id}</td>
      <td style="padding:8px 10px;font-weight:500;font-size:12px">${s.name}</td>
      <td style="padding:8px 10px;font-size:12px;color:#5a6278">${s.vendor}</td>
      <td style="padding:8px 10px;font-size:12px;color:#5a6278">${s.category||'—'}</td>
      <td style="padding:8px 10px">${statusBadgeHtml(s.status)}</td>
      <td style="padding:8px 10px">${riskBadgeHtml(s.risk)}</td>
      <td style="padding:8px 10px;font-size:11px;color:#5a6278">${s.approvalDate||'—'}</td>
      <td style="padding:8px 10px;font-size:11px;color:${(s.reviewStatus||'').toLowerCase()==='overdue'?'#dc2626':'#5a6278'};font-weight:${(s.reviewStatus||'').toLowerCase()==='overdue'?'600':'400'}">${s.lastReview||'—'}</td>
    </tr>`).join('');

  const riskPct = (n) => total > 0 ? Math.round((n/total)*100) : 0;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IDEMIA GRC Software Inventory — Executive Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'IBM Plex Sans', sans-serif; background: #f4f5f7; color: #1a1f2e; font-size: 14px; line-height: 1.5; }
  .page { max-width: 960px; margin: 0 auto; padding: 40px 32px; }
  @media print {
    body { background: white; }
    .page { padding: 20px; }
    .no-print { display: none !important; }
    .section { break-inside: avoid; }
  }
  .header { background: #1a1f2e; color: white; border-radius: 12px; padding: 36px 40px; margin-bottom: 28px; display: flex; justify-content: space-between; align-items: flex-end; }
  .header-title { font-size: 24px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 6px; }
  .header-sub { font-size: 13px; color: rgba(255,255,255,0.5); }
  .header-meta { text-align: right; }
  .header-date { font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 4px; }
  .header-badge { display: inline-block; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); font-size: 11px; padding: 3px 10px; border-radius: 20px; font-family: 'IBM Plex Mono', monospace; }
  .section { background: white; border: 1px solid #e2e5ea; border-radius: 12px; padding: 28px; margin-bottom: 20px; }
  .section-title { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #8c93a8; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #e2e5ea; }
  .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 20px; }
  .stat-card { background: #f9fafb; border: 1px solid #e2e5ea; border-radius: 10px; padding: 18px; }
  .stat-card.accent-green { border-top: 3px solid #057a55; }
  .stat-card.accent-amber { border-top: 3px solid #d97706; }
  .stat-card.accent-red   { border-top: 3px solid #dc2626; }
  .stat-card.accent-blue  { border-top: 3px solid #1a56db; }
  .stat-card.accent-gray  { border-top: 3px solid #6b7280; }
  .stat-card.accent-purple { border-top: 3px solid #7c3aed; }
  .stat-label { font-size: 11px; color: #8c93a8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
  .stat-val { font-size: 30px; font-weight: 600; font-family: 'IBM Plex Mono', monospace; letter-spacing: -0.03em; }
  .stat-val.green  { color: #057a55; }
  .stat-val.amber  { color: #d97706; }
  .stat-val.red    { color: #dc2626; }
  .stat-val.blue   { color: #1a56db; }
  .stat-val.purple { color: #7c3aed; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .risk-bar-wrap { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .risk-label { width: 80px; font-size: 12px; color: #5a6278; flex-shrink: 0; }
  .risk-track { flex: 1; height: 10px; background: #f4f5f7; border-radius: 99px; overflow: hidden; }
  .risk-fill-high   { height: 100%; background: #dc2626; border-radius: 99px; }
  .risk-fill-medium { height: 100%; background: #d97706; border-radius: 99px; }
  .risk-fill-low    { height: 100%; background: #057a55; border-radius: 99px; }
  .risk-count { font-size: 12px; font-family: 'IBM Plex Mono', monospace; color: #8c93a8; width: 24px; text-align: right; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  thead { background: #f9fafb; }
  th { padding: 10px 12px; text-align: left; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: #8c93a8; border-bottom: 1px solid #e2e5ea; }
  tbody tr { border-bottom: 1px solid #f4f5f7; }
  tbody tr:last-child { border-bottom: none; }
  .footer { text-align: center; padding: 20px; font-size: 12px; color: #8c93a8; }
  .print-btn { display: inline-flex; align-items: center; gap: 8px; background: #1a56db; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: 'IBM Plex Sans', sans-serif; margin-bottom: 24px; }
  .print-btn:hover { background: #1546b8; }
  .confidential { display: inline-block; background: #fde8e8; color: #9b1c1c; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 4px; letter-spacing: 0.05em; text-transform: uppercase; }
</style>
</head>
<body>
<div class="page">

  <div class="no-print" style="margin-bottom:16px;display:flex;align-items:center;gap:12px">
    <button class="print-btn" onclick="window.print()">
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V3h8v6M6 17H4a2 2 0 01-2-2v-4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2h-2M6 13h8v6H6v-6z"/></svg>
      Print / Save as PDF
    </button>
    <span style="font-size:12px;color:#8c93a8">Use your browser's Print function and select "Save as PDF" to export</span>
  </div>

  <!-- HEADER -->
  <div class="header">
    <div>
      <div class="header-title">IDEMIA Software Inventory — Executive Report</div>
      <div class="header-sub">IDEMIA · GRC / Information Security · Cybersecurity Team</div>
      <div style="margin-top:12px"><span class="confidential">Confidential — Internal Use Only</span></div>
    </div>
    <div class="header-meta">
      <div class="header-date">Report Date: ${now}</div>
      <div class="header-date" style="margin-top:4px">Total Entries: ${total}</div>
      <div style="margin-top:8px"><span class="header-badge">GRC-RPT-${new Date().toISOString().slice(0,10)}</span></div>
    </div>
  </div>

  <!-- EXECUTIVE SUMMARY -->
  <div class="section">
    <div class="section-title">Executive Summary — Software Status</div>
    <div class="stat-grid">
      <div class="stat-card accent-green">
        <div class="stat-label">Approved</div>
        <div class="stat-val green">${approved}</div>
      </div>
      <div class="stat-card accent-amber">
        <div class="stat-label">Restricted</div>
        <div class="stat-val amber">${restricted}</div>
      </div>
      <div class="stat-card accent-red">
        <div class="stat-label">Prohibited</div>
        <div class="stat-val red">${prohibited}</div>
      </div>
      <div class="stat-card accent-purple">
        <div class="stat-label">Pending Review</div>
        <div class="stat-val purple">${pending}</div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card accent-red">
        <div class="stat-label">High Risk</div>
        <div class="stat-val red">${high.length}</div>
      </div>
      <div class="stat-card accent-amber">
        <div class="stat-label">Medium Risk</div>
        <div class="stat-val amber">${medium.length}</div>
      </div>
      <div class="stat-card accent-green">
        <div class="stat-label">Low Risk</div>
        <div class="stat-val green">${low.length}</div>
      </div>
      <div class="stat-card accent-red">
        <div class="stat-label">Overdue Reviews</div>
        <div class="stat-val red">${overdue.length}</div>
      </div>
    </div>
  </div>

  <!-- RISK & CATEGORY -->
  <div class="two-col">
    <div class="section">
      <div class="section-title">Risk Distribution</div>
      <div class="risk-bar-wrap">
        <span class="risk-label">High Risk</span>
        <div class="risk-track"><div class="risk-fill-high" style="width:${riskPct(high.length)}%"></div></div>
        <span class="risk-count">${high.length}</span>
      </div>
      <div class="risk-bar-wrap">
        <span class="risk-label">Medium Risk</span>
        <div class="risk-track"><div class="risk-fill-medium" style="width:${riskPct(medium.length)}%"></div></div>
        <span class="risk-count">${medium.length}</span>
      </div>
      <div class="risk-bar-wrap">
        <span class="risk-label">Low Risk</span>
        <div class="risk-track"><div class="risk-fill-low" style="width:${riskPct(low.length)}%"></div></div>
        <span class="risk-count">${low.length}</span>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Software by Category</div>
      ${catBars}
    </div>
  </div>

  <!-- HIGH RISK -->
  <div class="section">
    <div class="section-title">High Risk Software (${high.length} entries)</div>
    <table>
      <thead><tr><th>ID</th><th>Software Name</th><th>Vendor</th><th>Status</th><th>Business Owner</th><th>Last Review</th></tr></thead>
      <tbody>${highRows}</tbody>
    </table>
  </div>

  <!-- OVERDUE REVIEWS -->
  <div class="section">
    <div class="section-title">Overdue Reviews (${overdue.length} entries)</div>
    <table>
      <thead><tr><th>ID</th><th>Software Name</th><th>Vendor</th><th>Last Review</th><th>Status</th><th>Technical Owner</th></tr></thead>
      <tbody>${overdueRows}</tbody>
    </table>
  </div>

  <!-- FULL INVENTORY -->
  <div class="section">
    <div class="section-title">Full Software Inventory (${total} entries)</div>
    <table>
      <thead><tr><th>ID</th><th>Name</th><th>Vendor</th><th>Category</th><th>Status</th><th>Risk</th><th>Approved</th><th>Last Review</th></tr></thead>
      <tbody>${allRows}</tbody>
    </table>
  </div>

  <div class="footer">
    This report was generated from the IDEMIA GRC Approved Software List on ${now} · Cybersecurity Team · For internal use only
  </div>

</div>
</body>
</html>`;

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
}

// ── RISK SUMMARY MODAL ──
function openRiskSummary() {
  const overlay = document.getElementById('modalOverlay');
  const title   = document.getElementById('modalTitle');
  const sub     = document.getElementById('modalSub');
  const body    = document.getElementById('modalBody');
  const footer  = document.getElementById('modalFooter');

  const total      = softwareData.length;
  const high       = softwareData.filter(s => (s.risk||'').toLowerCase() === 'high');
  const medium     = softwareData.filter(s => (s.risk||'').toLowerCase() === 'medium');
  const low        = softwareData.filter(s => (s.risk||'').toLowerCase() === 'low');
  const overdue    = softwareData.filter(s => (s.reviewStatus||'').toLowerCase() === 'overdue');
  const approved   = softwareData.filter(s => s.status === 'approved').length;
  const restricted = softwareData.filter(s => s.status === 'restricted').length;
  const prohibited = softwareData.filter(s => s.status === 'prohibited').length;
  const now        = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  title.textContent = 'Risk Summary';
  sub.textContent   = `Generated ${now} · ${total} total entries`;

  const statCard = (label, val, color) =>
    `<div style="background:var(--bg);border-radius:var(--radius);padding:16px;text-align:center">
      <div style="font-size:28px;font-weight:600;color:${color};font-family:var(--mono)">${val}</div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px;font-weight:500;text-transform:uppercase;letter-spacing:0.05em">${label}</div>
    </div>`;

  const highRows = high.map(s =>
    `<tr><td class="td-mono">${s.id}</td><td style="font-weight:500">${s.name}</td><td>${s.vendor}</td><td>${statusBadge(s.status)}</td><td>${reviewBadge(s.reviewStatus)}</td></tr>`
  ).join('') || `<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text-muted);font-size:12px">No high risk entries</td></tr>`;

  const overdueRows = overdue.map(s =>
    `<tr><td class="td-mono">${s.id}</td><td style="font-weight:500">${s.name}</td><td>${s.vendor}</td><td class="td-mono" style="color:#dc2626">${s.lastReview}</td><td>${statusBadge(s.status)}</td></tr>`
  ).join('') || `<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text-muted);font-size:12px">No overdue reviews</td></tr>`;

  body.innerHTML = `
    <div class="modal-section">
      <div class="modal-section-title">Overview</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:8px">
        ${statCard('Total',total,'var(--text-primary)')}
        ${statCard('Approved',approved,'#057a55')}
        ${statCard('Restricted',restricted,'#d97706')}
        ${statCard('Prohibited',prohibited,'#dc2626')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
        ${statCard('High Risk',high.length,'#dc2626')}
        ${statCard('Medium Risk',medium.length,'#d97706')}
        ${statCard('Low Risk',low.length,'#057a55')}
      </div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">High Risk Software (${high.length})</div>
      <div class="table-wrap">
        <table><thead><tr><th>ID</th><th>Name</th><th>Vendor</th><th>Status</th><th>Review</th></tr></thead>
        <tbody>${highRows}</tbody></table>
      </div>
    </div>
    <div class="modal-section" style="margin-bottom:0">
      <div class="modal-section-title">Overdue Reviews (${overdue.length})</div>
      <div class="table-wrap">
        <table><thead><tr><th>ID</th><th>Name</th><th>Vendor</th><th>Last Review</th><th>Status</th></tr></thead>
        <tbody>${overdueRows}</tbody></table>
      </div>
    </div>`;

  footer.innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Close</button>
    <button class="btn btn-primary" onclick="generateAuditReport()">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px"><path d="M10 3v10M5 13l5 5 5-5"/></svg>
      Download Audit Report
    </button>`;

  overlay.classList.add('open');
}

// Init — load data (SharePoint if available, localStorage fallback)
(async () => {
  showSyncStatus('saving');
  await loadData();
  await loadLog();
  showSyncStatus(useSharePoint ? 'synced' : 'local');
  updateSummaryCards(softwareData);
  updateCharts(softwareData);
  renderTable(softwareData);
  renderLog();
})();

})();