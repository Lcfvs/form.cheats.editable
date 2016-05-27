form.cheats.editable
====================

This [form.cheats](https://github.com/Lcfvs/form.cheats) middleware provides a way to a view/form switch to your styles.

This browser module is under MIT License.


Demos
-----

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

Register the middleware
-----------------------
```
global['form.cheats'].use(global['form.cheats.editable']);
```
