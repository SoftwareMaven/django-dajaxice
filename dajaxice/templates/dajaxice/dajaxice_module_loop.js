{{ name }}: {
    {% include "dajaxice/dajaxice_function_loop.js" %}
    {% for name, sub_module in module.submodules.items %}
    {% with filename="dajaxice/dajaxice_module_loop.js" module=sub_module %}
        {% include filename %}
    {% endwith %}
    {% if not forloop.last or module.submodules %},{% endif %}
    {% endfor %}
    }
