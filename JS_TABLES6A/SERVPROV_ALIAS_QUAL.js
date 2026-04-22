// SERVPROV_ALIAS_QUAL.js

window.SERVPROV_ALIAS_QUAL = {
  "tables": {
    "SERVPROV_ALIAS_QUAL": {
      "columns": {
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SERVPROV_ALIAS_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "SERVPROV_ALIAS_QUAL_DESC": {
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
        "IE_INROUTE_SERVPROV",
        "IE_SHIPMENTSTATUS",
        "INVOICE",
        "INVOICE_ROUTE",
        "OBS_STATUS_HISTORY",
        "SERVPROV_ALIAS"
      ]
    }
  }
};
