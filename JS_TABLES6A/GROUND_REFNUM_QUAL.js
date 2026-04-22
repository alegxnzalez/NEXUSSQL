// GROUND_REFNUM_QUAL.js

window.GROUND_REFNUM_QUAL = {
  "tables": {
    "GROUND_REFNUM_QUAL": {
      "columns": {
        "GROUND_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Repetition schedule reference number qualifier GID "
        },
        "GROUND_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Repetition schedule reference number qualifier XID "
        },
        "GROUND_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Repetition schedule reference number qualifier description "
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "info": "Allow Update"
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
        "GROUND_REFNUM"
      ]
    }
  }
};
