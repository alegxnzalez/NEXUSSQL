// STOWAGE_MODE.js

window.STOWAGE_MODE = {
  "tables": {
    "STOWAGE_MODE": {
      "columns": {
        "STOWAGE_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "STOWAGE_MODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_UNITIZED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
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
        "CHARTER_VOYAGE_STOWAGE",
        "CONSOL",
        "OB_ORDER_BASE",
        "ORDER_RELEASE",
        "STOWAGE_MODE_PREFERENCE"
]
    }
  }
};