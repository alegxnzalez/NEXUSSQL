// CHARTER_VOYAGE_REFNUM_QUAL.js

window.CHARTER_VOYAGE_REFNUM_QUAL = {
  "tables": {
    "CHARTER_VOYAGE_REFNUM_QUAL": {
      "columns": {
        "CHARTER_VOYAGE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CHARTER_VOYAGE_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CHARTER_VOYAGE_REFNUM_QL_DESC": {
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
        "CHARTER_VOYAGE_REFNUM"
      ]
    }
  }
};
