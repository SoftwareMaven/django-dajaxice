Available Settings
==================

DAJAXICE_MEDIA_PREFIX
---------------------

This will be the namespace that dajaxice will use as endpoint.

Defaults to ``dajaxice``

Optional: ``True``

DAJAXICE_XMLHTTPREQUEST_JS_IMPORT
---------------------------------

Include XmlHttpRequest.js inside dajaxice.core.js

Defaults to ``True``

Optional: ``True``

DAJAXICE_JSON2_JS_IMPORT
------------------------

Include json2.js inside dajaxice.core.js

Defaults to ``True``

Optional: ``True``

DAJAXICE_EXCEPTION
------------------

Default data sent when an exception occurs.

Defaults to ``"DAJAXICE_EXCEPTION"``

Optional: ``True``

DAJAXICE_JS_LIBRARY
------------------

Library to use for making AJAX calls. By default, XMLHttpRequest is used directly,
but if you set this to "jquery", jqXHR will be used and returned instead.

Defaults to ``"default"``

Optional: ``True``
