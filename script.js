document.querySelectorAll('.mobile-menu a').forEach(link=>link.addEventListener('click',()=>document.querySelector('.mobile-menu').removeAttribute('open')));document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const feeQuery = document.getElementById('fee-query');
if (feeQuery) {
  const rows = Array.from(document.querySelectorAll('.fee-row'));
  const count = document.getElementById('fee-count');
  const empty = document.getElementById('fee-empty');
  const filterFees = () => {
    const query = feeQuery.value.trim().toLocaleLowerCase();
    let visible = 0;
    rows.forEach(row => {
      row.hidden = !row.textContent.toLocaleLowerCase().includes(query);
      if (!row.hidden) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'service' : 'services'}${query ? ' found' : ''}`;
    empty.hidden = visible > 0;
  };
  feeQuery.addEventListener('input', filterFees);
  document.getElementById('fee-reset').addEventListener('click', () => {
    feeQuery.value = '';
    filterFees();
    feeQuery.focus();
  });
}
