// CONSOLIDATION_TYPE.js

window.CONSOLIDATION_TYPE = {
  "tables": {
    "CONSOLIDATION_TYPE": {
      "columns": {
        "CONSOLIDATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CONSOLIDATION_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CONSOLIDATION_TYPE_DESC": {
          "type": "VARCHAR2(256)",
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
        "CONSOL",
        "CONSOLIDATION_TYPE_PROF_D",
        "JOB",
        "ORDER_RELEASE",
        "QUOTE"
      ]
    }
  }
};
