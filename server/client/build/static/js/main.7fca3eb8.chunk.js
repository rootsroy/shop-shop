(this["webpackJsonpmern-client"] = this["webpackJsonpmern-client"] || []).push([
  [0],
  {
    40: function (e, t, a) {
      e.exports = a.p + "static/media/spinner.ab497855.gif";
    },
    66: function (e, t, a) {
      e.exports = a(83);
    },
    71: function (e, t, a) {},
    82: function (e, t, a) {},
    83: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(37),
        o = a.n(c),
        l = (a(71), a(12)),
        i = a(8),
        u = a(15),
        s = a(63),
        m = a(9),
        d = a(55),
        p = a(56),
        E = a(44),
        f = a.n(E),
        b = new ((function () {
          function e() {
            Object(d.a)(this, e);
          }
          return (
            Object(p.a)(e, [
              {
                key: "getProfile",
                value: function () {
                  return f()(this.getToken());
                },
              },
              {
                key: "loggedIn",
                value: function () {
                  var e = this.getToken();
                  return !!e && !this.isTokenExpired(e);
                },
              },
              {
                key: "isTokenExpired",
                value: function (e) {
                  try {
                    return f()(e).exp < Date.now() / 1e3;
                  } catch (t) {
                    return !1;
                  }
                },
              },
              {
                key: "getToken",
                value: function () {
                  return localStorage.getItem("id_token");
                },
              },
              {
                key: "login",
                value: function (e) {
                  localStorage.setItem("id_token", e),
                    window.location.assign("/");
                },
              },
              {
                key: "logout",
                value: function () {
                  localStorage.removeItem("id_token"),
                    window.location.assign("/");
                },
              },
            ]),
            e
          );
        })())();
      var g = function () {
          return r.a.createElement(
            "header",
            { className: "flex-row px-1" },
            r.a.createElement(
              "h1",
              null,
              r.a.createElement(
                l.b,
                { to: "/" },
                r.a.createElement(
                  "span",
                  { role: "img", "aria-label": "shopping bag" },
                  "\ud83d\udecd\ufe0f"
                ),
                "-Shop-Shop"
              )
            ),
            r.a.createElement(
              "nav",
              null,
              b.loggedIn()
                ? r.a.createElement(
                    "ul",
                    { className: "flex-row" },
                    r.a.createElement(
                      "li",
                      { className: "mx-1" },
                      r.a.createElement(
                        l.b,
                        { to: "/orderHistory" },
                        "Order History"
                      )
                    ),
                    r.a.createElement(
                      "li",
                      { className: "mx-1" },
                      r.a.createElement(
                        "a",
                        {
                          href: "/",
                          onClick: function () {
                            return b.logout();
                          },
                        },
                        "Logout"
                      )
                    )
                  )
                : r.a.createElement(
                    "ul",
                    { className: "flex-row" },
                    r.a.createElement(
                      "li",
                      { className: "mx-1" },
                      r.a.createElement(l.b, { to: "/signup" }, "Signup")
                    ),
                    r.a.createElement(
                      "li",
                      { className: "mx-1" },
                      r.a.createElement(l.b, { to: "/login" }, "Login")
                    )
                  )
            )
          );
        },
        h = a(14),
        O = a(3);
      function v(e, t, a) {
        return new Promise(function (n, r) {
          var c,
            o,
            l,
            i = window.indexedDB.open("shop-shop", 1);
          (i.onupgradeneeded = function (e) {
            var t = i.result;
            t.createObjectStore("products", { keyPath: "_id" }),
              t.createObjectStore("categories", { keyPath: "_id" }),
              t.createObjectStore("cart", { keyPath: "_id" });
          }),
            (i.onerror = function (e) {
              console.log("There was an error");
            }),
            (i.onsuccess = function (r) {
              switch (
                ((c = i.result),
                (o = c.transaction(e, "readwrite")),
                (l = o.objectStore(e)),
                (c.onerror = function (e) {
                  console.log("error", e);
                }),
                t)
              ) {
                case "put":
                  l.put(a), n(a);
                  break;
                case "get":
                  var u = l.getAll();
                  u.onsuccess = function () {
                    n(u.result);
                  };
                  break;
                case "delete":
                  l.delete(a._id);
                  break;
                default:
                  console.log("No valid method");
              }
              o.oncomplete = function () {
                c.close();
              };
            });
        });
      }
      var y,
        j,
        w,
        _,
        T = function (e) {
          var t = e.image,
            a = e.name,
            n = e._id,
            c = e.price,
            o = e.quantity,
            i = Object(m.b)(),
            u = Object(m.c)(function (e) {
              return e.cart;
            });
          return r.a.createElement(
            "div",
            { className: "card px-1 py-1" },
            r.a.createElement(
              l.b,
              { to: "/products/".concat(n) },
              r.a.createElement("img", { alt: a, src: "/images/".concat(t) }),
              r.a.createElement("p", null, a)
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                null,
                o,
                " ",
                (function (e, t) {
                  return 1 === t ? e : e + "s";
                })("item", o),
                " in stock"
              ),
              r.a.createElement("span", null, "$", c)
            ),
            r.a.createElement(
              "button",
              {
                onClick: function () {
                  var t = u.find(function (e) {
                    return e._id === n;
                  });
                  t
                    ? (i({
                        type: "UPDATE_CART_QUANTITY",
                        _id: n,
                        purchaseQuantity: parseInt(t.purchaseQuantity) + 1,
                      }),
                      v(
                        "cart",
                        "put",
                        Object(O.a)(
                          Object(O.a)({}, t),
                          {},
                          { purchaseQuantity: parseInt(t.purchaseQuantity) + 1 }
                        )
                      ))
                    : (i({
                        type: "ADD_TO_CART",
                        product: Object(O.a)(
                          Object(O.a)({}, e),
                          {},
                          { purchaseQuantity: 1 }
                        ),
                      }),
                      v(
                        "cart",
                        "put",
                        Object(O.a)(
                          Object(O.a)({}, e),
                          {},
                          { purchaseQuantity: 1 }
                        )
                      ));
                },
              },
              "Add to cart"
            )
          );
        },
        N = a(25),
        k = a(53),
        C = Object(k.a)(
          y ||
            (y = Object(N.a)([
              "\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n",
            ]))
        ),
        A =
          (Object(k.a)(
            j ||
              (j = Object(N.a)([
                "\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n",
              ]))
          ),
          Object(k.a)(
            w ||
              (w = Object(N.a)([
                "\n  {\n    categories {\n      _id\n      name\n    }\n  }\n",
              ]))
          )),
        x = Object(k.a)(
          _ ||
            (_ = Object(N.a)([
              "\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n",
            ]))
        ),
        R = a(40),
        S = a.n(R);
      var D = function () {
        var e = Object(m.b)(),
          t = Object(m.c)(function (e) {
            return e;
          }),
          a = t.currentCategory,
          c = Object(h.c)(C),
          o = c.loading,
          l = c.data;
        return (
          Object(n.useEffect)(
            function () {
              l
                ? (e({ type: "UPDATE_PRODUCTS", products: l.products }),
                  l.products.forEach(function (e) {
                    v("products", "put", e);
                  }))
                : o ||
                  v("products", "get").then(function (t) {
                    e({ type: "UPDATE_PRODUCTS", products: t });
                  });
            },
            [l, o, e]
          ),
          r.a.createElement(
            "div",
            { className: "my-2" },
            r.a.createElement("h2", null, "Our Products:"),
            t.products.length
              ? r.a.createElement(
                  "div",
                  { className: "flex-row" },
                  (a
                    ? t.products.filter(function (e) {
                        return e.category._id === a;
                      })
                    : t.products
                  ).map(function (e) {
                    return r.a.createElement(T, {
                      key: e._id,
                      _id: e._id,
                      image: e.image,
                      name: e.name,
                      price: e.price,
                      quantity: e.quantity,
                    });
                  })
                )
              : r.a.createElement(
                  "h3",
                  null,
                  "You haven't added any products yet!"
                ),
            o ? r.a.createElement("img", { src: S.a, alt: "loading" }) : null
          )
        );
      };
      var P = function () {
          var e = Object(m.b)(),
            t = Object(m.c)(function (e) {
              return e.categories;
            }),
            a = Object(h.c)(A),
            c = a.loading,
            o = a.data;
          return (
            Object(n.useEffect)(
              function () {
                o
                  ? e({ type: "UPDATE_CATEGORIES", categories: o.categories })
                  : c ||
                    e({ type: "UPDATE_CATEGORIES", categories: o.categories });
              },
              [o, c, e]
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("h2", null, "Choose a Category:"),
              t.map(function (t) {
                return r.a.createElement(
                  "button",
                  {
                    key: t._id,
                    onClick: function () {
                      var a;
                      (a = t._id),
                        e({
                          type: "UPDATE_CURRENT_CATEGORY",
                          currentCategory: a,
                        });
                    },
                  },
                  t.name
                );
              })
            )
          );
        },
        U = a(22),
        I = a.n(U),
        Q = a(27),
        $ = a(26),
        F = a(21),
        L = a(62),
        M = function (e) {
          var t = e.item,
            a = Object(m.b)();
          return r.a.createElement(
            "div",
            { className: "flex-row" },
            r.a.createElement(
              "div",
              null,
              r.a.createElement("img", {
                src: "/images/".concat(t.image),
                alt: "",
              })
            ),
            r.a.createElement("div", null, t.name, ", $", t.price),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("span", null, "Qty:"),
              r.a.createElement("input", {
                type: "number",
                placeholder: "1",
                value: t.purchaseQuantity,
                onChange: function (e) {
                  var n = e.target.value;
                  "0" === n
                    ? (a({ type: "REMOVE_FROM_CART", _id: t._id }),
                      v("cart", "delete", Object(O.a)({}, t)))
                    : (a({
                        type: "UPDATE_CART_QUANTITY",
                        _id: t._id,
                        purchaseQuantity: parseInt(n),
                      }),
                      v(
                        "cart",
                        "put",
                        Object(O.a)(
                          Object(O.a)({}, t),
                          {},
                          { purchaseQuantity: parseInt(n) }
                        )
                      ));
                },
              }),
              r.a.createElement(
                "span",
                {
                  role: "img",
                  "aria-label": "trash",
                  onClick: function () {
                    return (function (e) {
                      a({ type: "REMOVE_FROM_CART", _id: e._id }),
                        v("cart", "delete", Object(O.a)({}, e));
                    })(t);
                  },
                },
                "\ud83d\uddd1\ufe0f"
              )
            )
          );
        },
        q = (a(82), Object(L.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),
        G = function () {
          var e = Object(m.b)(),
            t = Object(m.c)(function (e) {
              return e.cart;
            }),
            a = Object(m.c)(function (e) {
              return e.cartOpen;
            }),
            c = Object(h.a)(),
            o = Object(F.a)(c, 2),
            l = o[0],
            i = o[1].data;
          function u() {
            e({ type: "TOGGLE_CART" });
          }
          return (
            Object(n.useEffect)(
              function () {
                function a() {
                  return (a = Object($.a)(
                    I.a.mark(function t() {
                      var a;
                      return I.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), v("cart", "get");
                            case 2:
                              (a = t.sent),
                                e({
                                  type: "ADD_MULTIPLE_TO_CART",
                                  products: Object(Q.a)(a),
                                });
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
                }
                t.length ||
                  (function () {
                    a.apply(this, arguments);
                  })();
              },
              [t.length, e]
            ),
            Object(n.useEffect)(
              function () {
                i &&
                  q.then(function (e) {
                    e.redirectToCheckout({ sessionId: i.checkout.session });
                  });
              },
              [i]
            ),
            a
              ? r.a.createElement(
                  "div",
                  { className: "cart" },
                  r.a.createElement(
                    "div",
                    { className: "close", onClick: u },
                    "[close]"
                  ),
                  r.a.createElement("h2", null, "Shopping Cart"),
                  r.a.createElement(
                    "div",
                    null,
                    t.length
                      ? r.a.createElement(
                          "div",
                          null,
                          t.map(function (e) {
                            return r.a.createElement(M, {
                              key: e._id,
                              item: e,
                            });
                          }),
                          r.a.createElement(
                            "div",
                            { className: "flex-row space-between" },
                            r.a.createElement(
                              "strong",
                              null,
                              "Total: $",
                              (function () {
                                var e = 0;
                                return (
                                  t.forEach(function (t) {
                                    e += t.price * t.purchaseQuantity;
                                  }),
                                  e.toFixed(2)
                                );
                              })()
                            ),
                            b.loggedIn()
                              ? r.a.createElement(
                                  "button",
                                  {
                                    onClick: function () {
                                      var e = [];
                                      t.forEach(function (t) {
                                        for (
                                          var a = 0;
                                          a < t.purchaseQuantity;
                                          a++
                                        )
                                          e.push(t._id);
                                      }),
                                        l({ variables: { products: e } });
                                    },
                                  },
                                  "Checkout"
                                )
                              : r.a.createElement(
                                  "span",
                                  null,
                                  "(log in to check out)"
                                )
                          )
                        )
                      : r.a.createElement(
                          "h3",
                          null,
                          r.a.createElement(
                            "span",
                            { role: "img", "aria-label": "shocked" },
                            "\ud83d\ude31"
                          ),
                          "You haven't added anything to your cart yet!"
                        )
                  )
                )
              : r.a.createElement(
                  "div",
                  { className: "cart-closed", onClick: u },
                  r.a.createElement(
                    "span",
                    { role: "img", "aria-label": "cart" },
                    "\ud83d\uded2"
                  )
                )
          );
        },
        Y = function () {
          return r.a.createElement(
            "div",
            { className: "container" },
            r.a.createElement(P, null),
            r.a.createElement(D, null),
            r.a.createElement(G, null)
          );
        };
      var W = function () {
        var e = Object(m.c)(function (e) {
            return e;
          }),
          t = Object(m.b)(),
          a = Object(i.f)().id,
          c = Object(n.useState)({}),
          o = Object(F.a)(c, 2),
          u = o[0],
          s = o[1],
          d = Object(h.c)(C),
          p = d.loading,
          E = d.data,
          f = e.products,
          b = e.cart;
        return (
          Object(n.useEffect)(
            function () {
              f.length
                ? s(
                    f.find(function (e) {
                      return e._id === a;
                    })
                  )
                : E
                ? (t({ type: "UPDATE_PRODUCTS", products: E.products }),
                  E.products.forEach(function (e) {
                    v("products", "put", e);
                  }))
                : p ||
                  v("products", "get").then(function (e) {
                    t({ type: "UPDATE_PRODUCTS", products: e });
                  });
            },
            [f, E, p, t, a]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            u
              ? r.a.createElement(
                  "div",
                  { className: "container my-1" },
                  r.a.createElement(
                    l.b,
                    { to: "/" },
                    "\u2190 Back to Products"
                  ),
                  r.a.createElement("h2", null, u.name),
                  r.a.createElement("p", null, u.description),
                  r.a.createElement(
                    "p",
                    null,
                    r.a.createElement("strong", null, "Price:"),
                    "$",
                    u.price,
                    " ",
                    r.a.createElement(
                      "button",
                      {
                        onClick: function () {
                          var e = b.find(function (e) {
                            return e._id === a;
                          });
                          e
                            ? (t({
                                type: "UPDATE_CART_QUANTITY",
                                _id: a,
                                purchaseQuantity:
                                  parseInt(e.purchaseQuantity) + 1,
                              }),
                              v(
                                "cart",
                                "put",
                                Object(O.a)(
                                  Object(O.a)({}, e),
                                  {},
                                  {
                                    purchaseQuantity:
                                      parseInt(e.purchaseQuantity) + 1,
                                  }
                                )
                              ))
                            : (t({
                                type: "ADD_TO_CART",
                                product: Object(O.a)(
                                  Object(O.a)({}, u),
                                  {},
                                  { purchaseQuantity: 1 }
                                ),
                              }),
                              v(
                                "cart",
                                "put",
                                Object(O.a)(
                                  Object(O.a)({}, u),
                                  {},
                                  { purchaseQuantity: 1 }
                                )
                              ));
                        },
                      },
                      "Add to cart"
                    ),
                    r.a.createElement(
                      "button",
                      {
                        disabled: !b.find(function (e) {
                          return e._id === u._id;
                        }),
                        onClick: function () {
                          t({ type: "REMOVE_FROM_CART", _id: u._id }),
                            v("cart", "delete", Object(O.a)({}, u));
                        },
                      },
                      "Remove from Cart"
                    )
                  ),
                  r.a.createElement("img", {
                    src: "/images/".concat(u.image),
                    alt: u.name,
                  })
                )
              : null,
            p ? r.a.createElement("img", { src: S.a, alt: "loading" }) : null,
            r.a.createElement(G, null)
          )
        );
      };
      var B,
        H,
        V,
        J = function (e) {
          var t = e.children;
          return r.a.createElement(
            "div",
            {
              style: {
                height: 560,
                clear: "both",
                paddingTop: 120,
                textAlign: "center",
              },
            },
            t
          );
        },
        z = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              J,
              null,
              r.a.createElement("h1", null, "404 Page Not Found"),
              r.a.createElement(
                "h1",
                null,
                r.a.createElement(
                  "span",
                  { role: "img", "aria-label": "Face With Rolling Eyes Emoji" },
                  "\ud83d\ude44"
                )
              )
            )
          );
        },
        K = a(31),
        X = Object(k.a)(
          B ||
            (B = Object(N.a)([
              "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n",
            ]))
        ),
        Z = Object(k.a)(
          H ||
            (H = Object(N.a)([
              "\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n",
            ]))
        ),
        ee = Object(k.a)(
          V ||
            (V = Object(N.a)([
              "\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n",
            ]))
        );
      var te = function (e) {
        var t = Object(n.useState)({ email: "", password: "" }),
          a = Object(F.a)(t, 2),
          c = a[0],
          o = a[1],
          i = Object(h.b)(X),
          u = Object(F.a)(i, 2),
          s = u[0],
          m = u[1].error,
          d = (function () {
            var e = Object($.a)(
              I.a.mark(function e(t) {
                var a, n;
                return I.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            s({
                              variables: {
                                email: c.email,
                                password: c.password,
                              },
                            })
                          );
                        case 4:
                          (a = e.sent),
                            (n = a.data.login.token),
                            b.login(n),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          p = function (e) {
            var t = e.target,
              a = t.name,
              n = t.value;
            o(Object(O.a)(Object(O.a)({}, c), {}, Object(K.a)({}, a, n)));
          };
        return r.a.createElement(
          "div",
          { className: "container my-1" },
          r.a.createElement(l.b, { to: "/signup" }, "\u2190 Go to Signup"),
          r.a.createElement("h2", null, "Login"),
          r.a.createElement(
            "form",
            { onSubmit: d },
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement(
                "label",
                { htmlFor: "email" },
                "Email address:"
              ),
              r.a.createElement("input", {
                placeholder: "youremail@test.com",
                name: "email",
                type: "email",
                id: "email",
                onChange: p,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "pwd" }, "Password:"),
              r.a.createElement("input", {
                placeholder: "******",
                name: "password",
                type: "password",
                id: "pwd",
                onChange: p,
              })
            ),
            m
              ? r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "p",
                    { className: "error-text" },
                    "The provided credentials are incorrect"
                  )
                )
              : null,
            r.a.createElement(
              "div",
              { className: "flex-row flex-end" },
              r.a.createElement("button", { type: "submit" }, "Submit")
            )
          )
        );
      };
      var ae = function (e) {
        var t = Object(n.useState)({ email: "", password: "" }),
          a = Object(F.a)(t, 2),
          c = a[0],
          o = a[1],
          i = Object(h.b)(ee),
          u = Object(F.a)(i, 1)[0],
          s = (function () {
            var e = Object($.a)(
              I.a.mark(function e(t) {
                var a, n;
                return I.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.preventDefault(),
                          (e.next = 3),
                          u({
                            variables: {
                              email: c.email,
                              password: c.password,
                              firstName: c.firstName,
                              lastName: c.lastName,
                            },
                          })
                        );
                      case 3:
                        (a = e.sent), (n = a.data.addUser.token), b.login(n);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          m = function (e) {
            var t = e.target,
              a = t.name,
              n = t.value;
            o(Object(O.a)(Object(O.a)({}, c), {}, Object(K.a)({}, a, n)));
          };
        return r.a.createElement(
          "div",
          { className: "container my-1" },
          r.a.createElement(l.b, { to: "/login" }, "\u2190 Go to Login"),
          r.a.createElement("h2", null, "Signup"),
          r.a.createElement(
            "form",
            { onSubmit: s },
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement(
                "label",
                { htmlFor: "firstName" },
                "First Name:"
              ),
              r.a.createElement("input", {
                placeholder: "First",
                name: "firstName",
                type: "firstName",
                id: "firstName",
                onChange: m,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "lastName" }, "Last Name:"),
              r.a.createElement("input", {
                placeholder: "Last",
                name: "lastName",
                type: "lastName",
                id: "lastName",
                onChange: m,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "email" }, "Email:"),
              r.a.createElement("input", {
                placeholder: "youremail@test.com",
                name: "email",
                type: "email",
                id: "email",
                onChange: m,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "pwd" }, "Password:"),
              r.a.createElement("input", {
                placeholder: "******",
                name: "password",
                type: "password",
                id: "pwd",
                onChange: m,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row flex-end" },
              r.a.createElement("button", { type: "submit" }, "Submit")
            )
          )
        );
      };
      var ne = function () {
        var e,
          t = Object(h.c)(x).data;
        return (
          t && (e = t.user),
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "container my-1" },
              r.a.createElement(l.b, { to: "/" }, "\u2190 Back to Products"),
              e
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "h2",
                      null,
                      "Order History for ",
                      e.firstName,
                      " ",
                      e.lastName
                    ),
                    e.orders.map(function (e) {
                      return r.a.createElement(
                        "div",
                        { key: e._id, className: "my-2" },
                        r.a.createElement(
                          "h3",
                          null,
                          new Date(
                            parseInt(e.purchaseDate)
                          ).toLocaleDateString()
                        ),
                        r.a.createElement(
                          "div",
                          { className: "flex-row" },
                          e.products.map(function (e, t) {
                            var a = e._id,
                              n = e.image,
                              c = e.name,
                              o = e.price;
                            return r.a.createElement(
                              "div",
                              { key: t, className: "card px-1 py-1" },
                              r.a.createElement(
                                l.b,
                                { to: "/products/".concat(a) },
                                r.a.createElement("img", {
                                  alt: c,
                                  src: "/images/".concat(n),
                                }),
                                r.a.createElement("p", null, c)
                              ),
                              r.a.createElement(
                                "div",
                                null,
                                r.a.createElement("span", null, "$", o)
                              )
                            );
                          })
                        )
                      );
                    })
                  )
                : null
            )
          )
        );
      };
      var re = function () {
          var e = Object(h.b)(Z),
            t = Object(F.a)(e, 1)[0];
          return (
            Object(n.useEffect)(
              function () {
                function e() {
                  return (e = Object($.a)(
                    I.a.mark(function e() {
                      var a, n, r, c;
                      return I.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), v("cart", "get");
                            case 2:
                              if (
                                ((a = e.sent),
                                !(n = a.map(function (e) {
                                  return e._id;
                                })).length)
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (e.next = 7), t({ variables: { products: n } })
                              );
                            case 7:
                              (r = e.sent),
                                (c = r.data),
                                c.addOrder.products.forEach(function (e) {
                                  v("cart", "delete", e);
                                });
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [t]
            ),
            setTimeout(function () {
              alert("");
            }, 3e3),
            window.location.assign("/"),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                J,
                null,
                r.a.createElement("h1", null, "Success!"),
                r.a.createElement("h2", null, "Thank you for your purchase!"),
                r.a.createElement(
                  "h2",
                  null,
                  "You will now be redirected to the homepage"
                )
              )
            )
          );
        },
        ce = a(64),
        oe = {
          cart: [],
          cartOpen: !1,
          products: [],
          categories: [],
          currentCategory: "",
        },
        le = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : oe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "ADD_TO_CART":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                {
                  cartOpen: !0,
                  cart: [].concat(Object(Q.a)(e.cart), [t.product]),
                }
              );
            case "ADD_MULTIPLE_TO_CART":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                {
                  cart: [].concat(Object(Q.a)(e.cart), Object(Q.a)(t.products)),
                }
              );
            case "CLEAR_CART":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { cartOpen: !1, cart: [] }
              );
            case "REMOVE_FROM_CART":
              var a = e.cart.filter(function (e) {
                return e._id !== t._id;
              });
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { cartOpen: a.length > 0, cart: a }
              );
            case "TOGGLE_CART":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { cartOpen: !e.cartOpen }
              );
            case "UPDATE_CART_QUANTITY":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                {
                  cartOpen: !0,
                  cart: e.cart.map(function (e) {
                    return (
                      t._id === e._id &&
                        (e.purchaseQuantity = t.purchaseQuantity),
                      e
                    );
                  }),
                }
              );
            case "UPDATE_PRODUCTS":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { products: Object(Q.a)(t.products) }
              );
            case "UPDATE_CATEGORIES":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { categories: Object(Q.a)(t.categories) }
              );
            case "UPDATE_CURRENT_CATEGORY":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { currentCategory: t.currentCategory }
              );
            default:
              return e;
          }
        },
        ie = Object(ce.a)(le),
        ue = new s.a({
          request: function (e) {
            var t = localStorage.getItem("id_token");
            e.setContext({
              headers: { authorization: t ? "Bearer ".concat(t) : "" },
            });
          },
          uri: "/graphql",
        });
      var se = function () {
          return r.a.createElement(
            u.a,
            { client: ue },
            r.a.createElement(
              l.a,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  m.a,
                  { store: ie },
                  r.a.createElement(g, null),
                  r.a.createElement(
                    i.c,
                    null,
                    r.a.createElement(i.a, {
                      exact: !0,
                      path: "/",
                      component: Y,
                    }),
                    r.a.createElement(i.a, {
                      exact: !0,
                      path: "/login",
                      component: te,
                    }),
                    r.a.createElement(i.a, {
                      exact: !0,
                      path: "/signup",
                      component: ae,
                    }),
                    r.a.createElement(i.a, {
                      exact: !0,
                      path: "/orderHistory",
                      component: ne,
                    }),
                    r.a.createElement(i.a, {
                      exact: !0,
                      path: "/products/:id",
                      component: W,
                    }),
                    r.a.createElement(i.a, {
                      exact: !0,
                      path: "/success",
                      component: re,
                    }),
                    r.a.createElement(i.a, { component: z })
                  )
                )
              )
            )
          );
        },
        me = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function de(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function () {
                  "installed" === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      o.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(se, null)),
        document.getElementById("root")
      ),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var t = "".concat("", "/service-worker.js");
              me
                ? (!(function (e, t) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (a) {
                        var n = a.headers.get("content-type");
                        404 === a.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : de(e, t);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : de(t, e);
            });
          }
        })();
    },
  },
  [[66, 1, 2]],
]);
//# sourceMappingURL=main.96ab1bf1.chunk.js.map
