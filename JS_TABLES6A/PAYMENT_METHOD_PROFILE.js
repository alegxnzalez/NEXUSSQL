// PAYMENT_METHOD_PROFILE.js

window.PAYMENT_METHOD_PROFILE = {
  "tables": {
    "PAYMENT_METHOD_PROFILE": {
      "columns": {
        "PAYMENT_METHOD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PAYMENT_METHOD_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "IS_COMPATIBLE": {
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
        "ITINERARY",
        "NFRC_RULE",
        "PAYMENT_METHOD_PROFILE_D"
      ]
    }
  }
};
