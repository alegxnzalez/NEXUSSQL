// DOMAIN_PROFILE.js

window.DOMAIN_PROFILE = {
  "tables": {
    "DOMAIN_PROFILE": {
      "columns": {
        "DOMAIN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DOMAIN_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(200)",
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
        "DOMAIN_PROFILE_D",
        "NFRC_RULE",
        "RATE_GEO",
        "ROUTE_INSTANCE_LEG",
        "ROUTE_TEMPLATE_LEG"
      ]
    }
  }
};
