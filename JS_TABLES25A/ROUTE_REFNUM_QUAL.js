// ROUTE_REFNUM_QUAL.js

window.ROUTE_REFNUM_QUAL = {
  "tables": {
    "ROUTE_REFNUM_QUAL": {
      "columns": {
        "ROUTE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ROUTE_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ROUTE_REFNUM_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": false,
          "values": [
            "UPDATE_OK",
            "UPDATE_NOT_OK",
            "MANY"
          ]
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
        "ROUTE_INSTANCE_LEG_REFNUM",
        "ROUTE_INSTANCE_REFNUM",
        "ROUTE_TEMPLATE_LEG_REFNUM",
        "ROUTE_TEMPLATE_REFNUM"
      ]
    }
  }
};
