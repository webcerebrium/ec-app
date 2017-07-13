# ec-app
Enormous Cloud Application distribution. It includes only standard components

## The Simplest Example of Enormous Cloud Application

Basically all it does, it renders _Hello world_ application stored in JSON just using ec-app bundle distribution.
It should promptly render your components from JSON, embedding application into `DIV` container provided.
No extra tools are required. You can just create file like that, open it in browser and it will work.

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    <title>Enormous Cloud App Example</title>

    <script type="text/javascript">
       (function(w,d,o,source,alias){
         w['EnormousCloudApp'] = alias; 
         w[alias] = w[alias] || function() { (w[alias].q = w[alias].q || []).push(arguments); };
         w[alias].l = 1*new Date();
         scr = d.createElement(o); el = d.getElementsByTagName(o)[0]; scr.async = 1; scr.src = source; el.parentNode.insertBefore(scr, el);
       })(window,document,'script','https://dist.webcerebrium.com/latest/ec-app.js','ec');
       ec('mount', '#root');
       ec('template', 'Sample');
    </script>
  </head>
  <body>
    <script type="application/json" id="preloadedDocuments">
      {
        "--Template-Sample" : {
          "_id": "--Template-Sample",
          "type": "template",
          "container": [
            { 
              "type": "Header", 
              "value": "Hello, application for Enormous Cloud", 
              "marginTop": 30, "marginBottom": 30, 
              "textAlign": "center" 
            },
            { 
              "type": "Divider", 
              "width": 300, "marginBottom": 40 
            },
            { 
              "type": "Paragraph", 
              "color": "#666",
              "value": "This example demonstrates how it is possible to build applications based on JSON only, using just a bundle of ec-react15-lib and no other tools. \nJSON could be typically stored in CouchDB and no other tools will be required to render standard components." 
            }
          ]
        }
      }
    </script>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root" class="container"></div>
  </body>
</html>
```
