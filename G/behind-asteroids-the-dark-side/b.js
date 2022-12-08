! function() {
    function t(t) {
        return t < -Math.PI ? t + 2 * Math.PI : t > Math.PI ? t - 2 * Math.PI : t
    }

    function e(t, e, a) {
        var r = Math.max(0, Math.min(1, (a - t) / (e - t)));
        return r * r * (3 - 2 * r)
    }

    function a(t) {
        return (9 >= t ? "0" : "") + t
    }

    function r(t, e) {
        var a = t[0] - e[0],
            r = t[1] - e[1];
        return Math.sqrt(a * a + r * r)
    }

    function o(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }

    function n(t, e, a) {
        var r = t[0] - e[0],
            o = t[1] - e[1];
        return a * a > r * r + o * o
    }

    function i(t, e) {
        St.beginPath();
        for (var a = 1, r = 0; t && r < t.length; ++r) {
            var o = t[r];
            o ? (a ? St.moveTo(o[0], o[1]) : St.lineTo(o[0], o[1]), a = 0) : a = 1
        }
        e || St.closePath()
    }

    function s(t, e, a) {
        var r = 11 * e * t.length;
        St.translate(a ? a > 0 ? 0 : -r : -r / 2, 0);
        for (var o = 0; o < t.length; o++) i(Mt[t[o]] && Mt[t[o]].map(function(t) {
            return t && [4 * e * t[0], 5 * e * t[1]]
        }), 1), St.lineJoin = "round", St.stroke(), St.translate(11 * e, 0)
    }

    function f(t, e) {
        var a, r = Nt.VERTEX_SHADER,
            o = t;
        a = Nt.createShader(r), Nt.shaderSource(a, o), Nt.compileShader(a);
        var n = a;
        if (lt && !Nt.getShaderParameter(a, Nt.COMPILE_STATUS)) throw Nt.getShaderInfoLog(a);
        r = Nt.FRAGMENT_SHADER, o = e, a = Nt.createShader(r), Nt.shaderSource(a, o), Nt.compileShader(a);
        var i = a;
        if (lt && !Nt.getShaderParameter(a, Nt.COMPILE_STATUS)) throw Nt.getShaderInfoLog(a);
        var s = Nt.createProgram();
        if (Nt.attachShader(s, n), Nt.attachShader(s, i), Nt.linkProgram(s), lt && !Nt.getProgramParameter(s, Nt.LINK_STATUS)) throw Nt.getProgramInfoLog(s);
        Nt.useProgram(s);
        var f = Nt.getAttribLocation(s, "p");
        return Nt.enableVertexAttribArray(f), Nt.vertexAttribPointer(f, 2, Nt.FLOAT, !1, 0, 0), [s]
    }

    function h(t) {
        Nt.useProgram(t[0])
    }

    function l(t, e) {
        return t[e] || (t[e] = Nt.getUniformLocation(t[0], e))
    }

    function v() {
        var t = Nt.createTexture();
        return Nt.bindTexture(Nt.TEXTURE_2D, t), Nt.texParameteri(Nt.TEXTURE_2D, Nt.TEXTURE_MIN_FILTER, Nt.LINEAR), Nt.texParameteri(Nt.TEXTURE_2D, Nt.TEXTURE_MAG_FILTER, Nt.LINEAR), Nt.texParameteri(Nt.TEXTURE_2D, Nt.TEXTURE_WRAP_S, Nt.CLAMP_TO_EDGE), Nt.texParameteri(Nt.TEXTURE_2D, Nt.TEXTURE_WRAP_T, Nt.CLAMP_TO_EDGE), t
    }

    function m(t, e) {
        Nt.bindTexture(Nt.TEXTURE_2D, t), Nt.texImage2D(Nt.TEXTURE_2D, 0, Nt.RGBA, Nt.RGBA, Nt.UNSIGNED_BYTE, e)
    }

    function M(t, e) {
        return Nt.activeTexture(Nt.TEXTURE0 + e), Nt.bindTexture(Nt.TEXTURE_2D, t), e
    }

    function E() {
        var t = Nt.createFramebuffer();
        Nt.bindFramebuffer(Nt.FRAMEBUFFER, t);
        var e = v();
        return Nt.texImage2D(Nt.TEXTURE_2D, 0, Nt.RGBA, Yt, Ht, 0, Nt.RGBA, Nt.UNSIGNED_BYTE, null), Nt.framebufferTexture2D(Nt.FRAMEBUFFER, Nt.COLOR_ATTACHMENT0, Nt.TEXTURE_2D, e, 0), [t, e]
    }

    function p(t) {
        Nt.bindFramebuffer(Nt.FRAMEBUFFER, t[0])
    }

    function A(t) {
        return t[1]
    }

    function b() {
        this.ss = function(t) {
            for (var e = 0; 24 > e; e++) this[String.fromCharCode(97 + e)] = t[e] || 0;
            this.c < .01 && (this.c = .01);
            var a = this.b + this.c + this.e;
            if (.18 > a) {
                var r = .18 / a;
                this.b *= r, this.c *= r, this.e *= r
            }
        }
    }

    function T() {
        this._p = new b;
        var t, e, a, r, o, n, i, s, f, c, h, l;
        this.r = function() {
            var t = this._p;
            r = 100 / (t.f * t.f + .001), o = 100 / (t.g * t.g + .001), n = 1 - t.h * t.h * t.h * .01, i = -t.i * t.i * t.i * 1e-6, t.a || (h = .5 - t.n / 2, l = 5e-5 * -t.o), s = 1 + t.l * t.l * (t.l > 0 ? -.9 : 10), f = 0, c = 1 == t.m ? 0 : (1 - t.m) * (1 - t.m) * 2e4 + 32
        }, this.tr = function() {
            this.r();
            var r = this._p;
            return t = r.b * r.b * 1e5, e = r.c * r.c * 1e5, a = r.e * r.e * 1e5 + 12, 3 * ((t + e + a) / 3 | 0)
        }, this.sw = function(u, v) {
            var m = this._p,
                M = 1 != m.s || m.v,
                d = m.v * m.v * .1,
                E = 1 + 3e-4 * m.w,
                p = m.s * m.s * m.s * .1,
                g = 1 + 1e-4 * m.t,
                A = 1 != m.s,
                b = m.x * m.x,
                T = m.g,
                R = m.q || m.r,
                S = m.r * m.r * m.r * .2,
                x = m.q * m.q * (m.q < 0 ? -1020 : 1020),
                I = m.p ? ((1 - m.p) * (1 - m.p) * 2e4 | 0) + 32 : 0,
                P = m.d,
                D = m.j / 2,
                y = m.k * m.k * .01,
                k = m.a,
                w = t,
                L = 1 / t,
                N = 1 / e,
                O = 1 / a,
                _ = 5 / (1 + m.u * m.u * 20) * (.01 + p);
            _ > .8 && (_ = .8), _ = 1 - _;
            for (var G, C, F, U, B, Y, H = !1, W = 0, X = 0, q = 0, K = 0, j = 0, J = 0, V = 0, z = 0, Q = 0, Z = 0, $ = new Array(1024), tt = new Array(32), et = $.length; et--;) $[et] = 0;
            for (var et = tt.length; et--;) tt[et] = 2 * Math.random() - 1;
            for (var et = 0; v > et; et++) {
                if (H) return et;
                if (I && ++Q >= I && (Q = 0, this.r()), c && ++f >= c && (c = 0, r *= s), n += i, r *= n, r > o && (r = o, T > 0 && (H = !0)), C = r, D > 0 && (Z += y, C *= 1 + Math.sin(Z) * D), C |= 0, 8 > C && (C = 8), k || (h += l, 0 > h ? h = 0 : h > .5 && (h = .5)), ++X > w) switch (X = 0, ++W) {
                    case 1:
                        w = e;
                        break;
                    case 2:
                        w = a
                }
                switch (W) {
                    case 0:
                        q = X * L;
                        break;
                    case 1:
                        q = 1 + 2 * (1 - X * N) * P;
                        break;
                    case 2:
                        q = 1 - X * O;
                        break;
                    case 3:
                        q = 0, H = !0
                }
                R && (x += S, F = 0 | x, 0 > F ? F = -F : F > 1023 && (F = 1023)), M && E && (d *= E, 1e-5 > d ? d = 1e-5 : d > .1 && (d = .1)), Y = 0;
                for (var at = 8; at--;) {
                    if (V++, V >= C && (V %= C, 3 == k))
                        for (var rt = tt.length; rt--;) tt[rt] = 2 * Math.random() - 1;
                    switch (k) {
                        case 0:
                            B = h > V / C ? .5 : -.5;
                            break;
                        case 1:
                            B = 1 - V / C * 2;
                            break;
                        case 2:
                            U = V / C, U = 6.28318531 * (U > .5 ? U - 1 : U), B = 1.27323954 * U + .405284735 * U * U * (0 > U ? 1 : -1), B = .225 * ((0 > B ? -1 : 1) * B * B - B) + B;
                            break;
                        case 3:
                            B = tt[Math.abs(32 * V / C | 0)]
                    }
                    M && (G = J, p *= g, 0 > p ? p = 0 : p > .1 && (p = .1), A ? (j += (B - J) * p, j *= _) : (J = B, j = 0), J += j, K += J - G, K *= 1 - d, B = K), R && ($[z % 1024] = B, B += $[(z - F + 1024) % 1024], z++), Y += B
                }
                Y *= .125 * q * b, u[et] = Y >= 1 ? 32767 : -1 >= Y ? -32768 : 32767 * Y | 0
            }
            return v
        }
    }

    function R(t, e, a) {
        bt._p.ss(t);
        var r = bt.tr(),
            o = new Uint8Array(4 * ((r + 1) / 2 | 0) + 44),
            n = 2 * bt.sw(new Uint16Array(o.buffer, 44), r),
            i = new Uint32Array(o.buffer, 0, 44);
        i[0] = 1179011410, i[1] = n + 36, i[2] = 1163280727, i[3] = 544501094, i[4] = 16, i[5] = 65537, i[6] = 44100, i[7] = 88200, i[8] = 1048578, i[9] = 1635017060, i[10] = n, n += 44;
        for (var s = 0, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "data:audio/wav;base64,"; n > s; s += 3) {
            var h = o[s] << 16 | o[s + 1] << 8 | o[s + 2];
            c += f[h >> 18] + f[h >> 12 & 63] + f[h >> 6 & 63] + f[63 & h]
        }
        return e && e.decodeAudioData(o.buffer, a), c
    }

    function S() {
        var t = window.innerWidth,
            e = window.innerHeight;
        if (t != Kt || e != jt) {
            Kt = t, jt = e;
            var a = Gt / t,
                r = (Ct + 20) / e;
            se = 1 / Math.max(a, r), !ut && se > 1 && (se = 1), d.style.webkitTransform = d.style.transform = "scale(" + se + ")", d.style.top = Math.max(10, Math.floor((e - (Ct + 20) * se) / 2)) + "px", d.style.left = Math.max(0, Math.floor((t - Gt * se) / 2)) + "px"
        }
    }

    function x() {
        return Ve && be[0] && Pe > 8e3
    }

    function I(t) {
        ut && !Aa && d.webkitRequestFullScreen && (d.webkitRequestFullScreen(), Aa = 1);
        var e = c.getBoundingClientRect(),
            a = (t.clientX - e.left) / se,
            r = (t.clientY - e.top) / se;
        oe ? r > 280 && 400 > r && (a > Yt / 2 - 180 && Yt / 2 - 20 > a ? open("https://twitter.com/intent/tweet?via=greweb&url=" + encodeURIComponent(location.href) + "&text=" + encodeURIComponent("Reached Level " + ye + " (" + 25 * ye + "¢) with " + ne[0] + "⬠ " + ne[1] + "ᐃ " + ne[2] + "🝞")) : a > Yt / 2 + 20 && Yt / 2 + 180 > a && location.reload()) : Ze ? Pe > 0 && r > 170 && 310 > r && (Yt / 2 > a ? (ye = Ze - 1, Pe = Ze = 0, ne = localStorage.ba_ach.split(",").map(function(t) {
            return parseInt(t, 10)
        })) : Pe = Ze = 0) : ie = [a, r]
    }

    function P(t) {
        t[0] += t[2] * ee, t[1] += t[3] * ee
    }

    function D(t) {
        var e = Math.cos(t[2]),
            a = Math.sin(t[2]),
            r = ee * t[3];
        t[0] += r * e, t[1] += r * a
    }

    function y(t, e, a) {
        (t[0] < -100 || t[1] < -100 || t[0] > Yt + 100 || t[1] > Ht + 100) && a.splice(e, 1)
    }

    function k(t, e, a) {
        (t[4] -= ee) < 0 && a.splice(e, 1)
    }

    function w(t) {
        t[0] < 0 ? t[0] += Yt : t[0] > Yt && (t[0] -= Yt), t[1] < 0 ? t[1] += Ht : t[1] > Ht && (t[1] -= Ht)
    }

    function L(e) {
        function a(e) {
            var a = t(e - Ee[4]);
            return Ne = 0 > a ? -1 : 1, a
        }

        function n(e, a) {
            var r = t(e - Ee[4]),
                o = Math.abs(r);
            o > Math.PI / 2 ? (a && (Le = o > Math.PI / 2 - .4 ? a > 0 ? -1 : 1 : 0), Ne = r > 0 ? -1 : 1) : (a && (Le = .4 > o ? 0 > a ? -1 : 1 : 0), Ne = 0 > r ? -1 : 1)
        }

        function i(t, e) {
            var a = t[0] - Ee[0],
                r = t[1] - Ee[1];
            if (!(e * e > a * a + r * r)) {
                var i = a / 800,
                    s = r / 800,
                    f = i - Ee[2],
                    c = s - Ee[3],
                    h = Math.atan2(c, f),
                    l = o([f, c]);
                n(h, l)
            }
        }

        function s(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }

        function f(t, e, a) {
            var r = [t[0] - e[0], t[1] - e[1]],
                o = s(r, a) / s(a, a);
            return [e[0] + o * a[0], e[1] + o * a[1]]
        }

        function c(e, a) {
            var r = [e[0] - Ee[0], e[1] - Ee[1]],
                i = Math.atan2(r[1], r[0]),
                s = o(r);
            if (a && d > .003 * s && Math.abs(t(i - E)) < Math.PI / 3) {
                var f = o(a);
                r[0] += 100 * a[0] / f, r[1] += 100 * a[1] / f, i = Math.atan2(r[1], r[0]), n(i, 1)
            } else n(i, -1)
        }

        function h(t) {
            var e = [t[3] * Math.cos(t[2]), t[3] * Math.sin(t[2])],
                a = f(Ee, t, e),
                o = 30 + 10 * t[5],
                n = r(a, Ee);
            n > o || c(a, e)
        }

        function l(t, e, a, r) {
            var o = [a[0] - e[0], a[1] - e[1]],
                n = s(r, r) - t * t,
                i = 2 * s(r, o),
                f = s(o, o),
                c = -i / (2 * n),
                h = Math.sqrt(i * i - 4 * n * f) / (2 * n),
                l = c - h,
                u = c + h,
                v = l > u && u > 0 ? u : l;
            return [v, [a[0] + r[0] * v, a[1] + r[1] * v]]
        }
        var u, v, m, M, d = Math.sqrt(Ee[2] * Ee[2] + Ee[3] * Ee[3]),
            E = Math.atan2(Ee[3], Ee[2]),
            p = [Yt / 2, Ht / 2],
            g = 0,
            A = .3,
            b = .1,
            T = 0;
        for (u = 0; u < pe.length; ++u) {
            var R = pe[u],
                S = [R[3] * Math.cos(R[2]), R[3] * Math.sin(R[2])],
                x = s([Ee[0] - R[0], Ee[1] - R[1]], S) / s(S, S),
                I = [R[0] + x * S[0], R[1] + x * S[1]],
                P = r(Ee, I),
                D = P - 10 - 10 * R[5],
                y = Math.exp(-D / 40) + Math.exp(-D / 120) + x > 0 ? Math.exp(-x / 1e3) : 0;
            if (y > A && (A = y, v = R, g++), y = Math.exp(-(R[5] - 1)) * Math.exp(-D / 200), y > b) {
                var k = l(.3, Ee, R, S),
                    w = k[0],
                    L = k[1];
                0 < L[0] && L[0] < Yt && 0 < L[1] && L[1] < Ht && 800 > w && (m = L, b = y)
            }
        }
        for (u = 0; u < Ae.length; ++u) {
            var N = Ae[u];
            S = N.slice(2), x = s([Ee[0] - N[0], Ee[1] - N[1]], S) / s(S, S), I = [N[0] + x * S[0], N[1] + x * S[1]], P = r(Ee, I), y = Math.exp(-x / 1e3) + 2 * Math.exp(-P / 50), x > 100 && 1e3 > x && 40 > P && y > T && (T = y, M = I)
        }
        for (u = 0; u < ge.length; ++u) {
            var O = ge[u];
            k = l(.3, Ee, O, O.slice(2)), w = k[0], L = k[1], m = L
        }
        Oe = 1 - Math.exp(-pe.length / 10) + (1 - Math.exp(-g / 3)), we = Pe > 3e3 && Math.random() < .001 * ee * (1 - e), Ne = Pe > 1e3 && Math.random() < .002 * ee ? Math.random() < .6 ? 0 : Math.random() < .5 ? -1 : 1 : Ne, Le = Pe > 2e3 && Math.random() < .004 * ee ? Math.random() < .7 ? 0 : Math.random() < .5 ? -1 : 1 : Le, .1 + e > Math.random() && i(p, 30), e > Math.random() && (m ? (we = Math.abs(a(Math.atan2(m[1] - Ee[1], m[0] - Ee[0]))) < .1 && Math.random() < .04 * ee, Ta = m, Sa = w) : we = 0), e > Math.random() && (v && (h(v), ba = v, Ra = v), M && c(M))
    }

    function N(t) {
        for (var e = 4 + 2 * t, a = 10 * t, r = [], o = 0; e > o; ++o) {
            var n = a * (.4 + .6 * Math.random()),
                i = 2 * Math.PI * o / e;
            r.push([n * Math.cos(i), n * Math.sin(i)])
        }
        return r
    }

    function O() {
        pe = [];
        for (var t = 0; 8 > t; ++t) {
            var e = Math.floor(1.5 + 3 * Math.random());
            pe[t] = [Yt * Math.random(), Ht * Math.random(), 2 * Math.PI * Math.random(), .02 + .02 * Math.random(), N(e), e]
        }
    }

    function _(t) {
        var e = pe[t];
        pe.splice(t, 1);
        var a = e[5];
        if (a > 1)
            for (var r = Math.round(2 + 1.5 * Math.random()), o = 0; r > o; o++) {
                var n = Math.random() + 2 * Math.PI * o / r;
                pe.push([e[0] + 10 * Math.cos(n), e[1] + 10 * Math.sin(n), n, .5 * e[3], N(a - 1), a - 1])
            }
    }

    function G(t) {
        if (Ia.push(t[7]), Math.abs(Math.cos(t[2])) < t[9]) {
            var e = F(t),
                a = B(t),
                r = Math.max(0, Math.min(e[0], Yt)),
                o = Math.max(0, Math.min(e[1], Ht)),
                n = (ut ? .006 : .008) * t[3],
                i = t[6],
                s = t[5];
            return pe.push([r, o, a, n, s, i]), At(ha), 1
        }
        At(la)
    }

    function C(t) {
        St.globalAlpha = .2, St.strokeStyle = "#f00", i(t[4]), St.stroke()
    }

    function F(t) {
        var e, a, r = t[0] % Wt,
            o = Yt + Bt,
            n = Ht + Bt;
        o > r ? (e = r, a = 0) : (r -= o, n > r ? (e = o, a = r) : (r -= n, o > r ? (e = o - r, a = n) : (r -= o, e = 0, a = n - r)));
        var i = [-Bt / 2 + e, -Bt / 2 + a];
        if (t[10]) {
            var s = de - t[10],
                f = Math.atan2(Ee[1] - i[1], Ee[0] - i[0]),
                c = .3 * s;
            i[0] -= Math.cos(f) * c, i[1] -= Math.sin(f) * c
        }
        return i
    }

    function U(t) {
        var e = F(t),
            a = Math.atan2(Ee[1] - e[1], Ee[0] - e[0]);
        return a
    }

    function B(t) {
        return Math.cos(t[2]) * t[8] + U(t)
    }

    function Y() {
        var t = be.reduce(function(t, e) {
            return e[6]
        }, 0);
        return de > xa && Math.random() < .01 * ee * Math.exp(-t * (1 + 5 * Math.exp(-(ye - 1) / 3) - .2 * Math.exp(-Math.abs(ye - 20) / 20))) * (1 - Math.exp(-Pe / 5e3)) ? (xa = de + 1e3 * (1 + Math.random()), H()) : void 0
    }

    function H() {
        if (!Ia.length) return 0;
        for (var t = Math.random() * Wt, e = Ia.shift(), a = 0; a < be.length; ++a) {
            var r = be[a],
                o = r[0] % Wt;
            if (o > t - 60 && t + 60 > o) return 0
        }
        var n = 1 - Math.exp(-ye / 5),
            i = 1 - Math.exp((1 - ye) / 20);
        Math.random() > n && (i *= Math.random());
        var s = i + Math.random() * (n - i),
            f = i + Math.random() * (n - i),
            c = i + Math.random() * (n - i),
            h = Math.floor(2 + 3 * Math.random() * Math.random() + 4 * Math.random() * Math.random() * Math.random()),
            l = 2 > ye ? 0 : Math.PI * (.8 * Math.random() + .05 * h) * s;
        .2 > l && (l = 0);
        var u = ye > 2 && l > Math.exp(-ye / 4) && Math.random() > .5 + .4 * ((ye - 3) % 8) / 8 - .5 * (1 - Math.exp(-ye / 10)) ? .9 - .5 * f - .2 * s : 1;
        return 2 == ye && (l = .2 + Math.random()), 3 == ye && (l = .2 + Math.random(), u = .5 + .4 * Math.random()), be.push([t, .1 + .002 * ye, 2 * Math.PI * Math.random(), 10 + 40 * Math.random(), .002 + .001 * (Math.random() + .5 * h * Math.random() + Math.random() * ye / 30) * c - .001 * s, N(h), h, e, l, u, 0]), 1
    }

    function W(t) {
        t[10] || (t[0] += t[1] * ee, t[2] += t[4] * ee, t[3] = t[3] < 10 ? 60 : t[3] - .02 * ee)
    }

    function X(t) {
        var e = U(t),
            a = Math.cos(t[2]),
            r = a * t[8] + e,
            o = 10 * t[6],
            n = Math.abs(a) < t[9];
        if (Pe > 0 && ke && !Re && !t[10]) {
            St.lineWidth = 1 + t[3] / 60, St.strokeStyle = n ? "#7cf" : "#f66", t[8] > .1 && (St.save(), St.rotate(e), St.strokeStyle = "#f66", St.beginPath(), St.arc(0, 0, o + 10, -t[8], -t[8] * t[9]), St.stroke(), St.beginPath(), St.arc(0, 0, o + 10, t[8] * t[9], t[8]), St.stroke(), St.strokeStyle = "#7cf", St.beginPath(), St.arc(0, 0, o + 10, -t[8] * t[9], t[8] * t[9]), St.stroke(), i([
                [o + 8, 0],
                [o + 12, 0]
            ]), St.stroke(), St.restore()), St.save(), St.rotate(r), St.save();
            var f = 60 + o,
                c = t[3] + o;
            St.globalAlpha = .2, i([
                [0, 0],
                [f, 0]
            ]), St.stroke(), St.restore(), i([
                [0, 0],
                [c, 0]
            ]), St.stroke();
            var h = 6;
            i([
                [f - h, h],
                [f, 0],
                [f - h, -h]
            ], 1), St.stroke(), St.restore()
        } else St.strokeStyle = t[10] ? "#f66" : "#999";
        St.save(), i(t[5]), St.fillStyle = "#000", St.fill(), St.stroke(), St.restore();
        var l = [0, 0];
        t[5].forEach(function(t) {
            l[0] += t[0], l[1] += t[1]
        }), !ut && Pe > 0 && (x() && (St.strokeStyle = "#f7c"), St.translate(l[0] / t[5].length + 1, l[1] / t[5].length - 5), s(String.fromCharCode(t[7]), 1))
    }

    function q() {
        x() && (St.strokeStyle = "#f7c", St.lineWidth = 4, be.forEach(function(t) {
            var e = F(t);
            St.beginPath(), St.arc(e[0], e[1], 80 + 40 * Math.cos(.005 * de), 0, 2 * Math.PI), St.stroke()
        }))
    }

    function K(t, e, a) {
        var r = Math.cos(a),
            o = Math.sin(a);
        Ae.push([t[0] + 14 * r, t[1] + 14 * o, t[2] + e * r, t[3] + e * o, 1e3, 0])
    }

    function j() {
        St.globalAlpha = 1 - Math.random() * Math.random(), St.fillStyle = "#00f", St.beginPath(), St.arc(0, 0, 2 + 2.5 * Math.random(), 0, 2 * Math.PI), St.fill()
    }

    function J(t) {
        At(Math.random() < .5 ? fa : ca);
        for (var e = Math.floor(19 + 9 * Math.random()), a = 0; e > a; ++a) {
            var r = 30 * Math.random() - 10,
                o = (Math.random() + 2 * Math.PI * a) / e;
            Te.push([t[0] + r * Math.cos(o), t[1] + r * Math.sin(o), o, .06, Math.random() < .3 ? 0 : 1e3])
        }
    }

    function V() {
        St.globalAlpha = .8, St.fillStyle = "#f00", St.beginPath(), St.arc(0, 0, 1, 0, 2 * Math.PI), St.fill()
    }

    function z() {
        Re || (Re = de, 1 == ke && At(ua), De++, ne[1]++, We++)
    }

    function Q(t) {
        if (St.strokeStyle = "#f00", St.globalAlpha = .4, St.rotate(t[4]), Re) {
            St.lineWidth = 2;
            var e = (de - Re) / 200;
            i([
                [-6, -6 - .5 * e],
                [3, -3 - .9 * e]
            ]), St.stroke(), 8 > e && (i([
                [3 + .4 * e, -3 - .8 * e],
                [12 + .4 * e, 0 - .5 * e]
            ]), St.stroke()), i([
                [12, 0 + .4 * e],
                [3, 3 + e]
            ]), St.stroke(), 9 > e && (i([
                [1, 5 + e],
                [-6, 6 + e]
            ]), St.stroke()), 7 > e && (i([
                [-6 - e, -6],
                [-6 - e, 6]
            ]), St.stroke())
        } else i([
            [-6, -6],
            [12, 0],
            [-6, 6],
            [-5, 0]
        ]), St.stroke(), _e > .2 && (i([
            [-7, 2 * Math.random() - 1],
            [-7 - 5 * _e, 4 * Math.random() - 2]
        ]), St.stroke()), -.2 > _e && (i([
            [2, -5],
            [2 - 5 * _e, -7], , [2, 5],
            [2 - 5 * _e, 7]
        ]), St.stroke())
    }

    function Z(t) {
        if (t[4] -= ee, t[4] < 0 && (t[4] = 500 + 300 * Math.random(), !Re)) {
            var e = Math.atan2(Ee[1] - t[1], Ee[0] - t[0]);
            if (!t[2] || Math.random() < .2) {
                var a = 2 * Math.PI * Math.random();
                t[2] = .08 * Math.cos(a), t[3] = .08 * Math.sin(a)
            }
            K(t, .3 + .1 * Math.random(), e + .6 * Math.random() - .3)
        }
    }

    function $() {
        St.globalAlpha = .4, St.strokeStyle = "#f00", i(La), St.stroke()
    }

    function tt(t, e) {
        St.globalAlpha = 1, i([
            [0, 0],
            [160, 0],
            [160, 120],
            [0, 120]
        ]), St.translate(80, 30), St.stroke(), St.fillStyle = "#000", St.fill(), St.save(), s(t, 2), St.restore(), St.save(), St.translate(0, 40), s(e, 2), St.restore()
    }

    function et() {
        if (St.save(), St.fillStyle = St.strokeStyle = "#0f0", St.globalAlpha = .3, oe) St.save(), St.strokeStyle = "#0f0", St.globalAlpha = .3, St.save(), St.translate((Yt - 340) / 2, Ht / 8), s("YOU EARNED ", 2, 1), St.globalAlpha = .5, s(25 * ye + "¢", 2, 1), St.restore(), St.save(), St.translate(Yt / 2, Ht / 4), s("FROM " + ye + " PLAYERS", 2), St.restore(), St.save(), St.globalAlpha = .5, St.translate((Yt - 200) / 2, Ht / 2), ot(2), St.restore(), St.save(), St.translate(Yt / 2 - 180, Ht - 160), tt("TWEET", "SCORE"), St.restore(), St.save(), St.translate(Yt / 2 + 20, Ht - 160), tt("PLAY", "AGAIN"), St.restore(), St.restore();
        else if (0 > Pe || Ze) St.save(), St.translate(Yt - 50, 20), s(a(0), 1.5, -1), St.restore(), St.save(), St.translate(50, 70), (!Ze || Pe > 0) && 500 > de % 1e3 && s("PLAYER " + (Ze || ye + 1), 2, 1), St.restore(), St.save(), St.translate(Yt / 2 - 160, .7 * Ht), i([
            [0, 2],
            [0, 18]
        ]), St.stroke(), St.translate(40, 0), s("COIN", 2, 1), St.translate(40, 0), i([
            [0, 2],
            [0, 18]
        ]), St.stroke(), St.translate(40, 0), s("PLAY", 2, 1), St.restore();
        else
            for (var t = 1; ke > t; t++) St.save(), St.translate(60 + 10 * t, 50), St.rotate(-Math.PI / 2), i([
                [-4, -4],
                [10, 0],
                [-4, 4],
                [-3, 0]
            ]), St.stroke(), St.restore();
        !oe && Re && 1 == ke && (St.save(), St.lineWidth = 2, St.translate(Yt / 2, 140), s("GAME OVER", 2), St.restore()), !oe && Ze && Pe > 0 && (St.save(), St.globalAlpha = 1, St.translate(Yt / 2, 140), s("CONTINUE ?", 3), St.restore(), St.save(), St.globalAlpha = 1, St.translate(Yt / 4, 210), s("YES", ut ? 4 : 6), St.restore(), St.save(), St.globalAlpha = 1, St.translate(3 * Yt / 4, 210), s("NO", ut ? 4 : 6), St.restore()), St.save(), St.translate(Yt / 2, Ht - 14), s("2015 GREWEB INC", .6), St.restore(), oe || (St.save(), St.translate(Yt / 2, 20), s(a(xe), .6), St.restore(), St.save(), St.translate(50, 20), s(a(Ie), 1.5, 1), St.restore()), (oe || 0 > Pe && 800 > de % 1e3) && (St.save(), St.translate(Yt - 20, Ht - 24), s(ut ? "MOBILE" : "DESKTOP", .6, -1), St.restore(), St.save(), St.translate(Yt - 20, Ht - 14), s("VERSION", .6, -1), St.restore()), St.restore()
    }

    function at() {
        St.save(), St.fillStyle = St.strokeStyle = "#f00", St.globalAlpha = .03, St.translate(Yt / 2, Ht / 2), St.beginPath(), St.arc(0, 0, 4, 0, 2 * Math.PI), St.fill(), St.stroke(), St.beginPath(), St.arc(0, 0, 12, 0, 2 * Math.PI), St.stroke(), St.beginPath(), St.arc(0, 0, 12, 4, 6), St.stroke(), St.beginPath(), St.arc(0, 0, 12, 1, 2), St.stroke(), St.restore()
    }

    function rt() {
        function t(t) {
            e = "PLAYER " + t, a = ["GENIOUS PLAYER!!", "EXPERIENCED PLAYER!!", "GOOD PLAYER. GET READY", "NICE PLAYER.", "BEGINNER.", "VERY BEGINNER. EASY KILL"][Math.floor(6 * Math.exp(-t / 8))]
        }
        var e = "",
            a = "",
            r = "#f7c",
            o = "#7fc";
        if (oe) e = "PLAYER MASTERED THE GAME", a = "REACHED ᐃᐃᐃᐃᐃ";
        else if (ye) Re ? 1 == ke ? (o = "#f66", e = "GOOD JOB !!!", a = "THE DUDE IS BROKE") : 2 == ke ? (o = "#f66", e = "OK...", a = "ONE MORE TIME !") : Da && de - Oa > 3e3 ? e = Da : (e = ["!!!", "GREAT!", "COOL!", "OMG!", "AHAH!", "RUDE!", "EPIC!", "WICKED!", "SHAME!", "HEHEHE!", "BWAHAHA!"], Da = e = e[Math.floor(Math.random() * e.length)], Oa = 0) : 0 > Pe ? (e = "INCOMING NEW PLAYER...", a = "25¢ 25¢ 25¢ 25¢ 25¢") : 6e3 > Pe && 4 == ke ? t(ye) : (o = "#f66", Da && 3e3 > de - Oa ? a = Da : Ve ? x() && (r = o = "#f7c", e = ut ? "TAP ON ASTEROIDS" : "PRESS ASTEROIDS LETTER", a = "TO SEND THEM TO THE GAME") : ke > 4 && de - aa > 5e3 ? (r = o = "#f66", e = "DON'T LET PLAYER", a = "REACH ᐃᐃᐃᐃᐃ !!!") : Ie > 1e4 && 4500 > de - aa ? (r = o = "#f66", e = "OH NO! PLAYER JUST", a = "WON AN EXTRA LIFE!") : 2 == ye && Pe > 5e3 ? (o = r = "#7cf", e = "LETS TRAIN WITH...", a = "AIMING") : 3 == ye && Pe > 5e3 ? (r = "#7cf", o = "#f66", e = "CAREFUL ABOUT THE", a = "RED AIMING") : 4 == ye && Pe > 5e3 && ze ? (r = o = "#f7c", e = "MAKE COMBOS TO SEND", a = "AN UFO !!!") : ye > 5 && (Da = 0, Math.random() < 1e-4 * ee && de - Oa > 8e3 && (a = ["COME ON! KILL IT!", "JUST DO IT!", "I WANT ¢¢¢", "GIVE ME SOME ¢¢¢", "DO IT!", "DESTROY IT!"], Da = a = a[Math.floor(Math.random() * a.length)], Oa = de)));
        else if (-7e3 > Pe) e = "BEHIND ASTEROIDS", a = "THE DARK SIDE";
        else if (-3500 > Pe) r = o = "#7cf", e = "SEND ASTEROIDS TO MAKE", a = "PLAYERS WASTE THEIR MONEY";
        else if (Ze) 0 > Pe && (Pe = 0), t(Ze);
        else {
            for (var n = Math.min(25, Math.floor((Pe + 3500) / 80)), i = 0; n > i; i++) e += ".";
            Pe > -2e3 && (a = "A NEW PLAYER!")
        }!a || ya === a || "#f66" != o && "#f7c" != o || At(Ma), St.save(), St.translate(Ft, ut ? 40 : 2), St.lineWidth = de % 600 > 300 ? 2 : 1, St.save(), St.strokeStyle = r, s(e, ut ? 1.5 : 2, 1), St.restore(), St.save(), St.strokeStyle = o, St.translate(0, ut ? 30 : 40), s(ya = a, ut ? 1.5 : 2, 1), St.restore(), St.restore(), oe || (St.save(), St.translate(Gt - Ft, 2), St.lineWidth = 2, St.strokeStyle = "#7cf", s(25 * (Pe > 0 && Ze || ye) + "¢", 2, -1), St.restore(), St.save(), St.globalAlpha = qe ? 1 : .6, St.strokeStyle = "#7cf", St.translate(Gt - Ft, Ct - 30), Qe && s(Qe + "x", 1.5, -1), St.restore(), ne && (St.save(), St.translate(Ft + 50, Ct - 20), St.strokeStyle = "#fc7", ot(1), St.restore()))
    }

    function ot(t) {
        for (var e = 0; 3 > e; e++) {
            var a = ne[e];
            a && (St.save(), St.translate(100 * e, 0), i(Na[e]), St.stroke(), St.translate(0, -20 - 10 * t), s("" + a, t), St.restore())
        }
    }

    function nt() {
        m(Me, g), p(ue), h(Qt), Nt.uniform1i(l(Qt, "t"), M(Me, 0)), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(he), h(te), Nt.uniform1f(l(te, "pt"), Pe / 1e3), Nt.uniform1f(l(te, "pl"), ye), Nt.uniform1f(l(te, "ex"), oe || Je), Nt.uniform1f(l(te, "J"), Ce), Nt.uniform1f(l(te, "P"), 0 > Pe || oe || Re ? 0 : 1), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(ve), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(he), 0)), Nt.uniform2f(l(Vt, "dir"), 2, 2), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(me), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(ve), 0)), Nt.uniform2f(l(Vt, "dir"), -2, 2), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(ve), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(me), 0)), Nt.uniform2f(l(Vt, "dir"), 6, 0), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(he), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(ve), 0)), Nt.uniform2f(l(Vt, "dir"), 0, 2), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(le), h($t), Nt.uniform1i(l($t, "t"), M(A(ue), 0)), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(ve), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(le), 0)), Nt.uniform2f(l(Vt, "dir"), 2, -4), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(le), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(ve), 0)), Nt.uniform2f(l(Vt, "dir"), 4, -8), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(ve), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(ue), 0)), Nt.uniform2f(l(Vt, "dir"), .5, .5), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(me), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(ve), 0)), Nt.uniform2f(l(Vt, "dir"), -.5, .5), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(ve), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(me), 0)), Nt.uniform2f(l(Vt, "dir"), 1, 0), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(me), h(Vt), Nt.uniform1i(l(Vt, "t"), M(A(ve), 0)), Nt.uniform2f(l(Vt, "dir"), 0, 1), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(ve), h(Zt), Nt.uniform1i(l(Zt, "t"), M(A(me), 0)), Nt.uniform1i(l(Zt, "r"), M(A(ce), 1)), Nt.drawArrays(Nt.TRIANGLES, 0, 6), p(ce), h(zt), Nt.uniform1i(l(zt, "t"), M(A(ve), 0)), Nt.drawArrays(Nt.TRIANGLES, 0, 6), Nt.bindFramebuffer(Nt.FRAMEBUFFER, null), h(fe), Nt.uniform1i(l(fe, "G"), M(A(ue), 0)), Nt.uniform1i(l(fe, "R"), M(A(ce), 1)), Nt.uniform1i(l(fe, "B"), M(A(me), 2)), Nt.uniform1i(l(fe, "L"), M(A(le), 3)), Nt.uniform1i(l(fe, "E"), M(A(he), 4)), Nt.uniform1f(l(fe, "s"), ye ? 1 : e(-4e3, -3e3, Pe)), Nt.uniform1f(l(fe, "F"), e(300, 0, de - ra) + !oe && ke > 4 ? .5 * e(-1, 1, Math.cos(.01 * de)) : 0), Nt.uniform2f(l(fe, "k"), Ge[0], Ge[1]), Nt.drawArrays(Nt.TRIANGLES, 0, 6)
    }

    function it(t) {
        requestAnimationFrame(it), _a || (_a = t), ee = Math.min(100, t - _a), _a = t, de - Ga > 200 && S(), de += ee, st(), St = _t, St.save(), St.scale(qt, qt), St.save(), St.clearRect(0, 0, Gt, Ct), rt(), St.translate(Ft, Ut), be.forEach(function(t) {
            St.save(), ct(F(t)), X(t), St.restore()
        }), q(), St.restore(), St.restore(), St = Ot, St.save(), ft(), St.restore(), nt()
    }

    function st() {
        if (Pe += ee, de - je > 1200 && (je = de, ge[0] && At(da)), !oe && !Ze) {
            Pe > 0 && !ne && (ne = [0, 0, 0]);
            var a, r = 0;
            if (!Re && Pe > 0 && de - Ke > 5e3 && ye > 2 && !ge.length) {
                re = Math.floor(30 - 25 * Math.exp(-(ye - 3) / 15));
                var o = 3 * Qe / re;
                Qe > re && (Ke = de, ze = Qe = 0, ge.push([Yt * Math.random(), Ht * Math.random(), 0, 0, 0]), ne[2]++), Xe += 2 * o * Math.PI * ee / 1e3, Math.sin(Xe) > 0 !== qe && (qe = !qe, At(qe ? ia : sa))
            }
            if (0 == ke && Pe > 0 && (Se = de, ke = 4, ye++, Ie = 0, ae = 1e4, Ye = 0, Fe = 0, pe = [], ge = [], At(ma), ye > 1 && (localStorage.ba_pl = ye, localStorage.ba_ach = ne)), Pe > 1e3 && !Re) {
                for (a = 0; a < be.length; a++) {
                    var i = be[a];
                    if (i[10]) de - i[10] > 1e3 && be.splice(a--, 1);
                    else {
                        var s = F(i),
                            f = ie && n(ie, s, (ut ? 60 : 20) + 10 * i[6]);
                        (oa[i[7]] || f) && (Ve = ie = oa[i[7]] = 0, G(i) ? (ne[0]++, ye > 3 && Qe++, be.splice(a--, 1)) : (Ie += 5e3, Qe = 0, ra = i[10] = de))
                    }
                }
                for (ie = 0; Y(););
            }
            if (Re && de - Re > 2e3 + (ke > 1 ? 0 : 2e3) && (Re = 0, Ee = [Yt / 2, Ht / 2, 0, 0, 0], --ke ? Se = de : (Pe = -5e3, O(), ge = [], setTimeout(function() {
                    At(va)
                }, 1e3))), Ie >= ae && (aa = de, ke++, ae += 1e4, At(Ea), ke > 5 && (oe = 1, be = [], ge = [], O(), localStorage.ba_pl = 0)), !Re && Pe > 0 && de - $e > 100 && (Ie += 10, $e = de), xe = Math.max(xe, Ie), Ae.forEach(function(t, e) {
                    t[5] || r++;
                    var a;
                    if (t[4] < 900) {
                        if (!Re && n(t, Ee, 20)) return J(t), Ae.splice(e, 1), void z();
                        for (a = 0; a < ge.length; ++a) {
                            var o = ge[a];
                            if (n(t, o, 20)) return J(t), Ae.splice(e, 1), void ge.splice(a, 1)
                        }
                    }
                    for (a = 0; a < pe.length; ++a) {
                        var i = pe[a],
                            s = i[5];
                        if (n(t, i, 10 * s)) return J(t), Ae.splice(e, 1), _(a), void(Ie += 50 * Math.floor(.4 * (6 - s) * (6 - s)))
                    }
                }), !Re && Pe > 0 && pe.forEach(function(t, e) {
                    n(t, Ee, 10 + 10 * t[5]) && (200 > de - Se ? _(e) : (J(Ee), z()))
                }), Oe = 0, !Re && Pe > 0) {
                var c = Math.cos(Ee[4]),
                    h = Math.sin(Ee[4]);
                L(1 - Math.exp(-(ye - .8) / 14));
                var l = .004 + .003 * (1 - Math.exp(-ye / 40)),
                    u = 3e-4 - 2e-4 * Math.exp(-(ye - 1) / 5) + 1e-5 * ye,
                    v = 100 + 1e3 * Math.exp(-(ye - 1) / 8) + 300 * Math.exp(-ye / 20);
                Ee[2] += Le * ee * u * c, Ee[3] += Le * ee * u * h, Ee[4] = t(Ee[4] + Ne * ee * l), 3 > r && we && de - ea > v && (ea = de, At(na), K(Ee, .3, Ee[4]))
            }
        }
        P(Ee), pe.forEach(D), ge.forEach(P), Ae.forEach(P), Te.forEach(D), ge.forEach(Z), be.forEach(W), Te.forEach(k), w(Ee), pe.forEach(Pe > 0 && !Ze && !oe ? y : w), ge.forEach(w), Ae.forEach(k), Ae.forEach(w), Je += .04 * (Oe - Je), _e += .04 * (Le - _e), We -= 3e-4 * ee * We, He += .04 * (Ye - He), Be += .04 * (Fe - Be), We > 1.3 && .5 > Ye && (Fe = 1 + Math.random(), Ye++), .8 > We && (Ye = 0);
        var m = Ue;
        Ue += 2 * Fe * Math.PI * ee / 1e3, Ce = He * Math.pow(Math.cos(Ue), 2), Math.cos(m) < 0 && 0 < Math.cos(Ue) && (Fe = 1 + 3 * Math.random() * Math.random()), .5 > Ye && (He += .04 * (Ye - He));
        var M = Ye * Math.pow(e(.2, 0, Ce), .5);
        M > .5 && de - ta > 100 && (At(pa), ta = de), Ge = [30 * M * (Math.random() - .5) / Gt, 30 * M * (Math.random() - .5) / Ct]
    }

    function ft() {
        St.save(), St.fillStyle = "#000", St.fillRect(0, 0, Yt, Ht), St.restore(), ht(pe, C), ht(ge, $), ht(Ae, j), ht(Te, V), Pe > 0 && !Ze && !oe && (St.save(), ct(Ee), Q(Ee), St.restore()), et(), at()
    }

    function ct(t) {
        St.translate(t[0], t[1])
    }

    function ht(t, e) {
        for (var a = 0; a < t.length; ++a) St.save(), ct(t[a]), e(t[a]), St.restore()
    }
    var lt = !1,
        ut = "ontouchstart" in document,
        vt = [
            [0, 0],
            [2, 0],
            [2, 2],
            [0, 2],
            [0, 0]
        ],
        mt = [
            [2, 0],
            [0, 0],
            [0, 1],
            [2, 1],
            [2, 2],
            [0, 2]
        ],
        Mt = [vt, [
                [1, 0],
                [1, 2]
            ],
            [
                [0, 0],
                [2, 0],
                [2, 1],
                [0, 1],
                [0, 2],
                [2, 2]
            ],
            [
                [0, 0],
                [2, 0],
                [2, 2],
                [0, 2], , [0, 1],
                [2, 1]
            ],
            [
                [0, 0],
                [0, 1],
                [2, 1], , [2, 0],
                [2, 2]
            ], mt, [
                [0, 0],
                [0, 2],
                [2, 2],
                [2, 1],
                [0, 1]
            ],
            [
                [0, 0],
                [2, 0],
                [2, 2]
            ],
            [
                [0, 0],
                [2, 0],
                [2, 2],
                [0, 2],
                [0, 0], , [0, 1],
                [2, 1]
            ],
            [
                [2, 2],
                [2, 0],
                [0, 0],
                [0, 1],
                [2, 1]
            ]
        ];
    [
        [
            [0, 2],
            [0, 2 / 3],
            [1, 0],
            [2, 2 / 3],
            [2, 2], , [0, 4 / 3],
            [2, 4 / 3]
        ],
        [
            [0, 1],
            [0, 0],
            [4 / 3, 0],
            [2, 1 / 3],
            [2, 2 / 3],
            [4 / 3, 1],
            [0, 1],
            [0, 2],
            [4 / 3, 2],
            [2, 5 / 3],
            [2, 4 / 3],
            [4 / 3, 1]
        ],
        [
            [2, 0],
            [0, 0],
            [0, 2],
            [2, 2]
        ],
        [
            [0, 0],
            [1, 0],
            [2, 2 / 3],
            [2, 4 / 3],
            [1, 2],
            [0, 2],
            [0, 0]
        ],
        [
            [2, 0],
            [0, 0],
            [0, 2],
            [2, 2], , [0, 1],
            [1.5, 1]
        ],
        [
            [2, 0],
            [0, 0],
            [0, 2], , [0, 1],
            [2, 1]
        ],
        [
            [2, 2 / 3],
            [2, 0],
            [0, 0],
            [0, 2],
            [2, 2],
            [2, 4 / 3],
            [1, 4 / 3]
        ],
        [
            [0, 0],
            [0, 2], , [2, 0],
            [2, 2], , [0, 1],
            [2, 1]
        ],
        [
            [0, 0],
            [2, 0], , [1, 0],
            [1, 2], , [0, 2],
            [2, 2]
        ],
        [
            [2, 0],
            [2, 2],
            [1, 2],
            [0, 4 / 3]
        ],
        [
            [0, 0],
            [0, 2], , [2, 0],
            [0, 1],
            [2, 2]
        ],
        [
            [0, 0],
            [0, 2],
            [2, 2]
        ],
        [
            [0, 2],
            [0, 0],
            [1, 2 / 3],
            [2, 0],
            [2, 2]
        ],
        [
            [0, 2],
            [0, 0],
            [2, 2],
            [2, 0]
        ], vt, [
            [0, 2],
            [0, 0],
            [2, 0],
            [2, 1],
            [0, 1]
        ],
        [
            [0, 0],
            [2, 0],
            [2, 4 / 3],
            [1, 2],
            [0, 2],
            [0, 0], , [2, 2],
            [1, 4 / 3]
        ],
        [
            [0, 2],
            [0, 0],
            [2, 0],
            [2, 1],
            [0, 1],
            [2, 2]
        ], mt, [
            [0, 0],
            [2, 0], , [1, 0],
            [1, 2]
        ],
        [
            [0, 0],
            [0, 2],
            [2, 2],
            [2, 0]
        ],
        [
            [0, 0],
            [1, 2],
            [2, 0]
        ],
        [
            [0, 0],
            [0, 2],
            [1, 4 / 3],
            [2, 2],
            [2, 0]
        ],
        [
            [0, 0],
            [2, 2], , [2, 0],
            [0, 2]
        ],
        [
            [0, 0],
            [1, 2 / 3],
            [2, 0], , [1, 2 / 3],
            [1, 2]
        ],
        [
            [0, 0],
            [2, 0],
            [0, 2],
            [2, 2]
        ]
    ].forEach(function(t, e) {
        Mt[String.fromCharCode(65 + e)] = t
    });
    var dt = Mt["."] = [
        [1, 1.8],
        [1, 2]
    ];
    Mt[":"] = [
        [1, 0],
        [1, .2], , [1, 1.8],
        [1, 2]
    ], Mt["'"] = [
        [1, 0],
        [1, 2 / 3]
    ], Mt["ᐃ"] = [
        [1, 0],
        [1.8, 2],
        [1, 1.6],
        [.2, 2],
        [1, 0]
    ], Mt["!"] = [
        [1, 0],
        [1, 1.5], ,
    ].concat(dt), Mt["?"] = [
        [0, 0],
        [2, 0],
        [2, 1],
        [1, 1],
        [1, 1.5], ,
    ].concat(dt), Mt.x = [
        [0, 1],
        [2, 2], , [2, 1],
        [0, 2]
    ], Mt["¢"] = [
        [1, 0],
        [1, 2], , [1.5, .5],
        [.5, .5],
        [.5, 1.5],
        [1.5, 1.5]
    ];
    var Et, pt, gt, At, bt = new T,
        Tt = window.AudioContext || window.webkitAudioContext;
    if (Tt) {
        Et = new Tt, pt = Et.createDynamicsCompressor();
        var Rt = Et.createGain();
        Rt.gain.value = .1, pt.connect(Rt), Rt.connect(Et.destination), gt = function(t) {
            var e = [];
            return R(t, Et, function(t) {
                e.push(t)
            }), e
        }, At = function(t) {
            if (t[0]) {
                var e = Et.createBufferSource();
                e.buffer = t[0], e.start(0), e.connect(pt), setTimeout(function() {
                    e.disconnect(pt)
                }, 1e3 * t[0].duration + 300)
            }
        }
    } else gt = At = function() {};
    var St, xt = "precision highp float;varying vec2 uv;uniform sampler2D t;uniform vec2 dim;uniform vec2 dir;void main(){vec4 a=vec4(0.0);vec2 b=vec2(1.3846153846)*dir;vec2 c=vec2(3.2307692308)*dir;a+=texture2D(t,uv)*0.2270270270;a+=texture2D(t,uv+(b/dim))*0.3162162162;a+=texture2D(t,uv-(b/dim))*0.3162162162;a+=texture2D(t,uv+(c/dim))*0.0702702703;a+=texture2D(t,uv-(c/dim))*0.0702702703;gl_FragColor=a;}",
        It = "precision highp float;varying vec2 uv;uniform sampler2D t;void main(){gl_FragColor=texture2D(t,uv);}",
        Pt = "precision highp float;varying vec2 uv;uniform sampler2D G;uniform sampler2D R;uniform sampler2D B;uniform sampler2D L;uniform sampler2D E;uniform float s;uniform float F;uniform vec2 k;float a(vec2 b,vec2 c){float d=10.0;vec2 e=b-c;return pow(abs(pow(abs(e.x),d)+pow(abs(e.y),d)),1.0/d);}void main(){vec2 f=uv+k;vec2 g=(f/0.98)-0.01;float h=a(f,vec2(0.5));float i=smoothstep(0.45,0.51,h);g=mix(g,vec2(0.5),0.2*(0.6-h)-0.02*h);vec3 j=texture2D(G,g).rgb;gl_FragColor=step(0.0,f.x)*step(f.x,1.0)*step(0.0,f.y)*step(f.y,1.0)*vec4((vec3(0.03+0.1*F,0.04,0.05)+mix(vec3(0.05,0.1,0.15)-j,2.0*j,s)+s*(texture2D(L,g).rgb+vec3(0.3+F,0.6,1.0)*(texture2D(R,g).rgb+3.0*texture2D(B,g).rgb)+0.5*texture2D(E,g).rgb))*mix(1.0,smoothstep(1.0,0.0,i),0.6),1.0);}",
        Dt = "precision highp float;varying vec2 uv;uniform sampler2D t;void main(){gl_FragColor=vec4(step(0.9,texture2D(t,uv).r));}",
        yt = "precision highp float;varying vec2 uv;uniform sampler2D t;void main(){vec3 a=texture2D(t,uv).rgb;vec2 b=0.003*vec2(cos(47.0*uv.y),sin(67.0*uv.x));gl_FragColor=vec4(a.r+a.g+a.b+texture2D(t,uv+b).b);}",
        kt = "precision highp float;varying vec2 uv;uniform sampler2D t;uniform sampler2D r;void main(){vec3 a=texture2D(r,uv).rgb;gl_FragColor=vec4(a*(0.82-0.3*a.r*a.r)+texture2D(t,uv).rgb,1.0);}",
        wt = "precision highp float;varying vec2 uv;uniform float pt;uniform float pl;uniform float S;uniform float ex;uniform float J;uniform float P;float a(vec2 b,vec2 c){return step(length((uv-b)/c),1.0);}float d(vec2 b,vec2 c,float e){vec2 f=(uv-b)/c;return step(pow(abs(f.x),e)+pow(abs(f.y),e),1.0);}vec3 g(){return 0.1+0.3*vec3(1.0,0.9,0.7)*smoothstep(0.4,0.1,distance(uv,vec2(0.2,1.2)))+0.4*vec3(0.8,0.6,1.0)*smoothstep(0.5,0.2,distance(uv,vec2(1.3,0.7)));}vec4 h(float e,float i){vec4 b=vec4(0.0);vec2 j=vec2(min(ex,1.0),mix(min(ex,1.0),min(ex-1.0,1.0),0.5));vec4 k=0.2+0.4*pow(abs(cos(4.*e+S)),2.0)*vec4(1.0,0.7,0.3,1.0);vec4 l=vec4(0.5,0.3,0.3,1.0);vec4 m=vec4(0.3*(1.0+cos(3.*e+6.*S)),0.2*(1.0+cos(7.*e+7.*S)),0.1+0.2*(1.0+sin(7.*e+8.*S)),1.0);float n=step(sin(9.0*e+S),0.0);float o=0.02+0.02*n*cos(e+S);float p=step(i,-0.01)+step(0.01,i);float q=(1.0-p)*step(0.0,pt);vec2 r=vec2(0.5)+J*vec2(0.0,0.2)+p*vec2(0.03*cos(4.0*pt+sin(pt)),0.05*abs(sin(3.0*pt)))+j*q*(1.0-P)*vec2(0.05*cos(pt*(1.0+0.1*sin(pt))),0.05*abs(sin(pt)));vec2 s=mix(r,vec2(0.5),0.5);r.x+=i;s.x+=i;b+=k*a(r,vec2(0.06,0.1));b*=1.0-(0.5+0.5*n)*a(r-vec2(0.0,0.04),vec2(0.03,0.01));b*=1.0-a(r+vec2(0.03,0.03),vec2(0.02,0.01));b*=1.0-a(r+vec2(-0.03,0.03),vec2(0.02,0.01));b*=1.0-0.6*a(r,vec2(0.01,0.02));b+=l*a(r+vec2(0.0,o),vec2(0.07,0.1+o));b+=q*(l+k)*a(s-vec2(-0.2+0.01*cos(5.0*pt),0.45-0.1*j.y*step(0.0,pt)*P*pow(abs(sin(8.0*pt*(1.0+0.2*cos(pt)))),4.0)),vec2(0.055,0.05));b+=q*(l+k)*a(s-vec2(0.2+0.01*cos(5.0*pt),0.45-0.1*j.x*step(2.0,pt)*P*pow(abs(cos(7.0*pt)),4.0)),vec2(0.055,0.05));b+=step(b.a,0.0)*(l+k)*d(r-vec2(0.0,0.10+0.02*n),vec2(0.05-0.01*n,0.03),4.0);vec2 t=vec2(0.16+0.04*sin(9.*e),0.27+0.02*cos(9.*e));b+=step(b.r+b.g+b.b,0.0)*m*step(1.0,d(r-vec2(0.0,0.35),t*(1.0-0.1*n),4.0)+a(r-vec2(0.0,0.35),t));return b;}void main(){float u=0.6+0.4*smoothstep(2.0,0.0,distance(pt,-2.0));vec4 b=vec4(0.0);b+=(1.0-smoothstep(-0.0,-5.0,pt))*h(pl+step(pt,0.0),-0.6*smoothstep(-1.,-5.,pt));b+=step(1.0,pl)*h(pl+step(pt,0.0)-1.0,2.0*smoothstep(-4.,-1.,pt));b*=1.0-1.3*distance(uv,vec2(0.5));gl_FragColor=vec4(u*mix(g(),b.rgb,clamp(b.a,0.0,1.0)),1.0);}",
        Lt = "attribute vec2 p;varying vec2 uv;void main(){gl_Position=vec4(p,0.0,1.0);uv=0.5*(p+1.0);}",
        Nt = c.getContext("webgl") || c.getContext("experimental-webgl"),
        Ot = g.getContext("2d"),
        _t = u.getContext("2d"),
        Gt = ut ? 480 : 800,
        Ct = ut ? 660 : 680,
        Ft = ut ? 50 : 120,
        Ut = ut ? 140 : Ft,
        Bt = ut ? 40 : 80,
        Yt = Gt - 2 * Ft,
        Ht = Ct - 2 * Ut,
        Wt = 2 * (Yt + Ht + 2 * Bt),
        Xt = Math.random();
    d.style.webkitTransformOrigin = d.style.transformOrigin = "0 0", g.width = c.width = Yt, g.height = c.height = Ht, c.style.top = Ut + "px", c.style.left = Ft + "px";
    var qt = devicePixelRatio;
    u.width = Gt * qt, u.height = Ct * qt, u.style.width = Gt + "px", u.style.height = Ct + "px";
    var Kt = 0,
        jt = 0;
    Nt.viewport(0, 0, Yt, Ht), Nt.pixelStorei(Nt.UNPACK_FLIP_Y_WEBGL, !0);
    var Jt = Nt.createBuffer();
    Nt.bindBuffer(Nt.ARRAY_BUFFER, Jt), Nt.bufferData(Nt.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), Nt.STATIC_DRAW);
    var Vt = f(Lt, xt);
    Nt.uniform2f(l(Vt, "dim"), Yt, Ht);
    var zt = f(Lt, It),
        Qt = f(Lt, yt),
        Zt = f(Lt, kt),
        $t = f(Lt, Dt),
        te = f(Lt, wt);
    Nt.uniform1f(l(te, "S"), Xt);
    for (var ee, ae, re, oe, ne, ie, se, fe = f(Lt, Pt), ce = E(), he = E(), le = E(), ue = E(), ve = E(), me = E(), Me = v(), de = 0, Ee = [Yt / 2, Ht / 2, 0, 0, 0], pe = [], ge = [], Ae = [], be = [], Te = [], Re = 0, Se = 0, xe = 0, Ie = 0, Pe = -1e4, De = 0, ye = 0, ke = 0, we = 0, Le = 0, Ne = 0, Oe = 0, _e = 0, Ge = [0, 0], Ce = 0, Fe = 0, Ue = 0, Be = 0, Ye = 0, He = 0, We = 0, Xe = 0, qe = 0, Ke = 0, je = 0, Je = 0, Ve = 1, ze = 1, Qe = 0, Ze = localStorage.ba_pl && parseInt(localStorage.ba_pl), $e = 0, ta = 0, ea = 0, aa = 0, ra = 0, oa = {}, na = gt([0, .06, .18, , .33, .5, .23, -.04, -.24, , , -.02, , .37, -.22, , , , .8, , , , , .3]), ia = gt([, , .12, , .13, .16, , , , , , , , , , , , , .7, , , , , .5]), sa = gt([, , .12, , .13, .165, , , , , , , , , , , , , .7, , , , , .5]), fa = gt([3, , .35, .5369, .5, .15, , -.02, , , , -.7444, .78, , , .7619, , , .1, , , , , .5]), ca = gt([3, , .38, .5369, .52, .18, , -.02, , , , -.7444, .78, , , .7619, , , .1, , , , , .5]), ha = gt([2, .07, .04, , .24, .25, , .34, -.1999, , , -.02, , .3187, , , -.14, .04, .85, , .28, .63, , .5]), la = gt([1, , .04, , .45, .14, .06, -.06, .02, .87, .95, -.02, , .319, , , -.14, .04, .5, , , , , .4]), ua = gt([0, .11, .37, , .92, .15, , -.06, -.04, .3, .14, .1, , .5047, , , , , .16, -.02, , .5, , 1]), va = gt([0, .11, .36, , .66, .19, , .06, -.06, .05, .8, -.12, .3, .19, -.06, , , -.02, .23, -.02, , .4, , .4]), ma = gt([0, , .094, .29, .42, .563, , , , , , .4399, .5658, , , , , , 1, , , , , .5]), Ma = gt([2, .07, .1, , .2, .75, .35, -.1, .12, , , -.02, , , , , -.06, -.0377, .26, , , .8, , .7]), da = gt([2, .05, .74, , .33, .5, , , , .46, .29, , , , , , , , 1, , , , , .3]), Ea = gt([0, .12, .8, .48, .77, .92, , -.12, -.0999, , , -.4, .2, .34, , .65, , , .93, -.02, , , , .38]), pa = gt([3, , .12, .56, .27, .07, , -.12, .02, , , -.02, .68, , , , -.04, -.022, .06, , , .06, , .5]), ga = 0; 99 > ga; ++ga) oa[ga] = 0;
    var Aa = 0;
    ut ? addEventListener("touchstart", function(t) {
        t.preventDefault(), I(t.changedTouches[0])
    }) : (addEventListener("click", function(t) {
        t.preventDefault(), I(t)
    }), addEventListener("keydown", function(t) {
        oa[t.which] = 1
    }), addEventListener("keyup", function(t) {
        oa[t.which] = 0
    }));
    for (var ba, Ta, Ra, Sa, xa = 0, Ia = [], Pa = 0; 26 > Pa; Pa++) Ia.push(65 + Pa);
    Ia.sort(function() {
        return Math.random() - .5
    });
    var Da, ya, ka = [
            [8, 0],
            [7, 5],
            [0, 9],
            [7, 14]
        ],
        wa = [
            [15, 14],
            [22, 9],
            [15, 5],
            [14, 0]
        ],
        La = ka.concat(wa).concat(ka).concat([, ]).concat(wa).concat([, [7, 5],
            [15, 5], , [0, 9],
            [22, 9]
        ]),
        Na = [
            [
                [-11, -11],
                [4, -13],
                [6, -6],
                [14, 0],
                [14, 8],
                [6, 8],
                [-6, 14],
                [-14, 0]
            ],
            [
                [-8, 13],
                [0, -13],
                [8, 13],
                [0, 11],
                [-8, 13], , [-10, -2],
                [10, 2], , [10, -2],
                [-10, 2], ,
            ], La.map(function(t) {
                return t ? [t[0] - 11, t[1] - 7] : t
            })
        ],
        Oa = 0;
    O(), requestAnimationFrame(it), lt && addEventListener("resize", function() {
        Pe = -1, Ze = 0, ye++, be = [], console.log("player=", ye)
    });
    var _a, Ga = -9999
}();