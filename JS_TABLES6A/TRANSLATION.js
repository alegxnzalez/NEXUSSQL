// TRANSLATION.js

window.TRANSLATION = {
  "tables": {
    "TRANSLATION": {
      "columns": {
        "TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true
        },
        "TRANSLATION_XID": {
          "type": "VARCHAR2(949)",
          "nullable": false
        },
        "TRANSLATION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
        }
      },
      "fk_tables": [
        "ACTION_DEF_ARG",
        "APP_ACTION",
        "APP_ACTION_CHECK_ACCESS",
        "AUTO_ASSIGN_CRITERIA",
        "AUTO_ASSIGN_TYPE",
        "DOCUMENT_DEF_CHECK",
        "ERROR_HELP",
        "EXTERNAL_ENGINE_PARAM",
        "EXTERNAL_ENGINE_PARAM_VALUE",
        "OPT_FEATURE",
        "ORACLE_ERROR",
        "SCREEN_LAYOUT_DEF",
        "STATUS_FUNCTOR",
        "TRANSLATION_D",
        "VALID_VALUE",
        "VALID_VALUE_TYPE"
      ]
    }
  }
};
