// JOB_TYPE.js

window.JOB_TYPE = {
  "tables": {
    "JOB_TYPE": {
      "columns": {
        "JOB_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "JOB_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "JOB_TYPE_DESC": {
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
        "JOB",
        "NFRC_RULE"
      ]
    }
  }
};
