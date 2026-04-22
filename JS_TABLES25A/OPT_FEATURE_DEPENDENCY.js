// OPT_FEATURE_DEPENDENCY.js

window.OPT_FEATURE_DEPENDENCY = {
  "tables": {
    "OPT_FEATURE_DEPENDENCY": {
      "columns": {
        "OPT_FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OPT_FEATURE",
          "info": "Optional Feature ID "
        },
        "DEPENDS_ON_FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OPT_FEATURE",
          "info": "Parent dependency for this feature"
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
      "fk_tables": []
    }
  }
};
