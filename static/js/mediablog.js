document.addEventListener('DOMContentLoaded', function() {

  var symbols = {articles:'§', podcasts:'▶', books:'▪', substacks:'✉', videos:'▶'};
  document.querySelectorAll('.mb-cover-placeholder').forEach(function(el) {
    el.textContent = symbols[el.dataset.type] || '·';
  });

  document.querySelectorAll('.mb-section-header').forEach(function(header) {
    var collapsed = false;
    var id = header.dataset.target;
    var toggle = header.querySelector('.mb-toggle');

    header.addEventListener('click', function() {
      collapsed = !collapsed;
      document.querySelectorAll('#entries-' + id + ' .mb-extra').forEach(function(el) {
        el.style.display = collapsed ? 'none' : 'flex';
      });
      toggle.textContent = collapsed ? 'expand ↓' : 'collapse ↑';
    });
  });

});