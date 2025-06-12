(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [951, 931],
  {
    7589: function (e, n, s) {
      Promise.resolve().then(s.bind(s, 5522));
    },
    5522: function (e, n, s) {
      'use strict';
      s.r(n),
        s.d(n, {
          default: function () {
            return g;
          },
        });
      var a = s(9268),
        i = s(103),
        r = s(2017),
        l = s(8648),
        t = function (e) {
          return (0, a.jsxs)(i.rjZ, {
            className: ''.concat(e.className, ' info-section'),
            children: [
              (0, a.jsx)(i.sgG, {
                sm: 4,
                md: 8,
                lg: 16,
                xlg: 3,
                children: (0, a.jsx)('h3', {
                  className: 'info-section__heading',
                  children: e.heading,
                }),
              }),
              e.children,
            ],
          });
        },
        c = function (e) {
          var n,
            s,
            r = ((s = (n = e.heading.split(' ')).pop()), [n.join(' '), s]);
          return (0, a.jsxs)(i.sgG, {
            sm: 4,
            md: 8,
            lg: 5,
            xlg: 4,
            className: 'info-card',
            children: [
              (0, a.jsxs)('div', {
                children: [
                  (0, a.jsxs)('h4', {
                    className: 'info-card__heading',
                    children: [
                      ''.concat(r[0], ' '),
                      (0, a.jsx)('strong', { children: r[1] }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: 'info-card__body',
                    children: e.body,
                  }),
                ],
              }),
              e.icon(),
            ],
          });
        },
        o = s(6394),
        d = s.n(o);
      function g() {
        return (0, a.jsxs)(i.rjZ, {
          className: 'landing-page',
          fullWidth: !0,
          children: [
            (0, a.jsxs)(i.sgG, {
              lg: 16,
              md: 8,
              sm: 4,
              className: 'landing-page__banner',
              children: [
                (0, a.jsx)(i.aGc, {
                  noTrailingSlash: !0,
                  'aria-label': 'Page navigation',
                  children: (0, a.jsx)(i.gN6, {
                    children: (0, a.jsx)('a', {
                      href: '/',
                      children: 'Getting started',
                    }),
                  }),
                }),
                (0, a.jsx)('h1', {
                  className: 'landing-page__heading',
                  children: 'Design & build with Carbon',
                }),
              ],
            }),
            (0, a.jsx)(i.sgG, {
              lg: 16,
              md: 8,
              sm: 4,
              className: 'landing-page__r2',
              children: (0, a.jsxs)(i.mQc, {
                defaultSelectedIndex: 0,
                children: [
                  (0, a.jsxs)(i.tdY, {
                    className: 'tabs-group',
                    'aria-label': 'Page navigation',
                    children: [
                      (0, a.jsx)(i.OK9, { children: 'About' }),
                      (0, a.jsx)(i.OK9, { children: 'Design' }),
                      (0, a.jsx)(i.OK9, { children: 'Develop' }),
                    ],
                  }),
                  (0, a.jsxs)(i.nPR, {
                    children: [
                      (0, a.jsx)(i.x45, {
                        children: (0, a.jsxs)(i.rjZ, {
                          className: 'tabs-group-content',
                          children: [
                            (0, a.jsxs)(i.sgG, {
                              md: 4,
                              lg: 7,
                              sm: 4,
                              className: 'landing-page__tab-content',
                              children: [
                                (0, a.jsx)('h3', {
                                  className: 'landing-page__subheading',
                                  children: 'What is Carbon?',
                                }),
                                (0, a.jsx)('p', {
                                  className: 'landing-page__p',
                                  children:
                                    'Carbon is IBM’s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.',
                                }),
                                (0, a.jsx)(i.zxk, { children: 'Learn more' }),
                              ],
                            }),
                            (0, a.jsx)(i.sgG, {
                              md: 4,
                              lg: { span: 8, offset: 8 },
                              sm: 4,
                              children: (0, a.jsx)(d(), {
                                className: 'landing-page__illo',
                                src: '/tab-illo.png',
                                alt: 'Carbon illustration',
                                width: 604,
                                height: 498,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(i.x45, {
                        children: (0, a.jsx)(i.rjZ, {
                          className: 'tabs-group-content',
                          children: (0, a.jsx)(i.sgG, {
                            lg: 16,
                            md: 8,
                            sm: 4,
                            className: 'landing-page__tab-content',
                            children: (0, a.jsx)('p', {
                              className: 'landing-page__p',
                              children:
                                'Rapidly build beautiful and accessible experiences. The Carbon kit contains all resources you need to get started.',
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsx)(i.x45, {
                        children: (0, a.jsx)(i.rjZ, {
                          className: 'tabs-group-content',
                          children: (0, a.jsx)(i.sgG, {
                            lg: 16,
                            md: 8,
                            sm: 4,
                            className: 'landing-page__tab-content',
                            children: (0, a.jsx)('p', {
                              className: 'landing-page__p',
                              children:
                                'Carbon provides styles and components in Vanilla, React, Next, Angular, and Vue for anyone building on the web.',
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(i.sgG, {
              lg: 16,
              md: 8,
              sm: 4,
              className: 'landing-page__r3',
              children: (0, a.jsxs)(t, {
                heading: 'The Principles',
                children: [
                  (0, a.jsx)(c, {
                    heading: 'Carbon is Open',
                    body: "It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute.",
                    icon: function () {
                      return (0, a.jsx)(r.ID6, { size: 32 });
                    },
                  }),
                  (0, a.jsx)(c, {
                    heading: 'Carbon is Modular',
                    body: "Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user.",
                    icon: function () {
                      return (0, a.jsx)(r.pNg, { size: 32 });
                    },
                  }),
                  (0, a.jsx)(c, {
                    heading: 'Carbon is Consistent',
                    body: 'Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.',
                    icon: function () {
                      return (0, a.jsx)(l.THo, { size: 32 });
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [98, 260, 228, 998, 253, 698, 744], function () {
      return e((e.s = 7589));
    }),
      (_N_E = e.O());
  },
]);
