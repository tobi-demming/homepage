document.addEventListener('DOMContentLoaded', function() {

  var symbols = {articles:'§', podcasts:'▶', books:'▪', substacks:'✉', videos:'▶'};
  document.querySelectorAll('.mb-cover-placeholder').forEach(function(el) {
    el.textContent = symbols[el.dataset.type] || '·';
  });

  document.querySelectorAll('.mb-entry').forEach(function(el) {
    if (parseInt(el.dataset.index) > 0) {
      el.style.display = 'none';
    }
  });

  document.querySelectorAll('.mb-showmore').forEach(function(btn) {
    var expanded = false;
    var id = btn.dataset.id;
    var hidden = parseInt(btn.dataset.hidden);

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      expanded = !expanded;
      document.querySelectorAll('#entries-' + id + ' .mb-extra').forEach(function(el) {
        el.style.display = expanded ? 'flex' : 'none';
      });
      btn.textContent = expanded ? '↑ less' : '+ ' + hidden + ' more';
    });
  });

  document.querySelectorAll('.mb-section-header').forEach(function(header) {
    var collapsed = false;
    var id = header.dataset.target;
    var toggle = header.querySelector('.mb-toggle');
    var footer = document.getElementById('footer-' + id);

    header.addEventListener('click', function(e) {
      if (e.target.classList.contains('mb-showmore')) return;
      collapsed = !collapsed;

      document.querySelectorAll('#entries-' + id + ' .mb-extra').forEach(function(el) {
        el.style.display = 'none';
      });

      if (footer) {
        footer.style.display = collapsed ? 'none' : 'block';
        var showMore = footer.querySelector('.mb-showmore');
        if (showMore) {
          var hidden = parseInt(showMore.dataset.hidden);
          showMore.textContent = '+ ' + hidden + ' more';
        }
      }

      toggle.textContent = collapsed ? 'expand ↓' : 'collapse ↑';
    });
  });

});