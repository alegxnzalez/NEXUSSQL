// DIAG_PERFORMANCE_CAPTURE.js

window.DIAG_PERFORMANCE_CAPTURE = {
  "tables": {
    "DIAG_PERFORMANCE_CAPTURE": {
      "columns": {
        "DIAG_PERFORMANCE_CAPTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier for the data capture "
        },
        "DIAG_PERFORMANCE_CAPTURE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "JAVA_PLUGIN",
          "info": "Plugin of type PERFORMANCE CAPTURE "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Text description of the data "
        },
        "EXTRA_ARGS": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "For open scripting architecture, a set of extra arguments to pass to the CONFIGURATION CAPTURE plugin. This arguments can be"
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "DIAG_PERFORMANCE_SCHED_CAP"
      ]
    }
  }
};
