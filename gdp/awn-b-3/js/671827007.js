(function () {
  var s = {};
  (function () {
    /* Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var c =
      this || self;
    var f = /#|$/;
    function l(d) {
      var g = d.search(f),
        a;
      a: {
        for (a = 0; 0 <= (a = d.indexOf("fmt", a)) && a < g; ) {
          var b = d.charCodeAt(a - 1);
          if (38 == b || 63 == b)
            if (
              ((b = d.charCodeAt(a + 3)), !b || 61 == b || 38 == b || 35 == b)
            )
              break a;
          a += 4;
        }
        a = -1;
      }
      if (0 > a) return null;
      b = d.indexOf("&", a);
      if (0 > b || b > g) b = g;
      a += 4;
      return decodeURIComponent(d.substr(a, b - a).replace(/\+/g, " "));
    }
    function n(d, g, a) {
      function b() {
        --p;
        if (0 >= p) {
          var e;
          (e = d.GooglebQhCsO) || (e = {});
          var q = e[g];
          q && (delete e[g], (e = q[0]) && e.call && e());
        }
      }
      for (var p = a.length + 1, m = 0; m < a.length; m++) {
        var h = l(a[m]),
          k = null;
        (1 != h && 2 != h) ||
          !(h = d.document.getElementById("goog_conv_iframe")) ||
          h.src ||
          (k = h);
        k || (k = new Image());
        k.onload = b;
        k.src = a[m];
      }
      b();
    }
    var r = ["ss_"],
      t = s || c;
    r[0] in t ||
      "undefined" == typeof t.execScript ||
      t.execScript("var " + r[0]);
    for (var u; r.length && (u = r.shift()); )
      r.length || void 0 === n
        ? t[u] && t[u] !== Object.prototype[u]
          ? (t = t[u])
          : (t = t[u] = {})
        : (t[u] = n);
  }.call(this));
  s.ss_(window, "OVRtaUNJM2MxNzhCRUwtSXJjQUM6MTU4ODkyMDk4NDAwOA", [
    "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/671827007/?random\x3d1733039657\x26cv\x3d9\x26fst\x3d*\x26num\x3d1\x26value\x3d0\x26label\x3d9TmiCI3c178BEL-IrcAC\x26guid\x3dON\x26resp\x3dGooglemKTybQhCsO\x26u_h\x3d600\x26u_w\x3d800\x26u_ah\x3d600\x26u_aw\x3d800\x26u_cd\x3d24\x26u_his\x3d2\x26u_tz\x3d0\x26u_java\x3dfalse\x26u_nplug\x3d0\x26u_nmime\x3d0\x26gtm\x3d2wg4t0\x26sendb\x3d1\x26ig\x3d1\x26frm\x3d0\x26url\x3dhttps://smartertechtrends.com/2020/finance/awn-b-1/\x26tiba\x3dHearing%20Aid%20Revolution%20in%20The%20USA%20New%20Device%20Slashes%20Prices%20by%20over%2090%25\x26hn\x3dwww.googleadservices.com\x26async\x3d1\x26fmt\x3d3\x26ctc_id\x3dCAIVAgAAAB0CAAAA\x26ct_cookie_present\x3dfalse\x26ocp_id\x3dmQK1XvHcAYrY1wXHuZuIDw\x26sscte\x3d1\x26crd\x3d\x26gtd\x3d\x26eitems\x3dChAI8OPO9QUQ89Ki9Y6t9pNoEh0AG9Qv9ja9Oo1zWtqbAEWOIKg1oIzktuxk_CiKLw",
  ]);
})();
