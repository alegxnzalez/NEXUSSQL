// SHIP_GROUP_TYPE.js

window.SHIP_GROUP_TYPE = {
  "tables": {
    "SHIP_GROUP_TYPE": {
      "columns": {
        "SHIP_GROUP_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Shipment group type gid. "
        },
        "SHIP_GROUP_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Shipment group type xid. "
        },
        "SHIP_GROUP_TYPE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Shipment group type description."
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
        "IE_SHIPMENTSTATUS",
        "SHIP_GROUP",
        "SHIP_GROUP_RULE"
      ]
    }
  }
};
