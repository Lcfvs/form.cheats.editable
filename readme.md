form.cheats.editable
====================

Code less, reduce AJAX requests, improve your pages fluidity!

This [form.cheats](https://github.com/Lcfvs/form.cheats) middleware provides a way to a view/form switch to your styles.

This browser module is under MIT License.


Demos
-----

<i>Please consider I'm not a designer, the following demos can hurt your eyes, but the real insterest resides in its CSS mechanic.</i>

http://lcfvs.github.io/form.cheats.editable

http://lcfvs.github.io/form.cheats.editable/anochat (minimal design)

Install
-------

In your HTML head :

```html
  <link rel="stylesheet" href="./lib/form.cheats/css/style.min.css" media="all" />
  <link rel="stylesheet" href="./lib/form.cheats.editable/css/style.min.css" media="all" />
  <link rel="stylesheet" href="./css/your-style.css" media="all" />
```

In your HTML body end :

```html
  <script src="./lib/form.cheats/js/script.min.js"></script>
  <script src="./lib/form.cheats.editable/js/script.min.js"></script>
  <script src="./js/your-script.js"></script>
```

And add a `cheats editable` class on your forms


Register the middleware
-----------------------
```
global['form.cheats'].use(global['form.cheats.editable']);
```
